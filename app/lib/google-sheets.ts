import { createPrivateKey, createSign } from "crypto";

type AccessTokenResponse = {
  access_token?: string;
  expires_in?: number;
};

type TrafficLogRow = {
  pageKey: string;
  urlId: string;
  timestampUtc: string;
};

const GOOGLE_OAUTH_TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

let cachedToken:
  | {
      value: string;
      expiresAtMs: number;
    }
  | null = null;

const base64UrlEncode = (value: string) =>
  Buffer.from(value).toString("base64url");

const normalizePrivateKey = (rawValue: string) => {
  const trimmed = rawValue.trim();
  const withoutQuotes =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;

  const unescaped = withoutQuotes.replace(/\\n/g, "\n");

  if (!unescaped.includes("BEGIN PRIVATE KEY")) {
    throw new Error(
      "Invalid GOOGLE_SHEETS_PRIVATE_KEY. Expected the full service-account private_key PEM (starts with -----BEGIN PRIVATE KEY-----). Do not use private_key_id."
    );
  }

  return unescaped;
};

const getSheetsConfig = () => {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const serviceAccountEmail = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "logs";

  if (!spreadsheetId || !serviceAccountEmail || !privateKeyRaw) {
    throw new Error(
      "Missing Google Sheets env vars. Set GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SHEETS_PRIVATE_KEY."
    );
  }

  return {
    spreadsheetId,
    serviceAccountEmail,
    privateKey: normalizePrivateKey(privateKeyRaw),
    sheetName,
  };
};

const createSignedServiceAccountJwt = (
  serviceAccountEmail: string,
  privateKey: string
) => {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const jwtHeader = {
    alg: "RS256",
    typ: "JWT",
  };
  const jwtClaims = {
    iss: serviceAccountEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_OAUTH_TOKEN_ENDPOINT,
    iat: nowSeconds,
    exp: nowSeconds + 3600,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(jwtHeader));
  const encodedClaims = base64UrlEncode(JSON.stringify(jwtClaims));
  const unsignedToken = `${encodedHeader}.${encodedClaims}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const keyObject = createPrivateKey({
    key: privateKey,
    format: "pem",
  });
  const signature = signer.sign(keyObject, "base64url");

  return `${unsignedToken}.${signature}`;
};

const getGoogleAccessToken = async (signal?: AbortSignal) => {
  const hasValidCachedToken =
    cachedToken && Date.now() < cachedToken.expiresAtMs - 60_000;
  if (hasValidCachedToken) {
    return cachedToken.value;
  }

  const { serviceAccountEmail, privateKey } = getSheetsConfig();
  const assertion = createSignedServiceAccountJwt(
    serviceAccountEmail,
    privateKey
  );

  const tokenResponse = await fetch(GOOGLE_OAUTH_TOKEN_ENDPOINT, {
    method: "POST",
    signal,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!tokenResponse.ok) {
    const body = await tokenResponse.text();
    throw new Error(
      `Google OAuth token request failed (${tokenResponse.status}): ${body.slice(
        0,
        300
      )}`
    );
  }

  const tokenData = (await tokenResponse.json()) as AccessTokenResponse;
  const accessToken = tokenData.access_token;
  const expiresIn = tokenData.expires_in ?? 3600;

  if (!accessToken) {
    throw new Error("Google OAuth token response did not include access_token.");
  }

  cachedToken = {
    value: accessToken,
    expiresAtMs: Date.now() + expiresIn * 1000,
  };

  return accessToken;
};

const appendRow = async (
  accessToken: string,
  row: [pageKey: string, urlId: string, timestampUtc: string],
  signal?: AbortSignal
) => {
  const { spreadsheetId, sheetName } = getSheetsConfig();
  const normalizedSheetName = sheetName.trim();
  const escapedSheetName = normalizedSheetName.replace(/'/g, "''");
  const range = encodeURIComponent(`'${escapedSheetName}'!A:C`);
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const response = await fetch(appendUrl, {
    method: "POST",
    signal,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [row],
    }),
  });

  return response;
};

export const appendTrafficLogToGoogleSheets = async (
  row: TrafficLogRow,
  options?: { signal?: AbortSignal }
) => {
  const signal = options?.signal;
  const firstToken = await getGoogleAccessToken(signal);
  let appendResponse = await appendRow(firstToken, [
    row.pageKey,
    row.urlId,
    row.timestampUtc,
  ], signal);

  if (appendResponse.status === 401) {
    cachedToken = null;
    const refreshedToken = await getGoogleAccessToken(signal);
    appendResponse = await appendRow(refreshedToken, [
      row.pageKey,
      row.urlId,
      row.timestampUtc,
    ], signal);
  }

  if (!appendResponse.ok) {
    const body = await appendResponse.text();
    throw new Error(
      `Google Sheets append failed (${appendResponse.status}): ${body.slice(
        0,
        300
      )}`
    );
  }
};

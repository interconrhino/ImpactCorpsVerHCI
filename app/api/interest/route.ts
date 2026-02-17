import { NextResponse } from "next/server";

type InterestPayload = {
  name?: string;
  email?: string;
  school?: string;
  demographics?: string[];
  yearLevel?: string;
  major?: string;
  pastExperience?: string;
  socialProblem?: string;
  proceedWithoutRewards?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const MAX_OPTIONAL_TEXT_LENGTH = 500;
const GENERIC_SUBMIT_ERROR =
  "Unable to submit your request right now. Please try again later.";

export async function POST(request: Request) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Interest";

  if (!apiKey || !baseId) {
    console.error("Interest form misconfigured: missing Airtable env vars.");
    return NextResponse.json({ error: GENERIC_SUBMIT_ERROR }, { status: 500 });
  }

  let payload: InterestPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const school = payload.school?.trim() || "";
  const demographics = Array.isArray(payload.demographics)
    ? payload.demographics
    : [];
  const yearLevel = payload.yearLevel?.trim() || "";
  const major = payload.major?.trim() || "";
  const pastExperience = payload.pastExperience?.trim() || "";
  const socialProblem = payload.socialProblem?.trim() || "";
  const proceedWithoutRewards = payload.proceedWithoutRewards?.trim() || "";

  if (
    !name ||
    !email ||
    !school ||
    !yearLevel ||
    !major ||
    demographics.length === 0 ||
    !proceedWithoutRewards
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (pastExperience.length > MAX_OPTIONAL_TEXT_LENGTH) {
    return NextResponse.json(
      { error: "Past experience must be 500 characters or fewer." },
      { status: 400 }
    );
  }
  if (socialProblem.length > MAX_OPTIONAL_TEXT_LENGTH) {
    return NextResponse.json(
      { error: "Social problem must be 500 characters or fewer." },
      { status: 400 }
    );
  }

  const fields: Record<string, string | string[]> = {
    Name: name,
    Email: email,
    School: school,
    Demographics: demographics,
    ProceedWithoutRewards: proceedWithoutRewards,
    SubmittedAt: new Date().toISOString(),
    Source: "ImpactCorps Site",
  };

  if (yearLevel) {
    fields.YearLevel = yearLevel;
  }

  if (major) {
    fields.Major = major;
  }

  if (pastExperience) {
    fields.PastExperience = pastExperience;
  }

  if (socialProblem) {
    fields.SocialProblem = socialProblem;
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable interest submit failed", {
        status: response.status,
        body: errorText.slice(0, 500),
      });
      return NextResponse.json({ error: GENERIC_SUBMIT_ERROR }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Airtable interest submit exception", error);
    return NextResponse.json({ error: GENERIC_SUBMIT_ERROR }, { status: 502 });
  }
}

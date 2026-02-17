import { NextResponse } from "next/server";

type InterestPayload = {
  name?: string;
  email?: string;
  school?: string;
  demographics?: string[];
  yearLevel?: string;
  major?: string;
  socialProblem?: string;
  proceedWithoutRewards?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Interest";

  if (!apiKey || !baseId) {
    return NextResponse.json(
      { error: "Missing Airtable configuration." },
      { status: 500 }
    );
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

  if (payload.socialProblem?.trim()) {
    fields.SocialProblem = payload.socialProblem.trim();
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
      let message = "Failed to submit interest.";
      try {
        const errorBody = JSON.parse(errorText);
        if (typeof errorBody?.error?.message === "string") {
          message = errorBody.error.message;
        } else if (typeof errorBody?.error === "string") {
          message = errorBody.error;
        }
      } catch {
        if (errorText.trim()) {
          message = errorText.trim().slice(0, 200);
        }
      }
      return NextResponse.json({ error: message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach Airtable." },
      { status: 502 }
    );
  }
}

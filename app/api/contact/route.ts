import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  organisation?: string;
  phone?: string;
  subject?: string;
  content?: string;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME2;

  if (!apiKey || !baseId || !tableName) {
    return NextResponse.json(
      { error: "Missing Airtable configuration." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const organisation = payload.organisation?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const subject = payload.subject?.trim() || "";
  const content = payload.content?.trim() || "";

  if (!name || !email || !subject || !content) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const fields: Record<string, string> = {
    Name: name,
    EmailAddress: email,
    Subject: subject,
    Content: content,
    SubmittedAt: new Date().toISOString(),
    Source: "ImpactCorps Site",
  };

  if (organisation) {
    fields.Organisation = organisation;
  }

  if (phone) {
    fields.PhoneNumber = phone;
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
      let message = "Failed to submit message.";
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

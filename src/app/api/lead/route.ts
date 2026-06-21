import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  let payload: LeadPayload;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid lead payload" }, { status: 400 });
  }

  const lead = { name, email, message, submittedAt: new Date().toISOString() };
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Lead webhook failed" }, { status: 502 });
    }
  } else {
    console.info("Lead request received", lead);
  }

  return NextResponse.json({ ok: true });
}

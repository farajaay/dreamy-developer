import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  projectType?: string;
  scope?: string;
  message?: string;
};

type ApiError = { error: string };
type ApiSuccess = { ok: true };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(
  req: Request,
): Promise<NextResponse<ApiSuccess | ApiError>> {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const scope = body.scope?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "That email isn't valid." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ error: "Message is too long." }, { status: 413 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact form: missing env vars (RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL)");
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email me directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New project request — ${name}`;
  const html = `
    <div style="font-family: -apple-system, Segoe UI, sans-serif; color:#0F172A; max-width:560px;">
      <h2 style="font-family: Georgia, serif; color:#0F172A; margin-bottom:24px;">New project request</h2>
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Scope:</strong> ${escapeHtml(scope)}</p>
      <hr style="border:none; border-top:1px solid #E9D5D1; margin:24px 0;" />
      <p style="white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</p>
    </div>
  `;
  const text = [
    `New project request`,
    ``,
    `From: ${name} <${email}>`,
    `Project type: ${projectType}`,
    `Scope: ${scope}`,
    ``,
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      html,
      text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "I couldn't send the message just now. Please try again or email me directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json(
      { error: "Something went wrong on my end. Please email me directly." },
      { status: 500 },
    );
  }
}

import { Resend } from "resend";

type SendArgs = {
  subject: string;
  html: string;
  text: string;
  /** Override the default recipient (defaults to CONTACT_TO_EMAIL). */
  to?: string;
  /** Optional reply-to address. */
  replyTo?: string;
};

let cached: Resend | null = null;

function getClient(): Resend {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set.");
  cached = new Resend(key);
  return cached;
}

export function isEmailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_FROM_EMAIL &&
      process.env.CONTACT_TO_EMAIL,
  );
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Send an email via Resend. Returns true on success, false on any failure.
 * Never throws — callers should not depend on email for control flow.
 */
export async function sendEmail(args: SendArgs): Promise<boolean> {
  if (!isEmailConfigured()) {
    console.warn("sendEmail: email not configured; skipping.");
    return false;
  }
  const from = process.env.CONTACT_FROM_EMAIL!;
  const to = args.to ?? process.env.CONTACT_TO_EMAIL!;
  try {
    const { error } = await getClient().emails.send({
      from,
      to,
      subject: args.subject,
      html: args.html,
      text: args.text,
      ...(args.replyTo && { replyTo: args.replyTo }),
    });
    if (error) {
      console.error("sendEmail Resend error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("sendEmail exception:", err);
    return false;
  }
}

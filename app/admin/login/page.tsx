import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { isAuthenticated, isAuthConfigured, verifyPassword, createSession } from "@/lib/auth";
import { sendEmail, escapeHtml, isEmailConfigured } from "@/lib/email";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

async function notifyAdminLogin(): Promise<void> {
  if (!isEmailConfigured()) return;
  try {
    const h = await headers();
    const ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      h.get("x-real-ip") ??
      "unknown";
    const ua = h.get("user-agent") ?? "unknown";
    const country = h.get("x-vercel-ip-country") ?? null;
    const city = h.get("x-vercel-ip-city") ?? null;
    const when = new Date().toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Asia/Riyadh",
    });

    const location = [city, country].filter(Boolean).join(", ") || "unknown";

    const html = `
      <div style="font-family: -apple-system, Segoe UI, sans-serif; color:#0F172A; max-width:560px;">
        <h2 style="font-family: Georgia, serif; margin-bottom: 24px;">Admin sign-in</h2>
        <p>Someone successfully signed into your admin panel.</p>
        <table style="margin-top:16px; border-collapse:collapse;">
          <tr><td style="padding:6px 12px 6px 0; color:#8B5E5E;">When</td><td style="padding:6px 0;">${escapeHtml(when)} (Asia/Riyadh)</td></tr>
          <tr><td style="padding:6px 12px 6px 0; color:#8B5E5E;">IP</td><td style="padding:6px 0;">${escapeHtml(ip)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0; color:#8B5E5E;">Location</td><td style="padding:6px 0;">${escapeHtml(location)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0; color:#8B5E5E; vertical-align:top;">Browser</td><td style="padding:6px 0;">${escapeHtml(ua)}</td></tr>
        </table>
        <hr style="border:none; border-top:1px solid #E9D5D1; margin:24px 0;" />
        <p style="font-size:13px; color:#334155;">
          If this wasn't you, change <code>ADMIN_PASSWORD</code> in Vercel immediately
          and rotate <code>ADMIN_SESSION_SECRET</code> to sign out all existing sessions.
        </p>
      </div>
    `;
    const text = [
      `Admin sign-in`,
      ``,
      `When: ${when} (Asia/Riyadh)`,
      `IP: ${ip}`,
      `Location: ${location}`,
      `Browser: ${ua}`,
      ``,
      `If this wasn't you, change ADMIN_PASSWORD and rotate ADMIN_SESSION_SECRET in Vercel immediately.`,
    ].join("\n");

    await sendEmail({
      subject: "Admin sign-in — Ahmad's website",
      html,
      text,
    });
  } catch (err) {
    console.error("notifyAdminLogin error:", err);
  }
}

async function login(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  if (!isAuthConfigured()) {
    redirect("/admin/login?error=unconfigured");
  }
  if (!verifyPassword(password)) {
    redirect("/admin/login?error=bad");
  }
  await createSession();
  await notifyAdminLogin();
  redirect("/admin");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAuthenticated()) redirect("/admin");
  const { error } = await searchParams;
  const message =
    error === "unconfigured"
      ? "Admin is not configured yet — set ADMIN_PASSWORD and ADMIN_SESSION_SECRET."
      : error === "bad"
        ? "That password isn't right."
        : null;

  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto w-full max-w-md px-6 py-20">
        <p className="eyebrow">Admin</p>
        <h1 className="display-lg mt-6 text-[color:var(--color-ink)]">
          Sign in.
        </h1>
        <form action={login} className="mt-10 space-y-8">
          <label className="block">
            <span className="eyebrow block mb-3">Password</span>
            <input
              type="password"
              name="password"
              required
              autoFocus
              autoComplete="current-password"
              className="w-full bg-transparent border-b border-[color:var(--color-rule)] py-3 px-0 text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-rose)] transition-colors"
            />
          </label>
          {message && (
            <p className="text-sm text-[color:var(--color-rose)]">{message}</p>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm tracking-wide hover:bg-[color:var(--color-deep)] transition-colors"
          >
            Continue
            <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

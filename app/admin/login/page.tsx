import { redirect } from "next/navigation";
import { isAuthenticated, isAuthConfigured, verifyPassword, createSession } from "@/lib/auth";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

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

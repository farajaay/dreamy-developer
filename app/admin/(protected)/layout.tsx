import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated, destroySession } from "@/lib/auth";

async function logout() {
  "use server";
  await destroySession();
  redirect("/admin/login");
}

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen">
      <nav className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-ivory)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="font-display text-base text-[color:var(--color-ink)]"
            >
              <span className="italic">Admin</span>
            </Link>
            <Link
              href="/admin/pricing"
              className="text-[color:var(--color-slate-soft)] hover:text-[color:var(--color-ink)]"
            >
              Pricing
            </Link>
            <Link
              href="/admin/transactions"
              className="text-[color:var(--color-slate-soft)] hover:text-[color:var(--color-ink)]"
            >
              Transactions
            </Link>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="text-[color:var(--color-mauve)] hover:text-[color:var(--color-ink)]"
            >
              Sign out
            </button>
          </form>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16">{children}</div>
    </div>
  );
}

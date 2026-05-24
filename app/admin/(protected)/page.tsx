import Link from "next/link";
import { isDbConfigured, db, tiers, transactions } from "@/db";
import { count, eq, sql } from "drizzle-orm";
import { formatSar } from "@/lib/format";

export const dynamic = "force-dynamic";

async function getStats() {
  if (!isDbConfigured()) return null;
  try {
    const [tierCount] = await db.select({ c: count() }).from(tiers);
    const [paidCount] = await db
      .select({ c: count() })
      .from(transactions)
      .where(eq(transactions.status, "paid"));
    const [revenue] = await db
      .select({
        total: sql<number>`COALESCE(SUM(${transactions.amountTotal}), 0)`,
      })
      .from(transactions)
      .where(eq(transactions.status, "paid"));
    return {
      tiers: tierCount?.c ?? 0,
      paid: paidCount?.c ?? 0,
      revenueHalalas: Number(revenue?.total ?? 0),
    };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Unknown DB error." };
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <>
      <p className="eyebrow">Admin · dashboard</p>
      <h1 className="display-lg mt-6 text-[color:var(--color-ink)]">
        Quiet morning at the desk.
      </h1>

      {!isDbConfigured() && (
        <ConfigBanner
          title="Database not connected"
          body="Set DATABASE_URL in Vercel env vars to a Supabase pooler connection string, then run the migration once."
        />
      )}

      {stats && "error" in stats && (
        <ConfigBanner title="Database error" body={stats.error ?? "Unknown error."} />
      )}

      {stats && !("error" in stats) && (
        <ul className="mt-12 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden md:grid-cols-3">
          <Stat label="Active tiers" value={String(stats.tiers)} />
          <Stat label="Paid transactions" value={String(stats.paid)} />
          <Stat label="Total revenue" value={formatSar(stats.revenueHalalas)} />
        </ul>
      )}

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/admin/pricing"
          className="px-5 py-3 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm"
        >
          Manage pricing
        </Link>
        <Link
          href="/admin/transactions"
          className="px-5 py-3 rounded-full border border-[color:var(--color-rule)] text-sm text-[color:var(--color-ink)] hover:border-[color:var(--color-rose)]"
        >
          View transactions
        </Link>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <li className="bg-[color:var(--color-ivory)] p-8">
      <p className="eyebrow">{label}</p>
      <p className="font-display text-4xl mt-3 text-[color:var(--color-ink)]">
        {value}
      </p>
    </li>
  );
}

function ConfigBanner({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-10 border border-[color:var(--color-rose)]/40 bg-[color:var(--color-blush)]/20 rounded-2xl p-6 md:p-8">
      <p className="font-display text-xl text-[color:var(--color-ink)]">{title}</p>
      <p className="mt-2 text-sm text-[color:var(--color-slate-soft)]">{body}</p>
    </div>
  );
}

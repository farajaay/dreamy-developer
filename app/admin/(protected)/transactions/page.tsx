import { isDbConfigured, db, transactions, type Transaction } from "@/db";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function getTransactions(): Promise<Transaction[] | { error: string }> {
  if (!isDbConfigured()) return { error: "DATABASE_URL not set." };
  try {
    return await db
      .select()
      .from(transactions)
      .orderBy(desc(transactions.createdAt))
      .limit(200);
  } catch (e) {
    return { error: e instanceof Error ? e.message : "DB error." };
  }
}

function formatAmount(amount: number, currency: string): string {
  const major = (amount / 100).toLocaleString();
  return `${currency.toUpperCase()} ${major}`;
}

function formatDate(d: Date): string {
  return new Date(d).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

const statusColors: Record<string, string> = {
  paid: "text-emerald-300 bg-emerald-950/40 border-emerald-700/40",
  pending: "text-amber-300 bg-amber-950/40 border-amber-700/40",
  failed: "text-rose-300 bg-rose-950/40 border-rose-700/40",
  refunded: "text-slate-400 bg-slate-800/40 border-slate-600/40",
};

export default async function AdminTransactionsPage() {
  const result = await getTransactions();
  const list = Array.isArray(result) ? result : [];
  const error = !Array.isArray(result) ? result.error : null;

  return (
    <>
      <p className="eyebrow">Admin · transactions</p>
      <h1 className="display-lg mt-6">Every payment, every time.</h1>

      {error && (
        <div className="mt-8 border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/5 rounded-2xl p-6">
          <p className="font-display text-lg text-[color:var(--color-fg)]">
            Database error
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">{error}</p>
        </div>
      )}

      {!error && list.length === 0 && (
        <p className="mt-12 text-[color:var(--color-fg-muted)] italic font-display text-lg">
          No transactions yet.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[color:var(--color-rule)]">
                <th className="eyebrow py-3 pr-4">Date</th>
                <th className="eyebrow py-3 pr-4">Customer</th>
                <th className="eyebrow py-3 pr-4">Tier</th>
                <th className="eyebrow py-3 pr-4">Amount</th>
                <th className="eyebrow py-3 pr-4">Status</th>
                <th className="eyebrow py-3 pr-4">Stripe</th>
              </tr>
            </thead>
            <tbody>
              {list.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-[color:var(--color-rule)]/50 align-top"
                >
                  <td className="py-4 pr-4 text-[color:var(--color-fg-muted)]">
                    {formatDate(t.createdAt)}
                  </td>
                  <td className="py-4 pr-4">
                    <p className="text-[color:var(--color-fg)]">
                      {t.customerName ?? "—"}
                    </p>
                    <p className="text-xs text-[color:var(--color-fg-muted)]">
                      {t.customerEmail}
                    </p>
                  </td>
                  <td className="py-4 pr-4 text-[color:var(--color-fg)]">
                    {t.tierName}
                    <span className="block text-xs text-[color:var(--color-fg-muted)]">
                      {t.tierSlug}
                    </span>
                  </td>
                  <td className="py-4 pr-4 font-display text-base text-[color:var(--color-fg)]">
                    {formatAmount(t.amountTotal, t.currency)}
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full border text-xs ${
                        statusColors[t.status] ??
                        "text-slate-400 bg-slate-800/40 border-slate-600/40"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-xs text-[color:var(--color-fg-muted)]">
                    {t.stripeSessionId.slice(0, 16)}…
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

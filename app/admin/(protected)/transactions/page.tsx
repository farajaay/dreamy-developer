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
  paid: "text-emerald-700 bg-emerald-50 border-emerald-200",
  pending: "text-amber-700 bg-amber-50 border-amber-200",
  failed: "text-rose-700 bg-rose-50 border-rose-200",
  refunded: "text-slate-600 bg-slate-50 border-slate-200",
};

export default async function AdminTransactionsPage() {
  const result = await getTransactions();
  const list = Array.isArray(result) ? result : [];
  const error = !Array.isArray(result) ? result.error : null;

  return (
    <>
      <p className="eyebrow">Admin · transactions</p>
      <h1 className="display-lg mt-6 text-[color:var(--color-ink)]">
        Every payment, every time.
      </h1>

      {error && (
        <div className="mt-8 border border-[color:var(--color-rose)]/40 bg-[color:var(--color-blush)]/20 rounded-2xl p-6">
          <p className="font-display text-lg text-[color:var(--color-ink)]">
            Database error
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-slate-soft)]">
            {error}
          </p>
        </div>
      )}

      {!error && list.length === 0 && (
        <p className="mt-12 text-[color:var(--color-slate-soft)] italic font-display text-lg">
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
                  <td className="py-4 pr-4 text-[color:var(--color-slate-soft)]">
                    {formatDate(t.createdAt)}
                  </td>
                  <td className="py-4 pr-4">
                    <p className="text-[color:var(--color-ink)]">
                      {t.customerName ?? "—"}
                    </p>
                    <p className="text-xs text-[color:var(--color-slate-soft)]">
                      {t.customerEmail}
                    </p>
                  </td>
                  <td className="py-4 pr-4 text-[color:var(--color-ink)]">
                    {t.tierName}
                    <span className="block text-xs text-[color:var(--color-slate-soft)]">
                      {t.tierSlug}
                    </span>
                  </td>
                  <td className="py-4 pr-4 font-display text-base text-[color:var(--color-ink)]">
                    {formatAmount(t.amountTotal, t.currency)}
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full border text-xs ${
                        statusColors[t.status] ?? "text-slate-600 bg-slate-50 border-slate-200"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-xs text-[color:var(--color-slate-soft)]">
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

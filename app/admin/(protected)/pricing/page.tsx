import { isDbConfigured, db, tiers, type Tier } from "@/db";
import { asc } from "drizzle-orm";
import {
  seedTiers,
  createTier,
  updateTier,
  deleteTier,
} from "../actions";

export const dynamic = "force-dynamic";

async function getTiers(): Promise<Tier[] | { error: string }> {
  if (!isDbConfigured()) return { error: "DATABASE_URL not set." };
  try {
    return await db.select().from(tiers).orderBy(asc(tiers.sortOrder));
  } catch (e) {
    return { error: e instanceof Error ? e.message : "DB error." };
  }
}

export default async function AdminPricingPage() {
  const result = await getTiers();
  const list = Array.isArray(result) ? result : [];
  const error = !Array.isArray(result) ? result.error : null;

  return (
    <>
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="eyebrow">Admin · pricing</p>
          <h1 className="display-lg mt-6 text-[color:var(--color-ink)]">
            Tiers.
          </h1>
        </div>
        {list.length === 0 && !error && (
          <form action={seedTiers}>
            <button
              type="submit"
              className="px-5 py-3 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm"
            >
              Seed default tiers
            </button>
          </form>
        )}
      </div>

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

      {/* Existing tiers */}
      <ul className="mt-12 space-y-8">
        {list.map((t) => (
          <li
            key={t.id}
            className="border border-[color:var(--color-rule)] rounded-2xl p-6 md:p-8"
          >
            <details>
              <summary className="cursor-pointer flex items-baseline justify-between gap-4">
                <span>
                  <span className="font-display text-2xl text-[color:var(--color-ink)]">
                    {t.name}
                  </span>
                  <span className="ml-3 text-sm text-[color:var(--color-slate-soft)]">
                    SAR {(t.priceSarHalalas / 100).toLocaleString()}{" "}
                    {t.cadence === "monthly" ? "/ month" : ""}
                  </span>
                </span>
                <span className="text-xs eyebrow">
                  {t.active ? (t.featured ? "Active · Featured" : "Active") : "Hidden"}
                </span>
              </summary>
              <form action={updateTier} className="mt-6 grid gap-4">
                <input type="hidden" name="id" value={t.id} />
                <TierFields
                  name={t.name}
                  tagline={t.tagline}
                  priceSar={t.priceSarHalalas / 100}
                  priceUsd={t.priceUsdCents / 100}
                  cadence={t.cadence as "one-time" | "monthly"}
                  features={t.features.join("\n")}
                  sortOrder={t.sortOrder}
                  active={t.active}
                  featured={t.featured}
                />
                <div className="mt-2 flex gap-3 flex-wrap">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm"
                  >
                    Save changes
                  </button>
                </div>
              </form>
              <form action={deleteTier} className="mt-4">
                <input type="hidden" name="id" value={t.id} />
                <button
                  type="submit"
                  className="text-xs text-[color:var(--color-mauve)] hover:text-[color:var(--color-rose)]"
                >
                  Delete this tier
                </button>
              </form>
            </details>
          </li>
        ))}
      </ul>

      {/* Create new */}
      <details className="mt-12 border border-dashed border-[color:var(--color-rule)] rounded-2xl p-6 md:p-8">
        <summary className="cursor-pointer font-display text-xl text-[color:var(--color-ink)]">
          + Add a new tier
        </summary>
        <form action={createTier} className="mt-6 grid gap-4">
          <label className="block">
            <span className="eyebrow block mb-2">Slug (URL-safe id)</span>
            <input
              type="text"
              name="slug"
              required
              pattern="[a-z0-9-]+"
              placeholder="custom-engagement"
              className={fieldClass}
            />
          </label>
          <TierFields />
          <div className="mt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm"
            >
              Create tier
            </button>
          </div>
        </form>
      </details>
    </>
  );
}

const fieldClass =
  "w-full bg-transparent border-b border-[color:var(--color-rule)] py-2.5 px-0 text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-rose)] transition-colors";

function TierFields(props: {
  name?: string;
  tagline?: string;
  priceSar?: number;
  priceUsd?: number;
  cadence?: "one-time" | "monthly";
  features?: string;
  sortOrder?: number;
  active?: boolean;
  featured?: boolean;
}) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="eyebrow block mb-2">Name</span>
          <input
            type="text"
            name="name"
            required
            defaultValue={props.name}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow block mb-2">Tagline</span>
          <input
            type="text"
            name="tagline"
            defaultValue={props.tagline}
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <label className="block">
          <span className="eyebrow block mb-2">Price (SAR)</span>
          <input
            type="number"
            name="priceSar"
            min={0}
            step={1}
            required
            defaultValue={props.priceSar}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow block mb-2">Price (USD display)</span>
          <input
            type="number"
            name="priceUsd"
            min={0}
            step={1}
            required
            defaultValue={props.priceUsd}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow block mb-2">Cadence</span>
          <select
            name="cadence"
            defaultValue={props.cadence ?? "one-time"}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="eyebrow block mb-2">
          Features (one per line)
        </span>
        <textarea
          name="features"
          rows={5}
          defaultValue={props.features}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <div className="grid md:grid-cols-3 gap-4 items-end">
        <label className="block">
          <span className="eyebrow block mb-2">Sort order</span>
          <input
            type="number"
            name="sortOrder"
            defaultValue={props.sortOrder ?? 0}
            className={fieldClass}
          />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="active"
            defaultChecked={props.active ?? true}
          />
          Active (visible on /pricing)
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={props.featured ?? false}
          />
          Featured (highlighted card)
        </label>
      </div>
    </>
  );
}

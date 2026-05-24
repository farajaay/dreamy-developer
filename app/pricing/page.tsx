import type { Metadata } from "next";
import Link from "next/link";
import { asc } from "drizzle-orm";
import { pricing, pricingSeed } from "@/lib/content";
import { formatSar, formatUsd, formatCadence } from "@/lib/format";
import { Reveal } from "@/components/Reveal";
import { db, tiers as tiersTable, isDbConfigured } from "@/db";
import { isStripeConfigured } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.intro,
};

export const dynamic = "force-dynamic";

type TierView = {
  slug: string;
  name: string;
  tagline: string;
  priceSarHalalas: number;
  priceUsdCents: number;
  cadence: "one-time" | "monthly";
  features: string[];
  featured: boolean;
};

async function getTiers(): Promise<TierView[]> {
  if (isDbConfigured()) {
    try {
      const rows = await db
        .select()
        .from(tiersTable)
        .orderBy(asc(tiersTable.sortOrder));
      const active = rows.filter((t) => t.active);
      if (active.length > 0) {
        return active.map((t) => ({
          slug: t.slug,
          name: t.name,
          tagline: t.tagline,
          priceSarHalalas: t.priceSarHalalas,
          priceUsdCents: t.priceUsdCents,
          cadence: t.cadence === "monthly" ? "monthly" : "one-time",
          features: t.features,
          featured: t.featured,
        }));
      }
    } catch {
      // Fall through to seed.
    }
  }
  return pricingSeed.map((t) => ({
    slug: t.slug,
    name: t.name,
    tagline: t.tagline,
    priceSarHalalas: t.priceSarHalalas,
    priceUsdCents: t.priceUsdCents,
    cadence: t.cadence,
    features: t.features,
    featured: "featured" in t ? Boolean(t.featured) : false,
  }));
}

export default async function PricingPage() {
  const tiers = await getTiers();
  const checkoutLive = isDbConfigured() && isStripeConfigured();

  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{pricing.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {pricing.heading}{" "}
            <em className="italic text-[color:var(--color-accent)]">
              {pricing.headingItalic}
            </em>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
            <p>{pricing.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <ul className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = tier.featured;
              return (
                <Reveal
                  key={tier.slug}
                  delay={0.08 * i}
                  as="li"
                  className={`flex flex-col rounded-2xl border p-8 md:p-10 ${
                    featured
                      ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-bg)] border-[color:var(--color-accent-soft)]"
                      : "bg-[color:var(--color-bg-elevated)] text-[color:var(--color-fg)] border-[color:var(--color-rule)]"
                  }`}
                >
                  <p
                    className="eyebrow"
                    style={{
                      color: featured
                        ? "var(--color-accent-deep)"
                        : "var(--color-accent-soft)",
                    }}
                  >
                    0{i + 1} {featured && "· Most chosen"}
                  </p>

                  <h2 className="font-display text-3xl md:text-4xl mt-5 leading-tight">
                    {tier.name}
                  </h2>
                  <p
                    className={`mt-3 italic font-display text-lg ${
                      featured
                        ? "text-[color:var(--color-accent-deep)]"
                        : "text-[color:var(--color-accent)]"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <div className="mt-8 mb-6">
                    <p className="font-display text-4xl md:text-5xl leading-none">
                      {formatSar(tier.priceSarHalalas)}
                      <span
                        className={`text-base font-sans ${
                          featured
                            ? "text-[color:var(--color-bg)]/70"
                            : "text-[color:var(--color-fg-muted)]"
                        }`}
                      >
                        {" "}
                        {formatCadence(tier.cadence)}
                      </span>
                    </p>
                    <p
                      className={`mt-2 text-sm ${
                        featured
                          ? "text-[color:var(--color-bg)]/60"
                          : "text-[color:var(--color-fg-muted)]"
                      }`}
                    >
                      ≈ {formatUsd(tier.priceUsdCents)}
                      {tier.cadence === "monthly" ? " / month" : ""}
                    </p>
                  </div>

                  <ul
                    className={`space-y-3 text-sm leading-relaxed flex-1 ${
                      featured
                        ? "text-[color:var(--color-bg)]/85"
                        : "text-[color:var(--color-fg-muted)]"
                    }`}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span
                          aria-hidden
                          className={
                            featured
                              ? "text-[color:var(--color-accent-deep)]"
                              : "text-[color:var(--color-accent)]"
                          }
                        >
                          ·
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-col gap-3">
                    {checkoutLive ? (
                      <form action="/api/checkout" method="post">
                        <input type="hidden" name="tierSlug" value={tier.slug} />
                        <button
                          type="submit"
                          className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm tracking-wide transition-colors ${
                            featured
                              ? "bg-[color:var(--color-bg)] text-[color:var(--color-fg)] hover:bg-[color:var(--color-accent-deep)]"
                              : "bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent-soft)]"
                          }`}
                        >
                          {tier.cadence === "monthly"
                            ? "Start engagement"
                            : "Pay deposit"}
                          <span aria-hidden>→</span>
                        </button>
                      </form>
                    ) : (
                      <Link
                        href={`/contact?tier=${tier.slug}`}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm tracking-wide transition-colors ${
                          featured
                            ? "bg-[color:var(--color-bg)] text-[color:var(--color-fg)] hover:bg-[color:var(--color-accent-deep)]"
                            : "bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent-soft)]"
                        }`}
                      >
                        Discuss this tier
                        <span aria-hidden>→</span>
                      </Link>
                    )}
                    {checkoutLive && (
                      <Link
                        href={`/contact?tier=${tier.slug}`}
                        className={`text-center text-xs ${
                          featured
                            ? "text-[color:var(--color-bg)]/60 hover:text-[color:var(--color-bg)]"
                            : "text-[color:var(--color-accent)] hover:text-[color:var(--color-fg)]"
                        }`}
                      >
                        Or, write to me first
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ul>

          {/* Notes */}
          <Reveal delay={0.2}>
            <ul className="mt-16 max-w-2xl space-y-2 text-sm text-[color:var(--color-fg-muted)] border-l border-[color:var(--color-rule)] pl-5">
              {pricing.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">Common questions</p>
              <h2 className="display-lg mt-6">
                Asked, and{" "}
                <em className="italic text-[color:var(--color-accent)]">
                  answered.
                </em>
              </h2>
            </Reveal>
            <dl className="md:col-span-8 space-y-10">
              {pricing.faq.map((item, i) => (
                <Reveal key={item.q} delay={0.06 * i}>
                  <dt className="font-display text-2xl text-[color:var(--color-fg)]">
                    {item.q}
                  </dt>
                  <dd className="mt-3 max-w-2xl leading-relaxed text-[color:var(--color-fg-muted)]">
                    {item.a}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
            Project doesn't fit a tier?{" "}
            <em className="italic text-[color:var(--color-accent)]">
              Tell me anyway.
            </em>
          </p>
          <Link
            href={pricing.cta.href}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm tracking-wide hover:bg-[color:var(--color-accent-soft)] transition-colors self-start md:self-end whitespace-nowrap"
          >
            {pricing.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

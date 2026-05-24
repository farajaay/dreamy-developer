import { NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";
import { db, tiers, isDbConfigured } from "@/db";
import { getStripe, isStripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: Request): Promise<Response> {
  if (!isDbConfigured() || !isStripeConfigured()) {
    return NextResponse.json(
      { error: "Checkout isn't configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  let slug = "";
  const contentType = req.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("application/json")) {
      const body = (await req.json()) as { tierSlug?: string };
      slug = body.tierSlug?.trim() ?? "";
    } else {
      const form = await req.formData();
      slug = String(form.get("tierSlug") ?? "").trim();
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!slug) {
    return NextResponse.json({ error: "Missing tierSlug." }, { status: 400 });
  }

  const [tier] = await db
    .select()
    .from(tiers)
    .where(and(eq(tiers.slug, slug), eq(tiers.active, true)))
    .limit(1);

  if (!tier) {
    return NextResponse.json({ error: "That tier isn't available." }, { status: 404 });
  }

  const stripe = getStripe();
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    req.headers.get("origin") ??
    `https://${req.headers.get("host")}`;

  const isMonthly = tier.cadence === "monthly";

  const session = await stripe.checkout.sessions.create({
    mode: isMonthly ? "subscription" : "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "sar",
          unit_amount: tier.priceSarHalalas,
          product_data: {
            name: tier.name,
            description: tier.tagline,
          },
          ...(isMonthly && { recurring: { interval: "month" } }),
        },
        quantity: 1,
      },
    ],
    metadata: {
      tier_slug: tier.slug,
      tier_name: tier.name,
    },
    success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing`,
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Stripe didn't return a checkout URL." },
      { status: 502 },
    );
  }

  // Browser POST from a <form> → redirect to Stripe.
  // Programmatic POST (fetch with JSON) → return the URL.
  if (contentType.includes("application/json")) {
    return NextResponse.json({ url: session.url });
  }
  return NextResponse.redirect(session.url, { status: 303 });
}

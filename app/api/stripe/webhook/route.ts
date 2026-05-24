import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { eq } from "drizzle-orm";
import { db, transactions, isDbConfigured } from "@/db";
import { getStripe, isStripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: Request): Promise<Response> {
  if (!isStripeConfigured() || !isDbConfigured()) {
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET not set." },
      { status: 500 },
    );
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const raw = await req.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, signature, secret);
  } catch (err) {
    console.error("Stripe webhook signature failed:", err);
    return NextResponse.json({ error: "Bad signature." }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const s = event.data.object as Stripe.Checkout.Session;
        await db
          .insert(transactions)
          .values({
            stripeSessionId: s.id,
            stripePaymentIntentId:
              typeof s.payment_intent === "string" ? s.payment_intent : null,
            tierSlug: s.metadata?.tier_slug ?? "unknown",
            tierName: s.metadata?.tier_name ?? "Unknown",
            customerEmail: s.customer_details?.email ?? s.customer_email ?? "",
            customerName: s.customer_details?.name ?? null,
            amountTotal: s.amount_total ?? 0,
            currency: (s.currency ?? "sar").toLowerCase(),
            status: s.payment_status === "paid" ? "paid" : "pending",
            rawEvent: event as unknown as Record<string, unknown>,
          })
          .onConflictDoUpdate({
            target: transactions.stripeSessionId,
            set: {
              status: s.payment_status === "paid" ? "paid" : "pending",
              amountTotal: s.amount_total ?? 0,
              currency: (s.currency ?? "sar").toLowerCase(),
              updatedAt: new Date(),
            },
          });
        break;
      }
      case "checkout.session.async_payment_succeeded": {
        const s = event.data.object as Stripe.Checkout.Session;
        await db
          .update(transactions)
          .set({ status: "paid", updatedAt: new Date() })
          .where(eq(transactions.stripeSessionId, s.id));
        break;
      }
      case "checkout.session.async_payment_failed": {
        const s = event.data.object as Stripe.Checkout.Session;
        await db
          .update(transactions)
          .set({ status: "failed", updatedAt: new Date() })
          .where(eq(transactions.stripeSessionId, s.id));
        break;
      }
      case "charge.refunded": {
        const ch = event.data.object as Stripe.Charge;
        if (ch.payment_intent) {
          const pid =
            typeof ch.payment_intent === "string"
              ? ch.payment_intent
              : ch.payment_intent.id;
          await db
            .update(transactions)
            .set({ status: "refunded", updatedAt: new Date() })
            .where(eq(transactions.stripePaymentIntentId, pid));
        }
        break;
      }
      default:
        // Ignore other event types.
        break;
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler failed." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

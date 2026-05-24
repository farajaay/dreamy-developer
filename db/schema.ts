import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  uuid,
  index,
} from "drizzle-orm/pg-core";

export const tiers = pgTable("tiers", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  /** SAR halalas (1/100 of a riyal). Charged amount. */
  priceSarHalalas: integer("price_sar_halalas").notNull(),
  /** USD cents — display-only equivalent, refreshed manually. */
  priceUsdCents: integer("price_usd_cents").notNull(),
  /** "one-time" | "monthly" */
  cadence: text("cadence").notNull().default("one-time"),
  features: jsonb("features").$type<string[]>().notNull().default(sql`'[]'::jsonb`),
  sortOrder: integer("sort_order").notNull().default(0),
  active: boolean("active").notNull().default(true),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const transactions = pgTable(
  "transactions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    stripeSessionId: text("stripe_session_id").notNull().unique(),
    stripePaymentIntentId: text("stripe_payment_intent_id"),
    /** Snapshot — survives tier deletion. */
    tierSlug: text("tier_slug").notNull(),
    tierName: text("tier_name").notNull(),
    customerEmail: text("customer_email").notNull(),
    customerName: text("customer_name"),
    /** Charged amount in minor units (halalas if SAR, cents if USD). */
    amountTotal: integer("amount_total").notNull(),
    /** Lowercase ISO 4217, e.g. "sar". */
    currency: text("currency").notNull(),
    /** "pending" | "paid" | "failed" | "refunded" */
    status: text("status").notNull().default("pending"),
    rawEvent: jsonb("raw_event"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("transactions_status_idx").on(table.status),
    index("transactions_created_at_idx").on(table.createdAt),
  ],
);

export type Tier = typeof tiers.$inferSelect;
export type NewTier = typeof tiers.$inferInsert;
export type Transaction = typeof transactions.$inferSelect;
export type NewTransaction = typeof transactions.$inferInsert;

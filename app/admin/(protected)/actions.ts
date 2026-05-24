"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, tiers, isDbConfigured } from "@/db";
import { pricingSeed } from "@/lib/content";
import { isAuthenticated } from "@/lib/auth";

async function requireAuth() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  if (!isDbConfigured()) throw new Error("DATABASE_URL not set.");
}

function parseFeatures(raw: FormDataEntryValue | null): string[] {
  return String(raw ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseCadence(raw: FormDataEntryValue | null): "one-time" | "monthly" {
  return raw === "monthly" ? "monthly" : "one-time";
}

export async function seedTiers(): Promise<void> {
  await requireAuth();
  for (const t of pricingSeed) {
    await db
      .insert(tiers)
      .values({
        slug: t.slug,
        name: t.name,
        tagline: t.tagline,
        priceSarHalalas: t.priceSarHalalas,
        priceUsdCents: t.priceUsdCents,
        cadence: t.cadence,
        features: t.features,
        sortOrder: t.sortOrder,
        active: t.active,
        featured: "featured" in t ? Boolean(t.featured) : false,
      })
      .onConflictDoNothing({ target: tiers.slug });
  }
  revalidatePath("/admin/pricing");
  revalidatePath("/pricing");
}

export async function createTier(formData: FormData): Promise<void> {
  await requireAuth();
  const slug = String(formData.get("slug") ?? "").trim();
  if (!slug) throw new Error("Slug is required.");
  await db.insert(tiers).values({
    slug,
    name: String(formData.get("name") ?? ""),
    tagline: String(formData.get("tagline") ?? ""),
    priceSarHalalas: Number(formData.get("priceSar") ?? 0) * 100,
    priceUsdCents: Number(formData.get("priceUsd") ?? 0) * 100,
    cadence: parseCadence(formData.get("cadence")),
    features: parseFeatures(formData.get("features")),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
    active: formData.get("active") === "on",
    featured: formData.get("featured") === "on",
  });
  revalidatePath("/admin/pricing");
  revalidatePath("/pricing");
}

export async function updateTier(formData: FormData): Promise<void> {
  await requireAuth();
  const id = String(formData.get("id") ?? "");
  if (!id) throw new Error("Tier id is required.");
  await db
    .update(tiers)
    .set({
      name: String(formData.get("name") ?? ""),
      tagline: String(formData.get("tagline") ?? ""),
      priceSarHalalas: Number(formData.get("priceSar") ?? 0) * 100,
      priceUsdCents: Number(formData.get("priceUsd") ?? 0) * 100,
      cadence: parseCadence(formData.get("cadence")),
      features: parseFeatures(formData.get("features")),
      sortOrder: Number(formData.get("sortOrder") ?? 0),
      active: formData.get("active") === "on",
      featured: formData.get("featured") === "on",
      updatedAt: new Date(),
    })
    .where(eq(tiers.id, id));
  revalidatePath("/admin/pricing");
  revalidatePath("/pricing");
}

export async function deleteTier(formData: FormData): Promise<void> {
  await requireAuth();
  const id = String(formData.get("id") ?? "");
  if (!id) throw new Error("Tier id is required.");
  await db.delete(tiers).where(eq(tiers.id, id));
  revalidatePath("/admin/pricing");
  revalidatePath("/pricing");
}

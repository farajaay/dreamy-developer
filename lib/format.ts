/**
 * Currency formatters. Prices are stored as integer minor units
 * (halalas for SAR, cents for USD) so all math is exact.
 */

const sarFormatter = new Intl.NumberFormat("en", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatSar(halalas: number): string {
  return `SAR ${sarFormatter.format(Math.round(halalas / 100))}`;
}

export function formatUsd(cents: number): string {
  return `USD ${usdFormatter.format(Math.round(cents / 100))}`;
}

export function formatCadence(cadence: "one-time" | "monthly"): string {
  return cadence === "monthly" ? "/ month" : "";
}

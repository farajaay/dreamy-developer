import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Payment received",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Payment received</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl mt-8">
            Thank you.{" "}
            <em className="italic text-[color:var(--color-accent)]">
              I'll be in touch within a working day.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-fg-muted)]">
            A receipt is already on its way to your inbox. You'll hear from me
            with a short discovery questionnaire and a proposed start date.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)] hover:text-[color:var(--color-fg)]"
          >
            ← Back to the homepage
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { home } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40">
          <Reveal>
            <p className="eyebrow">{home.eyebrow}</p>
          </Reveal>

          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-5xl text-[color:var(--color-ink)]">
            {home.heading}{" "}
            <em className="italic text-[color:var(--color-rose)]">{home.headingItalic}</em>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-slate-soft)]">
            <p>{home.intro}</p>
          </Reveal>

          <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href={home.cta.href}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm tracking-wide hover:bg-[color:var(--color-deep)] transition-colors"
            >
              {home.cta.label}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={home.ctaSecondary.href}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-[color:var(--color-mauve)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              {home.ctaSecondary.label}
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-[color:var(--color-rule)]" />
      </section>

      {/* Services snapshot */}
      <section className="bg-[color:var(--color-ivory)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">{home.servicesEyebrow}</p>
              <h2 className="display-lg mt-6 text-[color:var(--color-ink)]">
                Three lines of work,{" "}
                <em className="italic text-[color:var(--color-rose)]">one standard.</em>
              </h2>
            </Reveal>

            <ul className="md:col-span-8 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden">
              {home.services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.title}
                  delay={0.08 * i}
                  className="bg-[color:var(--color-ivory)] p-8 md:p-10"
                >
                  <p className="font-display text-2xl text-[color:var(--color-ink)]">
                    {service.title}
                  </p>
                  <p className="mt-3 text-[color:var(--color-slate-soft)] leading-relaxed">
                    {service.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-ivory)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-8">
            <p className="eyebrow" style={{ color: "var(--color-blush)" }}>
              The next project
            </p>
            <p className="font-display text-4xl md:text-6xl leading-tight mt-6">
              A short message is enough.{" "}
              <em className="italic text-[color:var(--color-rose)]">
                I read every one.
              </em>
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4 md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ivory)] text-[color:var(--color-ink)] text-sm tracking-wide hover:bg-[color:var(--color-blush)] transition-colors"
            >
              Write to me
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

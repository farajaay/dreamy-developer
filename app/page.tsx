import Link from "next/link";
import Image from "next/image";
import { home } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero — two-column editorial */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className="eyebrow">{home.eyebrow}</p>
              </Reveal>

              <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-3xl">
                {home.heading}{" "}
                <em className="italic text-[color:var(--color-accent)]">
                  {home.headingItalic}
                </em>
              </Reveal>

              <Reveal
                delay={0.25}
                className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]"
              >
                <p>{home.intro}</p>
              </Reveal>

              <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  href={home.cta.href}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm tracking-wide hover:bg-[color:var(--color-accent-soft)] transition-colors"
                >
                  {home.cta.label}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={home.ctaSecondary.href}
                  className="inline-flex items-center gap-2 text-sm tracking-wide text-[color:var(--color-accent)] hover:text-[color:var(--color-fg)] transition-colors"
                >
                  {home.ctaSecondary.label}
                  <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.3}>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[color:var(--color-rule)]">
                  <Image
                    src="/photos/hero-desk.jpg"
                    alt="Hands at a laptop keyboard, warm window light"
                    fill
                    priority
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.30) 0%, rgba(15,23,42,0.10) 40%, rgba(15,23,42,0.78) 100%)",
                    }}
                  />
                  <figcaption className="absolute bottom-6 left-6 right-6 text-[color:var(--color-fg)]">
                    <p
                      className="eyebrow"
                      style={{ color: "var(--color-accent-soft)" }}
                    >
                      Working hours
                    </p>
                    <p className="font-display text-2xl md:text-3xl mt-2 italic leading-tight">
                      Slow code, written carefully.
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="rule-rose" />
      </section>

      {/* Manifesto strip */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl leading-tight max-w-4xl">
              I write software the way I would want it written{" "}
              <em className="italic text-[color:var(--color-accent)]">for me</em> —
              quiet, dependable, and easy to live with at three in the morning.
            </p>
          </Reveal>
        </div>
        <div className="rule" />
      </section>

      {/* Services snapshot */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">{home.servicesEyebrow}</p>
              <h2 className="display-lg mt-6">
                Three lines of work,{" "}
                <em className="italic text-[color:var(--color-accent)]">
                  one standard.
                </em>
              </h2>
            </Reveal>

            <ul className="md:col-span-8 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden">
              {home.services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.title}
                  delay={0.08 * i}
                  className="bg-[color:var(--color-bg-elevated)] p-8 md:p-10"
                >
                  <p className="font-display text-2xl text-[color:var(--color-fg)]">
                    {service.title}
                  </p>
                  <p className="mt-3 text-[color:var(--color-fg-muted)] leading-relaxed">
                    {service.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="relative overflow-hidden border-y border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)]">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-8">
            <p
              className="eyebrow"
              style={{ color: "var(--color-accent-soft)" }}
            >
              The next project
            </p>
            <p className="font-display text-4xl md:text-6xl leading-tight mt-6">
              A short message is enough.{" "}
              <em className="italic text-[color:var(--color-accent)]">
                I read every one.
              </em>
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4 md:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm tracking-wide hover:bg-[color:var(--color-accent-soft)] transition-colors"
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

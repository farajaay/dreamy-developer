import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { consulting } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industrial & OT Consulting",
  description: consulting.intro,
};

export default function ConsultingPage() {
  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{consulting.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {consulting.heading}{" "}
            <em className="italic text-[color:var(--color-accent)]">
              {consulting.headingItalic}
            </em>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
            <p>{consulting.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-16 grid gap-8 md:grid-cols-12 md:items-baseline">
          <Reveal className="md:col-span-3">
            <p className="eyebrow">{consulting.sectorsEyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-9">
            <p className="text-lg leading-relaxed text-[color:var(--color-fg)]">
              {consulting.sectors}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modes */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">{consulting.modesEyebrow}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-fg-muted)]">
              {consulting.modesIntro}
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20 space-y-20 md:space-y-24">
            {consulting.modes.map((mode, i) => (
              <Reveal key={mode.title}>
                <article className="grid gap-10 md:grid-cols-12">
                  <div className="md:col-span-1 font-display text-xl text-[color:var(--color-accent)]">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="display-lg text-[color:var(--color-fg)]">
                      {mode.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6 space-y-6">
                    <p className="text-lg leading-relaxed text-[color:var(--color-fg-muted)]">
                      {mode.body}
                    </p>
                    <ul className="space-y-3 border-l border-[color:var(--color-rule)] pl-5">
                      {mode.useCases.map((useCase) => (
                        <li
                          key={useCase}
                          className="text-[color:var(--color-fg)] leading-relaxed"
                        >
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial accent band */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
          <Reveal>
            <figure className="relative aspect-[21/9] md:aspect-[24/7] overflow-hidden rounded-2xl border border-[color:var(--color-rule)]">
              <Image
                src="/photos/services-texture.jpg"
                alt="A long quiet corridor, late light"
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[color:var(--color-bg)]/60" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-y border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">{consulting.focusEyebrow}</p>
              <h2 className="display-lg mt-6">
                Four domains I know{" "}
                <em className="italic text-[color:var(--color-accent)]">
                  from the inside.
                </em>
              </h2>
            </Reveal>

            <ul className="md:col-span-8 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden sm:grid-cols-2">
              {consulting.focus.map((area, i) => (
                <Reveal
                  as="li"
                  key={area.title}
                  delay={0.08 * i}
                  className="bg-[color:var(--color-bg-elevated)] p-8 md:p-10"
                >
                  <p className="font-display text-2xl text-[color:var(--color-fg)]">
                    {area.title}
                  </p>
                  <p className="mt-3 text-[color:var(--color-fg-muted)] leading-relaxed">
                    {area.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[color:var(--color-bg-elevated)] border-b border-[color:var(--color-rule)]">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-accent-soft)" }}>
              {consulting.processEyebrow}
            </p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Four steps,{" "}
              <em className="italic text-[color:var(--color-accent)]">
                written down
              </em>{" "}
              before any invoice is.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px bg-[color:var(--color-rule)] md:grid-cols-4 border border-[color:var(--color-rule)] rounded-2xl overflow-hidden">
            {consulting.process.map((step, i) => (
              <Reveal
                key={step.step}
                delay={0.1 * i}
                as="li"
                className="bg-[color:var(--color-bg)] p-8 md:p-10"
              >
                <p className="font-display text-3xl text-[color:var(--color-accent)]">
                  {step.step}
                </p>
                <p className="font-display text-2xl mt-4">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Toolkit */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow">{consulting.toolkitEyebrow}</p>
              <h2 className="display-lg mt-6">
                {consulting.toolkit.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-fg-muted)]">
                {consulting.toolkit.body}
              </p>
            </Reveal>
            <ul className="md:col-span-7 flex flex-wrap gap-3 md:self-start">
              {consulting.toolkit.items.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 rounded-full border border-[color:var(--color-rule)] text-sm text-[color:var(--color-fg)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <ul className="grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden md:grid-cols-3">
            {consulting.why.map((reason, i) => (
              <Reveal
                as="li"
                key={reason.title}
                delay={0.08 * i}
                className="bg-[color:var(--color-bg-elevated)] p-8 md:p-10"
              >
                <p className="font-display text-2xl text-[color:var(--color-fg)]">
                  {reason.title}
                </p>
                <p className="mt-3 text-[color:var(--color-fg-muted)] leading-relaxed">
                  {reason.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow" style={{ color: "var(--color-accent-soft)" }}>
              {consulting.cta.eyebrow}
            </p>
            <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mt-5">
              {consulting.cta.heading}
            </p>
          </div>
          <Link
            href={consulting.cta.href}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm tracking-wide hover:bg-[color:var(--color-accent-soft)] transition-colors self-start md:self-end whitespace-nowrap"
          >
            {consulting.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

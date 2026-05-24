import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: services.intro,
};

export default function ServicesPage() {
  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{services.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {services.heading}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
            <p>{services.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Service list */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 space-y-20 md:space-y-28">
          {services.items.map((item, i) => (
            <Reveal key={item.title}>
              <article className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-1 font-display text-xl text-[color:var(--color-accent)]">
                  0{i + 1}
                </div>
                <div className="md:col-span-5">
                  <h2 className="display-lg text-[color:var(--color-fg)]">{item.title}</h2>
                </div>
                <div className="md:col-span-6 space-y-6">
                  <p className="text-lg leading-relaxed text-[color:var(--color-fg-muted)]">
                    {item.body}
                  </p>
                  <ul className="space-y-3 border-l border-[color:var(--color-rule)] pl-5">
                    {item.useCases.map((useCase) => (
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
      </section>

      {/* Editorial accent band */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
          <Reveal>
            <figure className="relative aspect-[21/9] md:aspect-[24/7] overflow-hidden rounded-2xl border border-[color:var(--color-rule)]">
              <Image
                src="/photos/services-texture.jpg"
                alt="A long quiet hallway, late light"
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[color:var(--color-bg)]/60" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[color:var(--color-bg-elevated)] border-y border-[color:var(--color-rule)]">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-accent-soft)" }}>
              {services.processEyebrow}
            </p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Four steps,{" "}
              <em className="italic text-[color:var(--color-accent)]">
                written down
              </em>{" "}
              before any code is.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px bg-[color:var(--color-rule)] md:grid-cols-4 border border-[color:var(--color-rule)] rounded-2xl overflow-hidden">
            {services.process.map((step, i) => (
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

      {/* Stack */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="eyebrow">Tools I reach for</p>
              <h2 className="display-lg mt-6">
                A stack chosen for{" "}
                <em className="italic text-[color:var(--color-accent)]">
                  longevity.
                </em>
              </h2>
            </Reveal>
            <ul className="md:col-span-8 flex flex-wrap gap-3">
              {services.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 rounded-full border border-[color:var(--color-rule)] text-sm text-[color:var(--color-fg)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
            Tell me what's on your{" "}
            <em className="italic text-[color:var(--color-accent)]">desk.</em>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm tracking-wide hover:bg-[color:var(--color-accent-soft)] transition-colors self-start md:self-end whitespace-nowrap"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

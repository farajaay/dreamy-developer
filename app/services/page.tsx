import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="border-b border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{services.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl text-[color:var(--color-ink)]">
            {services.heading}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-slate-soft)]">
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
                <div className="md:col-span-1 font-display text-xl text-[color:var(--color-mauve)]">
                  0{i + 1}
                </div>
                <div className="md:col-span-5">
                  <h2 className="display-lg text-[color:var(--color-ink)]">{item.title}</h2>
                </div>
                <div className="md:col-span-6 space-y-6">
                  <p className="text-lg leading-relaxed text-[color:var(--color-slate-soft)]">
                    {item.body}
                  </p>
                  <ul className="space-y-3 border-l border-[color:var(--color-rule)] pl-5">
                    {item.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="text-[color:var(--color-ink)] leading-relaxed"
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

      {/* Process */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-ivory)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-blush)" }}>
              {services.processEyebrow}
            </p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Four steps,{" "}
              <em className="italic text-[color:var(--color-rose)]">written down</em> before any code is.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px bg-[color:var(--color-deep)] md:grid-cols-4 border border-[color:var(--color-deep)] rounded-2xl overflow-hidden">
            {services.process.map((step, i) => (
              <Reveal
                key={step.step}
                delay={0.1 * i}
                as="li"
                className="bg-[color:var(--color-ink)] p-8 md:p-10"
              >
                <p className="font-display text-3xl text-[color:var(--color-rose)]">
                  {step.step}
                </p>
                <p className="font-display text-2xl mt-4">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-blush)]/80">
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
              <h2 className="display-lg mt-6 text-[color:var(--color-ink)]">
                A stack chosen for{" "}
                <em className="italic text-[color:var(--color-rose)]">longevity.</em>
              </h2>
            </Reveal>
            <ul className="md:col-span-8 flex flex-wrap gap-3">
              {services.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 rounded-full border border-[color:var(--color-rule)] text-sm text-[color:var(--color-ink)]"
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
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl text-[color:var(--color-ink)]">
            Tell me what's on your{" "}
            <em className="italic text-[color:var(--color-rose)]">desk.</em>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm tracking-wide hover:bg-[color:var(--color-deep)] transition-colors self-start md:self-end"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

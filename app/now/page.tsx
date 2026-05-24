import type { Metadata } from "next";
import Link from "next/link";
import { now } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Ahmad is working on, reading, listening to, and thinking about this season.",
};

export default function NowPage() {
  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
          <Reveal>
            <p className="eyebrow">{now.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {now.heading}{" "}
            <em className="italic text-[color:var(--color-accent)]">
              {now.headingItalic}
            </em>
          </Reveal>
          <Reveal
            delay={0.2}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]"
          >
            <p>{now.intro}</p>
            <p className="mt-3 text-sm">
              <span className="eyebrow">Last updated</span>{" "}
              <span className="ml-3 text-[color:var(--color-fg)]">
                {now.updatedAt}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 space-y-16 md:space-y-20">
          {now.sections.map((section, i) => (
            <Reveal key={section.title} delay={0.06 * i}>
              <article className="grid gap-8 md:grid-cols-12 md:gap-12 border-t border-[color:var(--color-rule)] pt-10 md:pt-12">
                <div className="md:col-span-4">
                  <p className="font-display text-3xl md:text-4xl italic text-[color:var(--color-accent)]">
                    {section.title}
                  </p>
                </div>
                <ul className="md:col-span-8 space-y-5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-[color:var(--color-fg)] leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="text-[color:var(--color-accent)] font-display mt-1"
                      >
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footnote */}
      <section className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg-elevated)]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-20 text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl italic text-[color:var(--color-fg-muted)]">
              The point of a "now" page is not the list itself, but the small
              honest weight of keeping one.
            </p>
            <Link
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs eyebrow hover:text-[color:var(--color-accent)] transition-colors"
            >
              About now pages →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

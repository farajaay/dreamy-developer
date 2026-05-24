import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: portfolio.intro,
};

export default function PortfolioPage() {
  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{portfolio.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {portfolio.heading}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
            <p>{portfolio.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Current projects</p>
            <h2 className="display-lg mt-6 max-w-3xl">
              Case studies,{" "}
              <em className="italic text-[color:var(--color-accent)]">
                written up as they ship.
              </em>
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden md:grid-cols-3">
            {portfolio.projects.map((project, i) => (
              <Reveal
                key={i}
                as="li"
                delay={0.08 * i}
                className="bg-[color:var(--color-bg-elevated)] p-8 md:p-10 flex flex-col"
              >
                <p className="font-display text-xl text-[color:var(--color-fg)]">
                  {project.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                  <span className="text-[color:var(--color-accent)]">
                    Challenge —{" "}
                  </span>
                  {project.challenge}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                  <span className="text-[color:var(--color-accent)]">
                    Solution —{" "}
                  </span>
                  {project.solution}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="px-2.5 py-1 rounded-full border border-[color:var(--color-rule)] text-xs text-[color:var(--color-fg)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)] hover:text-[color:var(--color-fg)]"
                  >
                    View project <span aria-hidden>→</span>
                  </a>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
            Yours could be the{" "}
            <em className="italic text-[color:var(--color-accent)]">
              next case study.
            </em>
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

import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      {/* Heading */}
      <section className="border-b border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl text-[color:var(--color-ink)]">
            {about.heading}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-slate-soft)]">
            <p>{about.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Career arc */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">The arc</p>
            <h2 className="display-lg mt-6 max-w-3xl text-[color:var(--color-ink)]">
              Thirteen years on the floor,{" "}
              <em className="italic text-[color:var(--color-rose)]">three at the keyboard.</em>
            </h2>
          </Reveal>

          <ol className="mt-16 space-y-12 md:space-y-16">
            {about.arc.map((entry, i) => (
              <Reveal key={entry.period} delay={0.08 * i}>
                <li className="grid gap-6 md:grid-cols-12 md:gap-10 border-t border-[color:var(--color-rule)] pt-10">
                  <div className="md:col-span-3">
                    <p className="font-display text-xl text-[color:var(--color-mauve)]">
                      {entry.period}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-display text-2xl md:text-3xl text-[color:var(--color-ink)]">
                      {entry.role}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--color-slate-soft)]">
                      {entry.org}
                    </p>
                    <p className="mt-5 max-w-2xl leading-relaxed text-[color:var(--color-slate-soft)]">
                      {entry.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-ivory)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-40">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-blush)" }}>
              A small philosophy
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-10 max-w-4xl">
              <p className="font-display text-4xl md:text-6xl leading-tight">
                <span className="text-[color:var(--color-blush)]/60">&ldquo;</span>
                {about.philosophy.quote}
                <span className="text-[color:var(--color-blush)]/60">&rdquo;</span>
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl leading-relaxed text-[color:var(--color-blush)]/80">
              {about.philosophy.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Personal */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Off the clock</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl leading-snug text-[color:var(--color-ink)]">
              {about.personal}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why work with me */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Why work with me</p>
            <h2 className="display-lg mt-6 max-w-3xl text-[color:var(--color-ink)]">
              Three things you'll get,{" "}
              <em className="italic text-[color:var(--color-rose)]">in writing.</em>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-px bg-[color:var(--color-rule)] border border-[color:var(--color-rule)] rounded-2xl overflow-hidden md:grid-cols-3">
            {about.why.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                delay={0.08 * i}
                className="bg-[color:var(--color-ivory)] p-8 md:p-10"
              >
                <p className="font-display text-2xl text-[color:var(--color-ink)]">
                  {item.title}
                </p>
                <p className="mt-4 leading-relaxed text-[color:var(--color-slate-soft)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-display text-3xl md:text-5xl leading-tight max-w-2xl text-[color:var(--color-ink)]">
            If this sounds like the kind of person you want{" "}
            <em className="italic text-[color:var(--color-rose)]">building for you</em> —
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm tracking-wide hover:bg-[color:var(--color-deep)] transition-colors self-start md:self-end whitespace-nowrap"
          >
            Write to me
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

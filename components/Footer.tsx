import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl md:text-4xl leading-tight text-[color:var(--color-ink)]">
              Have a project worth building <em className="italic text-[color:var(--color-rose)]">slowly</em> and properly?
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-[color:var(--color-mauve)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              Start the conversation
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm text-[color:var(--color-ink)]">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[color:var(--color-rose)]">
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-rose)]"
                >
                  LinkedIn
                </a>
              </li>
              {site.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--color-rose)]"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Based in</p>
            <p className="text-sm text-[color:var(--color-ink)]">{site.location}</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--color-rule)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[color:var(--color-slate-soft)]">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Built with <span className="italic">care</span> &mdash; and Claude Code.
          </p>
        </div>
      </div>
    </footer>
  );
}

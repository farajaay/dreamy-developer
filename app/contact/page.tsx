import type { Metadata } from "next";
import { contact, site } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Start a project",
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <>
      {/* Heading */}
      <section className="relative border-b border-[color:var(--color-rule)] overflow-hidden">
        <div className="absolute inset-0 bg-topo pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow">{contact.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} as="h1" className="display-xl mt-8 max-w-4xl">
            {contact.heading}
          </Reveal>
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
            <p>{contact.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <ContactForm />
          </div>

          <aside className="md:col-span-4 space-y-12 md:pl-10 md:border-l md:border-[color:var(--color-rule)]">
            <div>
              <p className="eyebrow mb-4">Or, more directly</p>
              <ul className="space-y-3 text-[color:var(--color-fg)]">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-[color:var(--color-accent)] transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--color-accent)] transition-colors"
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
                      className="hover:text-[color:var(--color-accent)] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Working hours</p>
              <p className="text-[color:var(--color-fg-muted)] leading-relaxed">
                Sunday — Thursday, Arabia Standard Time (UTC+3). I reply to most messages within a working day.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Based in</p>
              <p className="text-[color:var(--color-fg-muted)]">{site.location}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

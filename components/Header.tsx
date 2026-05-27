"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-rule)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg md:text-xl tracking-tight text-[color:var(--color-fg)]"
          onClick={() => setOpen(false)}
        >
          <span className="italic text-[color:var(--color-accent)]">Ahmad</span>{" "}
          AlFaraj
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-[color:var(--color-accent)]"
                    : "text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent-soft)] transition-colors"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`h-px w-6 bg-[color:var(--color-fg)] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[color:var(--color-fg)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[color:var(--color-fg)] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg)]">
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-[color:var(--color-fg)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block self-start px-5 py-3 rounded-full bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm"
            >
              Start a project
            </Link>
            <p className="mt-4 text-xs text-[color:var(--color-fg-muted)]">
              {site.location}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}

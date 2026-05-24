"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(contact.projectTypes[0]);
  const [scope, setScope] = useState(contact.scopes[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Your name, please.";
    if (!email.trim()) next.email = "An email so I can reply.";
    else if (!emailRegex.test(email.trim())) next.email = "That email doesn't look right.";
    if (!message.trim()) next.message = "Tell me a little about the project.";
    else if (message.trim().length < 20)
      next.message = "A few more sentences would help me reply usefully.";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType,
          scope,
          message: message.trim(),
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Something went wrong on my end.");
      }
      setStatus({ kind: "success" });
      setName("");
      setEmail("");
      setProjectType(contact.projectTypes[0]);
      setScope(contact.scopes[0]);
      setMessage("");
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Unknown error.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="border border-[color:var(--color-rule)] rounded-2xl p-10 md:p-14 bg-[color:var(--color-ivory)]">
        <p className="eyebrow text-[color:var(--color-rose)]">Message sent</p>
        <p className="font-display text-3xl md:text-4xl mt-6 text-[color:var(--color-ink)]">
          Thank you. <em className="italic text-[color:var(--color-rose)]">I'll write back within 48 hours.</em>
        </p>
        <p className="mt-6 text-[color:var(--color-slate-soft)] leading-relaxed">
          If something is urgent, an email direct to me usually moves faster than a form.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-10 text-sm text-[color:var(--color-mauve)] hover:text-[color:var(--color-ink)]"
        >
          ← Send another
        </button>
      </div>
    );
  }

  const fieldBase =
    "w-full bg-transparent border-b border-[color:var(--color-rule)] py-3 px-0 text-[color:var(--color-ink)] focus:outline-none focus:border-[color:var(--color-rose)] transition-colors placeholder:text-[color:var(--color-slate-soft)]/50";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <div className="grid gap-10 md:grid-cols-2">
        <Field
          label="Your name"
          error={errors.name}
          input={
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              className={fieldBase}
            />
          }
        />
        <Field
          label="Email"
          error={errors.email}
          input={
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className={fieldBase}
            />
          }
        />
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <Field
          label="Project type"
          input={
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={`${fieldBase} appearance-none cursor-pointer`}
            >
              {contact.projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          }
        />
        <Field
          label="Scope"
          input={
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className={`${fieldBase} appearance-none cursor-pointer`}
            >
              {contact.scopes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          }
        />
      </div>

      <Field
        label="What are you trying to build?"
        error={errors.message}
        input={
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            className={`${fieldBase} resize-y`}
            placeholder="A few sentences about the problem, the people it affects, and any timing you have in mind."
          />
        }
      />

      {status.kind === "error" && (
        <p className="text-sm text-[color:var(--color-rose)]">{status.message}</p>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-2">
        <p className="text-sm text-[color:var(--color-slate-soft)]">
          {contact.reassurance}
        </p>
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-ivory)] text-sm tracking-wide hover:bg-[color:var(--color-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed self-start md:self-auto"
        >
          {status.kind === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {input}
      {error && (
        <span className="block mt-2 text-xs text-[color:var(--color-rose)]">
          {error}
        </span>
      )}
    </label>
  );
}

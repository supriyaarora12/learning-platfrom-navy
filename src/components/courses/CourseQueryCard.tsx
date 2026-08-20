"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CourseQueryCard() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: local confirm until CRM/API is wired
    setSent(true);
  }

  return (
    <aside className="rounded-2xl border border-line bg-white p-5 shadow-[0_18px_40px_-32px_rgba(11,31,58,0.35)] lg:sticky lg:top-24">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Drop your query</p>
      <h3 className="mt-2 font-display text-2xl text-navy">Need a course match?</h3>
      <p className="mt-2 text-sm text-muted">
        Tell us your year and goal — we&apos;ll recommend the right batch.
      </p>

      {sent ? (
        <p className="mt-6 rounded-lg bg-foam px-4 py-6 text-center text-sm text-navy">
          Thanks — a counsellor will reach out shortly.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 grid gap-3">
          <input
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-md border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Mobile number"
            className="w-full rounded-md border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
          <select
            name="goal"
            className="w-full rounded-md border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
            defaultValue="IMUCET"
          >
            <option value="IMUCET">IMUCET preparation</option>
            <option value="Sponsorship">DNS / Sponsorship</option>
            <option value="Foundation">Foundation (Class 11–12)</option>
            <option value="Crash">Crash revision</option>
            <option value="Not sure">Not sure yet</option>
          </select>
          <button
            type="submit"
            className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
          >
            Request callback
          </button>
        </form>
      )}

      <div className="mt-4">
        <ButtonLink href={site.secondaryCta.href} variant="ghost" className="w-full" external>
          WhatsApp us
        </ButtonLink>
      </div>
    </aside>
  );
}

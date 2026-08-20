"use client";

import { FormEvent, useState } from "react";
import { finalCta } from "@/content/home";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta({ defaultCourse }: { defaultCourse?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: form stores client-side only until API/CRM is wired
    setSent(true);
  }

  return (
    <section className="section-pad bg-navy-deep text-white">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal variant="left">
          <SectionHeading light title={finalCta.title} subtitle={finalCta.subtitle} />
          <div className="mt-8">
            <ButtonLink href={site.secondaryCta.href} variant="secondary" external>
              {site.secondaryCta.label}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8"
          >
            {sent ? (
              <p className="py-10 text-center text-navy">
                Thanks — we&apos;ll reach out shortly on your phone or email.
              </p>
            ) : (
              <div className="grid gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Mobile" name="mobile" type="tel" required />
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-navy">Course interest</span>
                  <select
                    name="course"
                    className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none focus:border-navy"
                    defaultValue={defaultCourse ?? "IMUCET Complete"}
                  >
                    <option>IMUCET Complete</option>
                    <option>DNS & Sponsorship</option>
                    <option>Foundation Batch</option>
                    <option>Crash Revision</option>
                    <option>Gold Modules</option>
                    <option>Target Batch</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-navy">Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none focus:border-navy"
                    placeholder="Tell us your exam target or year..."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft active:scale-[0.98]"
                >
                  Submit enquiry
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none transition focus:border-navy"
      />
    </label>
  );
}

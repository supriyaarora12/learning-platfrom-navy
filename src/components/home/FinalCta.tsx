"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { contactOffice, contactQr } from "@/content/contact";
import { finalCta } from "@/content/home";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta({ defaultCourse }: { defaultCourse?: string }) {
  const [sent, setSent] = useState(false);
  const waUrl = site.secondaryCta.href;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=10&data=${encodeURIComponent(waUrl)}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: form stores client-side only until API/CRM is wired
    setSent(true);
  }

  return (
    <section className="section-pad bg-navy-deep text-white">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <Reveal variant="left" className="flex h-full flex-col">
          <SectionHeading light title={finalCta.title} subtitle={finalCta.subtitle} />
          <div className="mt-8">
            <ButtonLink href={waUrl} variant="secondary" external>
              {site.secondaryCta.label}
            </ButtonLink>
          </div>

          {/* Fill leftover height so left matches the form column */}
          <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2 lg:mt-auto lg:pt-8">
            <div className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                Location
              </p>
              <h3 className="mt-2 font-display text-lg text-white">{contactOffice.title}</h3>
              <address className="mt-3 not-italic text-sm leading-relaxed text-white/70">
                <p className="font-medium text-white">{site.address.line1}</p>
                <p>{site.address.line2}</p>
                <p>
                  {site.address.city}, {site.address.country}
                </p>
              </address>
              <ul className="mt-4 space-y-1 border-t border-white/10 pt-3 text-xs text-white/60">
                {contactOffice.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-2">
                    <span>{h.day}</span>
                    <span className="text-white/85">{h.time}</span>
                  </li>
                ))}
              </ul>
              <a
                href={site.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex pt-4 text-sm font-semibold text-white underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-soft"
              >
                Open in Maps →
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
                Scanner
              </p>
              <h3 className="mt-2 font-display text-lg text-white">{contactQr.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">{contactQr.body}</p>
              <div className="mt-4 flex flex-1 flex-col items-center justify-center">
                <div className="rounded-xl bg-white p-2.5 shadow-lg">
                  <Image
                    src={qrSrc}
                    alt="WhatsApp QR code for SeaPath counsellor"
                    width={132}
                    height={132}
                    unoptimized
                    className="h-[132px] w-[132px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="h-full">
          <form
            onSubmit={onSubmit}
            className="flex h-full flex-col rounded-2xl bg-white p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8"
          >
            {sent ? (
              <p className="flex flex-1 items-center justify-center py-10 text-center text-navy">
                Thanks — we&apos;ll reach out shortly on your phone or email.
              </p>
            ) : (
              <div className="grid flex-1 gap-4 content-start">
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
                  className="mt-auto rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft active:scale-[0.98]"
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

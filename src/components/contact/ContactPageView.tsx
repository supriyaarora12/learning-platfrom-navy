import Image from "next/image";
import Link from "next/link";
import {
  contactOffice,
  contactPage,
  contactQr,
} from "@/content/contact";
import { site } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { StayConnected } from "@/components/contact/StayConnected";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

export function ContactPageView({ defaultCourse }: { defaultCourse?: string }) {
  const waUrl = site.secondaryCta.href;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(waUrl)}`;

  const fullAddress = [
    site.address.line1,
    site.address.line2,
    site.address.city,
    site.address.country,
  ].join(", ");

  return (
    <>
      <section className="relative overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <Container className="relative py-14 lg:py-16">
          <nav className="hero-enter text-sm text-white/55">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">Contact Us</span>
          </nav>
          <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            {contactPage.eyebrow}
          </p>
          <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            {contactPage.title}
          </h1>
          <p className="hero-enter hero-enter-delay-3 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {contactPage.subtitle}
          </p>
          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
            <ButtonLink href={waUrl} external>
              WhatsApp counsellor
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.replace(/\s/g, "")}`} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Form + location + QR */}
      <section className="section-pad bg-foam">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal variant="left">
            <ContactForm defaultCourse={defaultCourse} />
          </Reveal>

          <div className="space-y-5">
            <Reveal variant="right" delay={80}>
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Location
                </p>
                <h2 className="mt-2 font-display text-2xl text-navy">{contactOffice.title}</h2>
                <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
                  <p className="font-semibold text-navy">{site.address.line1}</p>
                  <p>{site.address.line2}</p>
                  <p>
                    {site.address.city}, {site.address.country}
                  </p>
                </address>

                <div className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                  <a href={`mailto:${site.email}`} className="block text-navy hover:underline">
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="block text-navy hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>

                <ul className="mt-5 space-y-1.5 text-sm text-muted">
                  {contactOffice.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-navy">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted">{contactOffice.note}</p>

                <a
                  href={site.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
                >
                  Open in Google Maps →
                </a>
              </div>
            </Reveal>

            <Reveal variant="right" delay={140}>
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Scanner
                </p>
                <h2 className="mt-2 font-display text-2xl text-navy">{contactQr.title}</h2>
                <p className="mt-2 text-sm text-muted">{contactQr.body}</p>
                <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                  <div className="rounded-xl border border-line bg-foam p-3">
                    <Image
                      src={qrSrc}
                      alt="WhatsApp QR code for SeaPath counsellor"
                      width={160}
                      height={160}
                      unoptimized
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-navy">WhatsApp quick connect</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Scan with your phone camera, or tap the button below.
                    </p>
                    <div className="mt-4">
                      <ButtonLink href={waUrl} external className="!py-2 text-xs">
                        Open WhatsApp
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map embed */}
      <section className="bg-white pb-4 pt-2">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title={`Map — ${fullAddress}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
                className="h-64 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stay connected */}
      <StayConnected />
    </>
  );
}

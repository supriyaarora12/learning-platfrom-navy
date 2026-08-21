import Image from "next/image";
import Link from "next/link";
import { freeToolNav, freeToolsPage } from "@/content/free-tools";
import { site } from "@/content/site";
import { BmiTool } from "@/components/free-tools/BmiTool";
import { ColourVisionTool } from "@/components/free-tools/ColourVisionTool";
import { EligibilityTool } from "@/components/free-tools/EligibilityTool";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

function ToolIcon({ id }: { id: string }) {
  const cls = "h-5 w-5";
  if (id === "eligibility") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M9 11l2.2 2.2L16 8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (id === "bmi") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 18h14M7 18V9.5a2 2 0 0 1 2-2h1.2M17 18V8a2 2 0 0 0-2-2h-1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FreeToolsPageView() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4.25rem)] overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <Container className="relative flex w-full flex-col justify-center py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <nav className="hero-enter text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">Free Tools</span>
              </nav>

              <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {freeToolsPage.eyebrow}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                {freeToolsPage.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                {freeToolsPage.subtitle}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#eligibility">Check eligibility</ButtonLink>
                <ButtonLink href={site.primaryCta.href} variant="secondary">
                  {site.primaryCta.label}
                </ButtonLink>
              </div>
            </div>

            <div className="hero-panel-enter relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
              <div className="relative mx-auto aspect-square w-[min(100%,420px)]">
                <Image
                  src="/assets/free-tools-hero-doodle.png"
                  alt="Free Merchant Navy tools — eligibility, BMI, and colour vision checks"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                  sizes="420px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-[#f3f6fa] py-12">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Choose a tool
                </p>
                <h2 className="mt-2 font-display text-2xl text-navy sm:text-3xl">
                  Three checks. One minute each.
                </h2>
                <p className="mt-1 max-w-lg text-sm text-muted">
                  Pick where you want clarity first — academics, fitness, or colour vision.
                </p>
              </div>
              <p className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-navy ring-1 ring-line">
                No sign-up required
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {freeToolNav.map((tool, i) => (
              <Reveal key={tool.id} delay={i * 80}>
                <PointerCard
                  as="a"
                  href={`#${tool.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-[0_16px_36px_-28px_rgba(11,31,58,0.35)] hover:border-navy/25"
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition group-hover:bg-gold/20"
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold-soft transition group-hover:bg-gold group-hover:text-navy-deep">
                      <ToolIcon id={tool.id} />
                    </span>
                    <span className="font-display text-2xl text-navy/15 transition group-hover:text-gold/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-display text-xl text-navy">{tool.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{tool.body}</p>
                  <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    {tool.cta}
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-1 text-gold"
                    >
                      →
                    </span>
                  </span>
                </PointerCard>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">{freeToolsPage.disclaimer}</p>
        </Container>
      </section>

      <section id="eligibility" className="section-pad scroll-mt-24 bg-foam">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="01"
              title="Eligibility Calculator"
              subtitle="Age, stream, and marks against common Merchant Navy entry pathways."
            />
          </Reveal>
          <div className="mt-10">
            <EligibilityTool />
          </div>
        </Container>
      </section>

      <section id="bmi" className="section-pad scroll-mt-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="02"
              title="BMI Calculator"
              subtitle="A quick look at Body Mass Index against a typical fitness band."
            />
          </Reveal>
          <div className="mt-10">
            <BmiTool />
          </div>
        </Container>
      </section>

      <section id="colour-vision" className="section-pad scroll-mt-24 bg-mist/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="03"
              title="Colour Vision Test"
              subtitle="Short educational screening — confirm with an approved medical later."
            />
          </Reveal>
          <div className="mt-10">
            <ColourVisionTool />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-navy-deep py-12 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Ready for the next step?</h2>
            <p className="mt-2 text-sm text-white/65">
              Tools are free. Courses and LMS unlock after you enrol.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/courses">Browse courses</ButtonLink>
            <ButtonLink href={site.secondaryCta.href} variant="secondary" external>
              WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

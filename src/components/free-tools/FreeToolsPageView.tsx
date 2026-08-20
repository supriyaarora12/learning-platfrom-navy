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

export function FreeToolsPageView() {
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
            <span className="text-white/90">Free Tools</span>
          </nav>

          <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            {freeToolsPage.eyebrow}
          </p>
          <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            {freeToolsPage.title}
          </h1>
          <p className="hero-enter hero-enter-delay-3 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {freeToolsPage.subtitle}
          </p>
          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#eligibility">Check eligibility</ButtonLink>
            <ButtonLink href={site.primaryCta.href} variant="secondary">
              {site.primaryCta.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-10">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Choose a tool
            </p>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {freeToolNav.map((tool, i) => (
              <Reveal key={tool.id} delay={i * 80}>
                <PointerCard
                  as="a"
                  href={`#${tool.id}`}
                  className="block h-full rounded-2xl border border-line bg-foam/60 p-5 hover:border-navy/25 hover:bg-foam"
                >
                  <h2 className="font-display text-xl text-navy">{tool.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tool.body}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">
                    {tool.cta}
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

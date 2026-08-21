import Image from "next/image";
import Link from "next/link";
import { howItWorksPage, lmsStrip } from "@/content/how-it-works";
import { site } from "@/content/site";
import { BeyondCourses } from "@/components/how-it-works/BeyondCourses";
import { HowFaq } from "@/components/how-it-works/HowFaq";
import { JourneyPath } from "@/components/how-it-works/JourneyPath";
import { RecruitmentProcess } from "@/components/how-it-works/RecruitmentProcess";
import { WhatWeOffer } from "@/components/how-it-works/WhatWeOffer";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorksPageView() {
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
                <span className="text-white/90">How It Works</span>
              </nav>

              <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {howItWorksPage.eyebrow}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                {howItWorksPage.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                {howItWorksPage.subtitle}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
                <ButtonLink href="/courses" variant="secondary">
                  Browse courses
                </ButtonLink>
              </div>

              <ol className="hero-enter hero-enter-delay-5 mt-10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
                {["Enquire", "Enrol", "Learn", "Practice", "Guidance"].map((label, i) => (
                  <li key={label} className="flex items-center gap-2">
                    {i > 0 ? <span className="text-gold/70">→</span> : null}
                    <span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                      {label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="hero-panel-enter relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
              <div className="relative mx-auto aspect-square w-[min(100%,420px)]">
                <Image
                  src="/assets/how-it-works-hero-doodle.png"
                  alt="Merchant Navy path — enquire, enrol, learn, practice, guidance"
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

      {/* What we offer — wavy 7-step journey */}
      <WhatWeOffer />

      {/* Full journey path timeline */}
      <JourneyPath />

      {/* Our 3 Steps — Recruitment / Selection process */}
      <RecruitmentProcess />

      {/* Beyond Courses */}
      <BeyondCourses />

      {/* LMS strip */}
      <section className="bg-navy py-14 text-white">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal variant="left">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{lmsStrip.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">{lmsStrip.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {lmsStrip.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-soft ring-1 ring-white/10"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                After enrolment
              </p>
              <p className="mt-3 font-display text-2xl">Login → LMS dashboard</p>
              <p className="mt-2 text-sm text-white/65">
                Classes, recordings, mocks, and progress — behind your student login.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/login">Go to Login</ButtonLink>
                <ButtonLink href="/courses" variant="secondary">
                  Pick a course
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="FAQ"
              title="Quick answers"
              subtitle="Common questions before you enrol."
            />
          </Reveal>
          <Reveal variant="right" delay={80}>
            <HowFaq />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-navy-deep py-12 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Ready to start your journey?</h2>
            <p className="mt-2 text-sm text-white/65">
              Enquire, try free tools, or talk on WhatsApp — we&apos;ll guide the next step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
            <ButtonLink href={site.secondaryCta.href} variant="secondary" external>
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/free-tools" variant="secondary">
              Free tools
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

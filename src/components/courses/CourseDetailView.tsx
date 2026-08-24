import Link from "next/link";
import type { Course } from "@/content/courses";
import { formatInr } from "@/content/courses";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CourseFaq } from "@/components/courses/CourseFaq";
import { SyllabusAccordion } from "@/components/courses/SyllabusAccordion";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";
import { StatsCarousel, type StatItem } from "@/components/ui/StatsCarousel";

function courseDetailStats(course: Course): StatItem[] {
  return [
    {
      value: course.learningHours,
      label: "Learning",
      body: `${course.mode} — structured hours with live classes and LMS recordings.`,
    },
    {
      value: course.mocks,
      label: "Exam practice",
      body: "Topic tests and full-length mocks with performance analytics.",
    },
    {
      value: course.duration,
      label: "Duration",
      body: `Paced for ${course.level} aspirants from enrolment to exam readiness.`,
    },
    {
      value: `${course.rating}★`,
      label: "Learner rating",
      body: `${course.reviews.toLocaleString("en-IN")}+ learners on ${course.shortTitle}.`,
    },
  ];
}

export function CourseDetailView({ course }: { course: Course }) {
  const enquireHref = `/contact?course=${encodeURIComponent(course.shortTitle)}`;

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <div className="container-page relative flex flex-1 flex-col justify-center py-12 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <nav className="hero-enter text-sm text-white/60">
                <Link href="/courses" className="hover:text-white">
                  Courses
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">{course.shortTitle}</span>
              </nav>
              <p className="hero-enter hero-enter-delay-1 mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {course.tag} · {course.category}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 font-display text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {course.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                {course.description}
              </p>
            </div>

            <aside className="hero-panel-enter w-full rounded-2xl bg-white p-6 text-ink shadow-[0_30px_70px_-40px_rgba(0,0,0,0.55)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Enrolment
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <p className="font-display text-3xl text-navy">{formatInr(course.price)}</p>
                {course.originalPrice ? (
                  <p className="text-sm text-muted line-through">
                    {formatInr(course.originalPrice)}
                  </p>
                ) : null}
              </div>
              <ul className="mt-5 space-y-2">
                {course.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-2">
                <ButtonLink href={enquireHref} className="w-full">
                  Enquire / Start Free Trial
                </ButtonLink>
                <ButtonLink
                  href={site.secondaryCta.href}
                  variant="ghost"
                  external
                  className="w-full"
                >
                  WhatsApp counsellor
                </ButtonLink>
              </div>
              <p className="mt-3 text-center text-xs text-muted">
                Access learning on LMS after enrolment confirmation.
              </p>
            </aside>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay-4 relative mt-4 sm:mt-6">
          <StatsCarousel items={courseDetailStats(course)} />
        </div>
      </section>

      <section className="section-pad bg-foam">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
                Course overview
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-navy">What you&apos;ll get:</h3>
                  <ul className="mt-5 space-y-4">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckBadge />
                        <span className="pt-0.5 text-sm leading-relaxed text-navy/80 sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">Who this course is for:</h3>
                  <ul className="mt-5 space-y-4">
                    {course.forWhom.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckBadge />
                        <span className="pt-0.5 text-sm leading-relaxed text-navy/80 sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-navy">Syllabus</h2>
              <div className="mt-6">
                <SyllabusAccordion syllabus={course.syllabus} />
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-line bg-white px-5 py-8 sm:px-7 sm:py-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Outcomes
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-navy sm:text-4xl">
                    What you&apos;ll achieve
                  </h2>
                  <div className="mt-3 h-0.5 w-14 rounded-full bg-gold" aria-hidden />
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                    Clear outcomes designed to build your confidence and prepare you for success.
                  </p>
                </div>

                {/* Wave + nodes (dots drawn in SVG so they stay on the path) */}
                <div className="mt-10 hidden sm:block">
                  <div className="relative h-28">
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      viewBox="0 0 900 112"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      {/* Path through node points: (150,88) (450,42) (750,20) */}
                      <path
                        d="M20 90 C 70 96, 110 90, 150 88 S 300 96, 450 42 S 620 16, 750 20 S 840 24, 880 18"
                        stroke="#c9a227"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                    </svg>
                    {/* CSS circles (not SVG) so stretch doesn't turn them oval */}
                    {(
                      [
                        { left: `${(150 / 900) * 100}%`, top: `${(88 / 112) * 100}%` },
                        { left: `${(450 / 900) * 100}%`, top: `${(42 / 112) * 100}%` },
                        { left: `${(750 / 900) * 100}%`, top: `${(20 / 112) * 100}%` },
                      ] as const
                    ).map((spot, i) => (
                      <span
                        key={i}
                        className="absolute size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-[3px] ring-white shadow-[0_0_0_10px_rgba(201,162,39,0.18)]"
                        style={{ left: spot.left, top: spot.top }}
                      />
                    ))}
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-6">
                    {course.outcomes.slice(0, 3).map((item, i) => (
                      <div key={item} className="relative pt-2">
                        <span
                          className="pointer-events-none absolute -top-10 left-0 font-display text-5xl leading-none text-navy/[0.08] sm:text-6xl"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="relative flex items-start gap-2.5">
                          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy ring-1 ring-line">
                            <OutcomeIcon index={i} />
                          </span>
                          <span className="mt-1 h-7 w-px shrink-0 bg-gold/70" aria-hidden />
                          <div>
                            <p className="text-sm font-semibold leading-snug text-navy">{item}</p>
                            <p className="mt-1.5 text-xs leading-relaxed text-muted">
                              Built into this program through live practice and LMS tracking.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile: stacked steps */}
                <ol className="mt-8 space-y-4 sm:hidden">
                  {course.outcomes.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="relative mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy ring-1 ring-line">
                        <OutcomeIcon index={i} />
                      </span>
                      <span className="h-8 w-px shrink-0 bg-gold/70" aria-hidden />
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-navy">{item}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-navy">Course FAQs</h2>
              <div className="mt-6">
                <CourseFaq faqs={course.faqs} />
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal variant="right">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,31,58,0.4)]">
                <p className="font-display text-xl text-navy">Not sure which batch?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Talk to a counsellor — we&apos;ll map your year, eligibility, and exam window to the
                  right program.
                </p>
                <div className="mt-5 grid gap-2">
                  <ButtonLink href={enquireHref}>Get counselling</ButtonLink>
                  <ButtonLink href="/free-tools" variant="ghost">
                    Try free tools first
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-deep py-10 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl">{course.shortTitle}</p>
            <p className="mt-1 text-sm text-white/65">
              {formatInr(course.price)} · {course.duration}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={enquireHref}>{site.primaryCta.label}</ButtonLink>
            <ButtonLink href={site.secondaryCta.href} variant="secondary" external>
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckBadge() {
  return (
    <span
      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-navy/8 text-navy"
      aria-hidden
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function OutcomeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 5H5a2 2 0 0 0 2 4M17 5h2a2 2 0 0 1-2 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19V9M10 19V5M16 19v-7M20 19V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 7l3-3 3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

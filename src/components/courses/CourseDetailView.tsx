import Link from "next/link";
import type { Course } from "@/content/courses";
import { formatInr } from "@/content/courses";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CourseFaq } from "@/components/courses/CourseFaq";
import { SyllabusAccordion } from "@/components/courses/SyllabusAccordion";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

export function CourseDetailView({ course }: { course: Course }) {
  const enquireHref = `/contact?course=${encodeURIComponent(course.shortTitle)}`;

  return (
    <>
      <section className="relative overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <div className="container-page relative py-14 lg:py-16">
          <nav className="hero-enter text-sm text-white/60">
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{course.shortTitle}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="hero-enter hero-enter-delay-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {course.tag} · {course.category}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {course.description}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <Meta label="Duration" value={course.duration} />
                <Meta label="Mode" value={course.mode} />
                <Meta label="Level" value={course.level} />
              </div>
            </div>

            <aside className="hero-panel-enter rounded-2xl bg-white p-6 text-ink shadow-[0_30px_70px_-40px_rgba(0,0,0,0.55)]">
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
      </section>

      <section className="section-pad bg-foam">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-3xl text-navy">What you&apos;ll get</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {course.includes.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-navy">Syllabus</h2>
              <div className="mt-6">
                <SyllabusAccordion syllabus={course.syllabus} />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-navy">Who this is for</h2>
              <ul className="mt-6 space-y-3">
                {course.forWhom.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-navy">Outcomes</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {course.outcomes.map((item, i) => (
                  <article
                    key={item}
                    className="rounded-xl border border-line bg-white p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.14em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm font-medium text-navy">{item}</p>
                  </article>
                ))}
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

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
      <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">{label}</p>
      <p className="mt-0.5 text-white">{value}</p>
    </div>
  );
}

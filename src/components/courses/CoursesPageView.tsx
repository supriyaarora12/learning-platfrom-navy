import Image from "next/image";
import Link from "next/link";
import { coursesPage } from "@/content/courses";
import { site } from "@/content/site";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

const heroStats = [
  ["6", "Programs"],
  ["Live + LMS", "Learning mode"],
  ["Mocks", "Exam practice"],
  ["Mentor", "Guidance"],
] as const;

export function CoursesPageView() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4.25rem)] overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />

        <div className="container-page relative flex w-full flex-col justify-center py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <nav className="hero-enter text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">All Courses</span>
              </nav>

              <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {coursesPage.eyebrow}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                {coursesPage.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                {coursesPage.subtitle}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#catalogue">{site.primaryCta.label}</ButtonLink>
                <ButtonLink href="/free-tools" variant="secondary">
                  Try free tools
                </ButtonLink>
              </div>

              <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map(([value, label], i) => (
                  <div
                    key={label}
                    className="stat-pop rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10"
                    style={{ animationDelay: `${0.55 + i * 0.08}s` }}
                  >
                    <dt className="font-display text-lg text-gold-soft">{value}</dt>
                    <dd className="mt-1 text-xs text-white/60">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero-panel-enter relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
              <div className="relative mx-auto aspect-square w-[min(100%,420px)]">
                {/* unoptimized: Next image optimizer was flattening PNG alpha to black */}
                <Image
                  src="/assets/courses-hero-doodle-v2.png"
                  alt="Merchant Navy courses — learn with live classes, books, and LMS"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                  sizes="420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogue" className="section-pad bg-foam scroll-mt-24">
        <div className="container-page">
          <CourseCatalog />
        </div>
      </section>

      <section className="border-t border-line bg-white py-12">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="grid gap-6 rounded-2xl bg-navy px-6 py-8 text-white sm:grid-cols-[1.4fr_auto] sm:items-center sm:px-10">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">Learn on LMS after you enrol</h2>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Live classes, recordings, mocks, and progress tracking — enquire here, learn inside
                  the private LMS.
                </p>
              </div>
              <ButtonLink href="/login" variant="primary">
                Go to Login
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

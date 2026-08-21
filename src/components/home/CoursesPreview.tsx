import Image from "next/image";
import Link from "next/link";
import { coursesPreview } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function CoursesPreview() {
  return (
    <section className="bg-foam pb-4 pt-12 sm:pt-14 lg:pt-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Courses"
              title={coursesPreview.title}
              subtitle={coursesPreview.subtitle}
            />
          </Reveal>
          <Reveal delay={120}>
            <ButtonLink href="/courses" variant="ghost" className="shrink-0 self-start sm:self-auto">
              View all courses
            </ButtonLink>
          </Reveal>
        </div>

        <div className="relative">
          {coursesPreview.items.map((course, i) => {
            // Tiny step so stacked cards stay tight with almost no gap
            const stickyTop = `calc(4.5rem + ${i * 0.45}rem)`;
            const perMonth = Math.round(course.price / 12);

            return (
              <div
                key={course.title}
                className="relative -mb-28 h-[58vh] min-h-[340px] last:mb-0 sm:-mb-32 sm:h-[52vh] sm:min-h-[320px]"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className="sticky w-full overflow-visible rounded-[1.5rem] bg-navy shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
                  style={{ top: stickyTop }}
                >
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                    viewBox="0 0 900 280"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M-40 200 C 140 70, 280 230, 460 130 S 740 30, 960 170"
                      fill="none"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="28"
                      strokeLinecap="round"
                    />
                    <path
                      d="M-20 240 C 180 120, 320 250, 520 170 S 800 80, 980 210"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="relative flex min-h-[240px] items-stretch p-3 sm:min-h-[250px] sm:p-4 lg:p-5">
                    {/* White copy panel */}
                    <div className="relative z-0 flex w-full flex-col justify-between rounded-[1.15rem] bg-white px-5 py-5 pr-[42%] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)] sm:w-[58%] sm:pr-6 sm:py-6 lg:px-7">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                          {course.tag}
                        </p>
                        <h3 className="mt-1.5 font-display text-xl tracking-tight text-navy sm:text-2xl lg:text-[1.7rem]">
                          {course.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                          {course.body}
                        </p>
                      </div>
                      <Link
                        href={course.href}
                        className="mt-5 inline-flex self-start text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-mid"
                      >
                        {course.cta}
                      </Link>
                    </div>

                    {/* Right: image card + price card overlapping (Coursera-style) */}
                    <div className="pointer-events-none absolute inset-y-2 right-2 z-10 flex w-[52%] items-center justify-center sm:inset-y-3 sm:right-3 sm:w-[48%] lg:right-4">
                      <div className="relative h-[200px] w-full max-w-[280px] sm:h-[210px] sm:max-w-[300px]">
                        {/* Back: image / browser card */}
                        <div className="absolute right-0 top-2 h-[170px] w-[68%] overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_-18px_rgba(0,0,0,0.5)] ring-1 ring-black/5 sm:h-[180px]">
                          <div className="absolute right-2.5 top-2.5 z-[1] flex gap-1">
                            <span className="size-1.5 rounded-full bg-[#ff5f57]" />
                            <span className="size-1.5 rounded-full bg-[#febc2e]" />
                            <span className="size-1.5 rounded-full bg-[#28c840]" />
                          </div>
                          <Image
                            src={course.image}
                            alt={course.imageAlt}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>

                        {/* Front: price card, tilted */}
                        <div className="absolute bottom-2 left-0 z-[2] w-[58%] -rotate-[7deg] rounded-2xl bg-[#0056D2] px-3.5 py-3.5 text-white shadow-[0_18px_36px_-14px_rgba(0,0,0,0.55)] sm:px-4 sm:py-4">
                          <div className="mb-2 flex justify-end gap-1">
                            <span className="size-1.5 rounded-full bg-white/35" />
                            <span className="size-1.5 rounded-full bg-white/35" />
                            <span className="size-1.5 rounded-full bg-white/35" />
                          </div>
                          {course.originalPrice ? (
                            <p className="text-xs text-white/70 line-through">
                              {formatInr(course.originalPrice)}
                            </p>
                          ) : null}
                          <p className="font-display text-2xl leading-none tracking-tight sm:text-[1.75rem]">
                            {formatInr(course.price)}
                          </p>
                          <p className="mt-1 text-[11px] text-white/75">/year</p>
                        </div>

                        {/* Gold monthly callout */}
                        <div className="absolute bottom-0 right-[8%] z-[3] rotate-[3deg] rounded-full border-2 border-navy-deep bg-gold px-2.5 py-1 text-[10px] font-bold text-navy-deep shadow-sm sm:text-[11px]">
                          Effectively {formatInr(perMonth)}/mo
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div className="h-32 sm:h-40" aria-hidden />
      </Container>
    </section>
  );
}

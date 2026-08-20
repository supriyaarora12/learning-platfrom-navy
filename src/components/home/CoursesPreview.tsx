import Link from "next/link";
import { coursesPreview } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function CoursesPreview() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {coursesPreview.items.map((course, i) => (
            <Reveal key={course.title} delay={i * 90}>
              <PointerCard
                as="a"
                href={course.href}
                className="group block rounded-xl border border-line bg-foam/50 p-6 hover:border-navy/30 hover:bg-foam hover:shadow-[0_24px_50px_-28px_rgba(11,31,58,0.35)]"
              >
                <span className="relative z-[1] text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {course.tag}
                </span>
                <h3 className="relative z-[1] mt-3 font-display text-2xl text-navy group-hover:text-navy-mid">
                  {course.title}
                </h3>
                <p className="relative z-[1] mt-3 text-sm leading-relaxed text-muted">{course.body}</p>
                <span className="relative z-[1] mt-6 inline-block text-sm font-semibold text-navy transition group-hover:translate-x-1">
                  Learn more →
                </span>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

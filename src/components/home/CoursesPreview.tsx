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
    <section className="bg-foam section-pad">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {coursesPreview.items.map((course, i) => {
            const perMonth = Math.round(course.price / 12);
            return (
              <Reveal key={course.title} delay={i * 80}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_14px_36px_-24px_rgba(11,31,58,0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold shadow-sm">
                      {course.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="font-display text-xl tracking-tight text-navy">{course.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{course.body}</p>

                    <ul className="mt-3 space-y-1.5">
                      {course.highlights.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-navy/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-end justify-between gap-3 border-t border-line pt-3">
                      <div>
                        {course.originalPrice ? (
                          <p className="text-xs text-muted line-through">
                            {formatInr(course.originalPrice)}
                          </p>
                        ) : null}
                        <p className="font-display text-lg text-navy">{formatInr(course.price)}</p>
                        <p className="text-[11px] text-muted">~{formatInr(perMonth)}/mo</p>
                      </div>
                      <Link
                        href={course.href}
                        className="shrink-0 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-mid"
                      >
                        {course.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

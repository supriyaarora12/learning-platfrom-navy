import Link from "next/link";
import type { Course } from "@/content/courses";
import { formatInr } from "@/content/courses";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function CourseCard({
  course,
  index = 0,
  animate = true,
}: {
  course: Course;
  index?: number;
  animate?: boolean;
}) {
  const card = (
    <PointerCard
      as="article"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_40px_-32px_rgba(11,31,58,0.4)] hover:border-navy/25 hover:shadow-[0_28px_60px_-34px_rgba(11,31,58,0.45)]"
    >
      <div className="border-b border-line bg-foam/80 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold ring-1 ring-line">
            {course.tag}
          </span>
          <p className="text-right text-xs text-muted">
            <span className="font-semibold text-navy">{course.rating.toFixed(1)}</span>
            <span className="text-gold"> ★</span>
            <span className="mt-0.5 block text-[11px]">
              {course.reviews.toLocaleString("en-IN")}+ learners
            </span>
          </p>
        </div>
        <h3 className="mt-3 font-display text-xl tracking-tight text-navy group-hover:text-navy-mid sm:text-2xl">
          <Link href={`/courses/${course.slug}`}>{course.shortTitle}</Link>
        </h3>
        <p className="mt-1 text-xs text-muted">{course.mode}</p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-muted">{course.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-md bg-foam px-2 py-1 text-[11px] font-medium text-navy/80"
            >
              {badge}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center text-xs">
          <div>
            <dt className="text-navy/40">Learning</dt>
            <dd className="mt-1 font-semibold text-navy">{course.learningHours}</dd>
          </div>
          <div>
            <dt className="text-navy/40">Practice</dt>
            <dd className="mt-1 font-semibold text-navy">{course.mocks}</dd>
          </div>
          <div>
            <dt className="text-navy/40">Duration</dt>
            <dd className="mt-1 font-semibold text-navy">{course.duration}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            {course.originalPrice ? (
              <p className="text-xs text-muted line-through">{formatInr(course.originalPrice)}</p>
            ) : null}
            <p className="font-display text-2xl text-navy">{formatInr(course.price)}</p>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-mid"
          >
            View more
          </Link>
        </div>
      </div>
    </PointerCard>
  );

  if (!animate) return card;

  return (
    <Reveal delay={index * 80} className="h-full">
      {card}
    </Reveal>
  );
}

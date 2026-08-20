"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  courseCategories,
  courses,
  coursesPage,
  type CourseCategory,
} from "@/content/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseQueryCard } from "@/components/courses/CourseQueryCard";
import { Reveal } from "@/components/ui/Reveal";

export function CourseCatalog() {
  const [active, setActive] = useState<CourseCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const catOk = active === "All" || c.category === active;
      if (!catOk) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.shortTitle.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  const featured = courses.filter((c) => c.featured);

  return (
    <div className="space-y-14">
      {/* Trending — Croma-style quick jumps */}
      <Reveal>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {coursesPage.trendingLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {coursesPage.trending.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-line transition hover:bg-navy hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Discover categories */}
      <div>
        <Reveal>
          <h3 className="font-display text-2xl text-navy">Discover top categories</h3>
          <p className="mt-1 text-sm text-muted">Jump into the track that matches your goal.</p>
        </Reveal>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coursesPage.categories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 70}>
              <button
                type="button"
                onClick={() => {
                  setActive(cat.key);
                  document.getElementById("all-courses")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                  active === cat.key
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white hover:border-navy/30"
                }`}
              >
                <p className={`font-display text-lg ${active === cat.key ? "text-white" : "text-navy"}`}>
                  {cat.title}
                </p>
                <p className={`mt-1 text-xs ${active === cat.key ? "text-white/70" : "text-muted"}`}>
                  {cat.body}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Master / featured programmes */}
      <div>
        <Reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Master programmes
              </p>
              <h3 className="mt-2 font-display text-2xl text-navy sm:text-3xl">
                High-impact career tracks
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActive("All")}
              className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
            >
              View full catalogue
            </button>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>
      </div>

      {/* All courses + query sidebar */}
      <div id="all-courses" className="scroll-mt-28">
        <Reveal>
          <h3 className="font-display text-2xl text-navy sm:text-3xl">All courses</h3>
          <p className="mt-1 text-sm text-muted">
            Filter, search, or ask a counsellor — then open a course for full details.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {courseCategories.map((cat) => {
                  const on = active === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActive(cat)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        on
                          ? "bg-navy text-white"
                          : "bg-white text-navy ring-1 ring-line hover:bg-foam"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-navy sm:ml-auto sm:max-w-xs"
                aria-label="Search courses"
              />
            </div>

            <p className="mt-5 text-sm text-muted">
              Showing <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "course" : "courses"}
              {active !== "All" ? ` in ${active}` : ""}
              {query.trim() ? ` for “${query.trim()}”` : ""}
            </p>

            {filtered.length === 0 ? (
              <p className="mt-8 rounded-xl border border-dashed border-line bg-white px-6 py-10 text-center text-sm text-muted">
                No courses match. Try another filter or{" "}
                <Link href="/contact" className="font-semibold text-navy underline">
                  talk to us
                </Link>
                .
              </p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {filtered.map((course, i) => (
                  <CourseCard key={course.slug} course={course} index={i} />
                ))}
              </div>
            )}
          </div>

          <CourseQueryCard />
        </div>
      </div>
    </div>
  );
}

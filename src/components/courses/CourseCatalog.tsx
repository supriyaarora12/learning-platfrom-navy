"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  courses,
  coursesPage,
  type CourseCategory,
} from "@/content/courses";
import { site } from "@/content/site";
import { CourseCard } from "@/components/courses/CourseCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
  // Duplicate for seamless vertical loop
  const featuredLoop = [...featured, ...featured];

  const discoverCats: { key: CourseCategory; title: string; body: string }[] = [
    { key: "All", title: "All", body: "Full catalogue" },
    ...coursesPage.categories.map((c) => ({
      key: c.key,
      title: c.title.replace(" Prep", ""),
      body: c.body,
    })),
  ];

  return (
    <div className="space-y-14">
      {/* Master programmes — unchanged structure */}
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
              onClick={() => {
                setActive("All");
                document.getElementById("all-courses")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
            >
              View full catalogue
            </button>
          </div>
        </Reveal>

        <div className="relative mt-6 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-foam to-transparent sm:w-14"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-foam to-transparent sm:w-14"
            aria-hidden
          />

          <div
            className="marquee-left flex w-max gap-4 py-2"
            style={{ animationDuration: "32s" }}
          >
            {featuredLoop.map((course, i) => (
              <div
                key={`${course.slug}-${i}`}
                className="w-[min(320px,78vw)] shrink-0 sm:w-[340px]"
              >
                <CourseCard course={course} index={0} animate={false} />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-muted">
          Hover to pause · click a card to open details
        </p>
      </div>

      {/* All courses — trendy filter bar + cards + counsellor */}
      <div id="all-courses" className="scroll-mt-28">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-navy text-white shadow-[0_30px_70px_-40px_rgba(11,31,58,0.65)]">
            <div className="relative px-5 py-6 sm:px-8 sm:py-7">
              <div
                className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-gold/15 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-24 left-1/3 size-48 rounded-full bg-white/10 blur-3xl"
                aria-hidden
              />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    Catalogue
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
                    All courses
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    Search or ask a counsellor — then open a course for full details.
                  </p>
                </div>

                <label className="relative w-full lg:max-w-sm">
                  <span className="sr-only">Search courses</span>
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40">
                    <SearchIcon />
                  </span>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search IMUCET, DNS, crash…"
                    className="w-full rounded-xl border-0 bg-white py-3 pl-10 pr-4 text-sm text-navy outline-none ring-2 ring-transparent placeholder:text-navy/40 focus:ring-gold/60"
                  />
                </label>
              </div>

              <div className="relative mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {discoverCats.map((cat) => {
                  const on = active === cat.key;
                  const count =
                    cat.key === "All"
                      ? courses.length
                      : courses.filter((c) => c.category === cat.key).length;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setActive(cat.key)}
                      title={cat.body}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        on
                          ? "bg-gold text-navy-deep shadow-[0_10px_24px_-12px_rgba(201,162,39,0.8)]"
                          : "bg-white/10 text-white/85 ring-1 ring-white/15 hover:bg-white/15"
                      }`}
                    >
                      {cat.title}
                      <span className={`ml-1.5 text-xs ${on ? "text-navy-deep/60" : "text-white/45"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted">
                Showing{" "}
                <span className="font-semibold text-navy">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "course" : "courses"}
                {active !== "All" ? (
                  <>
                    {" "}
                    in <span className="font-semibold text-navy">{active}</span>
                  </>
                ) : null}
                {query.trim() ? ` for “${query.trim()}”` : ""}
              </p>
              {active !== "All" || query.trim() ? (
                <button
                  type="button"
                  onClick={() => {
                    setActive("All");
                    setQuery("");
                  }}
                  className="text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
                >
                  Clear filters
                </button>
              ) : null}
            </div>

            {filtered.length === 0 ? (
              <p className="mt-8 rounded-2xl border border-dashed border-line bg-white px-6 py-12 text-center text-sm text-muted">
                No courses match. Try another filter or{" "}
                <Link href="/contact" className="font-semibold text-navy underline">
                  talk to us
                </Link>
                .
              </p>
            ) : (
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {filtered.map((course, i) => (
                  <CourseCard key={course.slug} course={course} index={i} />
                ))}
              </div>
            )}
          </div>

          <Reveal variant="right" delay={80} className="lg:sticky lg:top-28">
            <CounsellorRail />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function CounsellorRail() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: local confirm until CRM/API is wired
    setSent(true);
  }

  return (
    <aside className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_22px_50px_-34px_rgba(11,31,58,0.45)]">
      <div className="bg-gradient-to-br from-navy to-navy-mid px-5 py-5 text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
          Drop your query
        </p>
        <h4 className="mt-2 font-display text-2xl tracking-tight">Need a course match?</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Tell us your year and goal — we&apos;ll recommend the right batch.
        </p>
      </div>

      <div className="p-5">
        {sent ? (
          <p className="rounded-xl bg-foam px-4 py-8 text-center text-sm text-navy">
            Thanks — a counsellor will reach out shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-3">
            <input
              name="name"
              required
              placeholder="Full name"
              className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
            />
            <select
              name="goal"
              className="w-full rounded-xl border border-line bg-foam px-3 py-2.5 text-sm outline-none focus:border-navy"
              defaultValue="IMUCET"
            >
              <option value="IMUCET">IMUCET preparation</option>
              <option value="Sponsorship">DNS / Sponsorship</option>
              <option value="Foundation">Foundation (Class 11–12)</option>
              <option value="Crash">Crash revision</option>
              <option value="Not sure">Not sure yet</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
            >
              Request callback
            </button>
          </form>
        )}

        <div className="mt-4">
          <ButtonLink href={site.secondaryCta.href} variant="ghost" className="w-full" external>
            WhatsApp us
          </ButtonLink>
        </div>
      </div>
    </aside>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  blogCategories,
  blogPosts,
  getCategoryCounts,
  type BlogCategory,
} from "@/content/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogCatalog() {
  const [active, setActive] = useState<BlogCategory>("All");
  const [query, setQuery] = useState("");
  const counts = getCategoryCounts();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const catOk = active === "All" || p.category === active;
      if (!catOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  const featured = blogPosts.filter((p) => p.featured).slice(0, 2);
  const popular = blogPosts.filter((p) => p.popular).slice(0, 5);

  return (
    <div className="space-y-12">
      {/* Interest categories — Croma style chips */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          What are you interested in?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {blogCategories.map((cat) => {
            const on = active === cat;
            const count = cat === "All" ? blogPosts.length : counts[cat] ?? 0;
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
                <span className={`ml-1.5 text-xs ${on ? "text-white/70" : "text-muted"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured */}
      {active === "All" && !query.trim() ? (
        <div>
          <h2 className="font-display text-2xl text-navy sm:text-3xl">Featured reads</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {featured.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} featured />
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">
              {active === "All" ? "All posts" : active}
            </h2>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-navy sm:max-w-xs"
              aria-label="Search blogs"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Showing <span className="font-semibold text-navy">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "post" : "posts"}
          </p>

          {filtered.length === 0 ? (
            <p className="mt-8 rounded-xl border border-dashed border-line bg-white px-6 py-10 text-center text-sm text-muted">
              No posts match. Try another category or{" "}
              <Link href="/contact" className="font-semibold text-navy underline">
                ask a counsellor
              </Link>
              .
            </p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Popular posts
            </p>
            <ul className="mt-4 space-y-4">
              {popular.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="text-sm font-semibold text-navy group-hover:text-navy-mid">
                      {post.title}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">
                      {post.date} · {post.views} views
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Categories
            </p>
            <ul className="mt-4 space-y-2">
              {Object.entries(counts).map(([cat, count]) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setActive(cat as BlogCategory)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm text-navy hover:bg-foam"
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-muted">{count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-navy p-5 text-white">
            <p className="font-display text-xl">Need a study plan?</p>
            <p className="mt-2 text-sm text-white/70">
              Talk to a counsellor or start with free eligibility tools.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                className="rounded-md bg-gold px-4 py-2.5 text-center text-sm font-semibold text-navy-deep"
              >
                Enquire now
              </Link>
              <Link
                href="/free-tools"
                className="rounded-md bg-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white ring-1 ring-white/20"
              >
                Free tools
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

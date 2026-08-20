import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function BlogCard({
  post,
  index = 0,
  featured = false,
}: {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <PointerCard
        as="article"
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_-28px_rgba(11,31,58,0.35)] hover:border-navy/25 hover:shadow-[0_28px_60px_-34px_rgba(11,31,58,0.45)] ${
          featured ? "sm:flex-row" : ""
        }`}
      >
        <Link
          href={`/blog/${post.slug}`}
          className={`relative z-[1] block overflow-hidden bg-foam ${
            featured ? "sm:w-[42%] sm:min-h-full" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 640px) 100vw, 42vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        </Link>
        <div className="relative z-[1] flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-foam px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold">
              {post.category}
            </span>
            <span className="text-[11px] text-muted">{post.views} views</span>
          </div>
          <h3
            className={`mt-3 font-display tracking-tight text-navy group-hover:text-navy-mid ${featured ? "text-2xl" : "text-xl"}`}
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-xs text-muted">
            <span>
              {post.author} · {post.date}
            </span>
            <span>{post.readMins} min read</span>
          </div>
        </div>
      </PointerCard>
    </Reveal>
  );
}

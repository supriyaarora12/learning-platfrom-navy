import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

export function BlogPostView({ post }: { post: BlogPost }) {
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <Container className="relative py-12 lg:py-14">
          <nav className="hero-enter text-sm text-white/55">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{post.category}</span>
          </nav>
          <p className="hero-enter hero-enter-delay-1 mt-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-soft ring-1 ring-white/15">
            {post.category}
          </p>
          <h1 className="hero-enter hero-enter-delay-2 mt-4 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="hero-enter hero-enter-delay-3 mt-4 max-w-2xl text-base text-white/75">{post.excerpt}</p>
          <p className="hero-enter hero-enter-delay-4 mt-5 text-sm text-white/55">
            {post.author} · {post.date} · {post.readMins} min read · {post.views} views
          </p>
        </Container>
      </section>

      <section className="section-pad bg-foam">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              <article className="space-y-4 p-6 sm:p-8">
                {post.content.map((para) => (
                  <p key={para.slice(0, 32)} className="text-base leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2 border-t border-line pt-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foam px-3 py-1 text-xs font-semibold text-navy"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal variant="right">
              <div className="rounded-2xl bg-navy p-6 text-white">
                <p className="font-display text-xl">Ready to prepare seriously?</p>
                <p className="mt-2 text-sm text-white/70">
                  Explore courses or talk to a counsellor about your exam year.
                </p>
                <div className="mt-5 grid gap-2">
                  <ButtonLink href="/courses">View courses</ButtonLink>
                  <ButtonLink href={site.primaryCta.href} variant="secondary">
                    {site.primaryCta.label}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            {related.length ? (
              <Reveal variant="right" delay={80}>
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Related posts
                  </p>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/blog/${r.slug}`}
                          className="text-sm font-semibold text-navy hover:text-navy-mid"
                        >
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}
          </aside>
        </Container>
      </section>
    </>
  );
}

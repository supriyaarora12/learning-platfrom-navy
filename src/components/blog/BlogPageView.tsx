import Image from "next/image";
import Link from "next/link";
import { blogPage } from "@/content/blog";
import { site } from "@/content/site";
import { BlogCatalog } from "@/components/blog/BlogCatalog";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";

export function BlogPageView() {
  return (
    <>
      {/* Hero — full viewport + white doodle */}
      <section className="relative flex min-h-[calc(100svh-4.25rem)] overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <Container className="relative flex w-full flex-col justify-center py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <nav className="hero-enter text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">Blog</span>
              </nav>
              <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {blogPage.eyebrow}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                {blogPage.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                {blogPage.subtitle}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#posts">Browse posts</ButtonLink>
                <ButtonLink href="/courses" variant="secondary">
                  Explore courses
                </ButtonLink>
              </div>
            </div>

            <div className="hero-panel-enter relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
              <div className="relative mx-auto aspect-square w-[min(100%,420px)]">
                {/* unoptimized: Next image optimizer was flattening PNG alpha to black */}
                <Image
                  src="/assets/blog-hero-doodle.png"
                  alt="Merchant Navy insights & exam guides — reading, tips, and career paths"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                  sizes="420px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="posts" className="section-pad scroll-mt-24 bg-foam">
        <Container>
          <BlogCatalog />
        </Container>
      </section>

      <section className="border-t border-line bg-white py-14">
        <Container>
          <Reveal variant="scale">
            <div className="grid gap-6 rounded-2xl bg-navy px-6 py-8 text-white sm:grid-cols-[1.3fr_auto] sm:items-center sm:px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                  Newsletter
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">Join our subscriber list</h2>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Get exam updates, sponsorship alerts, and special offers in your inbox.
                </p>
              </div>
              <ButtonLink href={site.primaryCta.href} variant="primary">
                Get updates
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

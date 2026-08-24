import Image from "next/image";
import Link from "next/link";
import {
  aboutCareer,
  aboutCommunity,
  aboutEdge,
  aboutMission,
  aboutPage,
  aboutPartners,
  aboutStats,
  aboutStory,
  aboutTeam,
  aboutTrust,
  aboutValues,
  aboutWho,
} from "@/content/about";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";
import { StatsCarousel } from "@/components/ui/StatsCarousel";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { JourneyFlipCards } from "@/components/about/JourneyFlipCards";
import { StoriesGallery } from "@/components/about/StoriesGallery";
import { SocialIcon } from "@/components/contact/SocialLinks";

function ValueIcon({ index, className = "" }: { index: number; className?: string }) {
  const common = `h-8 w-8 ${className}`;
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M8 13.5 6.2 12a2.4 2.4 0 0 1 0-3.4l.4-.4a2.4 2.4 0 0 1 3.4 0L12 10.2M16 10.5l1.8 1.8a2.4 2.4 0 0 1 0 3.4l-.4.4a2.4 2.4 0 0 1-3.4 0L12 13.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M9.5 14.5 8 16.2M14.5 9.5 16 7.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3.5" y="4.5" width="7" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13.5" y="4.5" width="7" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3.5" y="13" width="7" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13.5" y="13" width="7" height="6.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
      <circle cx="9" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.5" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.8 17.5c.4-2.2 2.3-3.6 4.2-3.6s3.8 1.4 4.2 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 16.2c.5-1.5 1.8-2.5 3.3-2.5 1.4 0 2.5.8 3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AboutPageView() {
  return (
    <>
      {/* Hero — full viewport + white doodle */}
      <section className="relative flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden sea-grid text-white">
        <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
        <HeroOrbs />
        <Container className="relative flex flex-1 flex-col justify-center py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <nav className="hero-enter text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">About Us</span>
              </nav>

              <p className="hero-enter hero-enter-delay-1 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                {aboutPage.eyebrow}
              </p>
              <h1 className="hero-enter hero-enter-delay-2 mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                {aboutPage.title}
              </h1>
              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                {aboutPage.subtitle}
              </p>
              <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">
                  How it works
                </ButtonLink>
              </div>
            </div>

            <div className="hero-panel-enter relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
              <div className="relative mx-auto aspect-square w-[min(100%,420px)]">
                <Image
                  src="/assets/about-hero-doodle.png"
                  alt="SeaPath — mentoring Merchant Navy aspirants toward ranks and sponsorships"
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

        <div className="hero-enter hero-enter-delay-5 relative mt-4 w-full sm:mt-6">
          <StatsCarousel items={aboutStats} />
        </div>
      </section>

      {/* Who we are */}
      <section className="section-pad bg-foam">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal variant="left">
            <SectionHeading eyebrow={aboutWho.eyebrow} title={aboutWho.title} subtitle={aboutWho.body} />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {aboutWho.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-navy"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-line">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="SeaPath learning community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Story + gallery */}
      <section className="section-pad bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={aboutStory.eyebrow}
              title={aboutStory.title}
              align="center"
            />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {aboutStory.paragraphs.map((p) => (
                <p key={p.slice(0, 28)} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <StoriesGallery />
        </Container>
      </section>

      {/* Milestones timeline */}
      <AboutTimeline />

      {/* Mission pillars */}
      <section className="section-pad bg-foam">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={aboutMission.eyebrow}
              title={aboutMission.title}
              subtitle={aboutMission.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutMission.pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="h-full rounded-xl border border-line bg-white p-5 transition hover:border-navy/25">
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Inside the journey — flip cards */}
      <JourneyFlipCards />

      {/* Values */}
      <section className="section-pad bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal variant="left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Values</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-navy sm:text-5xl">
              What guides every batch
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Principles we use when we build courses, tools, and student support.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {aboutValues.map((item, i) => {
              const featured = i === 0;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <article
                    className={`flex h-full min-h-[200px] flex-col rounded-2xl p-5 sm:p-6 ${
                      featured ? "bg-gold text-navy" : "bg-foam text-navy"
                    }`}
                  >
                    <ValueIcon index={i} className={featured ? "text-navy" : "text-navy"} />
                    <p
                      className={`mt-5 text-sm leading-relaxed ${
                        featured ? "text-navy/80" : "text-muted"
                      }`}
                    >
                      {item.body}
                    </p>
                    <div
                      className={`mt-auto mb-3 h-px w-full ${featured ? "bg-navy/25" : "bg-gold/50"}`}
                      aria-hidden
                    />
                    <h3 className="font-display text-lg text-navy sm:text-xl">{item.title}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team with photos — Croma directors */}
      <section className="section-pad bg-mist/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={aboutTeam.eyebrow}
              title={aboutTeam.title}
              subtitle={aboutTeam.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {aboutTeam.members.map((member, i) => (
              <Reveal key={member.role} delay={i * 80}>
                <article className="overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-navy">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Placeholder mentor photos — replace with your real team images anytime.
          </p>
        </Container>
      </section>

      {/* Edge */}
      <section className="relative overflow-hidden py-12 text-white sm:py-14">
        <Image
          src="/assets/career-merchant-navy.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/78" aria-hidden />
        <Container className="relative">
          <Reveal>
            <SectionHeading light eyebrow={aboutEdge.eyebrow} title={aboutEdge.title} />
          </Reveal>
          <Reveal delay={80}>
            <div className="relative mx-auto mt-8 w-full max-w-2xl border border-white/25">
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/25" aria-hidden />
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/25" aria-hidden />
              <div className="grid grid-cols-2">
                {aboutEdge.items.map((item) => (
                  <div key={item.title} className="flex flex-col justify-center p-4 sm:p-5 lg:p-6">
                    <h3 className="font-display text-base text-white sm:text-lg">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Partners */}
      <section className="section-pad bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={aboutPartners.eyebrow}
              title={aboutPartners.title}
              subtitle={aboutPartners.subtitle}
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {aboutPartners.companies.map((company, i) => (
              <Reveal key={company} delay={(i % 6) * 40}>
                <span className="rounded-full border border-line bg-foam px-4 py-2 text-sm font-semibold text-navy/80">
                  {company}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Merchant Navy + Community */}
      <section className="section-pad bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full rounded-2xl border border-line bg-foam/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {aboutCareer.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl text-navy">{aboutCareer.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{aboutCareer.body}</p>
              <ul className="mt-5 space-y-2">
                {aboutCareer.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-navy/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="flex h-full flex-col rounded-2xl bg-navy p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                {aboutCommunity.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl">{aboutCommunity.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{aboutCommunity.subtitle}</p>

              <div className="mt-8 grid flex-1 gap-3 sm:grid-cols-2">
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FF0000] text-white shadow-[0_8px_20px_-8px_rgba(255,0,0,0.7)]">
                    <SocialIcon name="youtube" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">YouTube</span>
                    <span className="mt-0.5 block text-xs text-white/55">Watch & subscribe</span>
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto text-white/35 transition group-hover:translate-x-0.5 group-hover:text-gold-soft"
                  >
                    →
                  </span>
                </a>

                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/25"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_8px_20px_-8px_rgba(225,48,108,0.65)]"
                    style={{
                      background:
                        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    }}
                  >
                    <SocialIcon name="instagram" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">Instagram</span>
                    <span className="mt-0.5 block text-xs text-white/55">Follow daily tips</span>
                  </span>
                  <span
                    aria-hidden
                    className="ml-auto text-white/35 transition group-hover:translate-x-0.5 group-hover:text-gold-soft"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust + CTA */}
      <section className="section-pad bg-mist/40">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal variant="left">
            <SectionHeading eyebrow={aboutTrust.eyebrow} title={aboutTrust.title} />
            <ul className="mt-6 space-y-3">
              {aboutTrust.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutTrust.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy ring-1 ring-line"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,31,58,0.4)] sm:p-8">
              <p className="font-display text-2xl text-navy">Meet us on your journey</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Enquire, try free tools, or message us on WhatsApp — we&apos;ll help you pick the
                right next step.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
                <ButtonLink href="/free-tools" variant="ghost">
                  Free tools
                </ButtonLink>
                <ButtonLink href={site.secondaryCta.href} variant="ghost" external>
                  WhatsApp
                </ButtonLink>
              </div>
              <p className="mt-5 text-xs text-muted">
                {site.email} · {site.phone}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

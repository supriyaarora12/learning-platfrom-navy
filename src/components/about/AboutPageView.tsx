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
  aboutTestimonials,
  aboutTrust,
  aboutValues,
  aboutWho,
} from "@/content/about";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, SectionHeading } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";
import { Reveal } from "@/components/ui/Reveal";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { JourneyFlipCards } from "@/components/about/JourneyFlipCards";
import { SocialIcon } from "@/components/contact/SocialLinks";

export function AboutPageView() {
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
      </section>

      <section className="border-b border-line bg-white">
        <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="text-center md:text-left">
                <p className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </Container>
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

      {/* Story + quote card */}
      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal variant="left">
            <SectionHeading eyebrow={aboutStory.eyebrow} title={aboutStory.title} />
            <div className="mt-6 space-y-4">
              {aboutStory.paragraphs.map((p) => (
                <p key={p.slice(0, 28)} className="max-w-xl text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="rounded-2xl bg-navy p-7 text-white shadow-[0_30px_60px_-36px_rgba(11,31,58,0.55)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                One line we live by
              </p>
              <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{site.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Learn → Practice → Prove → Convert — then continue on the LMS.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["IMUCET", "DNS", "Sponsorship", "LMS"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-soft ring-1 ring-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
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
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="What guides every batch"
              subtitle="Principles we use when we build courses, tools, and student support."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutValues.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="border-t border-navy/15 pt-5">
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
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
      <section className="section-pad bg-navy text-white">
        <Container>
          <Reveal>
            <SectionHeading light eyebrow={aboutEdge.eyebrow} title={aboutEdge.title} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {aboutEdge.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/8">
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
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

      {/* Testimonials */}
      <section className="section-pad bg-foam">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={aboutTestimonials.eyebrow}
              title={aboutTestimonials.title}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {aboutTestimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <blockquote className="flex h-full gap-4 border-l-2 border-gold bg-white p-4 sm:gap-5 sm:p-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-mist sm:h-24 sm:w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-0.5">
                    <p className="text-sm leading-relaxed text-ink/90">“{item.quote}”</p>
                    <footer className="mt-4">
                      <p className="font-semibold text-navy">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </footer>
                  </div>
                </blockquote>
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

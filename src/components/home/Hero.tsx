import Image from "next/image";
import { homeHero } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroOrbs } from "@/components/ui/HeroOrbs";

export function Hero() {
  return (
    <section className="relative overflow-hidden sea-grid text-white">
      <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
      <HeroOrbs />

      <Container className="relative grid min-h-[calc(100svh-4.25rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="hero-enter font-display text-4xl tracking-tight text-gold-soft sm:text-5xl lg:text-6xl">
            {homeHero.brand}
          </p>
          <h1 className="hero-enter hero-enter-delay-1 mt-4 max-w-xl font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {homeHero.headline}
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            {homeHero.subline}
          </p>
          <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-wrap gap-3">
            <ButtonLink href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</ButtonLink>
            <ButtonLink href={homeHero.secondaryCta.href} variant="secondary">
              {homeHero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-panel-enter relative hidden min-h-[420px] lg:block">
          <div className="absolute inset-0 rounded-tl-[4rem] rounded-br-[4rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent ring-1 ring-white/15" />
          <div className="absolute inset-6 overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] ring-1 ring-white/10">
            <Image
              src="/assets/hero-merchant-navy.png"
              alt="Merchant Navy cargo ship at sea — SeaPath coaching journey"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/35 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Learn · Practice · Prove
              </p>
              <p className="mt-2 font-display text-2xl text-white">
                Coaching + LMS built for outcomes at sea.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

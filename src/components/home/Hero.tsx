import Image from "next/image";
import { homeHero } from "@/content/home";
import { Stats } from "@/components/home/Stats";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden text-white">
      <div className="hero-bg-drift" aria-hidden>
        <Image
          src="/assets/hero-merchant-navy.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/55 via-navy/45 to-navy-deep/70"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 wave-fade opacity-25" aria-hidden />

      <Container className="relative flex flex-1 flex-col items-center justify-center py-12 text-center lg:py-14">
        <p className="hero-enter font-display text-1xl tracking-tight text-gold-soft sm:text-3xl lg:text-4xl">
          {homeHero.brand}
        </p>
        <h1 className="hero-enter hero-enter-delay-1 mt-4 max-w-4xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
          {homeHero.headline}
        </h1>
        <p className="hero-enter hero-enter-delay-2 mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {homeHero.subline}
        </p>
        <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</ButtonLink>
          <ButtonLink href={homeHero.secondaryCta.href} variant="secondary">
            {homeHero.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>

      {/* Stats carousel — bottom of hero, active card displaces larger */}
      <div className="hero-enter hero-enter-delay-4 relative mt-4 sm:mt-6">
        <Stats />
      </div>
    </section>
  );
}

import Image from "next/image";
import { homeResults } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function Results() {
  return (
    <section className="relative isolate overflow-hidden section-pad text-white">
      <Image
        src={homeResults.backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy-deep/35" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/45 via-navy/20 to-navy-deep/55"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 wave-fade opacity-15" aria-hidden />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Results"
            title={homeResults.title}
            subtitle={homeResults.subtitle}
          />
        </Reveal>
        <div className="mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3">
          {homeResults.items.map((item, i) => (
            <Reveal key={item.name + item.detail} delay={i * 70} variant="scale">
              <PointerCard
                as="article"
                className="overflow-hidden rounded-lg bg-navy-deep/55 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/20 backdrop-blur-md hover:bg-navy-deep/65 hover:ring-gold/45"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-navy-deep/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 280px"
                  />
                </div>
                <div className="px-3.5 py-3">
                  <h3 className="font-display text-lg text-white">{item.name}</h3>
                  <p className="mt-1 text-xs text-gold-soft sm:text-sm">{item.detail}</p>
                </div>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

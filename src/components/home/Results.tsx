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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeResults.items.map((item, i) => (
            <Reveal key={item.name + item.detail} delay={i * 70} variant="scale">
              <PointerCard
                as="article"
                className="rounded-xl bg-navy-deep/55 p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/20 backdrop-blur-md hover:bg-navy-deep/65 hover:ring-gold/45"
              >
                <h3 className="font-display text-xl text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-gold-soft">{item.detail}</p>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

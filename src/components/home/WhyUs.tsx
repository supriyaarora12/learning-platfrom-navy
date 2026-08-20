import Image from "next/image";
import { whyUs } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section className="section-pad bg-foam">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title={whyUs.title}
            subtitle={whyUs.subtitle}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <PointerCard
                as="article"
                className="group grid h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_36px_-30px_rgba(11,31,58,0.4)] hover:border-navy/20 sm:grid-cols-[132px_1fr]"
              >
                <div className="relative min-h-[120px] overflow-hidden bg-mist sm:min-h-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 132px"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 sm:p-5">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg text-navy group-hover:text-navy-mid sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

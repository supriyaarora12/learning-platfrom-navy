import { whyMerchantNavy } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function WhyMerchantNavy() {
  return (
    <section className="section-pad relative overflow-hidden bg-foam">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,_rgba(201,162,39,0.12),_transparent_60%)]"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal variant="left">
          <SectionHeading
            eyebrow={whyMerchantNavy.eyebrow}
            title={whyMerchantNavy.title}
            subtitle={whyMerchantNavy.subtitle}
          />
          <div className="mt-6 space-y-4">
            {whyMerchantNavy.body.map((para) => (
              <p key={para.slice(0, 24)} className="max-w-xl text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {whyMerchantNavy.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100} variant="right">
              <PointerCard
                as="article"
                className="rounded-xl border border-line bg-white p-5 shadow-[0_16px_40px_-28px_rgba(11,31,58,0.35)] hover:border-gold/50"
              >
                <p className="relative z-[1] text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="relative z-[1] mt-2 font-display text-xl text-navy">{point.title}</h3>
                <p className="relative z-[1] mt-1.5 text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { partners } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal variant="left">
            <SectionHeading
              eyebrow={partners.eyebrow}
              title={partners.title}
              subtitle={partners.subtitle}
            />
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="flex items-baseline gap-3 rounded-2xl border border-line bg-foam px-6 py-5 lg:justify-end">
              <p className="font-display text-5xl tracking-tight text-navy sm:text-6xl">
                {partners.countLabel}
              </p>
              <p className="max-w-[10rem] text-sm leading-snug text-muted">
                {partners.countCaption}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.companies.map((company, i) => (
            <Reveal key={company} delay={(i % 5) * 50} variant="up">
              <div className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-line bg-foam/70 px-3 py-4 text-center transition duration-300 hover:border-navy/25 hover:bg-white hover:shadow-[0_16px_40px_-28px_rgba(11,31,58,0.35)]">
                <span className="text-sm font-semibold tracking-tight text-navy/80">
                  {company}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

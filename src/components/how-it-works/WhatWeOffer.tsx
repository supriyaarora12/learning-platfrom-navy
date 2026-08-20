import { whatWeOffer } from "@/content/how-it-works";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeOffer() {
  const steps = whatWeOffer.steps;

  return (
    <section className="section-pad overflow-hidden bg-foam">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={whatWeOffer.eyebrow}
            title={whatWeOffer.title}
            subtitle={whatWeOffer.subtitle}
          />
        </Reveal>

        {/* Desktop: wavy snake path */}
        <div className="relative mt-14 hidden lg:block">
          <svg
            className="pointer-events-none absolute inset-x-0 top-24 h-40 w-full text-gold"
            viewBox="0 0 1200 160"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M40 40 C 140 40, 160 120, 260 120 S 380 40, 480 40 S 600 120, 700 120 S 820 40, 920 40 S 1040 120, 1160 120"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          <div className="relative grid grid-cols-7 gap-3">
            {steps.map((step, i) => {
              const up = i % 2 === 0;
              return (
                <Reveal key={step.title} delay={i * 70}>
                  <article
                    className={`flex flex-col rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_-28px_rgba(11,31,58,0.35)] ${
                      up ? "mt-0" : "mt-16"
                    }`}
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-navy font-display text-sm text-gold-soft">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-base leading-snug text-navy">{step.title}</h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{step.body}</p>
                    <div className="mt-4 flex gap-1">
                      {steps.map((_, di) => (
                        <span
                          key={di}
                          className={`h-1.5 w-1.5 rounded-full ${
                            di === i ? "bg-gold" : "bg-line"
                          }`}
                        />
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: stacked */}
        <div className="mt-10 space-y-4 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 50}>
              <article className="flex gap-4 rounded-2xl border border-line bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy font-display text-xs text-gold-soft">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

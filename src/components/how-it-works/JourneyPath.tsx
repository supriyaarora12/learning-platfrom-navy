"use client";

import { journeySteps } from "@/content/how-it-works";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function JourneyPath() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Your journey"
            title="From first enquiry to selection-ready"
            subtitle="Five clear stages after you start with SeaPath."
          />
        </Reveal>

        <div className="relative mt-8">
          {/* Mobile / tablet: left rail path */}
          <div className="lg:hidden">
            <div
              className="pointer-events-none absolute bottom-3 left-[18px] top-3 w-0.5 journey-path-line bg-gradient-to-b from-gold via-navy-mid to-gold"
              aria-hidden
            />
            <ol className="relative space-y-3">
              {journeySteps.map((item, i) => (
                <Reveal key={item.step} delay={i * 50}>
                  <li className="relative grid grid-cols-[40px_1fr] gap-3">
                    <div className="relative z-10 flex justify-center pt-0.5">
                      <span className="journey-node relative flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-[10px] text-gold-soft ring-2 ring-gold shadow-[0_0_0_4px_rgba(201,162,39,0.16)]">
                        {item.step}
                        <span className="journey-node-ping absolute inset-0 rounded-full" aria-hidden />
                      </span>
                    </div>
                    <JourneyCard item={item} />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Desktop: alternating path timeline */}
          <div className="relative hidden lg:block">
            <div
              className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-0.5 -translate-x-1/2 journey-path-line rounded-full bg-gradient-to-b from-gold/30 via-gold to-navy/40"
              aria-hidden
            />
            <ol className="relative">
              {journeySteps.map((item, i) => {
                const onLeft = i % 2 === 0;
                return (
                  <li
                    key={item.step}
                    className="grid grid-cols-[1fr_56px_1fr] items-center gap-3 py-2"
                  >
                    <div className={onLeft ? "" : "col-start-1 row-start-1"}>
                      {onLeft ? (
                        <Reveal variant="left" delay={i * 60}>
                          <JourneyCard item={item} tip="right" />
                        </Reveal>
                      ) : null}
                    </div>

                    <div className="relative z-10 flex justify-center">
                      <span className="journey-node relative flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-xs text-gold-soft ring-2 ring-gold shadow-[0_0_0_5px_rgba(201,162,39,0.18)]">
                        {item.step}
                        <span className="journey-node-ping absolute inset-0 rounded-full" aria-hidden />
                      </span>
                    </div>

                    <div className={onLeft ? "" : "col-start-3 row-start-1"}>
                      {!onLeft ? (
                        <Reveal variant="right" delay={i * 60}>
                          <JourneyCard item={item} tip="left" />
                        </Reveal>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

function JourneyCard({
  item,
  tip,
}: {
  item: (typeof journeySteps)[number];
  tip?: "left" | "right";
}) {
  return (
    <article className="journey-card relative rounded-xl border border-line bg-foam/70 px-4 py-3.5 shadow-[0_12px_28px_-24px_rgba(11,31,58,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white">
      {tip ? (
        <span
          className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rotate-45 border border-line bg-foam/70 lg:block ${
            tip === "right"
              ? "-right-[5px] border-b-0 border-l-0"
              : "-left-[5px] border-r-0 border-t-0"
          }`}
          aria-hidden
        />
      ) : null}
      <h3 className="font-display text-lg text-navy">{item.title}</h3>
      <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">{item.body}</p>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {item.points.map((point) => (
          <li
            key={point}
            className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-navy/80 ring-1 ring-line"
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

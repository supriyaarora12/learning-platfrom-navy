"use client";

import Image from "next/image";
import { aboutMilestones } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTimeline() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-12 text-white lg:py-14">
      <div className="pointer-events-none absolute inset-0 wave-fade opacity-25" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-32 w-32 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {aboutMilestones.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              {aboutMilestones.titleBefore} {aboutMilestones.titleAfter}
            </h2>
            <div className="relative mx-auto mt-4 h-14 w-14 sm:h-16 sm:w-16">
              <Image
                src={aboutMilestones.markImage}
                alt=""
                fill
                className="object-contain drop-shadow-[0_0_18px_rgba(201,162,39,0.45)]"
                sizes="64px"
                aria-hidden
              />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              {aboutMilestones.subtitle}
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Full-width timeline */}
      <div className="relative mt-10 hidden w-full px-4 sm:px-8 lg:block lg:px-10 xl:px-16">
        <div
          className="about-timeline-line pointer-events-none absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 sm:left-8 sm:right-8 lg:left-10 lg:right-10 xl:left-16 xl:right-16"
          aria-hidden
        />

        <ol className="relative mx-auto grid max-w-[1600px] grid-cols-4 gap-x-6 xl:gap-x-10">
          {aboutMilestones.items.map((item, i) => {
            const above = i % 2 === 0;
            return (
              <li key={item.title} className="flex flex-col items-center">
                <div className="flex h-[140px] w-full items-end justify-center px-2 pb-3">
                  {above ? (
                    <Reveal variant="up" delay={120 + i * 90}>
                      <StepCopy index={i} item={item} />
                    </Reveal>
                  ) : null}
                </div>

                <div className="relative z-10 flex h-0 items-center justify-center">
                  <span
                    className="about-timeline-node relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold"
                    style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                  >
                    <span className="about-timeline-ping absolute inset-0 rounded-full" aria-hidden />
                  </span>
                </div>

                <div className="flex h-[140px] w-full items-start justify-center px-2 pt-3">
                  {!above ? (
                    <Reveal variant="up" delay={120 + i * 90}>
                      <StepCopy index={i} item={item} />
                    </Reveal>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile */}
      <Container className="relative mt-8 lg:hidden">
        <ol className="relative space-y-4">
          <div
            className="about-timeline-line-v pointer-events-none absolute bottom-1 left-[7px] top-1 w-px"
            aria-hidden
          />
          {aboutMilestones.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} variant="left">
              <li className="relative grid grid-cols-[16px_1fr] gap-3">
                <div className="relative z-10 flex justify-center pt-1">
                  <span className="about-timeline-node h-2.5 w-2.5 rounded-full bg-gold" />
                </div>
                <StepCopy index={i} item={item} />
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function StepCopy({
  index,
  item,
}: {
  index: number;
  item: (typeof aboutMilestones.items)[number];
}) {
  return (
    <div className="max-w-[260px] text-center xl:max-w-[300px]">
      <p className="font-display text-2xl leading-none text-white/18 sm:text-3xl">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
        {item.year}
      </p>
      <h3 className="mt-1 font-display text-base text-white sm:text-lg xl:text-xl">{item.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/55 sm:text-sm">{item.body}</p>
    </div>
  );
}

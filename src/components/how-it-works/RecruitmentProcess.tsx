import Image from "next/image";
import { recruitmentProcess } from "@/content/how-it-works";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function stepImage(type: string) {
  if (type === "profile") return "/assets/beyond-resume.png";
  if (type === "interview") return "/assets/beyond-labs.png";
  return "/assets/beyond-linkedin.png";
}

export function RecruitmentProcess() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {recruitmentProcess.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy sm:text-4xl">
              {recruitmentProcess.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {recruitmentProcess.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Desktop process */}
        <div className="relative mx-auto mt-16 hidden max-w-5xl lg:block">
          {/* Dashed connectors between circle centers */}
          <svg
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[52px] h-[88px] w-[66.68%]"
            viewBox="0 0 600 88"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 28 C 70 28, 80 78, 150 78 S 220 28, 300 28 S 380 8, 450 8 S 520 36, 600 36"
              stroke="#9aa4b2"
              strokeWidth="1.6"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid grid-cols-3 gap-8">
            {recruitmentProcess.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="flex flex-col items-center text-center">
                  <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
                    <span className="absolute -left-1 -top-1 font-display text-2xl text-navy/70">
                      {i + 1}
                    </span>
                    <span
                      className={`relative flex h-[108px] w-[108px] items-center justify-center overflow-hidden rounded-full bg-white ${
                        i === 0
                          ? "shadow-[0_18px_40px_-18px_rgba(11,31,58,0.35)]"
                          : "border border-dashed border-navy/25"
                      }`}
                    >
                      <Image
                        src={stepImage(item.icon)}
                        alt={`${item.title} illustration`}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="108px"
                      />
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="mt-12 space-y-8 lg:hidden">
          {recruitmentProcess.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="flex items-start gap-4">
                <div className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center">
                  <span className="absolute -left-0.5 -top-0.5 font-display text-lg text-navy/70">
                    {i + 1}
                  </span>
                  <span
                      className={`relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full bg-white ${
                      i === 0
                        ? "shadow-[0_14px_30px_-16px_rgba(11,31,58,0.35)]"
                        : "border border-dashed border-navy/25"
                    }`}
                  >
                      <Image
                        src={stepImage(item.icon)}
                        alt={`${item.title} illustration`}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="76px"
                      />
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

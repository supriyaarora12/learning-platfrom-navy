import Image from "next/image";
import { whyMerchantNavy } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function StepIcon({ name }: { name: "globe" | "growth" | "leadership" }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    "aria-hidden": true as const,
  };

  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    );
  }
  if (name === "growth") {
    return (
      <svg {...common}>
        <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />
    </svg>
  );
}

export function WhyMerchantNavy() {
  return (
    <section className="bg-foam py-12 sm:py-14 lg:py-16">
      <Container>
        {/* Header row — title left, lead right */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <Reveal variant="left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {whyMerchantNavy.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
              {whyMerchantNavy.title}
              <span className="ml-1 inline-block h-2.5 w-2.5 translate-y-[-2px] bg-gold" aria-hidden />
            </h2>
          </Reveal>
          <Reveal variant="right" delay={80}>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base lg:justify-self-end lg:text-right">
              {whyMerchantNavy.lead}
            </p>
          </Reveal>
        </div>

        {/* Body: steps flow + media with stats */}
        <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left — flowchart / steps */}
          <Reveal variant="left" delay={100}>
            <ol className="relative space-y-0">
              {whyMerchantNavy.points.map((point, i) => {
                const last = i === whyMerchantNavy.points.length - 1;
                return (
                  <li key={point.title} className="relative flex gap-4 pb-8 last:pb-0">
                    {!last && (
                      <span
                        className="absolute left-[21px] top-12 bottom-0 w-px border-l border-dashed border-navy/25"
                        aria-hidden
                      />
                    )}
                    <span className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-navy shadow-[0_10px_24px_-14px_rgba(11,31,58,0.45)]">
                      <StepIcon name={point.icon} />
                    </span>
                    <div className="min-w-0 pt-1.5">
                      <h3 className="font-display text-xl text-navy">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Mini flow graphic */}
            <div className="mt-8 overflow-hidden rounded-xl border border-line bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                Path at a glance
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-navy">
                {["12th / PCM", "IMUCET", "Sponsorship", "Pre-sea", "Life at sea"].map((step, i, arr) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="rounded-md bg-foam px-2.5 py-1.5 ring-1 ring-line">{step}</span>
                    {i < arr.length - 1 && (
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — image + overlapping stats */}
          <Reveal variant="right" delay={140}>
            <div className="relative pt-8">
              <div className="absolute left-4 right-4 top-0 z-10 flex overflow-hidden rounded-lg bg-gold text-navy-deep shadow-[0_16px_40px_-18px_rgba(201,162,39,0.65)] sm:left-8 sm:right-auto sm:w-[min(100%,340px)]">
                {whyMerchantNavy.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-1 flex-col justify-center px-4 py-3 sm:px-5 ${
                      i > 0 ? "border-l border-navy-deep/15" : ""
                    }`}
                  >
                    <p className="font-display text-2xl leading-none sm:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-deep/75">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-mist shadow-[0_24px_50px_-28px_rgba(11,31,58,0.45)]">
                <Image
                  src={whyMerchantNavy.image}
                  alt={whyMerchantNavy.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { whyUs } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const cardTints = [
  "from-navy-deep/90 via-navy/70 to-navy/40",
  "from-[#0a3d4a]/90 via-[#0d5568]/65 to-[#0d5568]/35",
  "from-[#5c4810]/90 via-[#8a6b18]/60 to-[#c9a227]/35",
  "from-navy/95 via-[#1a3358]/70 to-[#2a4a72]/40",
] as const;

export function WhyUs() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:gap-8">
          {/* Left: all headings vertical */}
          <Reveal className="w-full shrink-0 md:w-auto">
            {/* Mobile — stacked normal */}
            <div className="text-left md:hidden">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                Why choose us
              </p>
              <h2 className="mt-1.5 font-display text-2xl tracking-tight text-navy">
                {whyUs.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{whyUs.subtitle}</p>
            </div>

            {/* Desktop — vertical column group */}
            <div className="hidden h-full min-h-[260px] items-stretch gap-4 md:flex lg:gap-5">
              <p
                className="font-display text-2xl font-semibold uppercase tracking-[0.16em] text-navy lg:text-3xl"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Why choose us
              </p>
              <span className="w-0.5 shrink-0 self-stretch bg-gold" aria-hidden />
              <div className="flex items-stretch gap-1.5">
                <h2
                  className="font-display text-xl tracking-tight text-navy lg:text-2xl"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {whyUs.title}
                </h2>
                <p
                  className="max-h-full text-sm leading-relaxed tracking-wide text-muted lg:text-[0.95rem]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {whyUs.subtitle}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: wider, shorter cards */}
          <div className="grid w-full min-w-0 max-w-3xl flex-1 grid-cols-2 gap-2 sm:gap-2.5 lg:max-w-none">
            {whyUs.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="group relative aspect-[16/10] overflow-hidden sm:aspect-[5/3]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 320px"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cardTints[i % cardTints.length]}`}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-display text-lg leading-tight text-white sm:text-xl lg:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-white/85 sm:text-sm">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

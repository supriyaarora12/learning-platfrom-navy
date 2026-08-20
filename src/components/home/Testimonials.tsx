import Image from "next/image";
import { homeTestimonials } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden section-pad bg-[#f3f6fa]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Stories</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy sm:text-4xl">
              {homeTestimonials.title}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {homeTestimonials.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {homeTestimonials.items.map((item, i) => {
            const featured = i === 1;

            return (
              <Reveal key={item.name} delay={i * 100} variant="up">
                <PointerCard
                  as="blockquote"
                  className={`relative flex h-full flex-col rounded-[1.6rem] border border-line bg-white pt-12 shadow-[0_22px_50px_-34px_rgba(11,31,58,0.45)] hover:border-navy/15 ${
                    featured
                      ? "lg:-mt-4 lg:mb-0 lg:shadow-[0_30px_60px_-32px_rgba(11,31,58,0.5)] lg:ring-1 lg:ring-gold/30"
                      : ""
                  }`}
                >
                  {/* Avatar sits on the top edge */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full bg-mist shadow-[0_12px_28px_-10px_rgba(11,31,58,0.45)] ring-[3px] ring-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-gold-soft ring-2 ring-white"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6 pt-2 text-center">
                    <span
                      className="mx-auto font-display text-4xl leading-none text-gold/80"
                      aria-hidden
                    >
                      “
                    </span>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ink/85 sm:text-[0.95rem]">
                      {item.quote}
                    </p>

                    <footer className="mt-6 border-t border-line pt-5">
                      <p className="font-display text-lg text-navy">{item.name}</p>
                      <p className="mt-1.5 inline-flex rounded-full bg-foam px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy ring-1 ring-line">
                        {item.role}
                      </p>
                    </footer>
                  </div>
                </PointerCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

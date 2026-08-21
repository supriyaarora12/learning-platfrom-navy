import Image from "next/image";
import { beyondCourses } from "@/content/how-it-works";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const marks = ["01", "02", "03", "04", "05", "06"];

export function BeyondCourses() {
  return (
    <section className="relative isolate overflow-hidden py-12 text-navy lg:py-14">
      <Image
        src={beyondCourses.backgroundImage}
        alt=""
        fill
        className="object-cover object-center opacity-[0.14]"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#f5f8fc]/80" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-gold/12 blur-3xl orb-float"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {beyondCourses.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-navy sm:text-4xl">
              {beyondCourses.title}
            </h2>
            <div className="mx-auto mt-2.5 h-0.5 w-10 bg-gold" aria-hidden />
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {beyondCourses.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Compact even 3×2 grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beyondCourses.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article
                className="beyond-tile group relative flex h-full min-h-[148px] overflow-hidden rounded-xl border border-line bg-white shadow-[0_14px_32px_-24px_rgba(11,31,58,0.3)]"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    aria-hidden
                  />
                  {/* Light wash — keep photo visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-white/35 to-white/10" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-4">
                  <span className="mb-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold tracking-wide text-gold-soft shadow-sm">
                    {marks[i]}
                  </span>
                  <h3 className="mt-4 font-display text-lg text-navy drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy/75 sm:text-sm">{item.body}</p>
                  <span
                    className="mt-3 h-0.5 w-7 origin-left scale-x-0 bg-gold transition duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

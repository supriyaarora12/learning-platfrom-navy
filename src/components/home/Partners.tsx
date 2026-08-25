import { partners } from "@/content/home";
import { PartnerIcon } from "@/components/home/PartnerIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function chunkRows(list: string[], rows: number) {
  const size = Math.ceil(list.length / rows);
  return Array.from({ length: rows }, (_, i) => list.slice(i * size, (i + 1) * size));
}

function PartnerCard({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-7 py-2.5 sm:px-9">
      <PartnerIcon
        name={name}
        className="!h-12 !w-12 !rounded-xl !bg-transparent !ring-0 sm:!h-14 sm:!w-14 [&_img]:!h-10 [&_img]:!w-10 sm:[&_img]:!h-11 sm:[&_img]:!w-11"
      />
      <span className="whitespace-nowrap text-xs font-medium tracking-wide text-navy/70 sm:text-sm">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  companies,
  direction,
  duration = 42,
}: {
  companies: string[];
  direction: "left" | "right";
  duration?: number;
}) {
  // Duplicate for seamless loop
  const track = [...companies, ...companies];
  const anim = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="flex overflow-hidden py-1.5">
      <div
        className={`flex w-max gap-6 sm:gap-8 ${anim}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((company, i) => (
          <PartnerCard key={`${company}-${i}`} name={company} />
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  const [row1, row2] = chunkRows(partners.companies, 2);

  return (
    <section className="relative overflow-hidden section-pad bg-[#eef4fa]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8d0ea]/45 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {partners.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-navy sm:text-4xl">
              {partners.titleBefore}
              <span className="underline decoration-gold decoration-2 underline-offset-[6px]">
                {partners.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {partners.subtitle}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="relative mt-12">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#eef4fa] to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#eef4fa] to-transparent sm:w-28"
          aria-hidden
        />

        <div className="space-y-4 sm:space-y-5">
          <MarqueeRow companies={row1} direction="left" duration={44} />
          <MarqueeRow companies={row2} direction="right" duration={50} />
        </div>
      </div>
    </section>
  );
}

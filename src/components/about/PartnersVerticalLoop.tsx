import { aboutPartners } from "@/content/about";
import { PartnerIcon } from "@/components/home/PartnerIcon";

function PartnerRow({ name, accent }: { name: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
      <PartnerIcon
        name={name}
        className={
          accent
            ? "!bg-gold !text-navy-deep shadow-none"
            : "!bg-white/10 !text-gold-soft shadow-none"
        }
      />
      <span
        className={`whitespace-nowrap font-display text-2xl tracking-tight sm:text-3xl ${
          accent ? "text-gold-soft" : "text-white/45"
        }`}
      >
        {name}
      </span>
    </div>
  );
}

export function PartnersVerticalLoop() {
  const companies = aboutPartners.companies;
  const track = [...companies, ...companies];
  const accentEvery = 5;

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-md overflow-hidden sm:h-[380px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-navy-deep to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-navy-deep to-transparent"
        aria-hidden
      />
      <div className="marquee-up flex w-full flex-col items-center" style={{ animationDuration: "42s" }}>
        {track.map((company, i) => (
          <PartnerRow key={`${company}-${i}`} name={company} accent={i % accentEvery === 1} />
        ))}
      </div>
    </div>
  );
}

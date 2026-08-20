import Image from "next/image";
import type { ReactNode } from "react";
import { followAlong } from "@/content/home";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function YtIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

function IgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChannelCard({
  channel,
  icon,
  side,
}: {
  channel: (typeof followAlong.channels)[number];
  icon: ReactNode;
  side: "left" | "right";
}) {
  const href = site.social[channel.hrefKey];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative z-10 flex h-full flex-col rounded-[1.6rem] bg-navy p-6 text-white shadow-[0_24px_50px_-28px_rgba(11,31,58,0.55)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 sm:p-7 ${
        side === "left" ? "lg:mr-2" : "lg:ml-2"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/15 blur-2xl transition group-hover:bg-gold/25"
        aria-hidden
      />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold-soft">
        {icon}
      </span>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
        {channel.platform}
      </p>
      <h3 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">{channel.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{channel.body}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
        {channel.cta}
        <span aria-hidden className="transition group-hover:translate-x-1">
          →
        </span>
      </span>
      {/* Connector dot toward center */}
      <span
        className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gold lg:block ${
          side === "left" ? "-right-1.5" : "-left-1.5"
        }`}
        aria-hidden
      />
    </a>
  );
}

export function FollowAlong() {
  const [youtube, instagram] = followAlong.channels;

  return (
    <section className="relative overflow-hidden section-pad bg-[#f7f5f0]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/[0.04] to-transparent"
        aria-hidden
      />

      <Container className="relative">
        {/* Mobile / tablet: stacked */}
        <div className="lg:hidden">
          <Reveal>
            <div className="mx-auto max-w-lg text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {followAlong.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-navy">
                {followAlong.title}
              </h2>
              <div className="mx-auto mt-3 h-0.5 w-12 bg-gold" aria-hidden />
              <p className="mt-3 text-sm text-muted">{followAlong.subtitle}</p>
              <div className="relative mx-auto mt-6 aspect-square max-w-[260px]">
                <Image
                  src={followAlong.centerImage}
                  alt={followAlong.centerImageAlt}
                  fill
                  className="object-contain"
                  sizes="260px"
                />
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal variant="left">
              <ChannelCard channel={youtube} side="left" icon={<YtIcon className="h-5 w-5" />} />
            </Reveal>
            <Reveal variant="right" delay={80}>
              <ChannelCard
                channel={instagram}
                side="right"
                icon={<IgIcon className="h-5 w-5" />}
              />
            </Reveal>
          </div>
        </div>

        {/* Desktop: YouTube | center visual | Instagram */}
        <div className="relative hidden items-stretch gap-0 lg:grid lg:grid-cols-[1fr_minmax(240px,0.95fr)_1fr] lg:items-center">
          {/* Dotted paths */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full text-navy/25"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M280 200 C 340 200, 380 120, 500 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M720 200 C 660 200, 620 120, 500 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          <Reveal variant="left">
            <ChannelCard channel={youtube} side="left" icon={<YtIcon className="h-5 w-5" />} />
          </Reveal>

          <Reveal delay={60}>
            <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center px-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {followAlong.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-navy xl:text-4xl">
                {followAlong.title}
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-gold" aria-hidden />
              <p className="mt-3 text-sm text-muted">{followAlong.subtitle}</p>
              <div className="relative mt-5 aspect-square w-full max-w-[280px]">
                <Image
                  src={followAlong.centerImage}
                  alt={followAlong.centerImageAlt}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(11,31,58,0.15)]"
                  sizes="280px"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80}>
            <ChannelCard
              channel={instagram}
              side="right"
              icon={<IgIcon className="h-5 w-5" />}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

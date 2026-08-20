import { followAlong } from "@/content/home";
import { site } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FollowAlong() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={followAlong.eyebrow}
            title={followAlong.title}
            subtitle={followAlong.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {followAlong.channels.map((channel, i) => {
            const href = site.social[channel.hrefKey];
            return (
              <Reveal
                key={channel.platform}
                delay={i * 120}
                variant={i === 0 ? "left" : "right"}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl bg-navy p-7 text-white ring-1 ring-navy/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(11,31,58,0.55)]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gold/15 blur-2xl transition group-hover:bg-gold/25"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    {channel.platform}
                  </p>
                  <h3 className="mt-4 font-display text-2xl tracking-tight">{channel.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{channel.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
                    {channel.cta}
                    <span aria-hidden className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

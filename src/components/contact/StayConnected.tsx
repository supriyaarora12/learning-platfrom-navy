import { contactStayConnected } from "@/content/contact";
import { site } from "@/content/site";
import { SocialIcon, socialItems } from "@/components/contact/SocialLinks";
import { Container } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function StayConnected() {
  return (
    <section className="relative overflow-hidden section-pad bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-0 wave-fade" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-navy-mid/80 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Community
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              {contactStayConnected.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {contactStayConnected.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialItems.map((item, i) => (
            <Reveal key={item.key} delay={i * 70}>
              <PointerCard
                as="a"
                href={site.social[item.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 text-navy shadow-[0_16px_40px_-28px_rgba(11,31,58,0.35)] hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_rgba(201,162,39,0.35)]"
              >
                <span className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foam text-navy transition group-hover:bg-gold group-hover:text-navy-deep">
                  <SocialIcon name={item.key} className="h-5 w-5" />
                </span>
                <span className="relative z-[1] min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-display text-xl text-navy">{item.label}</span>
                    <span aria-hidden className="text-gold transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs font-medium text-muted">{item.handle}</span>
                  <span className="mt-2 block text-sm text-muted">{item.blurb}</span>
                  <span className="mt-3 inline-flex rounded-full bg-foam px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy ring-1 ring-line transition group-hover:bg-gold/25 group-hover:ring-gold/40">
                    Follow us
                  </span>
                </span>
              </PointerCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-white/50">
            New posts on exams, sponsorships, and batch updates — follow the channels you use most.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

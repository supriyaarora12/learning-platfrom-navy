import Link from "next/link";
import { freeToolsPreview } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

export function FreeToolsPreview() {
  return (
    <section className="section-pad bg-mist/60">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Free tools"
            title={freeToolsPreview.title}
            subtitle={freeToolsPreview.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {freeToolsPreview.items.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 90} variant="up">
              <PointerCard
                as="article"
                className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(11,31,58,0.35)] ring-1 ring-line hover:shadow-[0_28px_60px_-28px_rgba(11,31,58,0.45)]"
              >
                <h3 className="relative z-[1] font-display text-xl text-navy">{tool.title}</h3>
                <p className="relative z-[1] mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {tool.body}
                </p>
                <Link
                  href={tool.href}
                  className="relative z-[1] mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-mid"
                >
                  {tool.cta}
                </Link>
              </PointerCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180}>
          <p className="mt-6 text-xs text-muted">{freeToolsPreview.disclaimer}</p>
        </Reveal>
      </Container>
    </section>
  );
}

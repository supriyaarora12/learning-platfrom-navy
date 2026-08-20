import { beyondCourses } from "@/content/how-it-works";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PointerCard } from "@/components/ui/PointerCard";
import { Reveal } from "@/components/ui/Reveal";

const icons = ["◈", "◎", "▣", "◇", "✦", "◉"];

export function BeyondCourses() {
  return (
    <section className="section-pad bg-mist/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={beyondCourses.eyebrow}
            title={beyondCourses.title}
            subtitle={beyondCourses.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beyondCourses.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <PointerCard
                as="article"
                className="group flex h-full gap-4 rounded-2xl border border-line bg-white p-5 hover:border-navy/25 hover:shadow-[0_18px_40px_-28px_rgba(11,31,58,0.35)]"
              >
                <div className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foam text-lg text-gold transition group-hover:bg-navy group-hover:text-gold-soft">
                  {icons[i % icons.length]}
                </div>
                <div className="relative z-[1]">
                  <h3 className="font-display text-lg text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

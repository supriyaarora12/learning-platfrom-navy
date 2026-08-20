import { homeResults } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Results() {
  return (
    <section className="section-pad bg-navy text-white">
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="Results"
            title={homeResults.title}
            subtitle={homeResults.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeResults.items.map((item, i) => (
            <Reveal key={item.name + item.detail} delay={i * 70} variant="scale">
              <article className="rounded-lg bg-white/5 p-5 ring-1 ring-white/10 transition duration-300 hover:bg-white/10 hover:ring-gold/40">
                <h3 className="font-display text-xl text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-gold-soft">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

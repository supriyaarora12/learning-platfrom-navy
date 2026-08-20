import { whyUs } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section className="section-pad bg-foam">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why choose us" title={whyUs.title} subtitle={whyUs.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="border-t border-navy/15 pt-5 transition duration-300 hover:border-gold">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

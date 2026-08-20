import { homeTestimonials } from "@/content/home";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Stories"
            title={homeTestimonials.title}
            subtitle={homeTestimonials.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeTestimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 100} variant="up">
              <blockquote className="flex h-full flex-col border-l-2 border-gold bg-foam/80 px-5 py-6 transition duration-300 hover:bg-foam">
                <p className="flex-1 text-sm leading-relaxed text-ink/90">“{item.quote}”</p>
                <footer className="mt-6">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

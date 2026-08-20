import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section-pad bg-foam">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Coming next</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-navy">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <Link href="/contact" className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">
            Enquire now
          </Link>
        </div>
      </Container>
    </section>
  );
}

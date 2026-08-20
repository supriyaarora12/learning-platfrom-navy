import { recruitmentProcess } from "@/content/how-it-works";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function StepIcon({ type }: { type: string }) {
  const common = "h-7 w-7";
  if (type === "profile") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M5 19c1.8-3.2 4-4.8 7-4.8s5.2 1.6 7 4.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "interview") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 19h8M12 16v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.1L12 15.8 7.1 18l.9-5.1L4 9l5.6-1.1L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RecruitmentProcess() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={recruitmentProcess.eyebrow}
            title={recruitmentProcess.title}
            subtitle={recruitmentProcess.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {recruitmentProcess.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-foam/50 p-6">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    item.tone === "gold"
                      ? "bg-gold/25 text-navy"
                      : item.tone === "foam"
                        ? "bg-white text-navy ring-1 ring-line"
                        : "bg-navy text-gold-soft"
                  }`}
                >
                  <StepIcon type={item.icon} />
                </div>
                <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {item.badges.map((badge) => (
                    <li key={badge}>
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                          item.tone === "gold"
                            ? "bg-gold/20 text-navy"
                            : item.tone === "foam"
                              ? "bg-white text-navy ring-1 ring-line"
                              : "bg-navy/5 text-navy"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.tone === "gold" ? "bg-gold" : "bg-navy"
                          }`}
                        />
                        {badge}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

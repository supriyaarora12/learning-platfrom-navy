export function ResultEmptyState({
  title,
  body,
  steps,
  compact = false,
}: {
  title: string;
  body: string;
  steps: string[];
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex h-full min-h-[200px] flex-col justify-center">
        <div className="rounded-xl border border-dashed border-navy/15 bg-white/80 px-4 py-6 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="font-display text-lg text-navy">{title}</p>
          <p className="mx-auto mt-1.5 max-w-[220px] text-xs leading-relaxed text-muted">{body}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {steps.map((step, i) => (
              <span
                key={step}
                className="rounded-full bg-foam px-2.5 py-1 text-[10px] font-semibold text-navy/70"
              >
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[280px] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-navy/20 bg-white/70 px-6 py-10 text-center">
        <div className="relative mb-5 flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 animate-pulse rounded-full bg-gold/20" />
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold-soft">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <p className="font-display text-xl text-navy">{title}</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{body}</p>
      </div>

      <ol className="mt-5 space-y-2">
        {steps.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-3 rounded-lg bg-white/80 px-3 py-2.5 text-sm text-navy/80 ring-1 ring-line"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foam text-[11px] font-bold text-gold">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

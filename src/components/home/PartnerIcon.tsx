/** Simple monogram + ship mark for partner cards (no external logo assets). */
export function PartnerIcon({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-[11px] font-bold tracking-wide text-gold-soft shadow-sm ${className}`}
      aria-hidden
    >
      {initials || (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M3 18h18l-1.2-2.4A3 3 0 0 0 17.1 14H6.9a3 3 0 0 0-2.7 1.6L3 18Zm2.5-5.5 1.2-6.2A2 2 0 0 1 8.7 5h6.6a2 2 0 0 1 2 1.3l1.2 6.2H5.5ZM11 3h2v2h-2V3Z" />
        </svg>
      )}
    </span>
  );
}

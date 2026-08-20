/** Soft floating orbs for page heroes — ambient motion, no layout impact. */
export function HeroOrbs() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl orb-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-navy-mid/80 blur-3xl orb-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-2xl orb-pulse"
        aria-hidden
      />
    </>
  );
}

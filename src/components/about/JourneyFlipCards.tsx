"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { aboutGallery } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STAGGER_MS = 220;
const CARD_KEYS = aboutGallery.cards.map((c) => c.key);

function staggerFlip(
  keys: string[],
  open: boolean,
  setContentUp: Dispatch<SetStateAction<Record<string, boolean>>>,
  onDone?: () => void,
) {
  const timers: number[] = [];
  keys.forEach((key, i) => {
    timers.push(
      window.setTimeout(() => {
        setContentUp((prev) => ({ ...prev, [key]: open }));
        if (onDone && i === keys.length - 1) {
          window.setTimeout(onDone, STAGGER_MS);
        }
      }, i * STAGGER_MS),
    );
  });
  return () => timers.forEach((t) => window.clearTimeout(t));
}

export function JourneyFlipCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRan = useRef(false);
  const waveCleanup = useRef<(() => void) | null>(null);
  const [contentUp, setContentUp] = useState<Record<string, boolean>>({});
  const [introDone, setIntroDone] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [pinnedClosed, setPinnedClosed] = useState<Record<string, boolean>>({});

  function runWave(keys: string[], open: boolean, onDone?: () => void) {
    waveCleanup.current?.();
    waveCleanup.current = staggerFlip(keys, open, setContentUp, onDone);
  }

  // First time into view → open 1 → 2 → 3 → 4
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const next: Record<string, boolean> = {};
      CARD_KEYS.forEach((k) => {
        next[k] = true;
      });
      setContentUp(next);
      setIntroDone(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || introRan.current) return;
        introRan.current = true;
        runWave(CARD_KEYS, true, () => setIntroDone(true));
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      waveCleanup.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  function openSection() {
    if (!introDone) return;
    setHoverKey(null);
    setPinnedClosed({});
    runWave(CARD_KEYS, true);
  }

  function closeSection() {
    if (!introDone) return;
    setHoverKey(null);
    setPinnedClosed({});
    // Close reverse: 4 → 3 → 2 → 1
    runWave([...CARD_KEYS].reverse(), false);
  }

  function cardShowsContent(key: string) {
    if (hoverKey === key) return false;
    if (pinnedClosed[key]) return false;
    return !!contentUp[key];
  }

  function onCardClick(key: string) {
    if (!introDone || !contentUp[key]) return;
    setPinnedClosed((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy py-14 text-white lg:py-16"
      onMouseEnter={openSection}
      onMouseLeave={closeSection}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M-20 420 C 180 280, 320 520, 520 360 S 820 180, 1100 300 S 1280 480, 1400 360"
          fill="none"
          stroke="rgba(232,197,71,0.55)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M-40 180 C 200 80, 400 260, 640 140 S 980 40, 1250 160"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {aboutGallery.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              {aboutGallery.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
              {aboutGallery.subtitle}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Opens on view · hover card to close · leave section closes 4→1
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {aboutGallery.cards.map((card, i) => {
            const showContent = cardShowsContent(card.key);
            return (
              <Reveal key={card.key} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => onCardClick(card.key)}
                  onMouseEnter={() => {
                    if (introDone) setHoverKey(card.key);
                  }}
                  onMouseLeave={() => setHoverKey(null)}
                  aria-pressed={showContent}
                  aria-label={`${card.title} — flip card`}
                  className={`journey-flip relative mx-auto block h-[340px] w-full max-w-[260px] lg:h-[380px] ${
                    showContent ? "is-flipped" : ""
                  }`}
                  style={{ transform: `rotateZ(${i % 2 === 0 ? -2 : 2}deg)` }}
                >
                  <div className="journey-flip-inner relative h-full w-full">
                    <div className="journey-flip-face journey-flip-front absolute inset-0 overflow-hidden rounded-2xl border-[3px] border-white bg-navy-deep shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)]">
                      <div className="absolute inset-3 rounded-xl border border-gold/40" />
                      <div className="absolute inset-5 rounded-lg border border-dashed border-white/20" />
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(232,197,71,0.12) 10px, rgba(232,197,71,0.12) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.06) 10px, rgba(255,255,255,0.06) 11px)",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-navy shadow-[0_0_30px_rgba(201,162,39,0.35)]">
                          <span className="font-display text-3xl text-gold-soft">{card.mark}</span>
                          <span
                            className="absolute -inset-2 rotate-45 rounded-md border border-gold/35"
                            aria-hidden
                          />
                        </div>
                      </div>
                      <p className="absolute inset-x-0 bottom-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                        {card.title}
                      </p>
                    </div>

                    <div className="journey-flip-face journey-flip-back absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-5 text-navy shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)]">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-bold uppercase tracking-[0.14em]">{card.title}</p>
                        <span className="font-display text-2xl leading-none text-navy/80">{card.mark}</span>
                      </div>
                      <ul className="mt-5 flex-1 space-y-0">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="border-b border-dotted border-navy/20 py-2.5 text-left text-sm text-navy/80 last:border-b-0"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex rotate-180 items-start justify-between gap-2 opacity-70">
                        <p className="text-xs font-bold uppercase tracking-[0.14em]">{card.title}</p>
                        <span className="font-display text-2xl leading-none">{card.mark}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

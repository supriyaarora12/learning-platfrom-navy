"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { homeTestimonials } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";

const stories = homeTestimonials.items;
const AUTO_MS = 3000;
const INTRO_STAGGER_MS = 420;
const VISIBLE = 3;

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRan = useRef(false);
  const touchX = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [enteredCount, setEnteredCount] = useState(0);

  const total = stories.length;
  const current = stories[active];

  const go = useCallback(
    (dir: -1 | 1) => {
      setPlaying(false);
      setActive((i) => (i + dir + total) % total);
    },
    [total],
  );

  const jump = (i: number) => {
    setPlaying(false);
    setActive(i);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.28 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Intro: each new card peeks in on the right, then smoothly becomes main (no jump)
  useEffect(() => {
    if (!inView || introRan.current) return;
    introRan.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setEnteredCount(total);
      setActive(0);
      setIntroDone(true);
      return;
    }

    const timers: number[] = [];
    setEnteredCount(1);
    setActive(0);

    for (let i = 1; i < total; i++) {
      // 1) new card appears as right-side peek (sits next to current)
      timers.push(
        window.setTimeout(() => {
          setEnteredCount(i + 1);
        }, i * INTRO_STAGGER_MS),
      );
      // 2) then promote it to main — previous eases left, no fluctuation
      timers.push(
        window.setTimeout(
          () => {
            setActive(i);
          },
          i * INTRO_STAGGER_MS + 200,
        ),
      );
    }
    timers.push(
      window.setTimeout(
        () => {
          setActive(0);
          setIntroDone(true);
        },
        total * INTRO_STAGGER_MS + 400,
      ),
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (!introDone || playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [go, playing, active, introDone]);

  const progress = ((active + 1) / total) * 100;

  /**
   * Stable list of cards to paint. During intro only show entered ones.
   * Position via CSS transform only — previous cards slide left gently, new one eases in from right.
   */
  const painted = stories
    .map((item, index) => {
      if (!introDone && index >= enteredCount) return null;

      // offset from active: 0 = main, 1 = next peek, 2 = far peek, negative = left/off
      let offset = (index - active + total) % total;
      if (offset > total / 2) offset -= total;

      // Only keep main + peeks to the right (and briefly the one sliding out left)
      if (offset < -1 || offset > VISIBLE - 1) return null;

      return { item, index, offset };
    })
    .filter(Boolean) as { item: (typeof stories)[number]; index: number; offset: number }[];

  function cardStyle(offset: number): CSSProperties {
    // Smooth travel-style stack: main left-of-stack, peeks cascade to the right
    if (offset <= -1) {
      return {
        transform: "translateX(-28%) scale(0.92)",
        opacity: 0,
        zIndex: 5,
        width: "66%",
        maxWidth: 300,
        height: "100%",
        right: "28%",
      };
    }
    if (offset === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        width: "66%",
        maxWidth: 300,
        height: "100%",
        right: "28%",
      };
    }
    if (offset === 1) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 0.95,
        zIndex: 20,
        width: "17%",
        maxWidth: 100,
        height: "90%",
        right: "12%",
      };
    }
    // offset >= 2 — enter from further right
    return {
      transform: offset > 2 ? "translateX(40%) scale(0.96)" : "translateX(0) scale(1)",
      opacity: offset > 2 ? 0 : 0.8,
      zIndex: 10,
      width: "13%",
      maxWidth: 78,
      height: "80%",
      right: "0%",
    };
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[78svh] min-h-[520px] max-h-[720px] overflow-hidden text-white"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 45) return;
        if (!introDone) return;
        go(dx < 0 ? 1 : -1);
      }}
    >
      <Image
        src={homeTestimonials.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy-deep/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/55 to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-8 left-3 top-8 z-20 hidden flex-col items-center md:flex lg:left-5">
        <div className="relative flex flex-1 flex-col items-center justify-between py-2">
          <span className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-white/25" aria-hidden />
          {stories.map((item, i) => {
            const on = i === active;
            const revealed = i < enteredCount;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => introDone && jump(i)}
                className={`relative z-[1] flex items-center justify-center rounded-full transition-all duration-500 ${
                  !revealed
                    ? "h-1.5 w-1.5 bg-white/20"
                    : on
                      ? "h-8 w-8 bg-white text-[10px] font-bold text-navy shadow-lg"
                      : "h-2 w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Story ${i + 1}`}
                aria-current={on}
              >
                {on && revealed ? String(i + 1).padStart(2, "0") : null}
              </button>
            );
          })}
        </div>
        <p
          className="mt-2 text-[10px] font-semibold tracking-[0.18em] text-white/50"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="container-page flex flex-1 flex-col justify-center gap-8 py-10 md:flex-row md:items-center md:justify-between md:gap-6 md:pl-14 lg:gap-10 lg:pl-16">
          <div key={current.name} className="max-w-md animate-[hero-rise_0.5s_cubic-bezier(0.22,1,0.36,1)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Stories</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              {current.name.split(" ")[0].toUpperCase()}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{current.quote}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold-soft">
              {current.role}
            </p>
            <div className="mt-5">
              <ButtonLink href="/blog" className="!rounded-full">
                Explore →
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex h-[360px] w-full max-w-xl items-end justify-end overflow-hidden sm:h-[400px] md:w-[52%] lg:h-[420px] lg:max-w-xl">
            {painted.map(({ item, index, offset }) => {
              const isActive = offset === 0;
              const style = cardStyle(offset);

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    if (!isActive && introDone) jump(index);
                  }}
                  className="absolute bottom-0 overflow-hidden rounded-2xl text-left ring-1 ring-white/30 will-change-transform"
                  style={{
                    ...style,
                    transition:
                      "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), width 0.55s cubic-bezier(0.22, 1, 0.36, 1), height 0.55s cubic-bezier(0.22, 1, 0.36, 1), right 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease, max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  aria-current={isActive}
                  aria-label={item.name}
                >
                  {isActive && playing ? (
                    <>
                      <iframe
                        title={`${item.name} story video`}
                        src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlaying(false);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setPlaying(false);
                          }
                        }}
                        className="absolute right-3 top-3 z-20 rounded-full bg-navy-deep/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/30 backdrop-blur-sm"
                        aria-label="Stop video"
                      >
                        Stop
                      </span>
                    </>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                      sizes={isActive ? "300px" : "100px"}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-black/10" />

                  {isActive && !playing && (
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlaying(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          setPlaying(true);
                        }
                      }}
                      className="absolute inset-0 z-10 flex items-center justify-center"
                      aria-label={`Play ${item.name} clip`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy-deep ring-4 ring-white/30">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  )}

                  <div
                    className={`absolute inset-x-0 bottom-0 z-[1] ${
                      isActive ? "p-3.5" : "flex h-full items-end justify-center p-2"
                    }`}
                  >
                    {isActive ? (
                      <>
                        <div className="mb-2 flex gap-1">
                          {stories.map((_, di) => (
                            <span
                              key={di}
                              className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                                di === index ? "bg-white" : "bg-white/35"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="font-display text-base leading-tight sm:text-lg">{item.name}</p>
                      </>
                    ) : (
                      <p
                        className="font-display text-xs text-white/90"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {item.name}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="container-page relative z-10 flex items-center justify-between gap-4 pb-6 md:pl-14 lg:pl-16">
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
            <button
              type="button"
              onClick={() => introDone && go(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => introDone && go(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
            >
              ›
            </button>
          </div>

          <div className="ml-auto flex w-36 items-center gap-3 text-[11px] font-semibold tracking-[0.14em] text-white/65 sm:w-44">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className="relative h-px flex-1 overflow-hidden bg-white/25">
              <span
                className="absolute inset-y-0 left-0 bg-white transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

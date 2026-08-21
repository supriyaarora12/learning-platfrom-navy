"use client";

import { useEffect, useRef, useState } from "react";
import { homeStats } from "@/content/home";
import { Container } from "@/components/ui/Container";

function parseStat(value: string) {
  const compact = value.replace(/,/g, "");
  const match = compact.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value, decimals: 0 };
  const num = match[1];
  return {
    target: Number(num),
    suffix: match[2] ?? "",
    decimals: num.includes(".") ? num.split(".")[1].length : 0,
  };
}

function StatValue({ value, active }: { value: string; active: boolean }) {
  const { target, suffix, decimals } = parseStat(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) {
      setN(0);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  const display =
    decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-IN");

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % homeStats.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  function go(dir: -1 | 1) {
    setActiveIndex((i) => (i + dir + homeStats.length) % homeStats.length);
  }

  return (
    <div
      className="relative z-[1] w-full pb-6 pt-8 sm:pb-8 sm:pt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;
        go(dx < 0 ? 1 : -1);
      }}
    >
      <Container>
        <div className="-mx-4 flex items-stretch gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:gap-3 sm:overflow-visible sm:px-0 lg:gap-4">
          {homeStats.map((stat, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={stat.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-pressed={active}
                aria-label={`${stat.value} ${stat.label}`}
                className={`group relative flex h-[168px] shrink-0 flex-col text-left transition-[flex,background-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[175px] sm:shrink ${
                  active
                    ? "w-[72%] flex-none rounded-xl bg-white p-3.5 text-navy shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)] sm:w-auto sm:flex-[1.35] sm:p-4"
                    : "w-[38%] flex-none rounded-xl bg-white/12 p-3 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-white/18 sm:w-auto sm:flex-1"
                }`}
              >
                <span
                  className={`mb-2 flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold ${
                    active ? "bg-navy text-gold-soft" : "bg-white/15 text-gold-soft"
                  }`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p
                  className={`font-display tracking-tight ${
                    active ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {active ? (
                    <StatValue value={stat.value} active />
                  ) : (
                    stat.value
                  )}
                </p>

                <p
                  className={`mt-1 text-xs font-semibold sm:text-sm ${
                    active ? "text-navy" : "text-white/90"
                  }`}
                >
                  {stat.label}
                </p>

                <div className="mt-auto pt-2">
                  {active ? (
                    <>
                      <div className="mb-2 h-px bg-line" aria-hidden />
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted sm:text-[13px]">
                        {stat.body}
                      </p>
                    </>
                  ) : (
                    <p className="line-clamp-2 text-[11px] leading-relaxed text-white/55">
                      Tap to expand
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex h-0.5 flex-1 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width: `${((activeIndex + 1) / homeStats.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous stat"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-deep/70 text-white ring-1 ring-white/25 transition hover:bg-navy-deep"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next stat"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-deep/70 text-white ring-1 ring-white/25 transition hover:bg-navy-deep"
            >
              ›
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

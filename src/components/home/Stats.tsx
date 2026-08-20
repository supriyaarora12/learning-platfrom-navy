"use client";

import { useEffect, useRef, useState } from "react";
import { homeStats } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

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
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }

    const duration = 1100;
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
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b border-line bg-white">
      <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:gap-4">
        {homeStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} variant="up">
            <div className="text-center md:text-left">
              <p className="font-display text-3xl tracking-tight text-navy sm:text-4xl">
                <StatValue value={stat.value} active={active} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

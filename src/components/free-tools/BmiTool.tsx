"use client";

import { FormEvent, useState } from "react";
import { ResultEmptyState } from "@/components/free-tools/ResultEmptyState";
import { ButtonLink } from "@/components/ui/ButtonLink";

function bandFor(bmi: number) {
  if (bmi < 18.5) {
    return {
      label: "Below typical band",
      detail: "Often considered underweight for Merchant Navy medical screening.",
      tone: "review" as const,
      pct: Math.min(35, (bmi / 18.5) * 35),
    };
  }
  if (bmi <= 25) {
    return {
      label: "Within common fitness band",
      detail: "Common institute band is roughly 18.5–25 — still subject to full medical.",
      tone: "ok" as const,
      pct: 35 + ((bmi - 18.5) / (25 - 18.5)) * 40,
    };
  }
  if (bmi <= 30) {
    return {
      label: "Above common band",
      detail: "May need attention before a sponsorship / DG medical.",
      tone: "review" as const,
      pct: 75 + ((bmi - 25) / 5) * 15,
    };
  }
  return {
    label: "Well above common band",
    detail: "Likely medical scrutiny. Speak with a counsellor and certified examiner.",
    tone: "review" as const,
    pct: 95,
  };
}

export function BmiTool() {
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const h = Number(cm) / 100;
    const w = Number(kg);
    if (!h || !w || h <= 0) return;
    setBmi(Math.round((w / (h * h)) * 10) / 10);
  }

  const band = bmi != null ? bandFor(bmi) : null;
  const hasResult = bmi != null && band != null;

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 sm:p-6"
      >
        <h3 className="font-display text-xl text-navy sm:text-2xl">Calculate BMI</h3>
        <p className="mt-1 text-sm text-muted">Quick self-check — not a medical certificate.</p>

        <div className="mt-4 grid flex-1 grid-cols-2 gap-3 content-start">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-navy">Height (cm)</span>
            <input
              type="number"
              min={120}
              max={230}
              required
              value={cm}
              onChange={(e) => {
                setCm(e.target.value);
                setBmi(null);
              }}
              className="w-full rounded-md border border-line bg-foam px-3 py-2 outline-none focus:border-navy"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-navy">Weight (kg)</span>
            <input
              type="number"
              min={30}
              max={200}
              step={0.1}
              required
              value={kg}
              onChange={(e) => {
                setKg(e.target.value);
                setBmi(null);
              }}
              className="w-full rounded-md border border-line bg-foam px-3 py-2 outline-none focus:border-navy"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
        >
          Calculate my BMI
        </button>
      </form>

      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-foam/70 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl text-navy sm:text-2xl">Your result</h3>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 ${
              hasResult ? "bg-gold/25 text-navy" : "bg-navy/5 text-muted"
            }`}
          >
            {hasResult ? "Ready" : "Waiting"}
          </span>
        </div>

        <div className="relative mt-4 min-h-[220px] flex-1">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              hasResult
                ? "pointer-events-none -translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <ResultEmptyState
              compact
              title="BMI result locked"
              body="Add height & weight, then calculate."
              steps={["Height cm", "Weight kg", "Calculate", "See band"]}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-out ${
              hasResult
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
            }`}
          >
            {hasResult && band ? (
              <div className="animate-[hero-rise_0.45s_ease_both]">
                <p className="font-display text-4xl text-navy sm:text-5xl">{bmi}</p>
                <p className="mt-0.5 text-xs text-muted">Body Mass Index</p>

                <div className="mt-4">
                  <div className="mb-1.5 flex justify-between text-[10px] font-semibold uppercase tracking-wide text-muted">
                    <span>Under</span>
                    <span className="text-gold">Ideal</span>
                    <span>Over</span>
                  </div>
                  <div className="relative h-2.5 overflow-hidden rounded-full bg-white ring-1 ring-line">
                    <div className="absolute inset-y-0 left-[35%] right-[25%] bg-gold/35" />
                    <div
                      className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy ring-2 ring-gold-soft transition-all duration-500"
                      style={{ left: `${band.pct}%` }}
                    />
                  </div>
                </div>

                <p
                  className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    band.tone === "ok" ? "bg-gold/25 text-navy" : "bg-navy/10 text-navy"
                  }`}
                >
                  {band.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{band.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ButtonLink href="/contact" className="!py-2 text-xs">
                    Ask counsellor
                  </ButtonLink>
                  <ButtonLink href="#colour-vision" variant="ghost" className="!py-2 text-xs">
                    Colour vision
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

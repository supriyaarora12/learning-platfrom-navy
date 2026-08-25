"use client";

import { useMemo, useState } from "react";
import { colourPlates } from "@/content/free-tools";
import { ResultEmptyState } from "@/components/free-tools/ResultEmptyState";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Dot = { cx: number; cy: number; r: number; fill: string };

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildPlateDots(seed: number, digitColor: string, bgA: string, bgB: string): Dot[] {
  const rand = mulberry32(seed);
  const dots: Dot[] = [];
  for (let i = 0; i < 165; i++) {
    const angle = rand() * Math.PI * 2;
    const radius = Math.sqrt(rand()) * 46;
    dots.push({
      cx: 50 + Math.cos(angle) * radius,
      cy: 50 + Math.sin(angle) * radius,
      r: 1.5 + rand() * 2,
      fill: rand() > 0.45 ? bgA : bgB,
    });
  }
  // Soft accent dots around the numeral band (support, don't bury the number)
  for (let i = 0; i < 36; i++) {
    dots.push({
      cx: 38 + rand() * 24,
      cy: 34 + rand() * 32,
      r: 1.4 + rand() * 1.6,
      fill: digitColor,
    });
  }
  return dots;
}

const plateThemes = [
  { digit: "#1b4332", bgA: "#e76f51", bgB: "#f4a261" },
  { digit: "#9b2226", bgA: "#606c38", bgB: "#a7c957" },
  { digit: "#0d1b2a", bgA: "#e9c46a", bgB: "#f4a261" },
  { digit: "#386641", bgA: "#bc4749", bgB: "#e76f51" },
];

/** Easy multiple-choice options — correct answer + close distractors */
function optionsFor(answer: string, plateIndex: number): string[] {
  const n = Number(answer);
  const pool = new Set<string>([answer]);
  const deltas = [1, -1, 2, -2, 3, 4, 5, 7];
  for (const d of deltas) {
    const v = n + d;
    if (v >= 0 && v <= 99) pool.add(String(v));
    if (pool.size >= 4) break;
  }
  while (pool.size < 4) pool.add(String((n + pool.size * 3) % 90));
  const arr = [...pool].slice(0, 4);
  // Stable shuffle by plate
  const rand = mulberry32(50 + plateIndex * 9);
  return arr.sort(() => rand() - 0.5);
}

function IshiharaPlate({ plateIndex, answer }: { plateIndex: number; answer: string }) {
  const theme = plateThemes[plateIndex % plateThemes.length];
  const dots = useMemo(
    () => buildPlateDots(100 + plateIndex * 17, theme.digit, theme.bgA, theme.bgB),
    [plateIndex, theme.bgA, theme.bgB, theme.digit],
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[220px]">
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-md" role="img" aria-label="Colour plate">
        <defs>
          <clipPath id={`plate-clip-${plateIndex}`}>
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="49" fill="#f8fafc" />
        <g clipPath={`url(#plate-clip-${plateIndex})`}>
          <circle cx="50" cy="50" r="48" fill="#f1faee" />
          {dots.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity={0.9} />
          ))}
          <text
            x="50"
            y="59"
            textAnchor="middle"
            fontSize="42"
            fontWeight="800"
            fill={theme.digit}
            opacity="0.9"
            letterSpacing="1"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {answer}
          </text>
        </g>
        <circle cx="50" cy="50" r="48" fill="none" stroke="#0b1f3a" strokeOpacity="0.12" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function ColourVisionTool() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  const plate = colourPlates[index];
  const choices = useMemo(
    () => (plate ? optionsFor(plate.answer, index) : []),
    [plate, index],
  );
  const progress = done ? 100 : started ? ((index + (selected ? 0.5 : 0)) / colourPlates.length) * 100 : 0;

  const score = useMemo(() => {
    return answers.reduce((acc, ans, i) => {
      return acc + (ans.trim() === colourPlates[i].answer ? 1 : 0);
    }, 0);
  }, [answers]);

  function pick(option: string) {
    setSelected(option);
  }

  function confirm() {
    if (!selected) return;
    const next = [...answers, selected];
    setAnswers(next);
    setSelected(null);
    if (index >= colourPlates.length - 1) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
    }
  }

  function reset() {
    setIndex(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
    setStarted(false);
  }

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl text-navy sm:text-2xl">Colour vision</h3>
            <p className="mt-1 text-sm text-muted">Tap the number you see — easy options.</p>
          </div>
          <span className="shrink-0 rounded-full bg-foam px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy/70">
            {done ? "Done" : started ? `${index + 1}/${colourPlates.length}` : "Ready"}
          </span>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foam ring-1 ring-line">
          <div
            className="h-full rounded-full bg-gradient-to-r from-navy to-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex flex-1 flex-col">
          {!started ? (
            <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
              <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-gold/30 via-navy/15 to-foam ring-1 ring-line" />
              <p className="font-display text-lg text-navy">4 easy plates</p>
              <p className="mt-1 max-w-xs text-xs text-muted">
                Choose from 4 options each time — no typing needed.
              </p>
              <button
                type="button"
                onClick={() => setStarted(true)}
                className="mt-5 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
              >
                Start colour test
              </button>
            </div>
          ) : !done && plate ? (
            <>
              <IshiharaPlate plateIndex={index} answer={plate.answer} />
              <p className="mt-3 text-center text-xs text-muted">
                What number do you see? Pick one option.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {choices.map((opt) => {
                  const on = selected === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(opt)}
                      className={`rounded-xl py-3 font-display text-2xl transition ${
                        on
                          ? "bg-navy text-white shadow-md scale-[1.02]"
                          : "bg-foam text-navy ring-1 ring-line hover:bg-white hover:ring-navy/25"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={!selected}
                onClick={confirm}
                className="mt-3 rounded-md bg-gold py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft disabled:opacity-40"
              >
                {index >= colourPlates.length - 1 ? "See result" : "Next plate →"}
              </button>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center py-4 text-center animate-[hero-rise_0.45s_ease_both]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Score</p>
              <p className="mt-1 font-display text-5xl text-navy">
                {score}
                <span className="text-xl text-muted">/{colourPlates.length}</span>
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {colourPlates.map((p, i) => {
                  const ok = answers[i]?.trim() === p.answer;
                  return (
                    <span
                      key={p.id}
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        ok ? "bg-gold/25 text-navy" : "bg-red-50 text-red-700/80"
                      }`}
                    >
                      {i + 1} {ok ? "✓" : "✗"}
                    </span>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-4 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
              >
                Retake test
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-foam/70 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl text-navy sm:text-2xl">Test status</h3>
          <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
            {!started ? "Waiting" : done ? "Finished" : "In progress"}
          </span>
        </div>

        <div className="relative mt-4 min-h-[220px] flex-1">
          {/* Empty */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              !started ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <ResultEmptyState
              compact
              title="Results unlock after the test"
              body="Start on the left — tap options, no typing."
              steps={["Start", "Pick number", "Next", "Score"]}
            />
          </div>

          {/* In progress */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              started && !done
                ? "opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <div className="flex h-full flex-col justify-center rounded-xl border border-dashed border-navy/15 bg-white/80 px-4 py-8 text-center">
              <p className="font-display text-lg text-navy">Keep going…</p>
              <p className="mt-2 text-sm text-muted">
                Plate <span className="font-semibold text-navy">{index + 1}</span> of{" "}
                {colourPlates.length}
              </p>
              <div className="mx-auto mt-5 flex gap-2">
                {colourPlates.map((p, i) => (
                  <span
                    key={p.id}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      i < index
                        ? "scale-110 bg-gold"
                        : i === index
                          ? "scale-125 bg-navy"
                          : "bg-line"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-5 text-xs text-muted">
                Tip: choose the number that stands out in the circle.
              </p>
            </div>
          </div>

          {/* Done */}
          <div
            className={`transition-all duration-500 ${
              done
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
            }`}
          >
            {done ? (
              <div className="animate-[hero-rise_0.45s_ease_both]">
                <div
                  className={`rounded-xl border p-4 ${
                    score === colourPlates.length ? "border-gold/40 bg-white" : "border-line bg-white"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    Screening summary
                  </p>
                  <p className="mt-1 font-display text-2xl text-navy">
                    {score === colourPlates.length ? "Clear on demo" : "Follow up advised"}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Score {score}/{colourPlates.length} on this educational set.
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Not a DG Shipping medical. Unsure? Get an approved colour-vision check early.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ButtonLink href="/contact" className="!py-2 text-xs">
                    Get guidance
                  </ButtonLink>
                  <ButtonLink href="/courses" variant="ghost" className="!py-2 text-xs">
                    Courses
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

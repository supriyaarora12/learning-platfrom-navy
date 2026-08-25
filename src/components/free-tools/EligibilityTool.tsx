"use client";

import { FormEvent, useMemo, useState } from "react";
import { eligibilityPrograms } from "@/content/free-tools";
import { ResultEmptyState } from "@/components/free-tools/ResultEmptyState";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Stream = "PCM" | "PCB" | "Commerce" | "Engineering" | "Other";

/** Platform form range — Merchant Navy aspirants; not program-specific caps */
const AGE_MIN = 15;
const AGE_MAX = 40;

export function EligibilityTool() {
  const [age, setAge] = useState("");
  const [stream, setStream] = useState<Stream>("PCM");
  const [marks, setMarks] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ageError, setAgeError] = useState("");

  function validateAge(value: string): string {
    if (value.trim() === "") return "Age is required.";
    const a = Number(value);
    if (!Number.isFinite(a) || !Number.isInteger(a)) {
      return "Enter a whole number for age.";
    }
    if (a < AGE_MIN || a > AGE_MAX) {
      return `Age must be between ${AGE_MIN} and ${AGE_MAX} years for Merchant Navy pathways.`;
    }
    return "";
  }

  const results = useMemo(() => {
    if (!submitted) return [];
    const a = Number(age);
    const m = Number(marks);
    if (!Number.isFinite(a) || !Number.isFinite(m)) return [];
    if (a < AGE_MIN || a > AGE_MAX) return [];

    return eligibilityPrograms.map((program) => {
      const ageOk = a >= program.minAge && a <= program.maxAge;
      const streamOk = (program.streams as readonly string[]).includes(stream);
      const marksOk = m >= program.minMarks;
      const pass = ageOk && streamOk && marksOk;
      return { program, pass, ageOk, streamOk, marksOk };
    });
  }, [age, stream, marks, submitted]);

  const passCount = results.filter((r) => r.pass).length;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validateAge(age);
    setAgeError(err);
    if (err) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 sm:p-6"
        noValidate
      >
        <h3 className="font-display text-xl text-navy sm:text-2xl">Check eligibility</h3>
        <p className="mt-1 text-sm text-muted">Indicative match for common pathways.</p>

        <div className="mt-4 grid flex-1 content-start gap-3">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-navy">Age (years)</span>
            <input
              type="number"
              min={AGE_MIN}
              max={AGE_MAX}
              step={1}
              inputMode="numeric"
              required
              value={age}
              aria-invalid={ageError ? true : undefined}
              aria-describedby={ageError ? "eligibility-age-error" : undefined}
              onChange={(e) => {
                const next = e.target.value;
                setAge(next);
                setSubmitted(false);
                if (ageError) setAgeError(validateAge(next));
              }}
              onBlur={() => {
                if (age.trim() !== "") setAgeError(validateAge(age));
              }}
              className={`w-full rounded-md border bg-foam px-3 py-2 outline-none focus:border-navy ${
                ageError ? "border-red-400" : "border-line"
              }`}
            />
            <span className="mt-1 block text-[11px] text-muted">
              Allowed range: {AGE_MIN}–{AGE_MAX} years
            </span>
            {ageError ? (
              <span id="eligibility-age-error" className="mt-1 block text-xs font-medium text-red-600">
                {ageError}
              </span>
            ) : null}
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-navy">Stream</span>
            <select
              value={stream}
              onChange={(e) => {
                setStream(e.target.value as Stream);
                setSubmitted(false);
              }}
              className="w-full rounded-md border border-line bg-foam px-3 py-2 outline-none focus:border-navy"
            >
              <option value="PCM">PCM</option>
              <option value="PCB">PCB</option>
              <option value="Commerce">Commerce</option>
              <option value="Engineering">Engineering graduate</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-navy">Aggregate marks (%)</span>
            <input
              type="number"
              min={0}
              max={100}
              step={0.1}
              required
              value={marks}
              onChange={(e) => {
                setMarks(e.target.value);
                setSubmitted(false);
              }}
              className="w-full rounded-md border border-line bg-foam px-3 py-2 outline-none focus:border-navy"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
        >
          Check eligibility
        </button>
      </form>

      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-foam/70 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl text-navy sm:text-2xl">Results</h3>
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 ${
              submitted ? "bg-gold/25 text-navy" : "bg-navy/5 text-muted"
            }`}
          >
            {submitted ? `${passCount}/${results.length} fit` : "Waiting"}
          </span>
        </div>

        <div className="relative mt-4 min-h-[220px] flex-1">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              submitted
                ? "pointer-events-none translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <ResultEmptyState
              compact
              title="Results appear here"
              body="Fill the form, then check eligibility."
              steps={["Age", "Stream", "Marks %", "View matches"]}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-out ${
              submitted
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
            }`}
          >
            <ul className="space-y-2">
              {results.map(({ program, pass, ageOk, streamOk, marksOk }, i) => (
                <li
                  key={program.id}
                  className={`rounded-lg border bg-white p-3 transition ${
                    pass ? "border-gold/50" : "border-line"
                  }`}
                  style={{
                    transitionDelay: submitted ? `${i * 60}ms` : "0ms",
                    animation: submitted ? `hero-rise 0.4s ease both ${i * 60}ms` : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-navy">{program.name}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                        pass ? "bg-gold/25 text-navy" : "bg-navy/5 text-muted"
                      }`}
                    >
                      {pass ? "Fit" : "Review"}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <CheckChip ok={ageOk} label="Age" />
                    <CheckChip ok={streamOk} label="Stream" />
                    <CheckChip ok={marksOk} label="Marks" />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <ButtonLink href="/contact" className="!py-2 text-xs">
                Talk to counsellor
              </ButtonLink>
              <ButtonLink href="/courses" variant="ghost" className="!py-2 text-xs">
                See courses
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckChip({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
        ok ? "bg-foam text-navy" : "bg-red-50 text-red-700/80"
      }`}
    >
      {ok ? "✓" : "✗"} {label}
    </span>
  );
}

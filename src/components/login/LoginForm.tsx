"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { loginPage } from "@/content/login";
import { site } from "@/content/site";

export function LoginForm() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [remember, setRemember] = useState(false);
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  function onSendOtp(e: FormEvent) {
    e.preventDefault();
    if (mobile.replace(/\D/g, "").length < 10) {
      setMsg("Enter a valid 10-digit mobile number.");
      return;
    }
    setBusy(true);
    setMsg("");
    // ponytail: UI-only OTP until auth/LMS is wired
    window.setTimeout(() => {
      setBusy(false);
      setStep("otp");
      setMsg("OTP sent (demo). Enter any 6 digits to continue.");
    }, 600);
  }

  function onVerify(e: FormEvent) {
    e.preventDefault();
    if (otp.replace(/\D/g, "").length < 4) {
      setMsg("Enter the OTP you received.");
      return;
    }
    setBusy(true);
    setMsg("");
    window.setTimeout(() => {
      setBusy(false);
      setMsg("Login successful (demo). LMS redirect will plug in here.");
    }, 600);
  }

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <Link href="/" className="mb-8 flex flex-col items-center gap-2">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-display text-xl text-gold-soft shadow-md">
          SP
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
          {site.name}
        </span>
      </Link>

      <h1 className="text-center font-display text-2xl leading-snug tracking-tight text-navy sm:text-[1.65rem]">
        {loginPage.welcome}
      </h1>

      {step === "mobile" ? (
        <form onSubmit={onSendOtp} className="mt-8 space-y-5">
          <label className="block text-sm">
            <span className="mb-1.5 block font-semibold text-navy">
              {loginPage.mobileLabel}
              <span className="text-gold">*</span>
            </span>
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder={loginPage.mobilePlaceholder}
              className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-muted/70 focus:border-navy focus:ring-2 focus:ring-navy/10"
            />
          </label>

          <label className="flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-line text-navy accent-navy"
            />
            {loginPage.rememberMe}
          </label>

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy-mid disabled:opacity-60"
          >
            {busy ? "Sending…" : loginPage.sendOtp}
          </button>
        </form>
      ) : (
        <form onSubmit={onVerify} className="mt-8 space-y-5">
          <p className="text-center text-sm text-muted">
            OTP sent to <span className="font-semibold text-navy">{mobile}</span>
          </p>
          <label className="block text-sm">
            <span className="mb-1.5 block font-semibold text-navy">
              {loginPage.otpLabel}
              <span className="text-gold">*</span>
            </span>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={loginPage.otpPlaceholder}
              maxLength={6}
              className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-center text-lg tracking-[0.35em] text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/10"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy-mid disabled:opacity-60"
          >
            {busy ? "Verifying…" : loginPage.verifyOtp}
          </button>
          <button
            type="button"
            onClick={() => {
              setStep("mobile");
              setOtp("");
              setMsg("");
            }}
            className="w-full text-sm font-medium text-muted underline-offset-2 hover:text-navy hover:underline"
          >
            Change number
          </button>
        </form>
      )}

      {msg ? (
        <p className="mt-4 text-center text-sm text-navy/80">{msg}</p>
      ) : null}

      <p className="mt-8 text-center text-sm text-muted">
        {loginPage.noAccount}{" "}
        <Link
          href={loginPage.signUpHref}
          className="font-semibold text-navy-mid underline decoration-gold decoration-2 underline-offset-4"
        >
          {loginPage.signUp}
        </Link>
      </p>
    </div>
  );
}

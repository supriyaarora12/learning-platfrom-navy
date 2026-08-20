"use client";

import { FormEvent, useState } from "react";

const courses = [
  "IMUCET Complete",
  "DNS & Sponsorship",
  "Foundation Batch",
  "Crash Revision",
  "Gold Modules",
  "Target Batch",
  "Not sure yet",
];

export function ContactForm({ defaultCourse }: { defaultCourse?: string }) {
  const [sent, setSent] = useState(false);
  const initial =
    defaultCourse && courses.includes(defaultCourse) ? defaultCourse : "IMUCET Complete";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: client confirm until CRM/API is wired
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(11,31,58,0.4)] sm:p-8">
      <h2 className="font-display text-2xl text-navy">Send an enquiry</h2>
      <p className="mt-1 text-sm text-muted">We’ll get back on phone or email.</p>

      {sent ? (
        <p className="mt-10 py-8 text-center text-navy">
          Thanks — we&apos;ll reach out shortly on your phone or email.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <Field label="Full name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Mobile" name="mobile" type="tel" required />
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-navy">Course interest</span>
            <select
              name="course"
              defaultValue={initial}
              className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none focus:border-navy"
            >
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-navy">Message</span>
            <textarea
              name="message"
              rows={3}
              className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none focus:border-navy"
              placeholder="Tell us your exam target or year..."
            />
          </label>
          <button
            type="submit"
            className="mt-1 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition hover:bg-gold-soft"
          >
            Submit enquiry
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-navy">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-foam px-3 py-2.5 outline-none focus:border-navy"
      />
    </label>
  );
}

"use client";

import { useState } from "react";
import { howFaqs } from "@/content/how-it-works";

export function HowFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line rounded-xl bg-white ring-1 ring-line">
      {howFaqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-foam/60"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-medium text-navy">{item.q}</span>
              <span
                className={`mt-0.5 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

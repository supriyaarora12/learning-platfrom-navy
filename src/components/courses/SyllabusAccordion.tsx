"use client";

import { useState } from "react";
import type { Course } from "@/content/courses";

export function SyllabusAccordion({ syllabus }: { syllabus: Course["syllabus"] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line rounded-xl bg-white ring-1 ring-line">
      {syllabus.map((block, i) => {
        const isOpen = open === i;
        return (
          <div key={block.title} className="overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-foam/60"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-medium text-navy">{block.title}</span>
              <span
                className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
                <ul className="space-y-2 px-5 pb-5">
                  {block.topics.map((topic) => (
                    <li key={topic} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

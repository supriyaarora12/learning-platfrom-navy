"use client";

import Image from "next/image";
import { useState } from "react";
import type { Course } from "@/content/courses";

/** Rotating thumbnails from existing assets — keeps syllabus rows visual without new files */
const syllabusThumbs = [
  "/assets/why-seapath-learning.png",
  "/assets/why-seapath-career.png",
  "/assets/follow-learning.png",
  "/assets/why-seapath-mentors.png",
  "/assets/career-merchant-navy.png",
  "/assets/beyond-lms.png",
] as const;

export function SyllabusAccordion({ syllabus }: { syllabus: Course["syllabus"] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      {syllabus.map((block, i) => {
        const isOpen = open === i;
        const hours = Math.max(4, block.topics.length * 3);
        const thumb = syllabusThumbs[i % syllabusThumbs.length];

        return (
          <div key={block.title}>
            <button
              type="button"
              className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-foam/50 sm:gap-5 sm:px-5 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
                <Image
                  src={thumb}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-navy underline decoration-navy/25 underline-offset-4 sm:text-lg">
                  {block.title}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  Module {i + 1} · {hours} hours · {block.topics.length} topics
                </span>
              </span>

              <span
                className={`shrink-0 text-navy-mid transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                <ChevronDown />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="space-y-2.5 border-t border-line/70 bg-foam/40 px-4 py-4 pl-[5.75rem] sm:px-5 sm:pl-[8.25rem]">
                  {block.topics.map((topic) => (
                    <li key={topic} className="flex gap-2.5 text-sm text-muted">
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

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

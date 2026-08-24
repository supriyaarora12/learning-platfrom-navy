"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { aboutStoryGallery } from "@/content/about";

const TILES = [
  "min-h-[220px] sm:min-h-[240px] md:col-span-2 md:row-span-2 md:min-h-0",
  "min-h-[220px] md:row-span-2 md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
  "min-h-[160px] md:min-h-0",
];

function Tile({
  item,
  className,
}: {
  item: (typeof aboutStoryGallery)[number];
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);

  function start() {
    const v = videoRef.current;
    if (!v) return;
    setOn(true);
    v.muted = true;
    void v.play().catch(() => setOn(false));
  }

  function stop() {
    const v = videoRef.current;
    setOn(false);
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.25rem] bg-navy ${className}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      tabIndex={0}
      aria-label={`${item.label} — hover to play`}
    >
      <video
        ref={videoRef}
        src={item.clip}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Image
        src={item.image}
        alt=""
        fill
        className={`object-cover object-center transition duration-500 ${
          on ? "opacity-0" : "opacity-100 group-hover:scale-105"
        }`}
        sizes="(max-width: 768px) 50vw, 40vw"
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent ${
          on ? "opacity-50" : "opacity-100"
        }`}
        aria-hidden
      />
      {!on ? (
        <span
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg"
          aria-hidden
        >
          <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-navy" />
        </span>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
        <p className="font-display text-sm text-white sm:text-base">{item.label}</p>
        <p className="mt-0.5 text-[11px] text-white/70 sm:text-xs">{item.caption}</p>
      </div>
    </article>
  );
}

export function StoriesGallery() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 md:h-[720px] md:grid-cols-4 md:grid-rows-4 md:gap-3.5">
      {aboutStoryGallery.map((item, i) => (
        <Tile key={`${item.label}-${i}`} item={item} className={TILES[i] ?? "min-h-[180px]"} />
      ))}
    </div>
  );
}

"use client";

import {
  useCallback,
  useRef,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
};

/** Card with cursor-follow spotlight + light 3D tilt on mouse pass-by. */
export function PointerCard({
  children,
  className = "",
  as: Tag = "div",
  href,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = (x / r.width) * 100;
    const py = (y / r.height) * 100;
    const rx = (y / r.height - 0.5) * -10;
    const ry = (x / r.width - 0.5) * 12;

    el.style.setProperty("--mx", `${px}%`);
    el.style.setProperty("--my", `${py}%`);
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  }, []);

  return (
    <Tag
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`pointer-card ${className}`}
    >
      <span className="pointer-card-glow" aria-hidden />
      <span className="pointer-card-edge" aria-hidden />
      {children}
    </Tag>
  );
}

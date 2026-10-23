"use client";

import { useRef, type ElementType, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; as?: ElementType };

/**
 * Card with a cursor-following spotlight. Pointer position is written to --x / --y,
 * and the styles in globals.css (.spot) turn that into a glow, a lit border and a dim veil.
 * Touch: a tap lights the card at the tap point for a moment.
 */
export function SpotlightCard({ children, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const timer = useRef<number>(0);

  const place = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Tag
      ref={ref}
      className={`spot ${className}`}
      onPointerMove={(e: React.PointerEvent) => {
        if (e.pointerType !== "touch") place(e);
      }}
      onPointerDown={(e: React.PointerEvent) => {
        if (e.pointerType !== "touch") return;
        place(e);
        const el = ref.current;
        if (!el) return;
        el.setAttribute("data-lit", "true");
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => el.removeAttribute("data-lit"), 1800);
      }}
    >
      {children}
      <span className="spot-veil" aria-hidden="true" />
    </Tag>
  );
}

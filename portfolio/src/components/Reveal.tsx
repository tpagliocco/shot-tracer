"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; className?: string; as?: ElementType };

let observer: IntersectionObserver | null = null;
const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer?.unobserve(e.target); // trigger once
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
  }
  return observer;
};

/** Fades up once when scrolled into view. Pass delay (ms) to stagger siblings. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--delay": `${Math.min(delay, 480)}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setLight(root.getAttribute("data-theme") === "light");
    // Follow the system setting until the visitor makes an explicit choice.
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      root.setAttribute("data-theme", e.matches ? "light" : "dark");
      setLight(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = light ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: choice just won't persist */
    }
    setLight(!light);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={light}
      aria-label="Light mode"
      title="Toggle light mode"
      className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
    >
      {light ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

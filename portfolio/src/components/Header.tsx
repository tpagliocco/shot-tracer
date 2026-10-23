"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, recruiterLink, site } from "@/data/site";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(href);

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const onRecruiter = pathname.startsWith(recruiterLink.href);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/[0.08] bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-2 px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-full">
          <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-sm font-semibold text-accent" style={{ border: "1px solid rgb(var(--accent) / 0.35)" }}>
            {site.initials}
          </span>
          <span className="sr-only text-sm font-semibold sm:not-sr-only">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${active ? "bg-accent/10 text-accent" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href={recruiterLink.href}
            aria-current={onRecruiter ? "page" : undefined}
            className="inline-flex min-h-[44px] items-center rounded-full bg-accent px-3.5 text-sm font-semibold text-accent-fg shadow-soft transition hover:brightness-110 sm:px-5"
          >
            {recruiterLink.label}
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-muted hover:bg-ink/5 hover:text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-ink/[0.08] bg-bg px-4 pb-4 pt-2 lg:hidden">
        <ul className="flex flex-col">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium ${active ? "text-accent" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

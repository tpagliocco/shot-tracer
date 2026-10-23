import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { SmartLink } from "./SmartLink";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-ink/[0.08] bg-surface/60">
      <div className="mx-auto grid w-full max-w-page gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="text-lg font-semibold">
            {site.name}
          </Link>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.title}</p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
        </div>
        {footerLinks.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-sm font-semibold text-ink">{col.heading}</h2>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <SmartLink href={l.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-ink/[0.08]">
        <p className="mx-auto w-full max-w-page px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

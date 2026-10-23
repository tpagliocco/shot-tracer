import type { ReactNode } from "react";
import { SmartLink } from "./SmartLink";
import { ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  link,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  link?: { label: string; href: string };
}) {
  return (
    <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="h-section">{title}</h2>
        {intro && <p className="lede mt-4">{intro}</p>}
      </div>
      {link && (
        <SmartLink href={link.href} className="link group inline-flex min-h-[44px] items-center gap-1.5 whitespace-nowrap text-sm font-medium">
          {link.label} <ArrowIcon width={16} height={16} />
        </SmartLink>
      )}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede?: string; children?: ReactNode }) {
  return (
    <header className="section pb-6 pt-14 sm:pt-20">
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="h-display max-w-4xl text-[2.25rem] sm:text-5xl lg:text-6xl">{title}</h1>
        {lede && <p className="lede mt-5 max-w-2xl">{lede}</p>}
        {children}
      </Reveal>
    </header>
  );
}

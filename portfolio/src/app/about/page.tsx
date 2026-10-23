import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { SpotlightCard } from "@/components/SpotlightCard";
import { about } from "@/data/about";
import { nextSteps } from "@/data/nextSteps";

export const metadata: Metadata = { title: "About", description: "Short story, values and how I work." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={about.headline} />
      <section className="section pt-4" aria-label="Story">
        <Reveal className="max-w-prose space-y-5">
          {about.story.map((p) => (
            <p key={p} className="text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="section" aria-label="Values">
        <SectionHeading eyebrow="Values" title="What I hold myself to" />
        <ul className="grid gap-5 sm:grid-cols-2">
          {about.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 80}>
              <SpotlightCard className="h-full p-6">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section" aria-label="How I work">
        <SectionHeading eyebrow="How I work" title="Habits that make teams faster" />
        <ol className="grid gap-5 md:grid-cols-2">
          {about.howIWork.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 80} className="flex gap-4 rounded-card bg-surface p-6 hairline">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-semibold text-accent">{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-1 text-muted">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 max-w-prose text-muted">{about.outsideWork}</p>
      </section>
      <NextStep step={nextSteps.about} />
    </>
  );
}

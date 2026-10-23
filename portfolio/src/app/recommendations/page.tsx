import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Section";
import { SpotlightCard } from "@/components/SpotlightCard";
import { nextSteps } from "@/data/nextSteps";
import { recommendations } from "@/data/recommendations";

export const metadata: Metadata = { title: "Recommendations", description: "What colleagues and leaders say about working with me." };

export default function RecommendationsPage() {
  return (
    <>
      <PageHero eyebrow="Recommendations" title="In their words" lede="Shared with permission. Full references are available on request." />
      <section className="section pt-6" aria-label="Recommendations">
        <ul className="grid gap-5 lg:grid-cols-3">
          {recommendations.map((r, i) => (
            <Reveal as="li" key={r.quote} delay={i * 80}>
              <SpotlightCard as="figure" className="flex h-full flex-col p-6">
                <blockquote className="flex-1 text-lg leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="block text-muted">{r.role}</span>
                </figcaption>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </section>
      <NextStep step={nextSteps.recommendations} />
    </>
  );
}

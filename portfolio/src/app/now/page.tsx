import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Section";
import { SpotlightCard } from "@/components/SpotlightCard";
import { nextSteps } from "@/data/nextSteps";
import { now } from "@/data/now";

export const metadata: Metadata = { title: "Now", description: "What I am focused on at the moment." };

export default function NowPage() {
  return (
    <>
      <PageHero eyebrow="Now" title="What I am up to" lede={`${now.intro} Updated ${now.updated}.`} />
      <section className="section pt-6" aria-label="Current focus">
        <ul className="grid gap-5 sm:grid-cols-2">
          {now.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 80}>
              <SpotlightCard className="h-full p-6">
                <h2 className="eyebrow mb-2">{it.title}</h2>
                <p className="text-lg leading-relaxed">{it.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </section>
      <NextStep step={nextSteps.now} />
    </>
  );
}

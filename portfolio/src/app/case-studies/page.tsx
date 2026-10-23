import type { Metadata } from "next";
import Link from "next/link";
import { FlowStrip } from "@/components/FlowStrip";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Section";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ArrowIcon } from "@/components/icons";
import { caseStudies } from "@/data/caseStudies";
import { nextSteps } from "@/data/nextSteps";

export const metadata: Metadata = { title: "Case studies", description: "Deep dives into how I frame problems, make trade-offs and get results." };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case studies" title="How I think, in four deep dives" lede="Each one follows the same path: the question, how I reasoned, what we did and what I would change." />
      <section className="section pt-6" aria-label="Case study list">
        <ul className="space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 60}>
              <SpotlightCard as="article" className="group p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge">{c.kicker}</span>
                  <span className="text-xs text-muted">{c.readingTime} read</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <Link href={`/case-studies/${c.slug}/`} className="after:absolute after:inset-0 after:rounded-[18px] focus-visible:outline-offset-[-3px]">
                    {c.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-muted">{c.summary}</p>
                <div className="mt-6">
                  <FlowStrip steps={c.flow} label="Flow" />
                </div>
                <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent" aria-hidden="true">
                  Read the case study <ArrowIcon width={16} height={16} />
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </section>
      <NextStep step={nextSteps.caseStudies} />
    </>
  );
}

import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Section";
import { SmartLink } from "@/components/SmartLink";
import { ArrowIcon, DownloadIcon } from "@/components/icons";
import { roles } from "@/data/career";
import { nextSteps } from "@/data/nextSteps";
import { recruiterLink, site } from "@/data/site";

export const metadata: Metadata = { title: "Career", description: "Career timeline from engineer to Chief Product and Digital Officer." };

export default function CareerPage() {
  return (
    <>
      <PageHero eyebrow="Career" title="Twenty years, one thread: build products that last" lede="A timeline of roles, newest first. Short on time? The recruiter view has the whole story on one page.">
        <div className="mt-8 flex flex-wrap gap-3">
          <SmartLink href={recruiterLink.href} className="btn-primary">
            Open recruiter view <ArrowIcon width={18} height={18} />
          </SmartLink>
          <SmartLink href={site.cvFile} download className="btn-ghost">
            <DownloadIcon width={18} height={18} /> Download CV
          </SmartLink>
        </div>
      </PageHero>

      <section className="section pt-8" aria-label="Timeline">
        <ol className="relative ml-3 border-l border-ink/15 sm:ml-4">
          {roles.map((r, i) => (
            <Reveal as="li" key={r.company} delay={i * 60} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span aria-hidden="true" className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
              <p className="text-sm font-medium text-accent">{r.period}</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">{r.title}</h2>
              <p className="mt-1 text-muted">
                {r.company} · {r.location}
              </p>
              <p className="mt-3 max-w-prose">{r.summary}</p>
              <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-muted marker:text-accent">
                {r.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>
      <NextStep step={nextSteps.career} />
    </>
  );
}

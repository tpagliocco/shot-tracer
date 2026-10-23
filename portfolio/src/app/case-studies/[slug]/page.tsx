import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FlowStrip } from "@/components/FlowStrip";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { nextSteps } from "@/data/nextSteps";
import { getProject } from "@/data/projects";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const project = study.project ? getProject(study.project) : undefined;
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <article className="section pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/case-studies/" className="link">
            Case studies
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{study.title}</span>
        </nav>

        <Reveal>
          <span className="badge">{study.kicker}</span>
          <h1 className="h-display mt-5 max-w-4xl text-[2.25rem] sm:text-5xl lg:text-6xl">{study.title}</h1>
          <p className="lede mt-5 max-w-2xl">{study.summary}</p>
          <p className="mt-3 text-sm text-muted">{study.readingTime} read</p>
        </Reveal>

        <Reveal className="mt-10">
          <FlowStrip steps={study.flow} />
        </Reveal>

        <div className="mt-12 max-w-prose">
          <Reveal as="section" className="mb-10">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">Context</h2>
            {study.context.map((t) => (
              <p key={t} className="text-lg leading-relaxed">
                {t}
              </p>
            ))}
          </Reveal>
          {study.sections.map((s) => (
            <Reveal as="section" key={s.heading} className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight">{s.heading}</h2>
              {s.body.map((t) => (
                <p key={t} className="mb-4 text-lg leading-relaxed text-ink/90">
                  {t}
                </p>
              ))}
            </Reveal>
          ))}
          <Reveal as="section" className="rounded-card bg-surface p-6 hairline">
            <h2 className="mb-3 text-lg font-semibold">Takeaways</h2>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              {study.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <nav aria-label="Related" className="mt-12 grid gap-4 border-t border-ink/[0.08] pt-8 sm:grid-cols-2">
          {project && (
            <Link href={`/projects/${project.slug}/`} className="group rounded-card p-4 hairline hover:border-accent/50">
              <span className="text-xs text-muted">Related project</span>
              <span className="mt-1 flex items-center justify-between font-semibold">
                {project.title} <ArrowIcon width={16} height={16} />
              </span>
            </Link>
          )}
          <Link href={`/case-studies/${next.slug}/`} className="group rounded-card p-4 hairline hover:border-accent/50">
            <span className="text-xs text-muted">Next case study</span>
            <span className="mt-1 flex items-center justify-between font-semibold">
              {next.title} <ArrowIcon width={16} height={16} />
            </span>
          </Link>
        </nav>
      </article>
      <NextStep step={nextSteps.caseStudies} />
    </>
  );
}

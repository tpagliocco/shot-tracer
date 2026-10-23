import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Counter } from "@/components/Counter";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { SmartLink } from "@/components/SmartLink";
import { ArrowIcon, ExternalIcon } from "@/components/icons";
import { getCaseStudy } from "@/data/caseStudies";
import { nextSteps } from "@/data/nextSteps";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-ink/[0.08] py-10 md:grid-cols-[200px_1fr] md:gap-12">
      <h2 id={id} className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {title}
      </h2>
      <div aria-labelledby={id}>{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const study = project.caseStudy ? getCaseStudy(project.caseStudy) : undefined;

  return (
    <>
      <article className="section pt-10 sm:pt-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/projects/" className="link">
            Projects
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{project.title}</span>
        </nav>

        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge">{project.type}</span>
            <span className="text-sm text-muted">
              {project.status} · {project.year}
            </span>
          </div>
          <h1 className="h-display mt-5 max-w-4xl text-[2.25rem] sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="lede mt-5 max-w-2xl">{project.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full px-3 py-1 text-xs text-muted hairline">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12">
          <Block id="problem" title="Problem">
            {project.problem.map((t) => (
              <p key={t} className="mb-3 max-w-prose text-lg leading-relaxed">
                {t}
              </p>
            ))}
          </Block>

          <Block id="role" title="My role">
            <p className="text-lg font-medium">{project.role.title}</p>
            <p className="mt-2 max-w-prose text-muted">{project.role.scope}</p>
            <p className="mt-3 text-sm text-muted">Team: {project.role.team}</p>
          </Block>

          <Block id="approach" title="Approach">
            <ol className="max-w-prose space-y-3">
              {project.approach.map((t, n) => (
                <li key={t} className="flex gap-4 text-lg leading-relaxed">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-semibold text-accent">{n + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="decisions" title="Decisions">
            <ul className="grid gap-4 lg:grid-cols-2">
              {project.decisions.map((d) => (
                <li key={d.decision} className="rounded-card bg-surface p-5 hairline">
                  <h3 className="text-lg font-semibold">{d.decision}</h3>
                  <p className="mt-3 text-sm">
                    <span className="font-semibold text-accent">Why: </span>
                    <span className="text-muted">{d.why}</span>
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-accent">Trade-off: </span>
                    <span className="text-muted">{d.tradeoff}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="result" title="Result">
            <ul className="grid gap-3 sm:grid-cols-3">
              {project.results.map((r) => (
                <li key={r.label} className="rounded-card bg-surface p-5 hairline">
                  <p className="text-3xl font-semibold tracking-tightest">
                    <Counter value={r.value} prefix={r.prefix} suffix={r.suffix} />
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted">{r.label}</p>
                </li>
              ))}
            </ul>
            {project.resultsNote && <p className="mt-3 text-xs text-muted">{project.resultsNote}</p>}
          </Block>

          <Block id="links" title="Links">
            {project.links.length === 0 && !study ? (
              <p className="text-muted">No public links for this project.</p>
            ) : (
              <ul className="space-y-1">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <SmartLink href={l.href} className="link group inline-flex min-h-[44px] items-center gap-1.5 font-medium">
                      {l.label} {l.external ? <ExternalIcon /> : <ArrowIcon width={16} height={16} />}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            )}
          </Block>
        </div>

        <nav aria-label="More projects" className="mt-6 grid gap-4 border-t border-ink/[0.08] pt-8 sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}/`} className="rounded-card p-4 hairline hover:border-accent/50">
            <span className="text-xs text-muted">Previous</span>
            <span className="mt-1 block font-semibold">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}/`} className="rounded-card p-4 text-right hairline hover:border-accent/50">
            <span className="text-xs text-muted">Next</span>
            <span className="mt-1 block font-semibold">{next.title}</span>
          </Link>
        </nav>
      </article>

      <NextStep
        step={
          study
            ? { title: `Read how I thought about it`, text: study.summary, cta: { label: study.title, href: `/case-studies/${study.slug}/` }, secondary: { label: "Contact me", href: "/contact/" } }
            : nextSteps.projects
        }
      />
    </>
  );
}

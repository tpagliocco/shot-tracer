import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { PrintButton } from "@/components/PrintButton";
import { SmartLink } from "@/components/SmartLink";
import { DownloadIcon } from "@/components/icons";
import { credentials, languages, roles, skillGroups, summary } from "@/data/career";
import { nextSteps } from "@/data/nextSteps";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Recruiter view", description: "One-page summary: experience, credentials, skills and CV download." };

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="avoid-break border-t border-ink/[0.12] py-7 md:grid md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent md:mb-0">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function RecruiterViewPage() {
  return (
    <>
      <article className="section pt-12 sm:pt-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow mb-3 no-print">Recruiter view</p>
            <h1 className="text-4xl font-semibold tracking-tightest sm:text-5xl">{site.name}</h1>
            <p className="mt-2 text-xl text-muted">{site.title}</p>
            <p className="mt-3 text-sm text-muted">
              {site.location} ·{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              ·{" "}
              <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              ·{" "}
              <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
          <div className="no-print flex flex-wrap gap-3">
            <SmartLink href={site.cvFile} download className="btn-primary">
              <DownloadIcon width={18} height={18} /> Download CV (PDF)
            </SmartLink>
            <PrintButton />
          </div>
        </div>

        <div className="mt-10">
          <Block title="Summary">
            <p className="max-w-prose text-lg leading-relaxed">{summary}</p>
          </Block>

          <Block title="Experience">
            <ol className="space-y-7">
              {roles.map((r) => (
                <li key={r.company} className="avoid-break">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg font-semibold">
                      {r.title}, {r.company}
                    </h3>
                    <p className="text-sm text-muted">
                      {r.period} · {r.location}
                    </p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Credentials">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Education</h3>
                <ul className="space-y-2 text-muted">
                  {credentials.education.map((c) => (
                    <li key={c.title}>
                      <span className="text-ink">{c.title}</span>, {c.org}, {c.year}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Certifications</h3>
                <ul className="space-y-2 text-muted">
                  {credentials.certifications.map((c) => (
                    <li key={c.title}>
                      <span className="text-ink">{c.title}</span>, {c.org}, {c.year}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Block>

          <Block title="Skills">
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.group}>
                  <h3 className="mb-2 font-semibold">{g.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="badge">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted">Languages: {languages.join(", ")}</p>
          </Block>
        </div>
      </article>
      <NextStep step={nextSteps.recruiter} />
    </>
  );
}

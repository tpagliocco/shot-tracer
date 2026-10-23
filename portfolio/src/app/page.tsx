import { ProjectCard } from "@/components/ProjectCard";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Section";
import { SkillsGraph } from "@/components/SkillsGraph";
import { SmartLink } from "@/components/SmartLink";
import { StatGrid } from "@/components/StatGrid";
import { ArrowIcon } from "@/components/icons";
import { aboutTeaser, hero, proof, showpiece } from "@/data/home";
import { nextSteps } from "@/data/nextSteps";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="section relative pb-10 pt-16 sm:pt-24">
          <Reveal>
            <p className="badge mb-6">
              <span aria-hidden="true" className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
              {site.availability}
            </p>
            <h1 className="h-display max-w-4xl">{hero.headline}</h1>
            <p className="lede mt-6 max-w-2xl">{hero.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <SmartLink href={hero.primaryCta.href} className="btn-primary">
                {hero.primaryCta.label} <ArrowIcon width={18} height={18} />
              </SmartLink>
              <SmartLink href={hero.secondaryCta.href} className="btn-ghost">
                {hero.secondaryCta.label}
              </SmartLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-6" aria-labelledby="proof-title">
        <Reveal>
          <h2 id="proof-title" className="mb-5 text-sm font-medium text-muted">
            {proof.heading}
          </h2>
          <ul className="mb-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-ink/[0.08] py-6 text-lg font-semibold tracking-tight text-ink/70">
            {proof.logos.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Reveal>
        <StatGrid stats={proof.stats} note={proof.note} />
      </section>

      <section className="section" aria-label="Featured projects">
        <SectionHeading eyebrow="Selected work" title="Three projects that show the range" link={{ label: "All projects", href: "/projects/" }} />
        <ul className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section" aria-label={showpiece.heading}>
        <SectionHeading eyebrow="Explore" title={showpiece.heading} intro={showpiece.intro} />
        <Reveal>
          <SkillsGraph />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="about-teaser-title">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="eyebrow mb-3">About</p>
            <h2 id="about-teaser-title" className="h-section">
              {aboutTeaser.heading}
            </h2>
          </div>
          <div>
            {aboutTeaser.body.map((p) => (
              <p key={p} className="lede mb-4">
                {p}
              </p>
            ))}
            <SmartLink href={aboutTeaser.cta.href} className="link group inline-flex min-h-[44px] items-center gap-1.5 font-medium">
              {aboutTeaser.cta.label} <ArrowIcon width={16} height={16} />
            </SmartLink>
          </div>
        </Reveal>
      </section>

      <NextStep step={nextSteps.home} />
    </>
  );
}

import Link from "next/link";
import type { Project } from "@/data/types";
import { ArrowIcon } from "./icons";
import { SpotlightCard } from "./SpotlightCard";

const statusDot: Record<Project["status"], string> = {
  Live: "bg-accent",
  "In build": "border border-accent bg-transparent",
  "Handed over": "bg-muted",
};

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <SpotlightCard as="article" className="group flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="badge">{project.type}</span>
        <span className="inline-flex items-center gap-2 text-xs text-muted">
          <span aria-hidden="true" className={`h-2 w-2 rounded-full ${statusDot[project.status]}`} />
          {project.status}
        </span>
      </div>
      <Heading className="mt-5 text-xl font-semibold tracking-tight">
        {/* The ::after stretches the link over the whole card, so the card is one tab stop */}
        <Link href={`/projects/${project.slug}/`} className="after:absolute after:inset-0 after:rounded-[18px] focus-visible:outline-offset-[-3px]">
          {project.title}
        </Link>
      </Heading>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-muted">{project.year}</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-accent" aria-hidden="true">
          View project <ArrowIcon width={16} height={16} />
        </span>
      </div>
    </SpotlightCard>
  );
}

"use client";

import { useState } from "react";
import type { Project, ProjectStatus, ProjectType } from "@/data/types";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

type Props = { projects: Project[]; types: ProjectType[]; statuses: ProjectStatus[] };

function Group<T extends string>({ label, options, value, onChange }: { label: string; options: T[]; value: T | "All"; onChange: (v: T | "All") => void }) {
  return (
    <div role="group" aria-label={`Filter by ${label.toLowerCase()}`} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-medium text-muted">{label}</span>
      {(["All", ...options] as (T | "All")[]).map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={value === o} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

/** Filterable project grid (type and status). Filters combine with AND. */
export function ProjectExplorer({ projects, types, statuses }: Props) {
  const [type, setType] = useState<ProjectType | "All">("All");
  const [status, setStatus] = useState<ProjectStatus | "All">("All");

  const shown = projects.filter((p) => (type === "All" || p.type === type) && (status === "All" || p.status === status));
  const reset = () => {
    setType("All");
    setStatus("All");
  };

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-card bg-surface p-4 hairline sm:p-5">
        <Group label="Type" options={types} value={type} onChange={setType} />
        <Group label="Status" options={statuses} value={status} onChange={setStatus} />
      </div>

      <p className="mt-5 text-sm text-muted" role="status" aria-live="polite">
        Showing {shown.length} of {projects.length} projects
      </p>

      {shown.length === 0 ? (
        <div className="mt-6 rounded-card bg-surface p-8 text-center hairline">
          <p className="text-muted">No projects match both filters.</p>
          <button type="button" className="btn-ghost mt-4" onClick={reset}>
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 3) * 80}>
              <ProjectCard project={p} headingLevel="h2" />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}

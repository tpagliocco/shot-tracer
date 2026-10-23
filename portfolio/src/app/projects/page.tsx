import type { Metadata } from "next";
import { NextStep } from "@/components/NextStep";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { PageHero } from "@/components/Section";
import { nextSteps } from "@/data/nextSteps";
import { projectStatuses, projectTypes, projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected product and digital projects, with the problem, role, decisions and results." };

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Work I have led, with the decisions behind it" lede="Filter by type or status. Each project covers the problem, my role, the approach, the decisions and the result." />
      <section className="section pt-6" aria-label="Project list">
        <ProjectExplorer projects={projects} types={projectTypes} statuses={projectStatuses} />
      </section>
      <NextStep step={nextSteps.projects} />
    </>
  );
}

export type Link = { label: string; href: string; external?: boolean };

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

export type ProjectType = "Customer experience" | "Data & AI" | "Commerce" | "Platform" | "Transformation";
export type ProjectStatus = "Live" | "In build" | "Handed over";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  type: ProjectType;
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  tags: string[];
  problem: string[];
  role: { title: string; scope: string; team: string };
  approach: string[];
  decisions: { decision: string; why: string; tradeoff: string }[];
  results: Stat[];
  resultsNote?: string;
  links: Link[];
  caseStudy?: string; // slug of a related case study
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  readingTime: string;
  flow: string[]; // simple step -> step -> step strip
  context: string[];
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
  project?: string; // slug of the related project
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SkillDomain = {
  id: string;
  label: string;
  summary: string;
  skills: string[];
  projects: string[]; // project slugs
};

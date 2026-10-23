import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

const pages = ["", "/projects", "/case-studies", "/career", "/career/recruiter-view", "/about", "/contact", "/now", "/recommendations"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const paths = [...pages, ...projects.map((p) => `/projects/${p.slug}`), ...caseStudies.map((c) => `/case-studies/${c.slug}`)];
  return paths.map((p) => ({ url: `${base}${p}/` }));
}

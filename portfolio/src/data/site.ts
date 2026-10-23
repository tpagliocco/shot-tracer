// SAMPLE CONTENT. Replace every value in src/data before publishing.
// Names, employers, figures and quotes in this folder are fictional placeholders.
import type { Link } from "./types";

export const site = {
  name: "Alex Morgan",
  initials: "AM",
  title: "Chief Product Officer · Chief Digital Officer",
  tagline: "I turn digital ambition into products customers use and the business can run.",
  description:
    "Alex Morgan is a Chief Product and Digital Officer who builds product organisations, platforms and customer experiences at scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  locale: "en",
  location: "Abu Dhabi, UAE",
  availability: "Open to CPO and CDO conversations",
  email: "hello@example.com",
  phone: "+971 00 000 0000",
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  cvFile: "/cv.pdf",
  contactCardFile: "/contact-card.vcf",
} as const;

export const nav: Link[] = [
  { label: "Projects", href: "/projects/" },
  { label: "Case studies", href: "/case-studies/" },
  { label: "Career", href: "/career/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const recruiterLink: Link = { label: "Recruiter view", href: "/career/recruiter-view/" };

export const footerLinks: { heading: string; links: Link[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Projects", href: "/projects/" },
      { label: "Case studies", href: "/case-studies/" },
      { label: "Career timeline", href: "/career/" },
      { label: "About", href: "/about/" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Now", href: "/now/" },
      { label: "Recommendations", href: "/recommendations/" },
      { label: "Recruiter view", href: "/career/recruiter-view/" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: `mailto:${site.email}`, external: true },
      { label: "LinkedIn", href: site.linkedin, external: true },
      { label: "GitHub", href: site.github, external: true },
      { label: "Contact card (.vcf)", href: site.contactCardFile },
    ],
  },
];

// Every page ends with one clear next step. Edit the wording here.
import type { Link } from "./types";

export type NextStep = { title: string; text: string; cta: Link; secondary?: Link };

export const nextSteps = {
  home: {
    title: "Let us talk",
    text: "Hiring for a product or digital leader, or facing a hard transformation? A short note is enough to start.",
    cta: { label: "Get in touch", href: "/contact/" },
    secondary: { label: "Recruiter view", href: "/career/recruiter-view/" },
  },
  projects: {
    title: "See how I think, not just what shipped",
    text: "The case studies explain the trade-offs behind the headline results.",
    cta: { label: "Read case studies", href: "/case-studies/" },
  },
  caseStudies: {
    title: "Want the one-page version?",
    text: "The recruiter view puts the summary, experience, credentials and skills on a single page, with a CV download.",
    cta: { label: "Open recruiter view", href: "/career/recruiter-view/" },
  },
  career: {
    title: "Need it on one page?",
    text: "The recruiter view is built to be scanned in two minutes and printed or saved as a PDF.",
    cta: { label: "Open recruiter view", href: "/career/recruiter-view/" },
    secondary: { label: "Contact", href: "/contact/" },
  },
  recruiter: {
    title: "Ready to talk?",
    text: "Send a role description or a few lines on the problem. I reply within two working days.",
    cta: { label: "Contact me", href: "/contact/" },
  },
  about: {
    title: "Shall we compare notes?",
    text: "If how I work sounds like what your team needs, the next step is a conversation.",
    cta: { label: "Contact me", href: "/contact/" },
    secondary: { label: "Career timeline", href: "/career/" },
  },
  now: {
    title: "Something here relevant to you?",
    text: "Reach out and tell me what you are building.",
    cta: { label: "Contact me", href: "/contact/" },
  },
  recommendations: {
    title: "Talk to someone who has worked with me",
    text: "References are available on request once we have spoken.",
    cta: { label: "Contact me", href: "/contact/" },
  },
  contact: {
    title: "While you are here",
    text: "A quick look at the work helps make the first conversation more useful.",
    cta: { label: "Browse projects", href: "/projects/" },
    secondary: { label: "Recruiter view", href: "/career/recruiter-view/" },
  },
} satisfies Record<string, NextStep>;

import type { SkillDomain } from "./types";

export const skillDomains: SkillDomain[] = [
  {
    id: "strategy",
    label: "Strategy",
    summary: "Turning company ambition into a product strategy a team can execute and a board can fund.",
    skills: ["Portfolio strategy", "Business cases", "Roadmapping", "Market entry", "Board reporting"],
    projects: ["unified-customer-app", "partner-api-marketplace"],
  },
  {
    id: "digital",
    label: "Digital",
    summary: "Customer journeys, channels and commerce that people choose to use again.",
    skills: ["Journey design", "Mobile and web", "Payments", "Loyalty", "Experimentation"],
    projects: ["unified-customer-app", "payments-checkout", "loyalty-relaunch", "digital-id-onboarding"],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    summary: "Data as a product, and AI that is useful, measured and safe to ship.",
    skills: ["Data platforms", "Analytics", "Applied AI", "Responsible AI", "Privacy by design"],
    projects: ["customer-data-platform", "ai-service-assistant"],
  },
  {
    id: "delivery",
    label: "Delivery",
    summary: "Operating models, platforms and partners that turn plans into releases.",
    skills: ["Operating model", "Platform engineering", "Vendor management", "Quality and release", "Security and compliance"],
    projects: ["product-operating-model", "partner-api-marketplace", "payments-checkout"],
  },
  {
    id: "people",
    label: "People",
    summary: "Hiring, growing and keeping the product, design and data talent that makes the rest possible.",
    skills: ["Org design", "Hiring bar", "Coaching leaders", "Product culture", "Stakeholder alignment"],
    projects: ["product-operating-model"],
  },
];

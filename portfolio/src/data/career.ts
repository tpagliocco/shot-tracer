// SAMPLE CONTENT. Fictional employers and credentials.
import type { Role } from "./types";

export const summary =
  "Product and digital executive with 20 years across banking, property, health and retail. Builds product organisations, platforms and customer experiences that scale, and ties them to commercial outcomes. Comfortable in the boardroom and in a backlog review.";

export const roles: Role[] = [
  {
    company: "Halcyon Bank",
    title: "Chief Digital Officer",
    period: "2022 – present",
    location: "Abu Dhabi",
    summary: "Own digital strategy, product, data and design for retail and business banking.",
    highlights: [
      "Led consolidation of six customer apps into one, doubling monthly active customers.",
      "Stood up a customer data platform used by 40+ teams with consent built in.",
      "Launched an AI service assistant pilot with risk sign-off and weekly quality scorecards.",
    ],
  },
  {
    company: "Meridian Properties",
    title: "Chief Product Officer",
    period: "2019 – 2022",
    location: "Abu Dhabi",
    summary: "Built the product function from 6 people to 120 across residential, retail and hospitality.",
    highlights: [
      "Moved the company from project delivery to 22 persistent product teams.",
      "Rebuilt payments and checkout, raising conversion 18% and cutting audit effort 60%.",
      "Launched a partner API marketplace with 60 partners and $6.5M ARR.",
    ],
  },
  {
    company: "Lumen Health",
    title: "VP Product",
    period: "2016 – 2019",
    location: "Dubai",
    summary: "Led patient-facing apps and clinician tools across three markets.",
    highlights: [
      "Shipped a booking and records app to 900,000 patients.",
      "Reduced no-shows 24% with reminders and easy rescheduling.",
    ],
  },
  {
    company: "Orbit Retail",
    title: "Head of Product, Loyalty and CRM",
    period: "2013 – 2016",
    location: "Dubai",
    summary: "Owned loyalty, CRM and personalisation for a regional retailer.",
    highlights: [
      "Relaunched loyalty, growing active members by 50%.",
      "Introduced experimentation, running 140 tests in two years.",
    ],
  },
  {
    company: "Kestrel Mobility",
    title: "Product Manager, then Senior Product Manager",
    period: "2008 – 2013",
    location: "London",
    summary: "Started in engineering, moved into product on the booking platform.",
    highlights: [
      "Launched the first mobile booking app, reaching 1M downloads.",
    ],
  },
];

export const credentials = {
  education: [
    { title: "MBA", org: "Sample Business School", year: "2012" },
    { title: "BSc Computer Science", org: "Sample University", year: "2007" },
  ],
  certifications: [
    { title: "Executive programme in digital transformation", org: "Sample Institute", year: "2021" },
    { title: "Responsible AI for leaders", org: "Sample Academy", year: "2024" },
  ],
};

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "Leadership", items: ["Product organisation design", "Executive and board communication", "Hiring and coaching leaders", "Transformation"] },
  { group: "Product", items: ["Strategy and portfolio", "Roadmapping", "Pricing and business models", "Experimentation"] },
  { group: "Digital and data", items: ["Customer journeys", "Payments and commerce", "Data platforms", "Applied AI and governance"] },
  { group: "Delivery", items: ["Operating models", "Platform and API strategy", "Vendor management", "Security and compliance (PCI DSS, privacy law)"] },
];

export const languages = ["English (fluent)", "Arabic (conversational)"];

// SAMPLE CONTENT. Fictional projects and figures. Replace with your own.
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "unified-customer-app",
    title: "Unified customer app",
    summary: "Six separate apps became one. Monthly active use doubled and support contacts fell by a third.",
    type: "Customer experience",
    status: "Live",
    year: "2023–2024",
    featured: true,
    tags: ["Mobile", "Consolidation", "Design system"],
    problem: [
      "Customers needed six apps to do what they saw as one relationship. Each had its own login, its own look and its own support queue.",
      "Teams were optimising their own app's numbers while the overall experience got worse.",
    ],
    role: {
      title: "Executive sponsor and product lead",
      scope: "Strategy, funding, team design, vendor selection and launch decisions.",
      team: "9 squads, 74 people",
    },
    approach: [
      "Mapped the top 20 customer tasks across all six apps and ranked them by frequency and pain.",
      "Built one shell, one identity and one design system first, then moved journeys in by value, not by owner.",
      "Retired each legacy app only when its top tasks had a better home, and told customers early.",
    ],
    decisions: [
      {
        decision: "One native shell with modular journeys",
        why: "Teams keep ownership while customers see one product.",
        tradeoff: "Slower first release than patching the old apps.",
      },
      {
        decision: "Retire apps on a published schedule",
        why: "A visible end date stopped teams from investing in legacy work.",
        tradeoff: "A small group of power users complained loudly for a month.",
      },
    ],
    results: [
      { value: 2.1, suffix: "x", label: "monthly active customers" },
      { value: 34, suffix: "%", label: "fewer support contacts" },
      { value: 4.7, label: "store rating, up from 3.2" },
    ],
    resultsNote: "Sample figures.",
    links: [
      { label: "Read the case study", href: "/case-studies/one-app-not-six/" },
      { label: "Launch announcement", href: "https://example.com/launch", external: true },
    ],
    caseStudy: "one-app-not-six",
  },
  {
    slug: "customer-data-platform",
    title: "Customer data platform",
    summary: "One governed view of the customer, used by 40 teams, with consent built in from day one.",
    type: "Data & AI",
    status: "Live",
    year: "2022–2023",
    featured: true,
    tags: ["Data products", "Privacy", "Analytics"],
    problem: [
      "Customer data lived in a dozen systems. No two reports agreed and nobody could say who had consented to what.",
      "Every new use case started with a six-month data hunt.",
    ],
    role: {
      title: "Product owner for the platform and sponsor of the data office",
      scope: "Scope, governance model, build or buy decision and adoption.",
      team: "5 squads, 38 people",
    },
    approach: [
      "Treated each core dataset as a product with an owner, a service level and a roadmap.",
      "Started with the three use cases that paid for the platform: retention, service routing, and finance reporting.",
      "Made consent a field every record carries, not a report built afterwards.",
    ],
    decisions: [
      {
        decision: "Buy the core, build the product layer",
        why: "Storage and identity are commodities. Our data products were the differentiator.",
        tradeoff: "Vendor dependency we manage through exit clauses and open formats.",
      },
      {
        decision: "Data product owners sit in the business",
        why: "Quality improves when the people who use the data own it.",
        tradeoff: "Needed a coaching programme and two uncomfortable reassignments.",
      },
    ],
    results: [
      { value: 40, suffix: "+", label: "teams using governed data" },
      { value: 5, suffix: " days", label: "to start a new data use case, down from 6 weeks" },
      { value: 100, suffix: "%", label: "records carrying consent status" },
    ],
    resultsNote: "Sample figures.",
    links: [{ label: "Architecture overview", href: "https://example.com/data-platform", external: true }],
  },
  {
    slug: "ai-service-assistant",
    title: "AI service assistant",
    summary: "A customer assistant that resolves common requests, hands over cleanly and is measured weekly.",
    type: "Data & AI",
    status: "In build",
    year: "2025–now",
    featured: true,
    tags: ["Applied AI", "Service", "Governance"],
    problem: [
      "Contact centre volume grew faster than headcount, and customers waited most for the simplest requests.",
      "Leadership wanted AI quickly. Risk wanted it safely. Both were right.",
    ],
    role: {
      title: "Product executive and accountable owner",
      scope: "Use case selection, guardrails, evaluation, launch criteria and risk sign-off.",
      team: "3 squads, 26 people, plus risk and legal",
    },
    approach: [
      "Picked five request types that were frequent, low risk and easy to verify.",
      "Wrote the evaluation set before the first prompt, and set launch thresholds with risk in advance.",
      "Designed the handover to a person as a feature, with the full conversation passed along.",
    ],
    decisions: [
      {
        decision: "Launch to staff first, customers second",
        why: "Staff use found most failure modes at no customer cost.",
        tradeoff: "Delayed the customer launch by eight weeks.",
      },
      {
        decision: "Publish the weekly quality scorecard internally",
        why: "Visible numbers kept the debate about evidence, not opinion.",
        tradeoff: "Some bad weeks were visible to the whole executive team.",
      },
    ],
    results: [
      { value: 52, suffix: "%", label: "of target requests resolved without a person (pilot)" },
      { value: 91, suffix: "%", label: "of handovers rated smooth by agents" },
      { value: 0, label: "privacy incidents in pilot" },
    ],
    resultsNote: "Sample pilot figures.",
    links: [{ label: "Read the case study", href: "/case-studies/ai-assistant-safely/" }],
    caseStudy: "ai-assistant-safely",
  },
  {
    slug: "payments-checkout",
    title: "Payments and checkout rebuild",
    summary: "A faster, safer checkout with fewer steps. Conversion rose and card fraud losses fell.",
    type: "Commerce",
    status: "Live",
    year: "2021–2022",
    tags: ["Payments", "Conversion", "Security"],
    problem: [
      "Checkout had seven steps, three payment providers and a conversion rate below peers.",
      "The system sat in scope for card data standards, and each audit cost weeks.",
    ],
    role: {
      title: "Product lead",
      scope: "Roadmap, provider strategy, compliance scoping and experimentation.",
      team: "3 squads, 22 people",
    },
    approach: [
      "Reduced card data handling by moving to tokenised, provider-hosted fields, which shrank the compliance scope.",
      "Cut steps from seven to three and tested each removal against conversion and fraud.",
      "Ran the old and new flows side by side until the numbers settled.",
    ],
    decisions: [
      {
        decision: "Consolidate to one primary provider and one fallback",
        why: "Simpler operations and a better commercial position.",
        tradeoff: "Concentration risk, covered by the fallback and tested failovers.",
      },
    ],
    results: [
      { value: 18, suffix: "%", label: "higher checkout conversion" },
      { value: 27, suffix: "%", label: "lower card fraud losses" },
      { value: 60, suffix: "%", label: "less audit effort" },
    ],
    resultsNote: "Sample figures.",
    links: [],
  },
  {
    slug: "product-operating-model",
    title: "Product operating model",
    summary: "From project delivery to product teams with owners, outcomes and a shared quarterly rhythm.",
    type: "Transformation",
    status: "Handed over",
    year: "2020–2022",
    tags: ["Operating model", "OKRs", "Culture"],
    problem: [
      "Work arrived as projects with fixed scope and no owner after launch.",
      "Delivery dates were met, yet few outcomes moved.",
    ],
    role: {
      title: "Programme sponsor",
      scope: "Design of the model, leadership alignment, role definitions and the coaching programme.",
      team: "Company-wide, 300 people affected",
    },
    approach: [
      "Started with two pilot teams and published their before-and-after numbers.",
      "Defined five product roles and a hiring bar for each.",
      "Moved funding from projects to persistent teams with quarterly outcome reviews.",
    ],
    decisions: [
      {
        decision: "Pilot before announcing",
        why: "Evidence persuaded sceptics better than a slide deck.",
        tradeoff: "Slower start, faster adoption.",
      },
    ],
    results: [
      { value: 45, suffix: "%", label: "shorter idea-to-release time" },
      { value: 12, suffix: " pts", label: "rise in team engagement" },
      { value: 22, suffix: "", label: "persistent product teams" },
    ],
    resultsNote: "Sample figures.",
    links: [{ label: "Read the case study", href: "/case-studies/product-operating-model/" }],
    caseStudy: "product-operating-model",
  },
  {
    slug: "partner-api-marketplace",
    title: "Partner API marketplace",
    summary: "A self-serve API platform that opened a new revenue line with 60 partners.",
    type: "Platform",
    status: "Live",
    year: "2022–2024",
    tags: ["APIs", "Ecosystem", "Revenue"],
    problem: [
      "Partners waited months for custom integrations, so most gave up.",
      "The business had valuable capabilities and no way to sell them as a product.",
    ],
    role: {
      title: "Product executive",
      scope: "Business model, platform roadmap, partner programme and pricing.",
      team: "4 squads, 31 people",
    },
    approach: [
      "Productised five capabilities with clear documentation, sandbox access and pricing.",
      "Recruited three design partners before building the portal.",
      "Measured time-to-first-call as the main health metric.",
    ],
    decisions: [
      {
        decision: "Usage-based pricing with a free tier",
        why: "Lowered the barrier to try and aligned revenue with partner success.",
        tradeoff: "Less predictable revenue in the first year.",
      },
    ],
    results: [
      { value: 60, suffix: "", label: "active partners" },
      { value: 2, suffix: " days", label: "to first API call, down from 5 weeks" },
      { value: 6.5, prefix: "$", suffix: "M", label: "annual recurring revenue" },
    ],
    resultsNote: "Sample figures.",
    links: [],
  },
  {
    slug: "loyalty-relaunch",
    title: "Loyalty relaunch",
    summary: "A points programme rebuilt around member value. Active members grew by half in a year.",
    type: "Commerce",
    status: "Handed over",
    year: "2019–2020",
    tags: ["Loyalty", "Personalisation", "Retention"],
    problem: [
      "The old programme rewarded spend with points few members could ever redeem.",
      "Members saw it as noise and unsubscribed.",
    ],
    role: {
      title: "Head of product",
      scope: "Programme design, partner offers, personalisation and launch.",
      team: "2 squads, 15 people",
    },
    approach: [
      "Interviewed 60 members and cut the programme to three benefits people actually used.",
      "Made the first reward reachable within 30 days.",
      "Used simple rules before any machine learning, then added models where rules plateaued.",
    ],
    decisions: [
      {
        decision: "Reduce reward tiers from five to three",
        why: "Members understood it, so they used it.",
        tradeoff: "Dropped a tier that a few top members valued.",
      },
    ],
    results: [
      { value: 50, suffix: "%", label: "growth in active members" },
      { value: 31, suffix: "%", label: "higher repeat purchase rate" },
    ],
    resultsNote: "Sample figures.",
    links: [],
  },
  {
    slug: "digital-id-onboarding",
    title: "Digital ID onboarding",
    summary: "Customer onboarding moved from days to minutes using national digital identity.",
    type: "Customer experience",
    status: "In build",
    year: "2025–now",
    tags: ["Identity", "Onboarding", "Regulation"],
    problem: [
      "Onboarding needed paper documents and a branch visit, and one in three applicants dropped out.",
    ],
    role: {
      title: "Accountable executive",
      scope: "Journey design, regulator engagement and build sequencing.",
      team: "2 squads, 17 people",
    },
    approach: [
      "Worked with the regulator from the first design workshop, not after it.",
      "Built the happy path first, then the assisted path for people who need help.",
    ],
    decisions: [
      {
        decision: "Keep an assisted path for every digital step",
        why: "Inclusion is a requirement, and it protects the brand.",
        tradeoff: "More operational cost than a digital-only design.",
      },
    ],
    results: [
      { value: 9, suffix: " min", label: "median onboarding time in pilot, down from 3 days" },
      { value: 22, suffix: "%", label: "drop-out in pilot, down from 33%" },
    ],
    resultsNote: "Sample pilot figures.",
    links: [],
  },
];

export const projectTypes = Array.from(new Set(projects.map((p) => p.type)));
export const projectStatuses = Array.from(new Set(projects.map((p) => p.status)));
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

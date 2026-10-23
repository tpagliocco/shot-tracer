// SAMPLE CONTENT. Replace with your own deep dives (3 to 5 works best).
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "one-app-not-six",
    title: "One app, not six",
    kicker: "Consolidation",
    summary: "How I decided what to merge, what to kill, and in what order, without stopping the business.",
    readingTime: "6 min",
    flow: ["Map customer tasks", "Rank by value", "Build the shell", "Migrate journeys", "Retire legacy"],
    project: "unified-customer-app",
    context: [
      "Six apps, six teams, six sets of metrics. Each team was doing well by its own measure while customers were not.",
    ],
    sections: [
      {
        heading: "The question",
        body: [
          "Not 'how do we merge the apps?' but 'which customer tasks matter most, and which app serves each best today?' That reframing moved the debate from ownership to evidence.",
        ],
      },
      {
        heading: "How I thought about it",
        body: [
          "Ownership fights are won by data both sides trust. I asked each team to contribute task-level usage and satisfaction data, then published one shared ranking.",
          "I separated reversible decisions (journey order) from irreversible ones (the shell, identity, the retirement schedule) and spent my time on the second group.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "Built one shell and one identity before moving a single journey. Moved the top five tasks first. Published the retirement schedule on day one so no team could drift.",
        ],
      },
      {
        heading: "What I would do differently",
        body: [
          "Involve support leads earlier. Their queue data would have told us the right order two months sooner.",
        ],
      },
    ],
    takeaways: [
      "Make the shared metric visible before you make the structural change.",
      "A published end date is the cheapest way to stop legacy investment.",
    ],
  },
  {
    slug: "cutting-the-roadmap",
    title: "Cutting the roadmap by 40%",
    kicker: "Prioritisation",
    summary: "A roadmap with 120 items and no focus. How we picked 70 and delivered more.",
    readingTime: "5 min",
    flow: ["List everything", "Score on outcomes", "Cut the tail", "Commit publicly", "Review quarterly"],
    context: [
      "Every stakeholder had a favourite. Nothing was ever removed, so everything was late.",
    ],
    sections: [
      {
        heading: "The question",
        body: ["What are the three outcomes this year that matter more than any individual feature?"],
      },
      {
        heading: "How I thought about it",
        body: [
          "Prioritisation fails when scoring is secret. I used a simple three-factor score, published it, and let people challenge the inputs instead of the result.",
          "Saying no is easier when the criteria were agreed before the list was shown.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "Cut 50 items, merged 20 and committed publicly to the rest. We kept a visible 'not now' list with reasons so stakeholders felt heard.",
        ],
      },
    ],
    takeaways: [
      "Agree the criteria before you see the list.",
      "A visible 'not now' list protects relationships.",
    ],
  },
  {
    slug: "ai-assistant-safely",
    title: "Shipping an AI assistant safely",
    kicker: "Applied AI",
    summary: "The evaluation, guardrails and launch gates that let risk and product say yes together.",
    readingTime: "7 min",
    flow: ["Pick safe use cases", "Write the evaluation", "Pilot with staff", "Set launch gates", "Measure weekly"],
    project: "ai-service-assistant",
    context: [
      "Pressure to launch fast, plus real concerns about accuracy, privacy and tone.",
    ],
    sections: [
      {
        heading: "The question",
        body: ["What evidence would make a sceptical risk officer comfortable, and can we agree on it before we build?"],
      },
      {
        heading: "How I thought about it",
        body: [
          "I treated launch criteria like a contract. Risk, legal and product signed the thresholds before the first prototype.",
          "I chose use cases where answers are easy to verify, so quality could be measured instead of debated.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "Built the evaluation set first, piloted with staff for eight weeks, then released to a small share of customers with a one-click handover to a person.",
        ],
      },
      {
        heading: "What I would do differently",
        body: ["Bring frontline agents into the evaluation team from week one, not week five."],
      },
    ],
    takeaways: [
      "Agree thresholds before building.",
      "Make handover to a person a first-class feature.",
    ],
  },
  {
    slug: "product-operating-model",
    title: "Rebuilding the product operating model",
    kicker: "Transformation",
    summary: "From projects to product teams in 18 months, by pilots rather than announcements.",
    readingTime: "6 min",
    flow: ["Pilot two teams", "Publish results", "Define roles", "Move funding", "Coach and iterate"],
    project: "product-operating-model",
    context: [
      "Delivery dates were met and outcomes were not. The system rewarded the wrong thing.",
    ],
    sections: [
      {
        heading: "The question",
        body: ["How do we change how a company funds and measures work without a year of change management theatre?"],
      },
      {
        heading: "How I thought about it",
        body: [
          "Operating model changes succeed when people see a peer team win. I started with two volunteer teams and published their numbers monthly.",
          "Funding is the real lever. I moved it only after the pilots proved the case.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "Defined five product roles and a hiring bar. Moved to persistent teams and quarterly outcome reviews. Ran a coaching programme for senior leaders because they were the bottleneck.",
        ],
      },
    ],
    takeaways: [
      "Pilots persuade better than decks.",
      "Change the funding model, or nothing else sticks.",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

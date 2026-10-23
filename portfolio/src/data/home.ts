import type { Stat } from "./types";

export const hero = {
  eyebrow: "Chief Product Officer · Chief Digital Officer",
  headline: "Product leadership that ships, scales and pays back.",
  intro:
    "Twenty years building digital products and the teams behind them across property, banking, retail and health. I set product strategy, fix operating models and stay close enough to the work to know what is real.",
  primaryCta: { label: "See selected work", href: "/projects/" },
  secondaryCta: { label: "Read the case studies", href: "/case-studies/" },
};

// Text wordmarks keep the page fast and avoid third-party logo licensing. Swap for SVGs if you prefer.
export const proof = {
  heading: "Trusted to lead digital at",
  logos: ["Halcyon Bank", "Meridian Properties", "Lumen Health", "Orbit Retail", "Kestrel Mobility"],
  stats: [
    { value: 4.2, suffix: "M", label: "customers on products I have led" },
    { value: 38, prefix: "$", suffix: "M", label: "annual value delivered" },
    { value: 120, suffix: "+", label: "people in product and design teams built" },
    { value: 14, label: "products launched across 3 markets" },
  ] satisfies Stat[],
  note: "Sample figures. Replace with your own, and keep only numbers you can defend.",
};

export const aboutTeaser = {
  heading: "Product is a team sport with a scoreboard.",
  body: [
    "I started as an engineer, moved into product because I wanted to decide what we build, and ended up leading organisations because the biggest wins come from how teams work.",
    "I care about three things: customers who come back, teams that enjoy the work, and a P&L that agrees.",
  ],
  cta: { label: "More about me", href: "/about/" },
};

export const showpiece = {
  heading: "Where I create value",
  intro: "Five domains, one thread. Pick a domain to see the skills and the projects behind it.",
};

"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { skillDomains } from "@/data/skills";
import { ArrowIcon } from "./icons";

const SIZE = 520;
const C = SIZE / 2;
const R_DOMAIN = 118;
const R_SKILL = 212;
const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => ({ x: C + r * Math.cos(rad(deg)), y: C + r * Math.sin(rad(deg)) });

/**
 * Interactive showpiece. Select a domain (click, tap, hover, or keyboard) to light up its skills
 * and list the projects behind it. The panel on the right carries the same content as text.
 */
export function SkillsGraph() {
  const [active, setActive] = useState(skillDomains[0].id);
  const domain = skillDomains.find((d) => d.id === active) ?? skillDomains[0];
  const related = domain.projects.map((s) => projects.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="grid items-center gap-8 rounded-[20px] bg-surface p-5 shadow-soft hairline sm:p-8 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-12">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="group" aria-label="Skills graph. Select a domain to see its skills and projects." className="mx-auto h-auto w-full max-w-[460px]">
        {skillDomains.map((d, i) => {
          const angle = -90 + i * (360 / skillDomains.length);
          const dp = pt(R_DOMAIN, angle);
          const on = d.id === active;
          const spread = 13;
          return (
            <g key={d.id}>
              <line x1={C} y1={C} x2={dp.x} y2={dp.y} className="graph-line" data-on={on} />
              {d.skills.map((s, j) => {
                const a = angle + (j - (d.skills.length - 1) / 2) * spread;
                const sp = pt(R_SKILL, a);
                return (
                  <g key={s} aria-hidden="true">
                    <line x1={dp.x} y1={dp.y} x2={sp.x} y2={sp.y} className="graph-line" data-on={on} />
                    <circle cx={sp.x} cy={sp.y} r={on ? 8 : 5} className={on ? "fill-accent" : "fill-muted/50"} style={{ transition: "all .25s ease" }} />
                  </g>
                );
              })}
            </g>
          );
        })}

        <circle cx={C} cy={C} r={36} className="fill-raised stroke-ink/20" />
        <text x={C} y={C + 5} textAnchor="middle" className="fill-ink text-[15px] font-semibold" aria-hidden="true">
          Me
        </text>

        {skillDomains.map((d, i) => {
          const angle = -90 + i * (360 / skillDomains.length);
          const p = pt(R_DOMAIN, angle);
          const on = d.id === active;
          return (
            <g
              key={d.id}
              className="graph-node"
              role="button"
              tabIndex={0}
              aria-pressed={on}
              aria-label={`${d.label}: ${d.skills.length} skills, ${d.projects.length} projects`}
              onClick={() => setActive(d.id)}
              onMouseEnter={() => setActive(d.id)}
              onFocus={() => setActive(d.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(d.id);
                }
              }}
            >
              <circle cx={p.x} cy={p.y} r={44} className="fill-surface" />
              <circle cx={p.x} cy={p.y} r={44} className={`graph-node-ring ${on ? "fill-accent/20 stroke-accent" : "fill-raised stroke-ink/20"}`} strokeWidth={on ? 2 : 1} style={{ transition: "all .25s ease" }} />
              <text x={p.x} y={p.y + 5} textAnchor="middle" className={`pointer-events-none text-[16px] font-semibold ${on ? "fill-accent" : "fill-ink"}`}>
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div aria-live="polite">
        <p className="eyebrow mb-3">Domain</p>
        <h3 className="text-3xl font-semibold tracking-tightest">{domain.label}</h3>
        <p className="mt-3 text-muted">{domain.summary}</p>

        <h4 className="mt-6 text-sm font-semibold">Skills</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {domain.skills.map((s) => (
            <li key={s} className="badge">
              {s}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold">Seen in</h4>
        <ul className="mt-2">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}/`} className="group flex min-h-[44px] items-center justify-between gap-3 border-b border-ink/[0.08] py-2 text-sm hover:text-accent">
                <span>{p.title}</span>
                <ArrowIcon width={16} height={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

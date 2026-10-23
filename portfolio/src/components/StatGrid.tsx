import type { Stat } from "@/data/types";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function StatGrid({ stats, note }: { stats: Stat[]; note?: string }) {
  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 80} className="rounded-card bg-surface p-5 hairline">
            <p className="text-4xl font-semibold tracking-tightest text-ink">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
          </Reveal>
        ))}
      </ul>
      {note && <p className="mt-3 text-xs text-muted">{note}</p>}
    </div>
  );
}

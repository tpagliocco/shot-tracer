import { ArrowIcon } from "./icons";

/** Simple step -> step -> step strip. Stacks vertically on small screens. */
export function FlowStrip({ steps, label = "How it unfolded" }: { steps: string[]; label?: string }) {
  return (
    <figure aria-label={label} className="rounded-card bg-surface p-5 hairline sm:p-6">
      <figcaption className="eyebrow mb-4">{label}</figcaption>
      <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {steps.map((step, i) => (
          <li key={step} className="flex min-w-0 flex-col gap-2 lg:flex-1 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-raised px-4 py-3 lg:h-full">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-semibold text-accent">{i + 1}</span>
              <span className="min-w-0 text-sm font-medium leading-snug">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="self-center text-muted">
                <ArrowIcon className="rotate-90 lg:rotate-0" width={18} height={18} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

import type { NextStep as NextStepData } from "@/data/nextSteps";
import { SmartLink } from "./SmartLink";
import { ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";

/** Closing call to action. Every page ends with one. Copy lives in src/data/nextSteps.ts. */
export function NextStep({ step }: { step: NextStepData }) {
  return (
    <section className="section no-print pt-6" aria-labelledby="next-step-title">
      <Reveal>
        <div className="relative overflow-hidden rounded-[20px] bg-surface p-8 shadow-soft hairline sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <p className="eyebrow mb-3">Next step</p>
          <h2 id="next-step-title" className="h-section max-w-xl">
            {step.title}
          </h2>
          <p className="lede mt-4 max-w-xl">{step.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SmartLink href={step.cta.href} className="btn-primary">
              {step.cta.label} <ArrowIcon width={18} height={18} />
            </SmartLink>
            {step.secondary && (
              <SmartLink href={step.secondary.href} className="btn-ghost">
                {step.secondary.label}
              </SmartLink>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

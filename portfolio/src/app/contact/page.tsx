import type { Metadata } from "next";
import { CopyEmail } from "@/components/CopyEmail";
import { NextStep } from "@/components/NextStep";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Section";
import { SmartLink } from "@/components/SmartLink";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ArrowIcon, CardIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { nextSteps } from "@/data/nextSteps";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Email, LinkedIn, GitHub and a downloadable contact card." };

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: MailIcon, note: "Best for roles and introductions", download: false },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: site.linkedin, icon: LinkedInIcon, note: "Career history and recommendations", download: false },
  { label: "GitHub", value: "View on GitHub", href: site.github, icon: GitHubIcon, note: "Code and experiments", download: false },
  { label: "Contact card", value: "Download .vcf", href: site.contactCardFile, icon: CardIcon, note: "Add me to your address book", download: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let us talk" lede="Send a role description or a few lines on the problem you are solving. I reply within two working days.">
        <div className="mt-8 flex flex-wrap gap-3">
          <SmartLink href={`mailto:${site.email}`} className="btn-primary">
            Email me <ArrowIcon width={18} height={18} />
          </SmartLink>
          <CopyEmail email={site.email} />
        </div>
      </PageHero>
      <section className="section pt-8" aria-label="Contact channels">
        <ul className="grid gap-5 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 80}>
              <SpotlightCard className="group h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
                  <c.icon />
                </span>
                <h2 className="mt-5 text-xl font-semibold">
                  <SmartLink href={c.href} download={c.download} className="after:absolute after:inset-0 after:rounded-[18px] focus-visible:outline-offset-[-3px]">
                    {c.label}
                  </SmartLink>
                </h2>
                <p className="mt-1 break-all text-accent">{c.value}</p>
                <p className="mt-2 text-sm text-muted">{c.note}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Based in {site.location}. {site.availability}.
        </p>
      </section>
      <NextStep step={nextSteps.contact} />
    </>
  );
}

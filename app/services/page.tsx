import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Cta } from "@/components/home/cta";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media content design, visual branding, content strategy and AI-assisted creative workflows — services by Marvin.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title={
          <>
            Four ways to make
            <br />
            your feed <span className="text-accent">unskippable.</span>
          </>
        }
        intro="No package tiers, no surprise line items. Every engagement starts with a conversation about what your brand actually needs — these are the four shapes it usually takes."
      />

      <section aria-label="Service offerings" className="container-x pb-24 md:pb-36">
        <div className="rule">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.04}>
              <div className="group grid gap-8 border-b border-line py-12 transition-colors duration-300 md:grid-cols-[6rem_1.4fr_1fr] md:gap-12 md:py-16">
                <p className="text-display-sm text-line transition-colors duration-500 group-hover:text-accent md:pt-1">
                  {service.index}
                </p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-6 text-sm font-medium">
                    <span className="text-accent">→</span> {service.outcome}
                  </p>
                </div>
                <ul className="space-y-3 md:pt-2">
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-it-works" className="rule">
        <div className="container-x py-24 md:py-36">
          <Reveal>
            <p className="meta-label">
              <span className="text-accent">●</span> How it works
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="how-it-works" className="text-display-sm mt-6 max-w-3xl">
              Simple process, no theater.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We talk",
                body: "A short call about your brand, your audience and where attention is leaking. No pitch deck required.",
              },
              {
                step: "02",
                title: "I build",
                body: "Strategy and design together: a direction, a system, the first batch of content. You see real work early, not moodboards forever.",
              },
              {
                step: "03",
                title: "You ship",
                body: "Documented templates and workflows your team can run — or an ongoing rhythm where I keep producing. Both work.",
              },
            ].map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.08}>
                <p className="meta-label text-accent">{phase.step}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {phase.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{phase.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

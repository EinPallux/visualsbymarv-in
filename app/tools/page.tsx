import type { Metadata } from "next";

import { Cta } from "@/components/home/cta";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { tools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Figma, Photoshop, Illustrator and Claude Code — how each tool contributes to Marvin's creative workflow.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        label="Tools"
        title={
          <>
            Four tools.
            <br />
            One <span className="text-accent">workflow.</span>
          </>
        }
        intro="Tools don't make work good — but the right pipeline makes good work repeatable. This is the stack behind every project, and what each part is actually for."
      />

      {/* Workflow rail */}
      <section aria-label="Workflow stages" className="container-x pb-16">
        <Reveal>
          <div className="rule flex flex-wrap items-center gap-x-3 gap-y-2 pt-6">
            {tools.map((tool, i) => (
              <span key={tool.name} className="flex items-center gap-3">
                <span className="meta-label">{tool.stage}</span>
                {i < tools.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section aria-label="Tool details" className="container-x pb-24 md:pb-36">
        <Stagger className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {tools.map((tool, i) => (
            <StaggerItem key={tool.name} className="bg-background">
              <div className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface md:p-12">
                <div className="flex items-start justify-between">
                  <p
                    aria-hidden="true"
                    className="text-[5rem] font-bold leading-none tracking-tighter text-line transition-colors duration-500 group-hover:text-accent md:text-[7rem]"
                  >
                    {tool.glyph}
                  </p>
                  <p className="meta-label">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <div className="mt-10 md:mt-16">
                  <p className="meta-label">{tool.stage}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    {tool.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {tool.role}
                  </p>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">
                    {tool.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl leading-relaxed text-muted">
            The order matters: systems are designed in Figma, imagery is
            produced in Photoshop, identities are drawn in Illustrator — and
            Claude Code automates everything that happens more than twice.
            Less friction in the pipeline means more time on the work itself.
          </p>
        </Reveal>
      </section>

      <Cta
        title="Curious what this stack could do for your brand?"
        subline="The tools are ready. The workflow is proven. The only missing piece is your project."
      />
    </>
  );
}

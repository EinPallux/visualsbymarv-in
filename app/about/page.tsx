import type { Metadata } from "next";
import Image from "next/image";

import { Timeline } from "@/components/about/timeline";
import { Cta } from "@/components/home/cta";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { assets } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marvin — 25, Germany, B.A. Media Design. Designer, storyteller and system-builder creating social media content and visual branding for companies.",
};

const facts = [
  { label: "Based in", value: "Germany" },
  { label: "Age", value: "25" },
  { label: "Education", value: "B.A. Media Design" },
  { label: "Focus", value: "Social content & branding" },
];

const principles = [
  {
    index: "01",
    title: "Attention is borrowed",
    body: "Nobody owes a brand their time. Every post has to repay the seconds it takes — with clarity, usefulness or delight.",
  },
  {
    index: "02",
    title: "Systems beat heroics",
    body: "A great one-off graphic helps once. A great template library helps every week. I design things that keep working after I leave.",
  },
  {
    index: "03",
    title: "Story first, polish second",
    body: "Polish without a point is decoration. I start with what a piece should make someone feel or do — then design backwards from that.",
  },
  {
    index: "04",
    title: "Tools should disappear",
    body: "Figma, Photoshop, Illustrator, AI — all of it exists to remove friction between an idea and the feed. The craft is knowing when to use which.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title={
          <>
            Designer.
            <br />
            Storyteller.
            <br />
            <span className="text-accent">System-builder.</span>
          </>
        }
        intro="I'm Marvin — a media designer from Germany who believes the feed is the new storefront, and most brands are still leaving the lights off."
      />

      {/* Portrait + facts */}
      <section aria-label="Portrait" className="container-x pb-24 md:pb-36">
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-xl bg-surface">
              <Image
                src={assets.portrait}
                alt="Portrait of Marvin"
                width={1320}
                height={1586}
                priority
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
          <div className="space-y-10 md:sticky md:top-28">
            <Stagger className="divide-y divide-line">
              {facts.map((fact) => (
                <StaggerItem key={fact.label}>
                  <div className="flex items-baseline justify-between py-4">
                    <span className="meta-label">{fact.label}</span>
                    <span className="font-medium">{fact.value}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal>
              <div className="space-y-5 leading-relaxed text-muted">
                <p>
                  I started where attention is hardest to win: gaming
                  communities, where a thumbnail lives or dies in half a
                  second. That instinct — then a Bachelor of Arts in Media
                  Design to back it up — shaped how I work today.
                </p>
                <p>
                  Now I help companies show up in feeds the way they show up
                  in person: considered, consistent, and worth a second look.
                  Content design, visual branding, and the systems that hold
                  them together.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy" className="rule">
        <div className="container-x py-24 md:py-36">
          <SectionHeading
            index="01"
            label="Philosophy"
            title="Four things I refuse to compromise on."
          />
          <span id="philosophy" className="sr-only">
            Creative philosophy
          </span>
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {principles.map((principle) => (
              <StaggerItem key={principle.index} className="bg-background">
                <div className="h-full p-8 transition-colors duration-300 hover:bg-surface md:p-10">
                  <p className="meta-label text-accent">{principle.index}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Working style & AI */}
      <section aria-labelledby="working-style" className="rule">
        <div className="container-x grid gap-12 py-24 md:grid-cols-2 md:py-36 lg:gap-20">
          <SectionHeading
            index="02"
            label="Working Style"
            title="Human taste, modern tooling."
          />
          <span id="working-style" className="sr-only">
            Working style
          </span>
          <Reveal delay={0.1}>
            <div className="space-y-5 leading-relaxed text-muted md:pt-2">
              <p>
                My process is deliberately simple: understand the audience,
                find the one idea worth saying, build a system that says it
                consistently. Strategy and design happen together, not in
                sequence.
              </p>
              <p>
                AI is part of that system — not as a shortcut to taste, but as
                a way to delete friction. Claude Code handles batch exports,
                asset pipelines and production scripts, so the hours go into
                composition, story and craft instead of file management.
              </p>
              <p className="text-foreground">
                The result: agency-level output, one-person overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline" className="rule">
        <div className="container-x py-24 md:py-36">
          <SectionHeading
            index="03"
            label="Timeline"
            title="How I got here."
            className="mb-16"
          />
          <span id="timeline" className="sr-only">
            Timeline
          </span>
          <Timeline />
        </div>
      </section>

      <Cta
        title="Sounds like someone you'd work with?"
        subline="I'm currently open for new collaborations — let's talk about what your brand could look like."
      />
    </>
  );
}

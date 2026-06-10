import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/constants/site";

interface CtaProps {
  title?: string;
  subline?: string;
}

export function Cta({
  title = "Let's make something worth stopping for.",
  subline = "Currently open for social media content design, visual branding and content partnerships.",
}: CtaProps) {
  return (
    <section aria-label="Collaboration" className="rule">
      <div className="container-x py-24 md:py-36">
        <Reveal>
          <p className="meta-label">
            <span className="text-accent">→</span> Next step
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-display mt-6 max-w-4xl text-balance">{title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            {subline}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              Start a project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

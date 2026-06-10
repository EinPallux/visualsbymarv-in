import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/work/project-card";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  const [first, ...rest] = featuredProjects;

  return (
    <section aria-labelledby="selected-work" className="container-x py-24 md:py-36">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="01"
          label="Selected Work"
          title="Three projects, told properly."
        />
        <Reveal delay={0.1}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium"
          >
            All projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <span id="selected-work" className="sr-only">
        Selected work
      </span>

      <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
        {first && (
          <Reveal>
            <ProjectCard
              project={first}
              index={0}
              visualClassName="md:aspect-[21/9]"
            />
          </Reveal>
        )}
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectVisual } from "@/components/work/project-visual";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  visualClassName?: string;
}

export function ProjectCard({
  project,
  index,
  className,
  visualClassName,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent", className)}
    >
      <div className="overflow-hidden rounded-xl">
        <ProjectVisual
          visual={project.visual}
          client={project.client}
          className={cn(
            "aspect-[16/10] rounded-xl group-hover:scale-[1.02]",
            visualClassName
          )}
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div className="space-y-1.5">
          <p className="meta-label">
            <span className="text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            {" — "}
            {project.client} · {project.year}
          </p>
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.deliverables.join(" · ")}</p>
        </div>
        <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

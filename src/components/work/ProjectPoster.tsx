"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

/* An art-directed "poster" stands in for each project's key visual —
   built from type, grid and grain so it reads as intentional design,
   not a stock placeholder. */
export function ProjectPoster({
  project,
  size = "lg",
}: {
  project: Project;
  size?: "lg" | "sm";
}) {
  const inkClass = project.ink === "dark" ? "text-white" : "text-[#101010]";
  const subInk =
    project.ink === "dark" ? "text-white/60" : "text-[#101010]/55";
  const lineInk =
    project.ink === "dark" ? "border-white/15" : "border-[#101010]/12";

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${inkClass}`}
      style={{
        backgroundImage: `linear-gradient(145deg, ${project.palette[0]}, ${project.palette[1]})`,
      }}
    >
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 grain-card opacity-[0.12] mix-blend-overlay" />

      {/* concentric/grid motif */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-40`}
        style={{
          backgroundImage:
            project.ink === "dark"
              ? "radial-gradient(circle at 80% 15%, rgba(255,255,255,0.10), transparent 45%)"
              : "radial-gradient(circle at 80% 15%, rgba(0,0,0,0.06), transparent 45%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <span
            className={`rounded-full border ${lineInk} px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]`}
          >
            {project.category}
          </span>
          <span className="text-[11px] font-semibold tracking-[0.2em]">
            {project.year}
          </span>
        </div>

        <div className="my-auto py-6">
          <p className={`text-[11px] font-medium uppercase tracking-[0.28em] ${subInk}`}>
            {project.client}
          </p>
          <motion.h3
            className={`mt-3 ${
              size === "lg"
                ? "text-4xl sm:text-5xl lg:text-[3.4rem]"
                : "text-2xl sm:text-3xl"
            } font-extrabold leading-[0.95] tracking-tighter2`}
          >
            {project.title}
          </motion.h3>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, size === "lg" ? 3 : 2).map((t) => (
              <span
                key={t}
                className={`rounded-full border ${lineInk} px-2.5 py-1 text-[11px] font-medium ${subInk}`}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={`text-5xl font-extrabold leading-none tracking-tighter opacity-20 sm:text-6xl`}
          >
            {project.index}
          </span>
        </div>
      </div>

      {/* hover sheen */}
      <div
        className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1.1s] ease-editorial group-hover:translate-x-[120%]"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectPoster } from "./ProjectPoster";

const ease = [0.16, 1, 0.3, 1] as const;

export function WorkLibrary() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <div className="container-x">
      {/* filters */}
      <div className="mb-10 flex flex-wrap gap-2 border-b border-fg/10 pb-8 sm:mb-14">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              active === c
                ? "border-fg/0 text-bg"
                : "border-fg/15 text-muted hover:text-fg"
            }`}
          >
            {active === c && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-fg"
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            )}
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              layout
              key={project.slug}
              id={project.slug}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.06, ease }}
              className="scroll-mt-32"
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <ProjectPoster project={project} size="sm" />
                  </motion.div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.client} · {project.category}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-pretty text-sm text-muted">
                  {project.blurb}
                </p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

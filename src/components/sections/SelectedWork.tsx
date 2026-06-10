"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { ProjectPoster } from "@/components/work/ProjectPoster";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Magnetic } from "@/components/ui/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label mb-4">Selected work — ’24/’25</p>
          <AnimatedHeading
            text={"Three that\nmoved numbers."}
            by="line"
            className="display text-5xl tracking-tightest sm:text-6xl lg:text-7xl"
          />
        </div>
        <Magnetic>
          <Link
            href="/work"
            className="group hidden items-center gap-3 whitespace-nowrap text-sm font-medium sm:flex"
          >
            <span className="link-underline">View all work</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-fg/15 transition-transform duration-500 group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </Magnetic>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, delay: i * 0.05, ease }}
          >
            <Link
              href={`/work#${project.slug}`}
              className={`group block ${i === 0 ? "" : ""}`}
            >
              <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-8">
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-3xl lg:col-span-8 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <ProjectPoster project={project} size="lg" />
                  </motion.div>
                </div>

                <div
                  className={`lg:col-span-4 ${
                    i % 2 === 1 ? "lg:order-1 lg:pr-4" : "lg:pl-4"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-muted">
                      {project.index}
                    </span>
                    <span className="h-px flex-1 bg-fg/15" />
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-pretty text-muted">{project.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    <span className="link-underline">Open case</span>
                    <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link
        href="/work"
        className="mt-12 flex items-center justify-center gap-3 rounded-full border border-fg/15 py-4 text-sm font-medium sm:hidden"
      >
        View all work <Arrow />
      </Link>
    </section>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

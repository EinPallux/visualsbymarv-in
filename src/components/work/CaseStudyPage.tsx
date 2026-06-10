"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/data";
import { ProjectPoster } from "./ProjectPoster";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Four art-directed "surface" frames that stand in for real mockups.
   Each uses a different aspect ratio to simulate different media types. */
function MockupFrame({
  project,
  label,
  aspect,
  delay = 0,
}: {
  project: Project;
  label: string;
  aspect: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-3">
      <div className={`relative w-full overflow-hidden rounded-2xl ${aspect}`}>
        <ProjectPoster project={project} size="sm" />
      </div>
      <p className="label pl-1">{label}</p>
    </Reveal>
  );
}

export function CaseStudyPage({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const cs = project.caseStudy;
  const inkClass = project.ink === "dark" ? "text-white" : "text-[#101010]";

  return (
    <article>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative h-[80vh] min-h-[540px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <ProjectPoster project={project} size="lg" />
        </motion.div>

        {/* Back button floated inside hero */}
        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="absolute left-0 right-0 top-0 z-20 mx-auto max-w-[1500px] px-5 pt-24 sm:px-8 lg:px-12"
        >
          <Link
            href="/work"
            className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm transition-opacity duration-300 hover:opacity-70 ${
              project.ink === "dark"
                ? "border-white/20 bg-white/10 text-white"
                : "border-black/15 bg-black/5 text-[#101010]"
            }`}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Work
          </Link>
        </motion.div>

        {/* Project index number bottom-right */}
        <motion.span
          style={{ opacity: heroOpacity }}
          className={`absolute bottom-8 right-8 z-20 text-[10rem] font-extrabold leading-none tracking-tighter opacity-10 ${inkClass}`}
        >
          {project.index}
        </motion.span>
      </div>

      {/* ─── Meta strip ───────────────────────────────────────────── */}
      <div className="border-b border-fg/10">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="grid grid-cols-2 gap-px bg-fg/10 sm:grid-cols-4"
          >
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Category", value: project.category },
              { label: "Role", value: cs.role },
            ].map((m) => (
              <div key={m.label} className="bg-bg py-6 pl-0 pr-6 sm:py-8">
                <p className="label mb-1.5">{m.label}</p>
                <p className="text-sm font-semibold leading-snug">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Title + brief ────────────────────────────────────────── */}
      <section className="container-x pt-20 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label mb-5">The project</p>
              <h1 className="display text-5xl tracking-tightest sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {cs.brief}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Large wide mockup ────────────────────────────────────── */}
      <section className="container-x mt-16 sm:mt-20">
        <Reveal>
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl">
            <ProjectPoster project={project} size="lg" />
          </div>
          <p className="label mt-3 pl-1">Campaign Overview</p>
        </Reveal>
      </section>

      {/* ─── Approach ─────────────────────────────────────────────── */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="mb-14">
          <p className="label mb-4">The approach</p>
          <h2 className="display text-4xl tracking-tightest sm:text-5xl lg:text-6xl">
            How it was made.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-0">
          {cs.approach.map((para, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="grid border-t border-fg/10 py-10 sm:grid-cols-12 sm:gap-8"
            >
              <span className="label mb-3 sm:col-span-1 sm:mb-0 sm:pt-1">
                0{i + 1}
              </span>
              <p className="text-pretty text-lg leading-relaxed text-muted sm:col-span-11 sm:text-xl">
                {para}
              </p>
            </Reveal>
          ))}
          <div className="border-t border-fg/10" />
        </div>
      </section>

      {/* ─── Mockup grid ──────────────────────────────────────────── */}
      <section className="container-x pb-20 sm:pb-28">
        <Reveal className="mb-10">
          <p className="label mb-4">Deliverables in context</p>
          <h2 className="display text-4xl tracking-tightest sm:text-5xl">
            The work, close up.
          </h2>
        </Reveal>

        {/* Row 1: two landscape frames */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <MockupFrame
            project={project}
            label="Feed post (4:5)"
            aspect="aspect-[4/5]"
            delay={0}
          />
          <MockupFrame
            project={project}
            label="Story / Reel (9:16)"
            aspect="aspect-[9/16]"
            delay={0.07}
          />
        </div>

        {/* Row 2: full-width + two squares */}
        <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5">
          <MockupFrame
            project={project}
            label="Square post (1:1)"
            aspect="aspect-square"
            delay={0.04}
          />
          <MockupFrame
            project={project}
            label="Carousel cover"
            aspect="aspect-square"
            delay={0.1}
          />
          <MockupFrame
            project={project}
            label="Banner (3:1)"
            aspect="aspect-[3/1]"
            delay={0.15}
          />
        </div>
      </section>

      {/* ─── Deliverables + Outcome ───────────────────────────────── */}
      <section className="border-y border-fg/10">
        <div className="container-x grid gap-px bg-fg/10 lg:grid-cols-2">
          <Reveal className="bg-bg py-14 pr-0 lg:pr-16">
            <p className="label mb-6">What was delivered</p>
            <ul className="flex flex-col gap-3">
              {cs.deliverables.map((d, i) => (
                <li key={i} className="flex items-baseline gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fg/40" />
                  <span className="text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="bg-bg py-14 pl-0 lg:pl-16">
            <p className="label mb-6">The outcome</p>
            <blockquote className="text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              &ldquo;{cs.outcome}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ─── Tags ─────────────────────────────────────────────────── */}
      <section className="container-x py-12">
        <Reveal className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-fg/15 px-4 py-2 text-sm font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </Reveal>
      </section>

      {/* ─── Next project ─────────────────────────────────────────── */}
      <section className="container-x pb-24 pt-8 sm:pb-32">
        <Reveal>
          <p className="label mb-8">Next project</p>
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="aspect-[16/7]">
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <ProjectPoster project={next} size="lg" />
                </motion.div>
              </div>
              {/* overlay label */}
              <div
                className={`absolute inset-0 flex items-end p-8 sm:p-10 ${
                  next.ink === "dark" ? "text-white" : "text-[#101010]"
                }`}
              >
                <div className="flex w-full items-end justify-between gap-4">
                  <div>
                    <p
                      className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                        next.ink === "dark"
                          ? "text-white/60"
                          : "text-[#101010]/50"
                      }`}
                    >
                      {next.client}
                    </p>
                    <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {next.title}
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current/25 backdrop-blur-sm transition-transform duration-500 group-hover:translate-x-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}

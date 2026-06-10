"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/data";
import { ProjectPoster } from "./ProjectPoster";
import {
  PhoneReel,
  FeedGrid,
  CarouselSystem,
  TypeSpecimen,
  ColorSystem,
} from "./CaseVisuals";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* A framed showcase tile with a corner label. */
function Tile({
  label,
  className,
  children,
  delay = 0,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`relative overflow-hidden rounded-3xl border border-fg/10 bg-card ${className ?? ""}`}
    >
      {children}
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-fg/10 bg-bg/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
        {label}
      </span>
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
  const keyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: keyRef,
    offset: ["start end", "end start"],
  });
  const keyY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const cs = project.caseStudy;

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      {/* ─── Header ───────────────────────────────────────────────── */}
      <header className="container-x">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-fg/15 transition-transform duration-500 group-hover:-translate-x-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </span>
            All work
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Title block */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <Reveal delay={0.05}>
                <p className="label mb-5">
                  Case {project.index} — {project.category}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display text-balance text-5xl tracking-tightest sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-fg/15 px-3.5 py-1.5 text-xs font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Key art */}
          <Reveal delay={0.15} className="lg:col-span-6">
            <div
              ref={keyRef}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <motion.div style={{ y: keyY }} className="absolute inset-x-0 -inset-y-[6%]">
                <ProjectPoster project={project} size="lg" />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ─── Meta strip ───────────────────────────────────────────── */}
      <section className="container-x mt-14 sm:mt-20">
        <Reveal>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-fg/10 sm:grid-cols-4">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Discipline", value: project.category },
              { label: "Role", value: cs.role },
            ].map((m, i) => (
              <div
                key={m.label}
                className={`p-5 sm:p-6 ${
                  i !== 3 ? "sm:border-r" : ""
                } border-fg/10 ${i < 2 ? "max-sm:border-b" : ""} ${
                  i % 2 === 0 ? "max-sm:border-r" : ""
                }`}
              >
                <p className="label mb-2">{m.label}</p>
                <p className="text-sm font-semibold leading-snug">{m.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── Brief ────────────────────────────────────────────────── */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="label sticky top-32">The brief</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <p className="text-balance text-2xl font-medium leading-[1.3] tracking-tight sm:text-[1.9rem]">
              {cs.brief}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Approach ─────────────────────────────────────────────── */}
      <section className="container-x">
        <Reveal className="mb-12">
          <p className="label mb-4">The approach</p>
          <h2 className="display text-4xl tracking-tightest sm:text-5xl lg:text-6xl">
            How it came together.
          </h2>
        </Reveal>

        <div className="border-t border-fg/10">
          {cs.approach.map((para, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="grid border-b border-fg/10 py-9 sm:grid-cols-12 sm:gap-8"
            >
              <span className="label mb-3 sm:col-span-2 sm:mb-0 sm:pt-1.5">
                Step 0{i + 1}
              </span>
              <p className="text-pretty text-lg leading-relaxed text-muted sm:col-span-10 sm:text-xl">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Visual showcase (bento) ──────────────────────────────── */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="mb-12">
          <p className="label mb-4">Selected output</p>
          <h2 className="display text-4xl tracking-tightest sm:text-5xl lg:text-6xl">
            The work, on screen.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <Tile label="The feed" className="h-[460px] lg:col-span-7">
            <FeedGrid project={project} />
          </Tile>
          <Tile label="Reels" className="h-[460px] lg:col-span-5">
            <PhoneReel project={project} />
          </Tile>

          <Tile label="Carousel" className="h-[420px] lg:col-span-7" delay={0.05}>
            <CarouselSystem project={project} />
          </Tile>
          <Tile label="Typography" className="h-[420px] lg:col-span-5" delay={0.1}>
            <TypeSpecimen />
          </Tile>

          <Tile label="Color" className="h-[260px] sm:col-span-2 lg:col-span-12" delay={0.05}>
            <ColorSystem project={project} />
          </Tile>
        </div>
      </section>

      {/* ─── Deliverables + Outcome ───────────────────────────────── */}
      <section className="border-y border-fg/10">
        <div className="container-x grid lg:grid-cols-2">
          <Reveal className="border-fg/10 py-14 max-lg:border-b lg:border-r lg:pr-14">
            <p className="label mb-7">What was delivered</p>
            <ul className="flex flex-col">
              {cs.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 border-b border-fg/8 py-3.5 last:border-0"
                >
                  <span className="text-xs font-semibold text-muted">
                    0{i + 1}
                  </span>
                  <span className="text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center py-14 lg:pl-14">
            <p className="label mb-7">The outcome</p>
            <blockquote className="text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              &ldquo;{cs.outcome}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ─── Next project ─────────────────────────────────────────── */}
      <section className="container-x pt-20 sm:pt-28">
        <Reveal>
          <div className="mb-7 flex items-end justify-between">
            <p className="label">Next project</p>
            <span className="text-sm text-muted">
              {next.index} / {String(8).padStart(2, "0")}
            </span>
          </div>
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl sm:aspect-[16/6]">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease }}
              >
                <ProjectPoster project={next} size="lg" />
              </motion.div>
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted">{next.client}</p>
                <h3 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {next.title}
                </h3>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-fg/15 transition-transform duration-500 group-hover:translate-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}

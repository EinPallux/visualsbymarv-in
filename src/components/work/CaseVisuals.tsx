"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

/* ──────────────────────────────────────────────────────────────────
   Art-directed "design surfaces" for case studies. Each is a distinct,
   self-contained composition built from the project's own palette so the
   page reads like a real showcase of varied deliverables — not the same
   poster repeated. All colors live inside the surface; frames/labels use
   the site theme tokens.
   ────────────────────────────────────────────────────────────────── */

const grad = (p: Project) =>
  `linear-gradient(150deg, ${p.palette[0]}, ${p.palette[1]})`;
const ink = (p: Project) => (p.ink === "dark" ? "#ffffff" : "#0f0f0f");
const sub = (p: Project) =>
  p.ink === "dark" ? "rgba(255,255,255,0.6)" : "rgba(15,15,15,0.55)";
const hair = (p: Project) =>
  p.ink === "dark" ? "rgba(255,255,255,0.18)" : "rgba(15,15,15,0.14)";
const firstWord = (p: Project) => p.client.split(/[.\s]/)[0];

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 grain-card opacity-[0.1] mix-blend-overlay" />
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.8 5.4 4.8c2 0 3.3 1.1 4.1 2.3.8-1.2 2.1-2.3 4.1-2.3 3.4 0 5.1 3.6 3.4 7C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.6A8.4 8.4 0 1 1 21 11.5Z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

/* ── Phone showing a reel/story ───────────────────────────────────── */
export function PhoneReel({ project }: { project: Project }) {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="relative aspect-[9/19] h-full max-h-[380px] overflow-hidden rounded-[2.4rem] bg-[#0c0c0c] p-[5px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] ring-1 ring-fg/15">
        <div
          className="relative h-full w-full overflow-hidden rounded-[2.05rem]"
          style={{ background: grad(project), color: ink(project) }}
        >
          <Grain />
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black/80" />
          {/* story progress segments */}
          <div className="absolute left-3 right-3 top-2 z-10 flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-[3px] flex-1 rounded-full"
                style={{ background: i === 0 ? ink(project) : hair(project) }}
              />
            ))}
          </div>

          {/* content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-4 pt-8">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: sub(project) }}
            >
              {project.category}
            </p>

            <div className="-mt-4">
              <p
                className="break-words text-[1.7rem] font-extrabold leading-[0.9] tracking-tighter"
                style={{ color: ink(project) }}
              >
                {firstWord(project)}
              </p>
              <div
                className="mt-3 grid h-10 w-10 place-items-center rounded-full"
                style={{ border: `1.5px solid ${ink(project)}` }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div className="max-w-[64%]">
                <p className="truncate text-xs font-bold">
                  @{project.client.toLowerCase().replace(/[^a-z]/g, "")}
                </p>
                <div className="mt-1.5 space-y-1">
                  <span className="block h-1.5 w-full rounded-full" style={{ background: hair(project) }} />
                  <span className="block h-1.5 w-2/3 rounded-full" style={{ background: hair(project) }} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <HeartIcon />
                <CommentIcon />
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Instagram-style feed grid (vertical 4:5 crops) ───────────────── */
export function FeedGrid({ project }: { project: Project }) {
  const handle = project.client.toLowerCase().replace(/[^a-z]/g, "");
  return (
    <div className="flex h-full flex-col items-center p-6 sm:p-7">
      <div className="flex w-full max-w-[300px] flex-col">
        {/* profile header */}
        <div className="flex items-center gap-3 border-b border-fg/10 pb-4">
          <div
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold"
            style={{ background: grad(project), color: ink(project) }}
          >
            {project.client[0]}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-tight">@{handle}</p>
            <div className="mt-0.5 flex gap-3 text-[11px] text-muted">
              <span>
                <b className="text-fg">128</b> posts
              </span>
              <span>
                <b className="text-fg">100k</b> followers
              </span>
            </div>
          </div>
        </div>

        {/* 3x3 grid of portrait posts */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => {
            const variant = i % 4;
            return (
              <div
                key={i}
                className="relative aspect-[4/5] overflow-hidden rounded-[5px]"
                style={{
                  background:
                    variant === 1
                      ? project.palette[project.ink === "dark" ? 1 : 0]
                      : variant === 2
                      ? project.palette[project.ink === "dark" ? 0 : 1]
                      : grad(project),
                  color: ink(project),
                }}
              >
                {variant === 1 && (
                  <span className="absolute inset-0 grid place-items-center text-base font-extrabold opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {variant === 3 && (
                  <span className="absolute bottom-1 left-1.5 text-sm font-extrabold opacity-40">
                    ✦
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Animated carousel showcase ───────────────────────────────────── */
export function CarouselSystem({ project }: { project: Project }) {
  const slides = [
    { kind: "cover" as const },
    { kind: "content" as const, n: "01" },
    { kind: "content" as const, n: "02" },
    { kind: "stat" as const },
    { kind: "cta" as const },
  ];
  const [active, setActive] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.offsetWidth));
    ro.observe(el);
    setW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      1700
    );
    return () => clearInterval(id);
  }, [slides.length]);

  const gap = 14;
  const slideW = Math.min(Math.max(w * 0.42, 150), 230);
  // center the active slide within the viewport
  const x = w ? (w - slideW) / 2 - active * (slideW + gap) : 0;

  return (
    <div className="flex h-full flex-col justify-center px-6 py-6 sm:px-8">
      <div ref={viewportRef} className="relative overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap }}
          animate={{ x }}
          transition={{ type: "spring", stiffness: 240, damping: 30 }}
        >
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.92 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl p-4"
                style={{
                  width: slideW || "42%",
                  background:
                    s.kind === "content"
                      ? project.palette[project.ink === "dark" ? 1 : 0]
                      : grad(project),
                  color: ink(project),
                }}
              >
                <Grain />
                <div className="relative flex h-full flex-col justify-between">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: sub(project) }}
                  >
                    {s.kind === "cta" ? "Save this" : project.client}
                  </span>

                  {s.kind === "cover" && (
                    <p className="text-lg font-extrabold leading-[0.95] tracking-tighter">
                      {project.title}
                    </p>
                  )}
                  {s.kind === "content" && (
                    <div>
                      <p className="text-3xl font-extrabold tracking-tighter">
                        {s.n}
                      </p>
                      <div className="mt-2 space-y-1.5">
                        <span className="block h-1.5 w-4/5 rounded-full" style={{ background: hair(project) }} />
                        <span className="block h-1.5 w-3/5 rounded-full" style={{ background: hair(project) }} />
                      </div>
                    </div>
                  )}
                  {s.kind === "stat" && (
                    <p className="text-3xl font-extrabold tracking-tighter">+212%</p>
                  )}
                  {s.kind === "cta" && (
                    <p className="text-base font-extrabold leading-tight tracking-tight">
                      Follow for more →
                    </p>
                  )}

                  <span
                    className="text-[10px] font-medium"
                    style={{ color: sub(project) }}
                  >
                    {i + 1} / {slides.length}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* dots */}
      <div className="mt-5 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-5 bg-fg" : "w-1.5 bg-fg/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Type specimen ────────────────────────────────────────────────── */
export function TypeSpecimen() {
  return (
    <div className="flex h-full flex-col justify-between p-7 sm:p-8">
      <span className="text-[7.5rem] font-extrabold leading-[0.7] tracking-tighter">
        Aa
      </span>
      <div>
        <p className="text-lg font-bold tracking-tight">Plus Jakarta Sans</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span className="font-light">Light</span>
          <span className="font-normal">Regular</span>
          <span className="font-medium">Medium</span>
          <span className="font-semibold">Semibold</span>
          <span className="font-extrabold text-fg">Extrabold</span>
        </div>
        <p className="mt-4 text-pretty text-sm text-muted">
          Designed to move — tight tracking, heavy display weights and a
          readable body voice.
        </p>
      </div>
    </div>
  );
}

/* ── Color palette ────────────────────────────────────────────────── */
export function ColorSystem({ project }: { project: Project }) {
  const swatches = [
    { c: project.palette[0], n: "Primary" },
    { c: project.palette[1], n: "Secondary" },
    { c: "#0C0C0C", n: "Ink" },
    { c: "#F4F2EC", n: "Paper" },
  ];
  return (
    <div className="flex h-full flex-col p-7 sm:p-8">
      <p className="mb-5 text-lg font-bold tracking-tight">Palette</p>
      <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((s) => (
          <div key={s.n} className="flex flex-col gap-2">
            <div
              className="flex-1 rounded-xl border border-fg/10"
              style={{ background: s.c }}
            />
            <div>
              <p className="text-xs font-semibold">{s.n}</p>
              <p className="text-[11px] uppercase text-muted">{s.c}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

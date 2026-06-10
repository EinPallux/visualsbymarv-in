"use client";

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

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 grain-card opacity-[0.1] mix-blend-overlay" />
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.8 5.4 4.8c2 0 3.3 1.1 4.1 2.3.8-1.2 2.1-2.3 4.1-2.3 3.4 0 5.1 3.6 3.4 7C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.6A8.4 8.4 0 1 1 21 11.5Z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

          {/* center content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-4 pt-8">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: sub(project) }}
            >
              {project.category}
            </p>

            <div className="-mt-6">
              <p
                className="text-[2.6rem] font-extrabold leading-[0.92] tracking-tighter"
                style={{ color: ink(project) }}
              >
                {project.client.split(/[.\s]/)[0]}
              </p>
              <div
                className="mt-3 grid h-11 w-11 place-items-center rounded-full"
                style={{ border: `1.5px solid ${ink(project)}` }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div className="max-w-[70%]">
                <p className="text-xs font-bold">@{project.client.toLowerCase().replace(/[^a-z]/g, "")}</p>
                <div className="mt-1.5 space-y-1">
                  <span className="block h-1.5 w-full rounded-full" style={{ background: hair(project) }} />
                  <span className="block h-1.5 w-2/3 rounded-full" style={{ background: hair(project) }} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3.5">
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

/* ── Instagram-style feed grid ────────────────────────────────────── */
export function FeedGrid({ project }: { project: Project }) {
  const handle = project.client.toLowerCase().replace(/[^a-z]/g, "");
  return (
    <div className="flex h-full flex-col p-6 sm:p-7">
      {/* profile header */}
      <div className="flex items-center gap-3 border-b border-fg/10 pb-4">
        <div
          className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold"
          style={{ background: grad(project), color: ink(project) }}
        >
          {project.client[0]}
        </div>
        <div>
          <p className="text-sm font-bold tracking-tight">@{handle}</p>
          <div className="mt-1 flex gap-4 text-[11px] text-muted">
            <span>
              <b className="text-fg">128</b> posts
            </span>
            <span>
              <b className="text-fg">100k</b> followers
            </span>
          </div>
        </div>
      </div>

      {/* 3x3 grid */}
      <div className="mt-4 grid flex-1 grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          const variant = i % 4;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-md"
              style={{
                background:
                  variant === 0
                    ? grad(project)
                    : variant === 1
                    ? project.palette[project.ink === "dark" ? 1 : 0]
                    : variant === 2
                    ? project.palette[project.ink === "dark" ? 0 : 1]
                    : grad(project),
                color: ink(project),
              }}
            >
              {variant === 1 && (
                <span className="absolute inset-0 grid place-items-center text-lg font-extrabold opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              {variant === 3 && (
                <span className="absolute bottom-1 left-1.5 text-base font-extrabold opacity-40">
                  ✦
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Carousel system ──────────────────────────────────────────────── */
export function CarouselSystem({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden p-6 sm:p-8">
      <p className="label mb-5">Carousel · 1 / 8</p>
      <div className="relative flex items-stretch gap-3">
        {/* main slide */}
        <div
          className="relative aspect-[4/5] w-[46%] shrink-0 overflow-hidden rounded-xl p-4"
          style={{ background: grad(project), color: ink(project) }}
        >
          <Grain />
          <div className="flex h-full flex-col justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: sub(project) }}>
              {project.client}
            </span>
            <p className="text-xl font-extrabold leading-[0.95] tracking-tighter">
              {project.title}
            </p>
            <span className="text-[10px] font-medium" style={{ color: sub(project) }}>
              swipe →
            </span>
          </div>
        </div>
        {/* peeking next slides */}
        <div
          className="relative aspect-[4/5] w-[40%] shrink-0 overflow-hidden rounded-xl p-4"
          style={{ background: project.palette[project.ink === "dark" ? 1 : 0], color: ink(project) }}
        >
          <div className="space-y-1.5">
            <span className="block h-2 w-3/4 rounded-full" style={{ background: hair(project) }} />
            <span className="block h-2 w-1/2 rounded-full" style={{ background: hair(project) }} />
          </div>
        </div>
        <div
          className="aspect-[4/5] w-[24%] shrink-0 rounded-xl"
          style={{ background: grad(project) }}
        />
      </div>
      {/* dots */}
      <div className="mt-5 flex gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-5 bg-fg" : "w-1.5 bg-fg/25"}`}
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
      <div className="flex items-start justify-between">
        <span className="text-[8rem] font-extrabold leading-[0.7] tracking-tighter">
          Aa
        </span>
        <span className="label">Type</span>
      </div>
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
      <div className="mb-5 flex items-center justify-between">
        <p className="text-lg font-bold tracking-tight">Palette</p>
        <span className="label">04 tones</span>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-3">
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

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = ["Visual Designer", "Content Creator", "Brand Thinker", "Motion Tinkerer"];
const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-28 sm:pt-32"
    >
      {/* Top meta row */}
      <motion.div
        style={{ opacity: fade }}
        className="container-x flex items-start justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <p className="label">Portfolio</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="text-right"
        >
          <p className="label">Based in</p>
          <p className="mt-1 text-sm text-muted">Germany · B.A. Media Design</p>
        </motion.div>
      </motion.div>

      {/* Center composition */}
      <div className="relative flex flex-1 items-center justify-center">
        {/* Giant word behind */}
        <motion.h1
          style={{ y: wordY }}
          className="pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 select-none justify-center"
          aria-label="Marvin — Visual & Content Designer"
        >
          <span className="display whitespace-nowrap text-[min(26vw,30vh)] leading-none tracking-tightest sm:text-[min(24vw,32vh)] lg:text-[min(22vw,34vh)]">
            {"MARVIN".split("").map((c, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.06, ease }}
              >
                {c}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Portrait */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.5, ease }}
          className="relative z-10 mt-6"
        >
          <div className="relative h-[58vh] max-h-[640px] min-h-[360px] w-[clamp(220px,42vw,440px)] overflow-hidden rounded-[2rem] border border-fg/10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/personal_branding/marvin/me.png"
              alt="Marvin, visual & content designer"
              fill
              priority
              sizes="(max-width: 768px) 60vw, 440px"
              className="object-cover object-top grayscale [transition:filter_.8s] hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay grain-card opacity-20" />
          </div>

          {/* floating role chip on the portrait */}
          <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-fg/10 bg-bg/80 px-5 py-2 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-tight">
              Hey, I’m Marvin{" "}
              <span className="inline-block animate-pulse">👋</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        style={{ opacity: fade }}
        className="container-x relative z-20 mt-6 flex flex-col gap-8 sm:mt-0 sm:flex-row sm:items-end sm:justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="max-w-sm"
        >
          <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
            I design{" "}
            <span className="font-semibold text-fg">social-first brand visuals</span>{" "}
            that move — blending media design, content and modern AI workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="flex items-center gap-4"
        >
          <div className="flex h-6 items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="text-xl font-bold tracking-tight sm:text-2xl"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <Link
            href="/work"
            className="group flex items-center gap-3 text-sm font-medium"
          >
            <span className="link-underline">Selected work</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-fg/15 transition-transform duration-500 group-hover:translate-y-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

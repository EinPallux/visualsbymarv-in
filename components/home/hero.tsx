"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const lines = ["Content people", "stop scrolling for."];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Introduction" className="container-x flex min-h-[calc(100svh-4rem)] flex-col justify-between pb-10 pt-16 md:pt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <motion.p
          className="meta-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Marvin — Media Designer, Germany
        </motion.p>
        <motion.p
          className="meta-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Portfolio / 2026
        </motion.p>
      </div>

      <div className="py-16 md:py-20">
        <h1 className="text-display">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: reduceMotion ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                {i === 1 ? (
                  <>
                    <span className="text-accent">stop scrolling</span> for.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex max-w-xl flex-col gap-8 md:mt-14"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-muted">
            I design social media content and visual identities for companies —
            combining brand thinking, storytelling and AI-assisted workflows
            into work that earns attention instead of asking for it.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              Selected work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              About me
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="rule flex flex-wrap items-center justify-between gap-4 pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <p className="meta-label">B.A. Media Design</p>
        <p className="meta-label hidden sm:block">
          Figma · Photoshop · Illustrator · Claude Code
        </p>
        <p className="meta-label inline-flex items-center gap-2">
          Scroll
          <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;
const words = ["DESIGNER", "CREATOR", "VISUAL", "THINKER"];

export function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div ref={ref} className="container-x pt-36 sm:pt-44">
      <p className="label mb-6">About — Marvin, 25, Germany</p>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.1 + i * 0.08, ease }}
                className={`display block text-[15vw] leading-[0.85] tracking-tightest lg:text-[10.5rem] ${
                  i % 2 === 1 ? "text-outline pl-[0.08em]" : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="lg:col-span-4"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-fg/10">
            <Image
              src="/images/personal_branding/marvin/me.png"
              alt="Marvin"
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover object-top grayscale"
            />
            <div className="pointer-events-none absolute inset-0 grain-card opacity-20 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

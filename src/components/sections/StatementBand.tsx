"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* Scroll-linked horizontal drift on a big editorial statement. */
export function StatementBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-14%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-fg/10 py-16 sm:py-24"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap text-[15vw] font-extrabold leading-[0.95] tracking-tightest sm:text-[12vw]"
      >
        Design that&nbsp;
        <span className="text-outline">stops the scroll</span>&nbsp;—
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="mt-2 flex justify-end whitespace-nowrap text-[15vw] font-extrabold leading-[0.95] tracking-tightest sm:text-[12vw]"
      >
        content that&nbsp;<span className="italic">earns the save.</span>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { createElement, useRef, type ElementType } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** split by "word" (default) or "line" using \n */
  by?: "word" | "line";
};

/* Masked, staggered reveal — words rise from behind an invisible line.
   The signature headline motion of the site. */
export function AnimatedHeading({
  text,
  className,
  as = "h2",
  delay = 0,
  by = "word",
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const units = by === "line" ? text.split("\n") : text.split(" ");

  return createElement(
    as,
    { ref, className, "aria-label": text },
    units.map((unit, i) => (
      <span
        key={i}
        aria-hidden
        className={`${
          by === "line" ? "block" : "inline-block"
        } overflow-hidden align-bottom`}
        style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
      >
        <motion.span
          className="inline-block"
          initial={{ y: "110%", rotate: 3 }}
          animate={inView ? { y: "0%", rotate: 0 } : { y: "110%", rotate: 3 }}
          transition={{
            duration: 1,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? " " : ""}
        </motion.span>
      </span>
    ))
  );
}

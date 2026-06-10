"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/lib/data";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="label mb-4">Word of mouth</p>
        <AnimatedHeading
          text={"What lands in\nmy inbox."}
          by="line"
          className="display text-5xl tracking-tightest sm:text-6xl lg:text-7xl"
        />
        <p className="mt-5 max-w-md text-muted">
          No staged five-star widgets — just real messages from people I’ve
          actually shipped work for.
        </p>
      </div>

      <div className="columns-1 gap-5 sm:columns-2 sm:gap-6 [&>*]:mb-5 sm:[&>*]:mb-6">
        {testimonials.map((t, i) => (
          <ChatCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}

type Phase = "typing" | "message" | "reacted";

function ChatCard({ t, index }: { t: Testimonial; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (!inView) return;
    const base = 250 + index * 220; // gentle stagger between cards
    const toMessage = setTimeout(() => setPhase("message"), base + 1150);
    const toReacted = setTimeout(() => setPhase("reacted"), base + 1850);
    return () => {
      clearTimeout(toMessage);
      clearTimeout(toReacted);
    };
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.08, ease }}
      className="break-inside-avoid rounded-[1.75rem] border border-fg/10 bg-card p-5 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.55)] sm:p-6"
    >
      {/* contact header */}
      <div className="mb-5 flex items-center gap-3 border-b border-fg/8 pb-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-fg/8 text-sm font-bold">
          {t.name[0]}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-tight">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Today
        </div>
      </div>

      {/* conversation surface — fixed-ish min height keeps layout from
          jumping as the typing indicator swaps for the message */}
      <div className="relative min-h-[96px]">
        <AnimatePresence mode="popLayout">
          {phase === "typing" ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -4 }}
              transition={{ duration: 0.35, ease }}
              className="inline-flex w-fit items-center gap-1.5 rounded-[1.25rem] rounded-bl-md bg-[#e9e9eb] px-4 py-3.5 dark:bg-[#262629]"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-2 w-2 rounded-full bg-fg/40"
                  animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: d * 0.15,
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="message"
              layout
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 26,
                mass: 0.7,
              }}
              className="relative w-fit max-w-[92%] rounded-[1.4rem] rounded-bl-md bg-[#e9e9eb] px-4 py-3 text-[16px] leading-relaxed text-[#111] dark:bg-[#262629] dark:text-white"
            >
              {t.message}

              {/* tapback reaction */}
              <AnimatePresence>
                {phase === "reacted" && (
                  <motion.span
                    initial={{ scale: 0, rotate: -25, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 14,
                      mass: 0.6,
                    }}
                    className="absolute -right-3 -top-4 grid h-9 w-9 place-items-center rounded-full border border-fg/10 bg-bg text-base shadow-[0_8px_22px_-8px_rgba(0,0,0,0.45)]"
                  >
                    {/* little double-dot tail like a real tapback */}
                    <span className="absolute -bottom-1 -left-0.5 h-2 w-2 rounded-full border border-fg/10 bg-bg" />
                    <span className="absolute -bottom-2.5 -left-1.5 h-1 w-1 rounded-full border border-fg/10 bg-bg" />
                    <span className="relative">{t.reaction}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* delivered receipt fades in after the message lands */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "reacted" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-right text-[11px] font-medium text-muted"
      >
        Delivered
      </motion.p>
    </motion.div>
  );
}

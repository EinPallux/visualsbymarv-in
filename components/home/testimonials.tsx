"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { CheckCheck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Conversation playback stages:
 * 0 idle · 1 client typing · 2 first message · 3 all client messages ·
 * 4 own typing · 5 reply sent & read
 */
const STAGE_DELAYS: [number, number][] = [
  [1, 350],
  [2, 1100],
  [3, 1900],
  [4, 2500],
  [5, 3500],
];

function TypingIndicator({ own = false }: { own?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
      className={cn(
        "flex w-fit items-center gap-1.5 rounded-2xl px-4 py-3",
        own ? "ml-auto bg-bubble-own/10" : "bg-bubble"
      )}
      aria-label="Typing…"
    >
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="size-1.5 rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.18 }}
        />
      ))}
    </motion.div>
  );
}

function Bubble({
  text,
  time,
  own = false,
}: {
  text: string;
  time?: string;
  own?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={cn("flex max-w-[85%] flex-col gap-1", own ? "ml-auto items-end" : "items-start")}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          own
            ? "rounded-br-md bg-bubble-own text-bubble-own-text"
            : "rounded-bl-md bg-bubble"
        )}
      >
        {text}
      </div>
      {time && <span className="px-1 text-[10px] text-muted">{time}</span>}
    </motion.div>
  );
}

function ChatCard({ testimonial }: { testimonial: Testimonial }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setStage(5);
      return;
    }
    const timers = STAGE_DELAYS.map(([next, delay]) =>
      setTimeout(() => setStage(next), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion]);

  const [firstMessage, ...moreMessages] = testimonial.messages;
  const initial = testimonial.name.charAt(0);

  return (
    <div
      ref={ref}
      className="flex w-[85vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-line bg-background shadow-[0_1px_3px_rgba(12,12,12,0.05)] sm:w-96 sm:snap-start"
    >
      {/* conversation header */}
      <div className="flex items-center gap-3 border-b border-line-soft px-5 py-4">
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full bg-surface text-sm font-semibold"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{testimonial.name}</p>
          <p className="truncate text-xs text-muted">{testimonial.role}</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-muted">
          <span className="size-1.5 rounded-full bg-green-500" aria-hidden="true" />
          online
        </span>
      </div>

      {/* message thread */}
      <div className="flex min-h-72 flex-col justify-end gap-2.5 px-5 py-5">
        <AnimatePresence>
          {stage === 1 && <TypingIndicator key="client-typing" />}
        </AnimatePresence>
        {stage >= 2 && firstMessage && (
          <Bubble text={firstMessage.text} time={firstMessage.time} />
        )}
        {stage >= 3 &&
          moreMessages.map((message) => (
            <Bubble key={message.text} text={message.text} time={message.time} />
          ))}
        <AnimatePresence>
          {stage === 4 && testimonial.reply && (
            <TypingIndicator key="own-typing" own />
          )}
        </AnimatePresence>
        {stage >= 5 && testimonial.reply && (
          <>
            <Bubble text={testimonial.reply} own />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-auto inline-flex items-center gap-1 px-1 text-[10px] text-muted"
            >
              <CheckCheck className="size-3 text-sky-500" aria-hidden="true" />
              Read
            </motion.span>
          </>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="rule overflow-hidden">
      <div className="container-x py-24 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            label="Testimonials"
            title="What clients text me after we ship."
          />
          <Reveal delay={0.1}>
            <p className="meta-label" aria-hidden="true">
              Scroll sideways →
            </p>
          </Reveal>
        </div>
        <span id="testimonials-title" className="sr-only">
          Testimonials
        </span>

        <Reveal className="mt-14" y={32}>
          <div
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16"
            role="list"
            aria-label="Client messages"
          >
            {testimonials.map((testimonial) => (
              <div role="listitem" key={testimonial.id} className="flex">
                <ChatCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-xs text-muted">
            Real feedback, lightly edited for length. The emojis were already there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

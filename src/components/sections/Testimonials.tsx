"use client";

import { motion } from "framer-motion";
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
          No staged five-star widgets — just messages from people I’ve actually
          shipped work for.
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

function ChatCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
        <div className="ml-auto flex items-center gap-1 text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          iMessage
        </div>
      </div>

      {/* bubbles */}
      <div className="flex flex-col gap-2">
        {t.messages.map((m, i) => {
          const last = i === t.messages.length - 1;
          return (
            <div key={i} className="relative max-w-[88%] self-start">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease }}
                className="rounded-[1.25rem] rounded-bl-md bg-[#e9e9eb] px-4 py-2.5 text-[15px] leading-snug text-[#111] dark:bg-[#262629] dark:text-white"
              >
                {m}
                {last && t.reaction && (
                  <span className="absolute -left-2 -top-3 grid h-7 w-7 place-items-center rounded-full border border-fg/10 bg-bg text-xs shadow-sm">
                    {t.reaction}
                  </span>
                )}
              </motion.div>
            </div>
          );
        })}

        {t.delivered && (
          <span className="mt-1 self-end text-[11px] font-medium text-muted">
            {t.delivered}
          </span>
        )}
      </div>
    </motion.div>
  );
}

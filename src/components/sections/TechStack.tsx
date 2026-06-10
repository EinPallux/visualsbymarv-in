"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import { stackIcons } from "@/components/icons/StackIcons";
import { Reveal } from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function TechStack() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <Reveal>
          <p className="label mb-5">The toolkit</p>
          <h2 className="display text-4xl tracking-tighter2 sm:text-5xl">
            A tight stack,
            <br />
            used with intent.
          </h2>
          <p className="mt-5 max-w-sm text-muted">
            Four tools do most of the work — the rest is taste, speed and an
            AI-assisted workflow that lets ideas land faster.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-fg/10 bg-fg/10 sm:grid-cols-4">
          {stack.map((tool, i) => {
            const Icon = stackIcons[tool.name];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="group relative flex flex-col items-start gap-6 bg-bg p-6 transition-colors duration-500 hover:bg-fg/[0.03] sm:p-7"
              >
                <Icon className="h-9 w-9 transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:scale-110" />
                <div>
                  <p className="text-base font-bold tracking-tight">
                    {tool.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{tool.caption}</p>
                </div>
                <span className="absolute right-5 top-5 text-[11px] font-medium text-muted/60">
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

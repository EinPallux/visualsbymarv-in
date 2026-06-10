import Image from "next/image";

import type { ProjectVisual as ProjectVisualData, ProjectVisualTone } from "@/types";
import { cn } from "@/lib/utils";

const tones: Record<
  ProjectVisualTone,
  { bg: string; word: string; caption: string }
> = {
  ember: {
    bg: "bg-[#eee4d8] dark:bg-[#211a14]",
    word: "text-[#c2410c] dark:text-[#fb923c]",
    caption: "text-[#7c5a3d] dark:text-[#b8987a]",
  },
  frost: {
    bg: "bg-[#dfe7ec] dark:bg-[#14191e]",
    word: "text-[#1d4ed8] dark:text-[#60a5fa]",
    caption: "text-[#4d6373] dark:text-[#8aa3b5]",
  },
  moss: {
    bg: "bg-[#e2e8dc] dark:bg-[#161b14]",
    word: "text-[#3f6212] dark:text-[#a3e635]",
    caption: "text-[#5b6b4d] dark:text-[#9bab8a]",
  },
  dusk: {
    bg: "bg-[#e4e0ec] dark:bg-[#18141e]",
    word: "text-[#6d28d9] dark:text-[#a78bfa]",
    caption: "text-[#5f5673] dark:text-[#9b91b5]",
  },
  sand: {
    bg: "bg-[#ece7d8] dark:bg-[#1e1c14]",
    word: "text-[#a16207] dark:text-[#facc15]",
    caption: "text-[#776a4d] dark:text-[#b3a87f]",
  },
};

interface ProjectVisualProps {
  visual: ProjectVisualData;
  client: string;
  className?: string;
  priority?: boolean;
}

/**
 * Abstract editorial composition standing in for project imagery:
 * tone field, oversized word bleeding off the edge, real client logo.
 */
export function ProjectVisual({ visual, client, className }: ProjectVisualProps) {
  const tone = tones[visual.tone];

  return (
    <div
      role="img"
      aria-label={`${client} — ${visual.caption}`}
      className={cn(
        "@container relative isolate flex flex-col justify-between overflow-hidden p-6 transition-transform duration-700 ease-out md:p-9",
        tone.bg,
        className
      )}
    >
      {/* fine structural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px)",
          backgroundSize: "25% 100%",
          color: "rgba(12,12,12,0.06)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        {visual.logo ? (
          <Image
            src={visual.logo}
            alt=""
            width={400}
            height={120}
            className="logo-neutral h-6 w-auto max-w-[45%] object-contain object-left md:h-8"
          />
        ) : (
          <span className={cn("meta-label", tone.caption)}>{client}</span>
        )}
        <span className={cn("meta-label", tone.caption)}>{visual.tone}/study</span>
      </div>

      <div className="relative">
        <p
          aria-hidden="true"
          className={cn(
            "-mb-[0.16em] -ml-[0.04em] select-none text-[clamp(4rem,14cqw,11rem)] font-bold leading-none tracking-[-0.04em]",
            tone.word
          )}
        >
          {visual.word}
        </p>
        <p className={cn("mt-4 max-w-xs text-sm leading-relaxed", tone.caption)}>
          {visual.caption}
        </p>
      </div>
    </div>
  );
}

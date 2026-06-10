import type { Tool } from "@/types";

export const tools: Tool[] = [
  {
    name: "Figma",
    glyph: "Fg",
    stage: "Systems & Layout",
    role: "Where systems are born",
    detail:
      "Every content system starts here: grids, type scales, component libraries and the templates clients keep using long after handoff. If it needs to be reusable, it's built in Figma.",
  },
  {
    name: "Photoshop",
    glyph: "Ps",
    stage: "Imagery & Retouch",
    role: "Where images earn their place",
    detail:
      "Compositing, retouching, color grading — the difference between a screenshot and a visual. Smart-object templates turn one-hour thumbnails into five-minute ones.",
  },
  {
    name: "Illustrator",
    glyph: "Ai",
    stage: "Identity & Vector",
    role: "Where marks are made",
    detail:
      "Logos, icons and anything that has to scale from a favicon to a banner. Vector discipline keeps identities sharp at every size a feed can throw at them.",
  },
  {
    name: "Claude Code",
    glyph: "Cc",
    stage: "Automation & Production",
    role: "Where friction disappears",
    detail:
      "Batch exports, asset pipelines, naming scripts, even this website. AI handles the repetitive production work so design time goes into design — not file management.",
  },
];

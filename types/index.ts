export type ProjectVisualTone = "ember" | "frost" | "moss" | "dusk" | "sand";

export interface ProjectVisual {
  /** Oversized word rendered inside the composition */
  word: string;
  /** Supporting line under the word */
  caption: string;
  tone: ProjectVisualTone;
  /** Optional client logo layered into the composition */
  logo?: string;
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  summary: string;
  featured: boolean;
  visual: ProjectVisual;
  challenge: string[];
  goal: string[];
  process: CaseStudySection[];
  decisions: { title: string; body: string }[];
  results: { value: string; label: string }[];
  resultsNote: string;
  motion: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  messages: { text: string; time: string }[];
  reply?: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

export interface Tool {
  name: string;
  glyph: string;
  stage: string;
  role: string;
  detail: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

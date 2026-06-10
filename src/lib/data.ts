export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  /** tailwind-friendly gradient stops for the art-directed poster */
  palette: [string, string];
  /** "dark" => light type on dark poster, "light" => dark type on light poster */
  ink: "dark" | "light";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "chromiecraft-launch",
    index: "01",
    title: "Progression, Reframed",
    client: "ChromieCraft",
    category: "Social Campaign",
    year: "2025",
    blurb:
      "A social-first launch identity for a community of 100k+ players — animated keyframes, reels and a typographic system built to move.",
    tags: ["Art Direction", "Motion", "Social"],
    palette: ["#101010", "#2b2b2b"],
    ink: "dark",
    featured: true,
  },
  {
    slug: "azerothcore-brand",
    index: "02",
    title: "An Engine With a Face",
    client: "AzerothCore",
    category: "Brand Visuals",
    year: "2025",
    blurb:
      "Turning an open-source framework into a brand people rally behind — a visual language of contrast, grid and restraint.",
    tags: ["Identity", "Visual System", "Web"],
    palette: ["#f3f1ea", "#d9d6cc"],
    ink: "light",
    featured: true,
  },
  {
    slug: "sundevs-content-system",
    index: "03",
    title: "Content That Compounds",
    client: "SunDevs.net",
    category: "Content System",
    year: "2024",
    blurb:
      "A repeatable, template-driven content system that let a small team ship daily without ever looking templated.",
    tags: ["Design System", "Templates", "Workflow"],
    palette: ["#161616", "#3a3a3a"],
    ink: "dark",
    featured: true,
  },
  {
    slug: "byalexgg-social",
    index: "04",
    title: "Loud, On Purpose",
    client: "byAlex.gg",
    category: "Social Content",
    year: "2024",
    blurb:
      "Punchy, high-frequency social content for a creator audience — built to stop the scroll and earn the save.",
    tags: ["Content Creation", "Reels", "Thumbnails"],
    palette: ["#0e0e0e", "#242424"],
    ink: "dark",
  },
  {
    slug: "adler-rebrand-print",
    index: "05",
    title: "Gifts, Made Memorable",
    client: "Adler Werbegeschenke",
    category: "Brand & Print",
    year: "2024",
    blurb:
      "Daily graphic design across print and digital for a promotional-products brand — catalogues, campaigns and packaging.",
    tags: ["Print", "Layout", "Campaign"],
    palette: ["#eeece4", "#cfccc2"],
    ink: "light",
  },
  {
    slug: "motion-studies",
    index: "06",
    title: "Motion Studies",
    client: "Personal",
    category: "Experiments",
    year: "2025",
    blurb:
      "An ongoing set of kinetic-type and AI-assisted motion experiments — the lab where the client work gets sharpened.",
    tags: ["Kinetic Type", "AI Workflow", "R&D"],
    palette: ["#121212", "#2e2e2e"],
    ink: "dark",
  },
  {
    slug: "ai-assisted-pipeline",
    index: "07",
    title: "The AI-Assisted Pipeline",
    client: "Process",
    category: "Workflow",
    year: "2025",
    blurb:
      "How I fold tools like Claude into a design practice — faster iterations, more concepts, the craft stays human.",
    tags: ["AI Workflow", "Automation", "Process"],
    palette: ["#f1efe8", "#dad7cd"],
    ink: "light",
  },
  {
    slug: "social-templates",
    index: "08",
    title: "Carousel Architecture",
    client: "Multi-client",
    category: "Social Design",
    year: "2024",
    blurb:
      "A library of editorial carousel layouts engineered for retention, readability and a recognizable signature.",
    tags: ["Carousels", "Editorial", "Templates"],
    palette: ["#131313", "#333333"],
    ink: "dark",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export type Client = {
  name: string;
  logo: string;
  tall?: boolean;
};

export const clients: Client[] = [
  {
    name: "Adler Werbegeschenke",
    logo: "/images/personal_branding/clients/Client_AdlerWerbegeschenke_Logo.png",
  },
  {
    name: "SunDevs.net",
    logo: "/images/personal_branding/clients/Client_SunDevs_Logo.png",
  },
  {
    name: "ChromieCraft",
    logo: "/images/personal_branding/clients/Client_ChromieCraft_Logo.png",
  },
  {
    name: "AzerothCore",
    logo: "/images/personal_branding/clients/Client_AzerothCore_Logo.png",
  },
  {
    name: "byAlex.gg",
    logo: "/images/personal_branding/clients/Client_ByAlexgg_Logo.png",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  /** chat messages, in order; each from "them" */
  messages: string[];
  /** an emoji tapback reaction on the last bubble */
  reaction?: string;
  delivered?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alex",
    role: "Founder, byAlex.gg",
    messages: [
      "ok the new reels are insane 😭",
      "engagement literally doubled this week",
      "you just get the vibe without me explaining it",
    ],
    reaction: "❤️",
    delivered: "Delivered",
  },
  {
    name: "Lena",
    role: "Marketing Lead, SunDevs",
    messages: [
      "the content system you built is a lifesaver",
      "our whole team ships posts in minutes now and it still looks premium",
    ],
    reaction: "👍",
  },
  {
    name: "Daniel",
    role: "Community, ChromieCraft",
    messages: [
      "the launch visuals went off",
      "people in discord were asking who designed them lol",
      "fastest turnaround i've ever had with a designer too",
    ],
    reaction: "‼️",
    delivered: "Delivered",
  },
  {
    name: "Sophie",
    role: "Art Director, Adler",
    messages: [
      "honestly one of the most reliable designers we've had",
      "great eye, zero drama, always early",
    ],
    reaction: "😮",
  },
];

export const stack = [
  { name: "Figma", caption: "Design & Prototyping" },
  { name: "Photoshop", caption: "Photo & Composite" },
  { name: "Illustrator", caption: "Vector & Identity" },
  { name: "Claude", caption: "AI Workflow" },
] as const;

export const nav = [
  { label: "Index", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

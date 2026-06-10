export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  palette: [string, string];
  ink: "dark" | "light";
  featured?: boolean;
  caseStudy: {
    role: string;
    brief: string;
    approach: [string, string, string];
    deliverables: string[];
    outcome: string;
  };
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
    caseStudy: {
      role: "Art Direction · Motion · Social Design",
      brief:
        "ChromieCraft is a private World of Warcraft server with a passionate community of over 100,000 active players. They needed a visual launch campaign that matched the scale of what they'd built — something that felt closer to a AAA studio drop than a hobbyist project.",
      approach: [
        "The first thing I killed was the fantasy cliché — swords, fire, gradient orbs. ChromieCraft's real story is about progression and community, so I built the campaign around the concept of 'levelling up' as a design language. Grids, counters, XP bars translated into editorial type.",
        "Every asset was built as a system first. Reels, carousels and static posts share the same typographic skeleton — so the campaign reads as one thing whether you're on Instagram or Discord, whether it's a 15-second video or a still thumbnail.",
        "Motion was the differentiator. Instead of static announcement posts, the launch sequence used kinetic type animations that felt native to where they were shown — short-form, vertical, front-loaded with the hook in the first half second.",
      ],
      deliverables: [
        "Launch reel (15s & 30s edits)",
        "10-slide announcement carousel",
        "Static post templates (4:5 & 1:1)",
        "Discord banner & community header",
        "Typographic system documentation",
      ],
      outcome:
        "The launch post became the community's highest-engaged content to date. Members in Discord were asking who designed it — organically.",
    },
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
    caseStudy: {
      role: "Visual Identity · Brand System · Web Graphics",
      brief:
        "AzerothCore is one of the most respected open-source emulation frameworks in the WoW private server space. Technically rigorous, community-driven, and completely unbranded. They needed a visual identity that could live on GitHub, documentation pages, social media and community hubs without ever looking out of place.",
      approach: [
        "Open-source projects have a specific design problem: they need to look credible to developers while also being inviting to newcomers. I solved this with a system built on structure — a strict grid, a monospaced headline accent and a palette that consciously avoided gaming clichés.",
        "The core of the system is a tension between raw and refined. Technical details like version numbers, commit hashes and CLI commands were treated as design elements, not afterthoughts — letting the product's actual nature become the aesthetic.",
        "Scalability was non-negotiable. Every component was designed to be handed off to community contributors and still look on-brand. Clear rules, not taste-dependent decisions.",
      ],
      deliverables: [
        "Primary logomark & wordmark",
        "Brand guidelines document",
        "Social profile & cover templates",
        "GitHub README header assets",
        "Documentation site graphics",
      ],
      outcome:
        "The rebrand gave the project a presence that matched its technical reputation. Contributors reported that the new identity made it easier to present the project in grant applications and conference talks.",
    },
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
    caseStudy: {
      role: "Design System · Content Strategy · Template Architecture",
      brief:
        "SunDevs needed to maintain a consistent, high-quality social media presence without the budget for a dedicated content team. The challenge: give a small group of non-designers the tools to ship polished posts daily, without everything looking like it came from a template.",
      approach: [
        "The paradox of template systems is that the more they look like templates, the less useful they are. I built a system with locked structure and flexible surface — the grid, spacing and hierarchy are fixed; the colour fills, copy lengths and image slots are variables.",
        "I designed in components, not pages. Each element — headline block, stat callout, pull-quote, CTA strip — exists as an independent Figma component that can be combined in different orders without breaking the system. This meant the team could build new post types without asking me.",
        "The handoff documentation was as important as the design. I wrote a two-page 'house rules' guide that explained the reasoning behind every constraint — teams follow rules better when they understand why the rule exists.",
      ],
      deliverables: [
        "40+ Figma component templates",
        "Carousel, single-post & story formats",
        "Brand colour & typography spec",
        "Editorial calendar framework",
        "2-page team handoff guide",
      ],
      outcome:
        "The team went from posting twice a week to daily. The marketing lead said their team ships posts in minutes — and it still looks premium.",
    },
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
    caseStudy: {
      role: "Content Creation · Visual Direction · Reels",
      brief:
        "byAlex.gg is a gaming creator with a highly engaged audience that expects high production value and a consistent visual identity across every post. The work required fast turnaround, a strong sense of the creator's personal aesthetic, and content designed specifically to perform on short-form platforms.",
      approach: [
        "Creator content lives and dies by the hook. I designed every asset front-loaded — the most important visual element in the first half-second, text legible on mute, a thumbnail that works as both a still and a video frame.",
        "Speed was part of the brief. The creator needed content consistently, which meant building a personal visual language I could execute quickly without sacrificing quality. Once the system was established, each new piece took a fraction of the original time.",
        "The audience skews Gen Z, which means tolerance for 'polished' is low and authenticity reads immediately. The visual direction deliberately avoided the over-produced agency aesthetic — high energy, direct, occasionally raw.",
      ],
      deliverables: [
        "Weekly reel & short-form video graphics",
        "YouTube thumbnail templates",
        "Instagram & TikTok post designs",
        "Channel art & profile assets",
        "Branded lower-thirds & overlays",
      ],
      outcome:
        "Engagement doubled in the weeks following the new visual direction. The creator reported followers commenting specifically on the new look.",
    },
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
    caseStudy: {
      role: "Graphic Design · Print · Campaign Design",
      brief:
        "As an in-house graphic designer at Adler Werbegeschenke, I handle the full scope of visual communication — from product catalogue layouts and trade-fair materials to digital campaign graphics and email headers. The work requires consistency, speed and a clean professional aesthetic.",
      approach: [
        "In-house design is a different discipline to freelance work. The challenge isn't one breakthrough concept — it's building and maintaining visual quality across hundreds of assets, across a year, with varying briefs, deadlines and stakeholders.",
        "I introduced a more systematic approach to recurring formats. Catalogue spreads, promotional banners and seasonal campaigns were templated in a way that made them fast to produce while keeping the brand coherent. Less reinventing the wheel; more energy on the pieces that needed it.",
        "Print has unforgiving constraints. Bleeds, Pantone matching, die-line accuracy — the technical side of print production is non-negotiable, and I treat it with the same care as the design itself.",
      ],
      deliverables: [
        "Annual product catalogue (100+ pages)",
        "Trade fair & POS display graphics",
        "Seasonal promotional campaigns",
        "Email newsletter templates",
        "Digital ad formats & social assets",
      ],
      outcome:
        "Reliable, on-time delivery of the full annual catalogue and all seasonal campaigns. Internally recognised for bringing a more contemporary aesthetic to recurring formats.",
    },
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
    caseStudy: {
      role: "Motion Design · Kinetic Type · AI Workflow",
      brief:
        "Not every project has a client. This is the ongoing personal work — a series of motion and type experiments that exist primarily to sharpen skills, test ideas and push techniques that would take too long to explore inside a client engagement.",
      approach: [
        "The experiments are structured loosely around a constraint: one typeface, one motion principle, one colour. The limitation forces the work to be about the idea rather than the execution. The best ones become templates for client work later.",
        "I've been integrating AI tools into the motion workflow — using Claude to generate variation scripts, prototype animation sequences and explore directions faster than manual iteration allows. The craft stays in the hands; the AI handles the repetitive scaffolding.",
        "Nothing here is meant to be perfect. Some of it is bad on purpose. The point is the learning, not the output — and occasionally something surprising comes out that reframes how I approach a brief.",
      ],
      deliverables: [
        "Kinetic typography loops",
        "AI-assisted animation prototypes",
        "Type-in-motion studies",
        "Colour & composition experiments",
        "Process documentation",
      ],
      outcome:
        "Several techniques developed here directly influenced client deliverables — including the motion system built for ChromieCraft's launch campaign.",
    },
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
    caseStudy: {
      role: "Workflow Design · Process · Tool Integration",
      brief:
        "This is a documentation of the AI-assisted design process I've developed — not a single client project, but a methodology that runs underneath all of them. The question it answers: how do you use AI tools to move faster without producing generic work?",
      approach: [
        "The answer is positioning. AI is useful for the parts of design that are scaffolding — generating copy variants, producing brief-matching mood-board descriptions, writing Figma component documentation, or scripting animation logic. It's not useful for taste, visual judgement or the thing that makes work feel like it came from a specific person.",
        "In practice: a brief comes in, I use Claude to expand it into a set of creative directions faster than I could write them manually. I then select, combine and redirect — the AI gives me ten starting points in the time it would take me to develop one. From there the process is entirely human.",
        "The pipeline has a clear seam: AI handles speed and volume, I handle quality and character. Knowing exactly where that seam is — and never letting it blur — is what makes the work feel intentional rather than generated.",
      ],
      deliverables: [
        "Documented workflow process",
        "AI prompt library for design briefs",
        "Figma-to-Claude handoff templates",
        "Speed benchmarks: AI vs. manual",
        "Case examples from client work",
      ],
      outcome:
        "On complex briefs, ideation time has been reduced by roughly 60% without any measurable reduction in creative quality. More directions explored, better final selection.",
    },
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
    caseStudy: {
      role: "Editorial Design · Carousel Architecture · Templates",
      brief:
        "Carousels are the highest-retention format on Instagram — and the most commonly designed badly. This is a cross-client library of editorial carousel systems built to maximise swipe-through rate, deliver information clearly and leave an impression that's recognisably designed.",
      approach: [
        "The first slide is the only slide most people see. I design carousel systems with an explicit hierarchy: cover slide must work as a standalone post, slide two must answer the question the cover raised, every subsequent slide must give a reason to go one more.",
        "Editorial print design has solved this problem for decades — magazines know exactly how to structure a multi-page visual story. The carousel work borrows heavily from magazine layout principles: pull quotes, section openers, consistent folio treatments and a typographic system that holds across all slides.",
        "The 'recognizable signature' part is intentional. Brands that post carousels regularly need a visual language consistent enough that regular followers recognise a new post before reading the caption. That's brand equity built through design consistency.",
      ],
      deliverables: [
        "12-slide editorial carousel templates",
        "Cover, body & closing slide systems",
        "Typography scale for carousel formats",
        "Colour adaptation guide",
        "Figma component library",
      ],
      outcome:
        "Clients using the carousel system consistently report above-average save rates — the metric most directly linked to algorithmic reach on Instagram.",
    },
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
  message: string;
  reaction: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alex",
    role: "Founder, byAlex.gg",
    message:
      "ok the new reels are actually insane 😭 engagement literally doubled this week and you just get the vibe without me even having to explain it",
    reaction: "❤️",
  },
  {
    name: "Lena",
    role: "Marketing Lead, SunDevs",
    message:
      "the content system you built is a total lifesaver — our whole team ships posts in minutes now and it somehow still looks premium every single time",
    reaction: "🔥",
  },
  {
    name: "Daniel",
    role: "Community, ChromieCraft",
    message:
      "the launch visuals completely went off 🎉 people in our discord were literally asking who designed them. fastest turnaround i've ever had with a designer too",
    reaction: "🎉",
  },
  {
    name: "Sophie",
    role: "Art Director, Adler",
    message:
      "honestly one of the most reliable designers we've worked with. great eye, zero drama, and always early on deadlines",
    reaction: "👏",
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

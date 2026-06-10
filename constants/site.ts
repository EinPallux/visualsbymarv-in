export const siteConfig = {
  name: "Marvin — Visuals by Marv",
  shortName: "Marvin",
  url: "https://visualsbymarv.in",
  title: "Marvin — Content & Visual Design",
  description:
    "Marvin is a media designer from Germany creating social media content, visual branding and AI-assisted creative work for companies that want people to stop scrolling.",
  email: "hello@visualsbymarv.in",
  location: "Germany",
  socials: [
    { label: "Instagram", href: "https://instagram.com/visualsbymarv" },
    { label: "LinkedIn", href: "https://linkedin.com/in/visualsbymarv" },
    { label: "Behance", href: "https://behance.net/visualsbymarv" },
  ],
} as const;

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
] as const;

export const assets = {
  logoBlack: "/images/personal_branding/logo/personal_logo_black.svg",
  logoWhite: "/images/personal_branding/logo/personal_logo_white.svg",
  portrait: "/images/personal_branding/marvin/me.png",
} as const;

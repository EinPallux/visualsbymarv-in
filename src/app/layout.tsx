import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/sections/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://visualsbymarv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marvin — Visual & Content Designer",
    template: "%s — Visuals by Marv",
  },
  description:
    "Marvin is a German graphic & content designer crafting social-first brand visuals that move. B.A. Media Design. Figma, Photoshop, Illustrator & modern AI workflows.",
  keywords: [
    "Marvin",
    "Visual Designer",
    "Content Designer",
    "Graphic Designer",
    "Media Design",
    "Germany",
    "Social Media Content",
    "Portfolio",
  ],
  authors: [{ name: "Marvin" }],
  openGraph: {
    title: "Marvin — Visual & Content Designer",
    description:
      "Social-first brand visuals that move. Designed in Germany.",
    url: siteUrl,
    siteName: "Visuals by Marv",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvin — Visual & Content Designer",
    description: "Social-first brand visuals that move. Designed in Germany.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

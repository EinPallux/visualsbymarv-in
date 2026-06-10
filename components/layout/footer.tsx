import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { LocalTime } from "@/components/layout/local-time";
import { assets, navItems, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="rule">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={assets.logoBlack}
                alt=""
                width={44}
                height={31}
                className="h-7 w-auto dark:hidden"
              />
              <Image
                src={assets.logoWhite}
                alt=""
                width={44}
                height={31}
                className="hidden h-7 w-auto dark:block"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Marvin — media designer from Germany. Social media content,
              visual branding and AI-assisted creative work for companies
              worth stopping for.
            </p>
            <p className="meta-label">
              {siteConfig.location} · <LocalTime />
            </p>
          </div>

          <nav aria-label="Footer" className="space-y-3">
            <p className="meta-label">Menu</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="meta-label">Elsewhere</p>
            <ul className="space-y-2">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-2 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marvin. All rights reserved.</p>
          <p>Designed & built by Marvin — with a little help from Claude Code.</p>
        </div>
      </div>
    </footer>
  );
}

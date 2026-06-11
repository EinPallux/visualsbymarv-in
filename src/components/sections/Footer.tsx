"use client";

import Link from "next/link";
import { LogoMark } from "@/components/icons/LogoMark";
import { nav } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-fg/10 pb-10 pt-20 sm:mt-44">
      <div className="container-x">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-5">Let’s make something loud</p>
            <a
              href="mailto:hello@visualsbymarvin.in"
              className="display block text-[12vw] leading-[0.85] tracking-tightest sm:text-7xl lg:text-8xl"
            >
              Say hi
            </a>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex gap-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-6 text-sm text-muted">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@visualsbymarvin.in"
                className="link-underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-fg/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-3.5 w-auto" />
            <span>© {year} Marvin — VisualsByMarvin</span>
          </div>
          <p>Made in Germany · Built with Next.js & a lot of taste</p>
        </div>
      </div>
    </footer>
  );
}

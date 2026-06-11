"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/icons/LogoMark";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";
import { nav } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto mt-3 w-full max-w-[1500px] px-3 transition-all duration-500 sm:mt-4 sm:px-6`}
        >
          <nav
            className={`flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
              scrolled
                ? "border-fg/10 bg-bg/70 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Link href="/" className="group flex items-center gap-2.5 pl-1">
              <LogoMark className="h-4 w-auto transition-transform duration-500 group-hover:-rotate-12" />
              <span className="text-[15px] font-extrabold tracking-tight">
                marvin<span className="text-muted">.</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Magnetic key={item.href} strength={0.25}>
                    <Link
                      href={item.href}
                      className="relative rounded-full px-4 py-2 text-sm font-medium"
                    >
                      <span
                        className={
                          active ? "text-fg" : "text-muted hover:text-fg"
                        }
                      >
                        {item.label}
                      </span>
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-fg/8"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                    </Link>
                  </Magnetic>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/15 md:hidden"
              >
                <div className="flex flex-col gap-[5px]">
                  <span
                    className={`h-[1.5px] w-4 bg-fg transition-all duration-300 ${
                      open ? "translate-y-[6.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-4 bg-fg transition-all duration-300 ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-4 bg-fg transition-all duration-300 ${
                      open ? "-translate-y-[6.5px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="display block text-[16vw] leading-[0.95] tracking-tightest hover:text-muted"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

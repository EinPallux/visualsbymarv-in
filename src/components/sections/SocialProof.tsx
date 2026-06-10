"use client";

import Image from "next/image";
import { clients } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="label">Trusted by teams & creators</p>
          <p className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-muted sm:text-3xl">
            From gaming communities of{" "}
            <span className="text-fg">100k+ players</span> to brands that ship
            every single day.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent sm:w-40" />

        <Marquee>
          {clients.map((c) => (
            <LogoChip key={c.name} name={c.name} logo={c.logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function LogoChip({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-3 flex h-24 w-52 items-center justify-center rounded-2xl border border-fg/10 bg-white px-7 transition-transform duration-500 hover:-translate-y-1 sm:mx-4 sm:w-60">
      <div className="relative h-12 w-full opacity-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="240px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

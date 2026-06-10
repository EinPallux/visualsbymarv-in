import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { clientLogos } from "@/constants/clients";

export function Clients() {
  return (
    <section aria-label="Clients" className="rule">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <p className="meta-label text-center">
            Brands & communities I&apos;ve worked with
          </p>
        </Reveal>
        <Stagger className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {clientLogos.map((client) => (
            <StaggerItem key={client.name}>
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="logo-neutral h-6 w-auto max-w-36 object-contain md:h-7 md:max-w-44"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

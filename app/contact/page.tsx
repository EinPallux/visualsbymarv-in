import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { CopyEmail } from "@/components/contact/copy-email";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Marvin for social media content design, visual branding and content partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title={
          <>
            One message.
            <br />
            That&apos;s how every
            <br />
            project here <span className="text-accent">started.</span>
          </>
        }
        intro="No forms, no funnels. Write a few lines about your brand and what you're trying to do — I read everything myself and reply within two working days."
      />

      <section aria-label="Contact details" className="container-x pb-24 md:pb-36">
        <Reveal>
          <div className="rule pt-10">
            <p className="meta-label">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-4 inline-block break-all text-[clamp(1.5rem,5vw,4rem)] font-semibold tracking-tight underline-offset-8 transition-colors duration-300 hover:text-accent"
            >
              {siteConfig.email}
              <ArrowUpRight
                aria-hidden="true"
                className="ml-2 inline size-[0.6em] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
            <div className="mt-6">
              <CopyEmail />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="meta-label">Elsewhere</p>
            <Stagger className="mt-6 divide-y divide-line">
              {siteConfig.socials.map((social) => (
                <StaggerItem key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 text-xl font-medium tracking-tight transition-colors duration-300 hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="meta-label">Good to know</p>
            <ul className="mt-6 space-y-5 leading-relaxed text-muted">
              <li>
                <strong className="font-medium text-foreground">
                  Availability:
                </strong>{" "}
                open for new projects and ongoing content partnerships.
              </li>
              <li>
                <strong className="font-medium text-foreground">
                  Languages:
                </strong>{" "}
                German & English — whichever your team thinks in.
              </li>
              <li>
                <strong className="font-medium text-foreground">
                  Best first message:
                </strong>{" "}
                who you are, where your content lives today, and what
                &ldquo;better&rdquo; would look like for you.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

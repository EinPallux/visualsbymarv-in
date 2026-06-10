import { Hero } from "@/components/hero/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <SelectedWork />
      <SocialProof />
      <Testimonials />
    </>
  );
}

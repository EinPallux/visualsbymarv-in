import { Clients } from "@/components/home/clients";
import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Clients />
      <Testimonials />
      <Cta />
    </>
  );
}

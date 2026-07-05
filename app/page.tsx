import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <CaseStudy />
      <FAQ />
      <Contact />
    </>
  );
}

import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, branding, marketing strategy, paid advertising and website support, from Elevate Marketing Company.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <Services />
      <PageCTA
        title="Not sure which service fits your business?"
        description="Every package can be tailored around your goals. Have a look at our pricing, or book a free discovery call to talk it through."
        primaryHref="/#contact"
        primaryLabel="Book a Free Discovery Call"
        secondaryHref="/pricing"
        secondaryLabel="See Our Packages"
      />
    </>
  );
}

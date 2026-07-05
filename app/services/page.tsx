import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { AdditionalServices } from "@/components/sections/AdditionalServices";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, branding, marketing strategy, paid advertising, website support, and one-off services from Elevate Marketing Company.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <Services />
      <AdditionalServices />
      <PageCTA
        title="Not sure which service fits your business?"
        description="Every package can be tailored around your goals. Have a look at our pricing, or book a free strategy call to talk it through."
        primaryHref="/#contact"
        primaryLabel="Book a Free Strategy Call"
        secondaryHref="/pricing"
        secondaryLabel="See Our Packages"
      />
    </>
  );
}

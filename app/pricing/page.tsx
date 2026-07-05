import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, flexible monthly marketing packages from Elevate Marketing Company, Aberdeen. No long-term contracts, just 30 days' notice.",
};

export default function PricingPage() {
  return (
    <>
      <h1 className="sr-only">Pricing</h1>
      <Pricing />
      <PageCTA
        title="Want to see what's included in more detail?"
        description="Have a look at everything we offer, or get in touch and we'll tailor a package around your goals and budget."
        primaryHref="/#contact"
        primaryLabel="Book a Free Strategy Call"
        secondaryHref="/services"
        secondaryLabel="See Our Services"
      />
    </>
  );
}

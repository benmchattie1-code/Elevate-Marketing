import { Check, Star } from "lucide-react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import { Button } from "../ui/Button";
import { pricingPackages } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-28">
      <GradientBlob className="-right-32 top-0 h-80 w-80 bg-brand-100/50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Packages"
          title="Simple, flexible monthly packages"
          description="No long-term contracts, just 30 days' notice whenever you need it. Every package can be tailored to your business."
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div
                className={clsx(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  pkg.featured
                    ? "border-2 border-brand-500 bg-navy-950 shadow-2xl shadow-brand-900/20 lg:-translate-y-4"
                    : "border border-navy-950/[0.08] bg-white shadow-sm",
                )}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    <Star size={12} fill="currentColor" />
                    Most popular
                  </span>
                ) : null}

                <h3
                  className={clsx(
                    "font-display text-xl font-semibold",
                    pkg.featured ? "text-white" : "text-navy-950",
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={clsx(
                    "mt-2 text-sm leading-relaxed",
                    pkg.featured ? "text-white/60" : "text-navy-700/70",
                  )}
                >
                  {pkg.bestFor}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={clsx(
                      "font-display text-3xl font-bold",
                      pkg.featured ? "text-white" : "text-navy-950",
                    )}
                  >
                    {pkg.price}
                  </span>
                  <span className={pkg.featured ? "text-white/50" : "text-navy-700/50"}>
                    {pkg.cadence}
                  </span>
                </div>

                <Button
                  href="/#contact"
                  variant={pkg.featured ? "primary" : "secondary"}
                  className={clsx(
                    "mt-7 w-full justify-center",
                    pkg.featured && "bg-brand-500 hover:bg-brand-400",
                  )}
                >
                  Get started
                </Button>

                <ul
                  className={clsx(
                    "mt-8 space-y-3.5 border-t pt-8",
                    pkg.featured ? "border-white/10" : "border-navy-950/10",
                  )}
                >
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={clsx(
                        "flex items-start gap-2.5 text-sm leading-relaxed",
                        pkg.featured ? "text-white/75" : "text-navy-800",
                        feature.endsWith(":") && "font-semibold",
                      )}
                    >
                      {!feature.endsWith(":") && (
                        <Check
                          size={16}
                          className={clsx(
                            "mt-0.5 shrink-0",
                            pkg.featured ? "text-brand-400" : "text-brand-600",
                          )}
                        />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-navy-700/60">
            Every business is different, so get in touch and we&rsquo;ll tailor a package
            around your goals and budget.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

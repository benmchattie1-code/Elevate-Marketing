import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-brand-50/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From first call to consistent growth"
          description="A simple, five-step process with no confusing onboarding and no guesswork."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-950/10 to-transparent lg:block"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map(({ icon: Icon, step, title, description }, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-brand-300 shadow-lg shadow-navy-950/20">
                    <Icon size={20} />
                  </div>
                  <span className="mt-4 block font-display text-sm font-bold tracking-widest text-brand-500/70">
                    {step}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-navy-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import { whyUsPoints } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <GradientBlob className="left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 bg-brand-100/50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why work with us"
          title="Marketing that feels personal, not outsourced"
          description="Four principles guide every plan, post and campaign we create."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsPoints.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-navy-950/[0.06] bg-white/80 p-7 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

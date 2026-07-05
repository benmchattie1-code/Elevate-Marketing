import { Plus } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import { oneOffServices, addOnServices } from "@/lib/content";

export function AdditionalServices() {
  return (
    <section id="additional-services" className="relative overflow-hidden py-24 sm:py-28">
      <GradientBlob className="-left-32 top-10 h-80 w-80 bg-brand-100/50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="More ways to work with us"
          title="Additional Services"
          description="Prefer something one-off, or want to top up your monthly package? These sit alongside our core services, with no long-term commitment."
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-lg font-semibold text-navy-950">
              One-Off Services
            </h3>
          </Reveal>
          <div className="mt-6 divide-y divide-navy-950/[0.07] rounded-3xl border border-navy-950/[0.06] bg-white/70 backdrop-blur-sm">
            {oneOffServices.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="group flex flex-col gap-4 p-6 transition-colors duration-200 hover:bg-brand-50/50 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-navy-950">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-navy-700/70">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-display text-lg font-semibold text-navy-950">
              Optional Add-Ons
            </h3>
            <p className="mt-2 text-sm text-navy-700/60">
              Small extras to top up any package, whenever you need them.
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {addOnServices.map((label, i) => (
              <Reveal key={label} delay={i * 0.04} as="span">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-50/70 px-5 py-2.5 text-sm font-medium text-navy-900">
                  <Plus size={14} className="text-brand-600" />
                  {label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { aboutStory, helpPoints, painPoints } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Elevate"
          title={aboutStory.heading}
          description={aboutStory.body}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-950/[0.06] bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-2.5 text-navy-950">
                <XCircle size={20} className="text-navy-950/40" />
                <h3 className="font-display text-xl font-semibold">Sound familiar?</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-navy-700/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-950/30" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-brand-500/15 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm sm:p-10">
              <div className="flex items-center gap-2.5 text-brand-700">
                <CheckCircle2 size={20} />
                <h3 className="font-display text-xl font-semibold">
                  Then we&rsquo;re here to help.
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {helpPoints.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3.5 text-navy-900">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                      <Icon size={17} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

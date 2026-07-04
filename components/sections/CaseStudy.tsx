import { CalendarDays, Info, MapPin } from "lucide-react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { caseStudy } from "@/lib/content";

export function CaseStudy() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we think"
          title={`An example campaign: ${caseStudy.businessName}`}
          description="A real strategy applied to a hypothetical Aberdeen café, showing how we'd plan and measure a full quarter of marketing."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-navy-950/[0.06] bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-navy-950/[0.06] bg-amber-50 px-6 py-3 text-xs font-medium text-amber-800 sm:px-10">
              <Info size={14} />
              {caseStudy.label}
            </div>

            <div className="p-6 sm:p-10">
              {/* Header */}
              <div className="flex flex-col gap-5 rounded-2xl bg-navy-950 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {caseStudy.businessName}
                  </h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-white/55">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-brand-300" />
                      {caseStudy.location} · {caseStudy.subtitle}
                    </span>
                    {caseStudy.cadence.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2.5">
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-brand-500/15 px-4 py-2 text-sm font-semibold text-brand-200">
                  <CalendarDays size={15} />
                  {caseStudy.quarterLabel}
                </span>
              </div>

              {/* Weekly content plan */}
              <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-navy-700/50">
                Weekly content plan
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {caseStudy.weeklyPlan.map(({ week, icon: Icon, title, channels }) => (
                  <div
                    key={week}
                    className="overflow-hidden rounded-2xl border border-navy-950/[0.06]"
                  >
                    <div className="bg-navy-950 p-5">
                      <p className="text-xs font-semibold text-white/40">{week}</p>
                      <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                        <Icon size={18} />
                      </span>
                      <h4 className="mt-3 font-display font-semibold leading-snug text-white">
                        {title}
                      </h4>
                    </div>
                    <div className="bg-brand-50/50 p-5">
                      <p className="text-xs font-medium text-navy-700/50">Channels</p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {channels.map((channel) => (
                          <span
                            key={channel.label}
                            className={clsx(
                              "rounded-full px-2.5 py-1 text-xs font-semibold",
                              channel.filled
                                ? "bg-brand-600 text-white"
                                : "border border-brand-600/30 text-brand-700",
                            )}
                          >
                            {channel.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Milestones + expected results */}
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-navy-950 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Quarter milestones
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {caseStudy.milestones.map(({ icon: Icon, title, week }) => (
                      <div key={title} className="rounded-xl bg-white/5 p-4">
                        <Icon size={18} className="text-brand-300" />
                        <p className="mt-2.5 text-sm font-semibold leading-snug text-white">
                          {title}
                        </p>
                        <p className="mt-0.5 text-xs text-white/40">{week}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-brand-700 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-100/80">
                    Expected results
                  </p>
                  <div className="mt-5 space-y-3">
                    {caseStudy.expectedResults.map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
                      >
                        <Icon size={18} className="mt-0.5 shrink-0 text-white" />
                        <p className="text-sm leading-relaxed text-white/90">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

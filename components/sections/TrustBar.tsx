import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { stats } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-y border-navy-950/[0.06] bg-gradient-to-r from-brand-50/70 via-white/40 to-brand-50/70 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-navy-950 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-navy-700/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

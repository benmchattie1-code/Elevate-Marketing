"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative bg-navy-950 py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(56,168,154,0.18),transparent)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <span className="text-white">
              Everything you need to grow, in one place
            </span>
          }
          description={
            <span className="text-white/60">
              Six core services, built to work together. Pick one, or hand over
              the whole marketing function.
            </span>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/30 hover:bg-white/[0.07]"
              >
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-900/30">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 flex items-center gap-2 font-display text-lg font-semibold text-white">
                  {service.title}
                  <ArrowUpRight
                    size={16}
                    className="text-brand-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

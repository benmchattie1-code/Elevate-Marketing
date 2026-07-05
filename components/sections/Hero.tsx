"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, Sparkles, Calendar } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { GradientBlob } from "../ui/GradientBlob";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,168,154,0.16),transparent)]"
      />
      <GradientBlob className="-left-32 top-10 h-72 w-72 bg-brand-200/50" />
      <GradientBlob className="-right-24 top-40 h-96 w-96 bg-mint-300/20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-sm"
            >
              <Sparkles size={15} className="text-brand-500" />
              Aberdeen-based, working UK-wide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl"
            >
              Marketing that shows up,{" "}
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
                every single week
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-navy-700/80"
            >
              We help businesses build a stronger online presence through strategic
              marketing, creative content and consistent execution, so you get a
              professional presence without hiring an in-house marketer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href="/#contact" size="lg">
                Book a Free Strategy Call
                <ArrowRight size={18} />
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                <PlayCircle size={18} />
                See Our Packages
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 text-sm text-navy-700/60"
            >
              No long-term contracts. Just 30 days&rsquo; notice, whenever you need it.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative rounded-[28px] border border-white/60 bg-white/70 p-3 shadow-2xl shadow-brand-900/10 backdrop-blur-xl">
              <div className="rounded-[20px] bg-gradient-to-br from-navy-950 via-navy-900 to-brand-800 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-200/80">
                    Content Calendar
                  </span>
                  <Calendar size={16} className="text-brand-200/70" />
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { label: "Instagram post", tag: "Scheduled", tone: "bg-brand-400/20 text-brand-100" },
                    { label: "Behind-the-scenes Reel", tag: "In progress", tone: "bg-mint-300/20 text-mint-300" },
                    { label: "Monthly strategy call", tag: "Booked", tone: "bg-white/10 text-white/70" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-white/90">{item.label}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.tone}`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -left-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-950">Engagement up</p>
                <p className="text-xs text-navy-700/60">Consistent monthly posting</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, Mail, MapPin, MessageSquare, XCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { site } from "@/lib/content";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Sending...
        </>
      ) : (
        "Send message"
      )}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <GradientBlob className="-left-24 top-20 h-80 w-80 bg-brand-100/50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Get in touch"
          title="Ready to elevate your marketing?"
          description="Tell us a little about your business and we'll be in touch to book your free strategy call."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-navy-950 to-brand-900 p-8 text-white sm:p-10">
              <div>
                <h3 className="font-display text-xl font-semibold">Contact details</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-300" />
                    <span className="text-white/75">
                      {site.location}
                      <br />
                      {site.serviceArea}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare size={20} className="mt-0.5 shrink-0 text-brand-300" />
                    <span className="text-white/75">
                      Most meetings held remotely via Microsoft Teams or Zoom
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={20} className="mt-0.5 shrink-0 text-brand-300" />
                    <a href={`mailto:${site.email}`} className="text-white/75 hover:text-brand-300">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
              <p className="mt-10 text-sm text-white/50">
                No long-term contracts. Just 30 days&rsquo; notice, whenever you need it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              action={formAction}
              className="rounded-3xl border border-navy-950/[0.06] bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-navy-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-navy-950/10 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-navy-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-navy-950/10 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="business" className="text-sm font-medium text-navy-900">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 w-full rounded-xl border border-navy-950/10 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy-900">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-navy-950/10 bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              <div className="mt-6">
                <SubmitButton />
              </div>

              <div aria-live="polite" className="mt-4">
                {state.status === "success" ? (
                  <p className="flex items-center gap-2 text-sm font-medium text-brand-700">
                    <CheckCircle2 size={16} />
                    {state.message}
                  </p>
                ) : null}
                {state.status === "error" ? (
                  <p className="flex items-center gap-2 text-sm font-medium text-rose-600">
                    <XCircle size={16} />
                    {state.message}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

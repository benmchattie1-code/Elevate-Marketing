import { type ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-700">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-balance text-lg leading-relaxed text-navy-700/80">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

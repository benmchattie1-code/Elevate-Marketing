import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-navy-950 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] hover:bg-brand-600 focus-visible:outline-brand-500",
  secondary:
    "bg-white text-navy-950 border border-navy-950/10 hover:border-navy-950/20 hover:bg-brand-50 focus-visible:outline-brand-500",
  ghost:
    "bg-transparent text-navy-950 hover:bg-navy-950/5 focus-visible:outline-brand-500",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = clsx(base, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

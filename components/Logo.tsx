import clsx from "clsx";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        width="32"
        height="32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="20" cy="20" r="19" stroke="url(#logo-ring)" strokeWidth="1.5" />
        <path d="M20 10L28 28H12L20 10Z" stroke="#0e3c38" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 16L24.5 26H15.5L20 16Z" fill="#a6e3d5" stroke="#0e3c38" strokeWidth="1.2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="logo-ring" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38a89a" />
            <stop offset="1" stopColor="#0e3c38" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={clsx(
          "font-display text-lg font-bold leading-none tracking-tight",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        ELEVATE
        <span
          className={clsx(
            "block text-[0.55rem] font-semibold tracking-[0.2em]",
            dark ? "text-brand-200" : "text-brand-600",
          )}
        >
          MARKETING COMPANY
        </span>
      </span>
    </span>
  );
}

import Image from "next/image";
import clsx from "clsx";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  if (dark) {
    return (
      <span className={clsx("inline-flex items-center gap-2.5", className)}>
        <Image
          src="/logo-icon.png"
          alt=""
          aria-hidden
          width={341}
          height={342}
          className="h-8 w-8 shrink-0"
        />
        <span className="font-display text-lg font-bold leading-none tracking-tight text-white">
          ELEVATE
          <span className="block text-[0.55rem] font-semibold tracking-[0.2em] text-brand-200">
            MARKETING COMPANY
          </span>
        </span>
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Elevate Marketing Company"
      width={1299}
      height={350}
      priority
      className={clsx("h-9 w-auto", className)}
    />
  );
}

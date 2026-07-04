import clsx from "clsx";

export function GradientBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute rounded-full blur-3xl",
        className,
      )}
    />
  );
}

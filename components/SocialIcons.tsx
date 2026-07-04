type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14.5 8.5H16.5V5.3C16.16 5.25 15 5.15 13.65 5.15C10.8 5.15 8.85 6.9 8.85 10.1V12.7H5.7V16.3H8.85V22H12.55V16.3H15.58L16.06 12.7H12.55V10.47C12.55 9.42 12.84 8.5 14.5 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="8.2" r="1.3" fill="currentColor" />
      <path d="M8 11.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 17V13.6C12 12.4 12.7 11.4 14 11.4C15.3 11.4 16 12.4 16 13.6V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 17V11.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

type MarkProps = {
  className?: string;
  title?: string;
  decorative?: boolean;
};

function markA11y(title: string, decorative?: boolean) {
  return decorative
    ? { "aria-hidden": true as const }
    : { role: "img" as const, "aria-label": title };
}

export function DogMark({
  className = "h-10 w-10",
  title = "Ícone de cachorro da logo Universo Pet",
  decorative,
}: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...markA11y(title, decorative)}>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#2A1228" strokeWidth="2.2" />
      <ellipse cx="22" cy="18" rx="7.5" ry="9" fill="#F4D7B0" stroke="#2A1228" strokeWidth="1.6" />
      <ellipse cx="42" cy="18" rx="7.5" ry="9" fill="#E8C49A" stroke="#2A1228" strokeWidth="1.6" />
      <circle cx="32" cy="34" r="16.5" fill="#F7E7D2" stroke="#2A1228" strokeWidth="1.7" />
      <path d="M32 20c-7.2 0-14 4.4-15.4 12.2 3.2-1 6.6-1.6 10.2-1.6 4.8 0 9.2 1 13.2 2.8C39.2 25.2 36 20 32 20Z" fill="#C8A06A" />
      <path d="M24.5 20.5c-2.2 2.4-3.6 6-3.8 10.2 2.8-.8 5.6-1.2 8.5-1.2" fill="#5B3A28" />
      <ellipse cx="24.5" cy="28.5" rx="6.2" ry="7" fill="#3A2418" />
      <circle cx="26.2" cy="34.5" r="2.3" fill="#2A1228" />
      <circle cx="38.2" cy="34.5" r="2.3" fill="#2A1228" />
      <circle cx="26.8" cy="33.8" r="0.7" fill="#fff" />
      <circle cx="38.8" cy="33.8" r="0.7" fill="#fff" />
      <ellipse cx="32" cy="40.2" rx="2.4" ry="1.7" fill="#2A1228" />
      <path d="M32 42v2.2" stroke="#2A1228" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="32" cy="47.4" rx="3.4" ry="2.4" fill="#F1657C" stroke="#2A1228" strokeWidth="1.1" />
    </svg>
  );
}

export function CrossMark({
  className = "h-10 w-10",
  title = "Cruz veterinária da logo Universo Pet",
  decorative,
}: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...markA11y(title, decorative)}>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#2A1228" strokeWidth="2.2" />
      <rect x="26" y="14" width="12" height="36" rx="2.5" fill="#F1657C" stroke="#2A1228" strokeWidth="1.5" />
      <rect x="14" y="26" width="36" height="12" rx="2.5" fill="#F1657C" stroke="#2A1228" strokeWidth="1.5" />
    </svg>
  );
}

export function CatMark({
  className = "h-10 w-10",
  title = "Ícone de gato da logo Universo Pet",
  decorative,
}: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...markA11y(title, decorative)}>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke="#2A1228" strokeWidth="2.2" />
      <path d="M16 28 22 10l10 12" fill="#E8762C" stroke="#2A1228" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M48 28 42 10 32 22" fill="#E8762C" stroke="#2A1228" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="32" cy="36" r="16" fill="#E8762C" stroke="#2A1228" strokeWidth="1.7" />
      <path d="M20 22c4 2 8 3.2 12 3.2S40 24 44 22" fill="none" />
      <ellipse cx="26.2" cy="35" rx="2.6" ry="3.2" fill="#2A1228" />
      <ellipse cx="37.8" cy="35" rx="2.6" ry="3.2" fill="#2A1228" />
      <ellipse cx="26.8" cy="34.2" rx="0.9" ry="1.1" fill="#F6E27A" />
      <ellipse cx="38.4" cy="34.2" rx="0.9" ry="1.1" fill="#F6E27A" />
      <path d="M32 40.5c1.6 0 2.6 1.1 0 2.4-2.6-1.3-1.6-2.4 0-2.4Z" fill="#F1657C" stroke="#2A1228" strokeWidth="0.8" />
      <path d="M20 38h6M38 38h6M20 41.5h6M38 41.5h6" stroke="#2A1228" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconTrio({
  size = "h-14 w-14 sm:h-16 sm:w-16",
  className = "",
}: {
  size?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`} aria-hidden="false">
      <DogMark className={size} decorative />
      <CrossMark className={size} decorative />
      <CatMark className={size} decorative />
    </div>
  );
}

export function IconDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" role="presentation">
      <span className="h-px w-10 bg-plum/20 sm:w-16" />
      <DogMark className="h-8 w-8" decorative />
      <CrossMark className="h-8 w-8" decorative />
      <CatMark className="h-8 w-8" decorative />
      <span className="h-px w-10 bg-plum/20 sm:w-16" />
    </div>
  );
}

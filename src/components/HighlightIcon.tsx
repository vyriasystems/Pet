export type HighlightIconName = "paw" | "team" | "house" | "cross";

const paths: Record<HighlightIconName, React.ReactNode> = {
  paw: (
    <>
      <ellipse cx="7" cy="9" rx="1.8" ry="2.4" />
      <ellipse cx="12" cy="6.5" rx="1.8" ry="2.4" />
      <ellipse cx="17" cy="9" rx="1.8" ry="2.4" />
      <path d="M12 12c-3 0-5.5 3.2-5.5 5.4 0 1.6 1.3 2.6 2.8 2.6 1 0 1.7-.5 2.7-.5s1.7.5 2.7.5c1.5 0 2.8-1 2.8-2.6C17.5 15.2 15 12 12 12Z" />
    </>
  ),
  team: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20c.6-3.8 3.4-6 7-6s6.4 2.2 7 6" />
      <path d="M9.5 14.5v2.2a2.5 2.5 0 0 0 5 0v-2.2" />
    </>
  ),
  house: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
};

export function HighlightIcon({ name, className = "h-7 w-7" }: { name: HighlightIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

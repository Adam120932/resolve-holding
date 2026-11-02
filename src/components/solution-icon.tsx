// One simple line icon per solution, so each one is recognisable at a glance.
// Drawn with currentColor so they follow the surrounding text colour.

type SolutionIconProps = { slug: string; className?: string };

export function SolutionIcon({ slug, className }: SolutionIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {slug === "charge" && (
        // Power bank with a bolt
        <>
          <rect x="6.5" y="4" width="11" height="17" rx="2.5" />
          <path d="M10 2.5h4" />
          <path d="m12.8 8-3 4.6h3l-.9 3.9 3.1-4.8h-3L12.8 8Z" fill="currentColor" stroke="none" />
        </>
      )}
      {slug === "cloak" && (
        // Shield with a padlock
        <>
          <path d="M12 2.8 19 5.6v5.1c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V5.6l7-2.8Z" />
          <rect x="9" y="11" width="6" height="4.8" rx="1" />
          <path d="M10.3 11V9.6a1.7 1.7 0 0 1 3.4 0V11" />
        </>
      )}
      {slug === "ai" && (
        // Connected nodes: automations wired through one API
        <>
          <circle cx="12" cy="12" r="2.6" />
          <circle cx="5" cy="5" r="1.6" />
          <circle cx="19" cy="5" r="1.6" />
          <circle cx="5" cy="19" r="1.6" />
          <circle cx="19" cy="19" r="1.6" />
          <path d="m6.2 6.2 3.9 3.9M17.8 6.2l-3.9 3.9M6.2 17.8l3.9-3.9M17.8 17.8l-3.9-3.9" />
        </>
      )}
    </svg>
  );
}

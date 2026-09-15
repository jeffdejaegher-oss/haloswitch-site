export function Mark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="16"
        cy="14"
        rx="10"
        ry="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <rect x="14" y="23" width="4" height="2" rx="0.4" fill="#2EC4B6" />
    </svg>
  );
}

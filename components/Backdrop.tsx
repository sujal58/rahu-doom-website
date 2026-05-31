/**
 * Backdrop — subtle, reusable background decorations.
 *
 * All pieces are purely decorative: absolutely positioned, aria-hidden, and
 * pointer-events-none so they never interfere with content or interaction.
 * Drop them inside a `relative overflow-hidden` section.
 */

type DecoProps = { className?: string };

/** Faint brand-tinted dot-grid, faded toward the edges. For light sections. */
export function DotGrid({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-dots mask-fade ${className}`}
    />
  );
}

/** Thin neutral line-grid, faded toward the edges. For light sections. */
export function LineGrid({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-grid mask-fade ${className}`}
    />
  );
}

/** Light dot-grid for use over the dark (ink) sections. */
export function DotGridLight({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-dots-light mask-fade ${className}`}
    />
  );
}

/**
 * Soft brand-red glow. Position it with utility classes (e.g.
 * `-top-32 -left-24 h-80 w-80`) so it bleeds in from a corner.
 */
export function Glow({ className = "" }: DecoProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-brand/10 blur-[110px] ${className}`}
    />
  );
}

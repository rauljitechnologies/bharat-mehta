/** Tiny className joiner — avoids pulling in clsx for one helper. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

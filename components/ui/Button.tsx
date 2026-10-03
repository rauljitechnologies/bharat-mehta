import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light-outline";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-[0.95rem] font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-dark shadow-[0_1px_0_rgb(255_255_255/0.35)_inset,0_8px_20px_-10px_rgb(200_155_60/0.8)] hover:bg-gold-light",
  secondary: "bg-navy text-white hover:bg-navy-700",
  outline: "border border-navy/20 bg-white text-navy hover:border-gold hover:text-navy-dark",
  ghost: "px-0 text-navy hover:text-gold-dark",
  "light-outline": "border border-white/35 text-white backdrop-blur-sm hover:border-gold-light hover:bg-white/10",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  variant?: Variant;
}

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

/** Arrow that nudges right on hover — used in "વધુ વાંચો →" style links */
export function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );
}

export function TextLink({ className, children, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-navy hover:text-gold-dark",
        className,
      )}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}

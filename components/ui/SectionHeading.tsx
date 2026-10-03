import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

/** Section title with the signature gold rule underneath. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)} data-reveal>
      {eyebrow && (
        <p className={cn("eyebrow mb-3", tone === "dark" && "text-gold-light")}>{eyebrow}</p>
      )}
      <Tag
        id={id}
        className={cn(
          "font-serif text-[1.75rem] leading-snug font-bold sm:text-[2.125rem]",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Tag>
      <span className={cn("gold-rule mt-4", centered && "mx-auto")} aria-hidden="true" />
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-[1.0625rem]",
            tone === "dark" ? "text-white/75" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

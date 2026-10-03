import Image from "next/image";
import { cn } from "@/lib/cn";
import { publicationCategoryLabels } from "@/lib/content/publications";
import type { Publication } from "@/lib/types";

const tones: Record<NonNullable<Publication["coverTone"]>, string> = {
  navy: "bg-[#0b3558]",
  maroon: "bg-[#5c1f24]",
  forest: "bg-[#1f3d33]",
  ink: "bg-[#1d2433]",
  sand: "bg-[#6b5326]",
};

/**
 * Uses a real cover when the CMS provides one; otherwise draws an elegant
 * typographic cover so every card keeps the same 3:4 proportion.
 */
export function BookCover({ publication, className }: { publication: Publication; className?: string }) {
  const { cover, title, year, category, coverTone = "navy" } = publication;
  if (cover) {
    return (
      <div className={cn("relative aspect-[3/4] overflow-hidden rounded-md", className)}>
        <Image src={cover.src} alt={cover.alt} fill sizes="200px" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`${title} — મુખપૃષ્ઠ (cover)`}
      className={cn(
        "relative flex aspect-[3/4] flex-col overflow-hidden rounded-md p-3 text-white shadow-[inset_6px_0_0_rgb(0_0_0/0.18),0_10px_24px_-14px_rgb(0_0_0/0.6)]",
        tones[coverTone],
        className,
      )}
    >
      <span aria-hidden="true" className="absolute inset-2 rounded-sm border border-gold/45" />
      <span aria-hidden="true" className="absolute inset-y-0 left-2.5 w-px bg-white/10" />
      <span className="relative mt-1 text-center text-[0.6rem] tracking-wider text-gold-light/90">
        {publicationCategoryLabels[category].gu}
      </span>
      <span aria-hidden="true" className="relative mx-auto mt-2 h-px w-8 bg-gold/70" />
      <span className="relative my-auto line-clamp-5 px-1 text-center font-serif text-[0.8rem] leading-snug font-bold">
        {title}
      </span>
      <span className="relative text-center text-[0.6rem] text-white/70">ભરત મહેતા · {year}</span>
    </div>
  );
}

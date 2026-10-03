import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/types";

/**
 * Professor portrait. Until an official photograph is supplied (profile.portrait),
 * a dignified monogram placeholder is shown instead of a stock photo of a stranger.
 */
export function Portrait({ portrait, className }: { portrait?: ImageAsset; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 hidden h-[88%] w-[88%] rounded-[var(--radius-card)] border-2 border-gold/60 sm:block"
      />
      <div
        data-reveal="image"
        className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-navy shadow-[var(--shadow-lift)]"
      >
        {portrait ? (
          <Image src={portrait.src} alt={portrait.alt} fill sizes="(min-width:1024px) 420px, 90vw" className="object-cover" />
        ) : (
          <div
            role="img"
            aria-label="ડૉ. ભરત મહેતાનું પોર્ટ્રેટ (અધિકૃત ફોટો ટૂંક સમયમાં) — Portrait placeholder for Dr. Bharat Mehta"
            className="flex h-full flex-col items-center justify-center bg-[radial-gradient(120%_80%_at_50%_0%,#0b3c63_0%,#062b49_45%,#041d33_100%)] p-6 text-center"
          >
            <svg viewBox="0 0 200 200" className="w-3/5 max-w-60" aria-hidden="true">
              <circle cx="100" cy="100" r="96" fill="none" stroke="#C89B3C" strokeOpacity=".55" />
              <circle cx="100" cy="100" r="86" fill="none" stroke="#C89B3C" strokeOpacity=".25" strokeDasharray="2 4" />
              <circle cx="100" cy="78" r="30" fill="#E1C477" fillOpacity=".14" />
              <path d="M44 162c8-30 30-46 56-46s48 16 56 46" fill="#E1C477" fillOpacity=".14" />
            </svg>
            <p className="mt-6 font-serif text-3xl font-bold text-white">ભરત મહેતા</p>
            <p className="mt-1 text-sm text-gold-light">પ્રોફેસર, ગુજરાતી વિભાગ</p>
          </div>
        )}
      </div>
    </div>
  );
}

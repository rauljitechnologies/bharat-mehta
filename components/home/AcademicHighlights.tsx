import Link from "next/link";
import { Icon } from "../ui/Icon";
import type { IconName } from "@/lib/types";

export interface Highlight {
  title: string;
  text: string;
  icon: IconName;
  href: string;
}

/** Four service blocks that overlap the bottom edge of the hero. */
export function AcademicHighlights({ items }: { items: Highlight[] }) {
  return (
    <section aria-label="શૈક્ષણિક વિશેષતાઓ (Academic highlights)" className="relative z-10 -mt-20 md:-mt-16">
      <div className="container-site">
        <ul className="card grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="bg-white"
            >
              <Link
                href={item.href}
                className="group relative flex h-full gap-4 p-6 transition-colors hover:bg-gold-50/50 sm:flex-col sm:gap-0 lg:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy-dark">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <span>
                  <span className="block text-lg font-bold text-navy sm:mt-5">{item.title}</span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted">{item.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

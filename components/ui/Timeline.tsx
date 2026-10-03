import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-gold/40 pl-7">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="relative" data-reveal>
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[2.2rem] grid size-4 place-items-center rounded-full border-2 border-gold bg-white"
          >
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
          <p className="inline-block rounded bg-navy px-2 py-0.5 text-xs font-semibold text-gold-light">{item.period}</p>
          <h3 className="mt-2 text-lg font-bold text-navy">{item.title}</h3>
          <p className="text-[0.9375rem] font-medium text-ink/80">{item.institution}</p>
          {item.description && <p className="mt-1 text-[0.9375rem] text-muted">{item.description}</p>}
        </li>
      ))}
    </ol>
  );
}

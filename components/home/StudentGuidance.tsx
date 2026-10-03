import Image from "next/image";
import { Check } from "lucide-react";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Arrow, ButtonLink } from "../ui/Button";
import type { GuidanceArea } from "@/lib/types";

export function GuidanceCard({ area, index = 0 }: { area: GuidanceArea; index?: number }) {
  return (
    <article
      id={area.slug}
      data-reveal
      style={{ "--reveal-delay": `${(index % 4) * 70}ms` } as React.CSSProperties}
      className="card card-hover group flex scroll-mt-28 flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={area.image.src}
          alt={area.image.alt}
          fill
          sizes="(min-width:1280px) 290px, (min-width:640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
        <span className="absolute bottom-3 left-4 grid size-11 place-items-center rounded-lg bg-gold text-navy-dark shadow-lg">
          <Icon name={area.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy">{area.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{area.summary}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-ink/85">
          {area.points.map((p) => (
            <li key={p} className="flex gap-2">
              <Check className="mt-1 size-3.5 shrink-0 text-gold-dark" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function StudentGuidance({ areas }: { areas: GuidanceArea[] }) {
  return (
    <section aria-labelledby="guidance-title" className="section relative overflow-hidden bg-navy-dark">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(var(--color-gold-light)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container-site relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="guidance-title"
            tone="dark"
            eyebrow="Student Guidance"
            title="વિદ્યાર્થી માર્ગદર્શન"
            description="વિદ્યાર્થીઓના શૈક્ષણિક અને સંશોધન વિકાસ માટે માર્ગદર્શન"
          />
          <ButtonLink href="/student-guidance" variant="light-outline" className="self-start md:self-auto">
            માર્ગદર્શન વિશે વધુ <Arrow />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((area, i) => (
            <GuidanceCard key={area.slug} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

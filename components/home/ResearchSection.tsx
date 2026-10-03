import Link from "next/link";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Arrow, ButtonLink } from "../ui/Button";
import type { ResearchArea } from "@/lib/types";

export function ResearchCard({ area, index = 0 }: { area: ResearchArea; index?: number }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
      className="card card-hover group relative flex flex-col overflow-hidden p-6 lg:p-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-6 size-28 rounded-full border border-gold/15 transition-transform duration-700 group-hover:scale-125"
      />
      <span className="grid size-12 place-items-center rounded-xl bg-gold-50 text-gold-dark ring-1 ring-gold/25">
        <Icon name={area.icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-navy">{area.title}</h3>
      <p className="text-xs tracking-wide text-muted uppercase">{area.titleEn}</p>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{area.summary}</p>
      <Link
        href={`/research#${area.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-navy after:absolute after:inset-0 hover:text-gold-dark"
        aria-label={`${area.title} — સંશોધન જુઓ`}
      >
        સંશોધન જુઓ <Arrow />
      </Link>
    </article>
  );
}

export function ResearchSection({ areas }: { areas: ResearchArea[] }) {
  return (
    <section aria-labelledby="research-title" className="section bg-white">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="research-title"
            eyebrow="Research"
            title="સંશોધન"
            description="ગુજરાતી ભાષા અને સાહિત્યના વિવિધ ક્ષેત્રોમાં સંશોધન"
          />
          <ButtonLink href="/research" variant="outline" className="self-start md:self-auto">
            સંપૂર્ણ સંશોધન <Arrow />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {areas.map((area, i) => (
            <ResearchCard key={area.slug} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

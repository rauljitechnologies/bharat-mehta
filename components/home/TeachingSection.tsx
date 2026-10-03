import Image from "next/image";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Arrow, ButtonLink } from "../ui/Button";
import type { Course, ImageAsset, TeachingLevel } from "@/lib/types";

interface TeachingSectionProps {
  philosophy: string;
  levels: TeachingLevel[];
  courses: Course[];
  image: ImageAsset;
}

export function TeachingSection({ philosophy, levels, courses, image }: TeachingSectionProps) {
  return (
    <section aria-labelledby="teaching-title" className="section">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading id="teaching-title" eyebrow="Teaching" title="અધ્યાપન" description={philosophy} />
          <div data-reveal="image" className="relative mt-8 aspect-[3/2] overflow-hidden rounded-[var(--radius-card)]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover" />
          </div>
          <ol className="relative mt-8 space-y-6 border-l border-gold/40 pl-6">
            {levels.map((level) => (
              <li key={level.level} className="relative" data-reveal>
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-gold bg-canvas"
                />
                <p className="text-xs font-semibold tracking-wide text-gold-dark">{level.subtitle}</p>
                <h3 className="text-lg font-bold text-navy">{level.title}</h3>
                <p className="mt-1 text-[0.9375rem] text-muted">{level.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7">
          <h3 className="sr-only">અધ્યાપનના વિષયો (Subjects taught)</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {courses.map((course, i) => (
              <li
                key={course.slug}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                className="card card-hover flex flex-col p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-navy text-gold-light">
                    <Icon name={course.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-navy">{course.title}</p>
                    <p className="text-xs text-muted">{course.titleEn}</p>
                  </div>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{course.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {course.topics.map((t) => (
                    <li key={t} className="rounded-md bg-canvas px-2.5 py-1 text-xs text-ink/80 ring-1 ring-line">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-8" data-reveal>
            <ButtonLink href="/teaching" variant="outline">
              અધ્યાપન વિશે વધુ <Arrow />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

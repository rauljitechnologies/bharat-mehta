import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { publicationCategoryLabels } from "@/lib/content/publications";
import type { Publication } from "@/lib/types";
import { BookCover } from "./BookCover";
import { Arrow } from "./Button";

export function PublicationCard({ publication, headingLevel = "h3" }: { publication: Publication; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article id={publication.slug} className="card card-hover group relative flex scroll-mt-28 gap-5 p-5">
      <BookCover publication={publication} className="w-[88px] shrink-0 transition-transform duration-500 group-hover:-rotate-2 sm:w-24" />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded bg-gold-50 px-2 py-0.5 font-semibold text-gold-dark ring-1 ring-gold/20">
            {publicationCategoryLabels[publication.category].gu}
          </span>
          <span className="inline-flex items-center gap-1 text-muted">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {publication.year}
          </span>
        </div>
        <Heading className="mt-2 text-[1.0625rem] leading-snug font-bold text-navy">{publication.title}</Heading>
        <p className="mt-1 text-xs text-muted">{publication.venue}</p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{publication.description}</p>
        <Link
          href={`/publications?q=${encodeURIComponent(publication.title)}#${publication.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-navy after:absolute after:inset-0 hover:text-gold-dark"
          aria-label={`${publication.title} — વધુ વાંચો`}
        >
          વધુ વાંચો <Arrow />
        </Link>
      </div>
    </article>
  );
}

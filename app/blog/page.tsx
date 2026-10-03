import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { BlogExplorer } from "@/components/pages/BlogExplorer";
import { Arrow } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getEvents, getPosts, readingMinutes } from "@/lib/api";
import { blogCategoryLabels } from "@/lib/content/blog";
import { images } from "@/lib/content/images";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "લેખો અને અપડેટ્સ — શૈક્ષણિક બ્લોગ",
  description:
    "ગુજરાતી સાહિત્ય, લોકસાહિત્ય અને સંશોધન વિશેના લેખો, નવાં પ્રકાશનો, વ્યાખ્યાનો અને શૈક્ષણિક કાર્યક્રમોની માહિતી. Academic blog of Dr. Bharat Mehta on Gujarati literature.",
  path: "/blog",
});

export default async function BlogPage() {
  const [posts, events] = await Promise.all([getPosts(), getEvents()]);
  const withMinutes = posts.map((p) => ({ ...p, minutes: readingMinutes(p.content) }));
  const [featured, ...rest] = withMinutes;

  return (
    <>
      <PageHero
        eyebrow="Blog & Updates"
        title="લેખો અને અપડેટ્સ"
        description="ગુજરાતી સાહિત્ય પર નિબંધો, સંશોધન નોંધો, નવાં પ્રકાશનો અને શૈક્ષણિક કાર્યક્રમો."
        image={images.bookStacks}
        crumbs={[{ name: "લેખો", path: "/blog" }]}
      />

      {/* Featured article */}
      <section aria-labelledby="featured-title" className="pt-16 md:pt-20">
        <div className="container-site">
          <article className="card group relative grid overflow-hidden lg:grid-cols-2" data-reveal>
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(min-width:1024px) 620px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-md bg-gold px-2.5 py-0.5 font-semibold text-navy-dark">વિશેષ લેખ</span>
                <span className="font-semibold text-gold-dark">{blogCategoryLabels[featured.category]}</span>
              </p>
              <h2 id="featured-title" className="mt-4 font-serif text-2xl leading-snug font-bold text-navy sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted">{featured.excerpt}</p>
              <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" aria-hidden="true" /> {featured.minutes} મિનિટ વાંચન
                </span>
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group/link mt-7 inline-flex items-center gap-1.5 font-semibold text-navy after:absolute after:inset-0 hover:text-gold-dark"
              >
                સંપૂર્ણ લેખ વાંચો <Arrow />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="all-posts-title" className="section">
        <div className="container-site">
          <h2 id="all-posts-title" className="sr-only">
            બધા લેખો
          </h2>
          <BlogExplorer posts={rest} categories={blogCategoryLabels} />
        </div>
      </section>

      {events.length > 0 && (
      <section aria-labelledby="events-title" className="section bg-white">
        <div className="container-site">
          <SectionHeading id="events-title" eyebrow="Upcoming Events" title="આગામી શૈક્ષણિક કાર્યક્રમો" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {events.map((e) => {
              const d = new Date(`${e.date}T00:00:00+05:30`);
              return (
                <li key={e.slug} className="card flex gap-5 p-5" data-reveal>
                  <time
                    dateTime={e.date}
                    className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-navy py-2 text-center text-white"
                  >
                    <span className="font-serif text-2xl leading-none font-bold text-gold-light">{d.getDate()}</span>
                    <span className="mt-1 text-xs">
                      {new Intl.DateTimeFormat("gu-IN", { month: "short", timeZone: "Asia/Kolkata" }).format(d)}
                    </span>
                    <span className="text-[0.65rem] text-white/60">{d.getFullYear()}</span>
                  </time>
                  <div>
                    <p className="text-xs font-semibold text-gold-dark">{e.kind}</p>
                    <h3 className="mt-0.5 font-bold leading-snug text-navy">{e.title}</h3>
                    <p className="mt-1.5 inline-flex items-start gap-1.5 text-sm text-muted">
                      <MapPin className="mt-1 size-3.5 shrink-0" aria-hidden="true" /> {e.place}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      )}
    </>
  );
}

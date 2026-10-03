import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTeaching } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "અધ્યાપન — સ્નાતક અને અનુસ્નાતક અભ્યાસક્રમો",
  description:
    "ગુજરાતી સાહિત્ય, ગુજરાતી ભાષા, સાહિત્ય વિવેચન, લોકસાહિત્ય, ભાષાવિજ્ઞાન અને સંશોધન પદ્ધતિનું અધ્યાપન — M.S. યુનિવર્સિટી, વડોદરા. Gujarati literature and language teaching by Dr. Bharat Mehta.",
  path: "/teaching",
});

const levelLabel = { ug: "સ્નાતક", pg: "અનુસ્નાતક", research: "સંશોધન" } as const;

const approach = [
  { title: "નિકટ વાચન", text: "મૂળ પાઠનું ધ્યાનપૂર્વક વાચન અને વર્ગમાં સંવાદાત્મક ચર્ચા." },
  { title: "સંદર્ભલક્ષી સમજ", text: "કૃતિને તેના ઐતિહાસિક, સામાજિક અને સાંસ્કૃતિક સંદર્ભમાં મૂકીને જોવી." },
  { title: "સંશોધનલક્ષી અભિગમ", text: "સેમિનાર, પ્રોજેક્ટ અને લઘુશોધનિબંધ દ્વારા સ્વતંત્ર વિચારનો વિકાસ." },
  { title: "ડિજિટલ સંસાધનો", text: "ઑનલાઇન ગ્રંથાલય, ડિજિટલ શબ્દકોશ અને યુનિકોડ સાધનોનો ઉપયોગ." },
];

export default async function TeachingPage() {
  const { philosophy, levels, courses } = await getTeaching();

  return (
    <>
      <PageHero
        eyebrow="Teaching"
        title="અધ્યાપન"
        description="સ્નાતક અને અનુસ્નાતક વર્ગોમાં ગુણવત્તાસભર શિક્ષણ — ગુજરાતી ભાષા-સાહિત્યને જીવંત સંવાદ તરીકે."
        image={images.barodaCollege}
        crumbs={[{ name: "અધ્યાપન", path: "/teaching" }]}
      />

      <section aria-labelledby="philosophy-title" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="philosophy-title" eyebrow="Teaching Philosophy" title="અધ્યાપન દર્શન" />
          </div>
          <blockquote className="border-l-2 border-gold pl-6 font-serif text-xl leading-relaxed text-navy sm:text-2xl lg:col-span-7" data-reveal>
            {philosophy}
          </blockquote>
        </div>

        <div className="container-site mt-16 grid gap-5 md:grid-cols-3">
          {levels.map((level, i) => (
            <article
              key={level.level}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="card card-hover relative overflow-hidden p-7"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
              <span className="grid size-12 place-items-center rounded-xl bg-navy text-gold-light">
                <Icon name={level.icon} className="size-6" />
              </span>
              <p className="mt-5 text-xs font-semibold tracking-wide text-gold-dark">{level.subtitle}</p>
              <h2 className="text-xl font-bold text-navy">{level.title}</h2>
              <p className="mt-2 text-[0.9375rem] text-muted">{level.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="courses-title" className="section bg-white">
        <div className="container-site">
          <SectionHeading
            id="courses-title"
            eyebrow="Subjects"
            title="અધ્યાપનના વિષયો"
            description="NEP 2020 અનુરૂપ સેમેસ્ટર પદ્ધતિમાં ભણાવાતા મુખ્ય અભ્યાસક્રમો."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <article
                key={course.slug}
                id={course.slug}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
                className="card card-hover flex scroll-mt-28 flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-lg bg-gold-50 text-gold-dark ring-1 ring-gold/25">
                    <Icon name={course.icon} className="size-5" />
                  </span>
                  <span className="rounded-md bg-navy-50 px-2 py-0.5 text-xs font-semibold text-navy">
                    {levelLabel[course.level]}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy">{course.title}</h3>
                <p className="text-xs text-muted">{course.titleEn}</p>
                <p className="mt-3 text-[0.9375rem] text-muted">{course.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
                  {course.topics.map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-gold-dark" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="section">
        <div className="container-site">
          <SectionHeading id="approach-title" eyebrow="Approach" title="અધ્યાપન પદ્ધતિ" align="center" />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.title} className="bg-white p-6" data-reveal>
                <span className="font-serif text-3xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] text-muted">{a.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal>
            <ButtonLink href="/student-guidance">
              વિદ્યાર્થી માર્ગદર્શન <Arrow />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              સંપર્ક કરો
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

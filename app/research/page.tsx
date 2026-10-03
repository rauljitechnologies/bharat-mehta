import type { Metadata } from "next";
import Image from "next/image";
import { Building2, MapPin, Mic } from "lucide-react";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { getPublications, getResearch } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "સંશોધન — ગુજરાતી સાહિત્ય અને ભાષા સંશોધન",
  description:
    "ગુજરાતી સાહિત્ય, લોકસાહિત્ય, ભાષાવિજ્ઞાન, આધુનિક સાહિત્ય, સાંસ્કૃતિક અભ્યાસ અને સાહિત્ય સમીક્ષામાં સંશોધન — પ્રોજેક્ટ, શોધપત્રો, પરિસંવાદો અને Ph.D. માર્ગદર્શન. Gujarati literature research by Dr. Bharat Mehta.",
  path: "/research",
});

const presentationType = { keynote: "બીજવક્તવ્ય", paper: "શોધપત્ર", invited: "આમંત્રિત વ્યાખ્યાન" } as const;
const supervisionStatus = {
  awarded: { label: "એનાયત", className: "bg-emerald-50 text-emerald-800 ring-emerald-200" },
  ongoing: { label: "ચાલુ", className: "bg-gold-50 text-gold-dark ring-gold/30" },
  submitted: { label: "સબમિટ", className: "bg-navy-50 text-navy ring-navy/15" },
} as const;

const toc = [
  { href: "#overview", label: "ઝાંખી" },
  { href: "#areas", label: "સંશોધન ક્ષેત્રો" },
  { href: "#projects", label: "પ્રોજેક્ટ" },
  { href: "#papers", label: "સંશોધન ગ્રંથો" },
  { href: "#presentations", label: "પરિસંવાદો" },
  { href: "#supervision", label: "માર્ગદર્શન" },
  { href: "#collaborations", label: "સહયોગ" },
];

export default async function ResearchPage() {
  const [research, publications] = await Promise.all([getResearch(), getPublications()]);
  const researchBooks = publications.filter((p) => p.category === "research");

  return (
    <>
      <PageHero
        eyebrow="Research"
        title="સંશોધન"
        description="ગુજરાતી ભાષા અને સાહિત્યના વિવિધ ક્ષેત્રોમાં સંશોધન"
        image={images.manuscript}
        crumbs={[{ name: "સંશોધન", path: "/research" }]}
      />

      {/* In-page navigation */}
      <nav aria-label="આ પૃષ્ઠ પર (On this page)" className="sticky top-[72px] z-30 border-b border-line bg-white/90 backdrop-blur lg:top-[88px]">
        <ul className="container-site no-scrollbar flex gap-1 overflow-x-auto py-2">
          {toc.map((t) => (
            <li key={t.href} className="shrink-0">
              <a href={t.href} className="block rounded-md px-3 py-1.5 text-sm font-medium text-ink/75 hover:bg-canvas hover:text-navy">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="overview" aria-labelledby="overview-title" className="section scroll-mt-36">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="overview-title" eyebrow="Research Overview" title="સંશોધનની ઝાંખી" />
            <div className="mt-6 space-y-4 text-[1.0625rem]" data-reveal>
              {research.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div data-reveal="image" className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
            <Image src={images.saraswatichandra.src} alt={images.saraswatichandra.alt} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="areas" aria-labelledby="areas-title" className="section scroll-mt-36 bg-white">
        <div className="container-site">
          <SectionHeading id="areas-title" eyebrow="Research Areas" title="સંશોધન ક્ષેત્રો" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {research.areas.map((area, i) => (
              <article
                key={area.slug}
                id={area.slug}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                className="card card-hover flex scroll-mt-36 gap-5 p-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <Icon name={area.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                  <p className="text-xs tracking-wide text-muted uppercase">{area.titleEn}</p>
                  <p className="mt-3 text-[0.9375rem] text-ink/85">{area.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="મુખ્ય શબ્દો">
                    {area.keywords.map((k) => (
                      <li key={k} className="rounded-md bg-gold-50 px-2.5 py-0.5 text-xs text-gold-dark ring-1 ring-gold/20">
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-title" className="section scroll-mt-36">
        <div className="container-site">
          <SectionHeading
            id="projects-title"
            eyebrow="Research Projects & Fellowships"
            title="સંશોધન પ્રોજેક્ટ અને ફેલોશિપ"
            description="રાષ્ટ્રીય સંસ્થાઓ અને યુનિવર્સિટી દ્વારા સમર્થિત સંશોધન."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {research.projects.map((p) => (
              <article key={p.funder + p.period} data-reveal className="card flex flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "rounded-md px-2.5 py-0.5 text-xs font-semibold ring-1",
                      p.status === "ongoing" ? supervisionStatus.ongoing.className : supervisionStatus.awarded.className,
                    )}
                  >
                    {p.period}
                  </span>
                  <span className="text-xs text-muted">{p.role}</span>
                </div>
                <h3 className="mt-4 text-lg leading-snug font-bold text-navy">{p.title}</h3>
                <p className="mt-1 flex-1 text-[0.9375rem] text-ink/80">{p.funder}</p>
                {p.summary && <p className="mt-2 text-[0.9375rem] text-muted">{p.summary}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="papers" aria-labelledby="papers-title" className="section scroll-mt-36 bg-white">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="papers-title" eyebrow="Research Publications" title="સંશોધન ગ્રંથો" />
            <ButtonLink href="/publications" variant="outline" className="self-start md:self-auto">
              બધાં પ્રકાશનો <Arrow />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {researchBooks.map((p) => (
              <PublicationCard key={p.slug} publication={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="presentations" aria-labelledby="presentations-title" className="section scroll-mt-36">
        <div className="container-site">
          <SectionHeading id="presentations-title" eyebrow="Seminars & Conferences" title="પરિસંવાદો અને પરિષદો" />
          <p className="mt-8 max-w-3xl text-[1.0625rem] text-ink/85" data-reveal>
            {research.seminarNote}
          </p>
          {research.presentations.length > 0 && (
          <ul className="mt-10 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
            {research.presentations.map((p) => (
              <li key={p.title} className="grid gap-3 p-5 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-6 sm:p-6" data-reveal>
                <span className="font-serif text-2xl font-bold text-gold">{p.year}</span>
                <div>
                  <h3 className="font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Mic className="size-3.5" aria-hidden="true" /> {p.event}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden="true" /> {p.place}
                    </span>
                  </p>
                </div>
                <span className="justify-self-start rounded-md bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy">
                  {presentationType[p.type]}
                </span>
              </li>
            ))}
          </ul>
          )}
        </div>
      </section>

      <section id="supervision" aria-labelledby="supervision-title" className="section scroll-mt-36 bg-navy-dark text-white">
        <div className="container-site">
          <SectionHeading id="supervision-title" tone="dark" eyebrow="Research Supervision" title="સંશોધન માર્ગદર્શન" />
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {research.supervisionStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-6" data-reveal>
                <dt className="mt-1 text-sm text-white/70">{s.label}</dt>
                <dd className="font-serif text-4xl font-bold text-gold-light">{s.value}</dd>
              </div>
            ))}
          </dl>
          {research.supervision.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-[var(--radius-card)] border border-white/10" data-reveal>
            <table className="w-full min-w-[36rem] text-left text-[0.9375rem]">
              <caption className="sr-only">માર્ગદર્શિત સંશોધનોની યાદી (Supervised research)</caption>
              <thead className="bg-white/[0.06] text-sm text-gold-light">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">પદવી</th>
                  <th scope="col" className="px-5 py-3 font-semibold">સંશોધન વિષય</th>
                  <th scope="col" className="px-5 py-3 font-semibold">સ્થિતિ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {research.supervision.map((s) => (
                  <tr key={s.topic}>
                    <td className="px-5 py-3.5 whitespace-nowrap text-white/80">{s.degree}</td>
                    <td className="px-5 py-3.5">{s.topic}</td>
                    <td className="px-5 py-3.5">
                      <span className={cn("rounded px-2 py-0.5 text-xs font-semibold ring-1", supervisionStatus[s.status].className)}>
                        {supervisionStatus[s.status].label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </div>
      </section>

      <section id="collaborations" aria-labelledby="collab-title" className="section scroll-mt-36">
        <div className="container-site">
          <SectionHeading id="collab-title" eyebrow="Academic Collaborations" title="શૈક્ષણિક સહયોગ" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {research.collaborations.map((c) => (
              <article key={c.institution} className="card p-6" data-reveal>
                <Building2 className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-navy">{c.institution}</h3>
                <p className="text-sm text-muted">{c.place}</p>
                <p className="mt-3 text-[0.9375rem]">{c.nature}</p>
              </article>
            ))}
          </div>
          <div className="mt-10" data-reveal>
            <ButtonLink href="/contact">
              સંશોધન સહયોગ માટે સંપર્ક <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

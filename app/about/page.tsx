import type { Metadata } from "next";
import Image from "next/image";
import { Award, Download, Mail, Quote, Users } from "lucide-react";
import { Arrow, ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Portrait } from "@/components/ui/Portrait";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { getProfile } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "મારા વિશે — શૈક્ષણિક પ્રોફાઇલ",
  description:
    "ડૉ. ભરત મહેતાની શૈક્ષણિક પ્રોફાઇલ: લાયકાત, અધ્યાપન અનુભવ, સંશોધન રસ, શૈક્ષણિક જવાબદારીઓ, પુરસ્કારો અને વ્યાવસાયિક સભ્યપદ. Academic profile of Dr. Bharat Mehta, Gujarati Professor, Vadodara.",
  path: "/about",
  type: "profile",
});

export default async function AboutPage() {
  const profile = await getProfile();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl("/about"),
          inLanguage: "gu-IN",
          mainEntity: personJsonLd(),
        }}
      />
      <PageHero
        eyebrow="About · શૈક્ષણિક પ્રોફાઇલ"
        title="મારા વિશે"
        description={`${profile.title}, ${profile.department} — ${profile.university}`}
        image={images.dnHall}
        crumbs={[{ name: "વિશે", path: "/about" }]}
      />

      {/* Profile */}
      <section aria-labelledby="profile-title" className="section">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 [&>*]:min-w-0">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:col-span-4 lg:max-w-none">
            <Portrait portrait={profile.portrait} />
            <div className="mt-8 flex flex-col gap-3">
              <a href={profile.cvUrl} download className={buttonClasses("primary")}>
                <Download className="size-4" aria-hidden="true" /> CV ડાઉનલોડ કરો (PDF)
              </a>
              <a href={`mailto:${profile.email}`} className={buttonClasses("outline")}>
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionHeading id="profile-title" eyebrow="Profile" title={profile.name} />
            <p className="mt-3 text-muted">
              {profile.nameEn} · {profile.titleEn}, {profile.departmentEn}, {profile.universityEn}
            </p>
            <div className="mt-6 space-y-4 text-[1.0625rem]" data-reveal>
              {[...profile.bio, ...profile.bioExtended].map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
              {profile.stats.map((s) => (
                <div key={s.value} className="card flex items-center gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-gold-50 text-gold-dark ring-1 ring-gold/25">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <div className="flex flex-col-reverse">
                    <dt className="text-sm text-muted">{s.label}</dt>
                    <dd className="font-bold text-navy">{s.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Qualifications & experience */}
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <section aria-labelledby="qualifications-title">
                <h2 id="qualifications-title" className="font-serif text-2xl font-bold text-navy">
                  શૈક્ષણિક લાયકાત
                </h2>
                <span className="gold-rule mt-3 mb-8" aria-hidden="true" />
                <Timeline items={profile.qualifications} />
              </section>
              <section aria-labelledby="experience-title">
                <h2 id="experience-title" className="font-serif text-2xl font-bold text-navy">
                  અધ્યાપન અનુભવ
                </h2>
                <span className="gold-rule mt-3 mb-8" aria-hidden="true" />
                <Timeline items={profile.experience} />
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Research interests */}
      <section aria-labelledby="interests-title" className="section bg-white">
        <div className="container-site">
          <SectionHeading id="interests-title" eyebrow="Research Interests" title="સંશોધન રસનાં ક્ષેત્રો" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.interests.map((interest, i) => (
              <li
                key={interest}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
                className="card flex items-center gap-4 p-5"
              >
                <span className="font-serif text-2xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-navy">{interest}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8" data-reveal>
            <ButtonLink href="/research" variant="outline">
              સંશોધન કાર્ય જુઓ <Arrow />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Responsibilities, awards, memberships */}
      <section aria-label="જવાબદારીઓ, પુરસ્કારો અને સભ્યપદ" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-3">
          <section aria-labelledby="responsibilities-title" data-reveal>
            <h2 id="responsibilities-title" className="font-serif text-2xl font-bold text-navy">
              શૈક્ષણિક જવાબદારીઓ
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
            <ul className="prose-gu mt-6 !text-base">
              {profile.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="awards-title" data-reveal>
            <h2 id="awards-title" className="font-serif text-2xl font-bold text-navy">
              પુરસ્કારો અને સન્માન
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
            <ul className="mt-6 space-y-3">
              {profile.awards.map((a) => (
                <li key={a.title} className="card flex gap-4 p-4">
                  <Award className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">{a.title}</p>
                    <p className="text-sm text-muted">
                      {[a.body, a.year].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="memberships-title" data-reveal>
            <h2 id="memberships-title" className="font-serif text-2xl font-bold text-navy">
              નેતૃત્વ અને સંસ્થાકીય સેવા
            </h2>
            <span className="gold-rule mt-3" aria-hidden="true" />
            <ul className="mt-6 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white">
              {profile.memberships.map((m) => (
                <li key={m.name} className="flex items-start gap-3 p-4">
                  <Users className="mt-1 size-4 shrink-0 text-gold-dark" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">{m.name}</p>
                    <p className="text-sm text-muted">
                      {m.role}
                      {m.period && ` · ${m.period}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {/* Philosophy quote */}
      <section aria-label="શૈક્ષણિક દર્શન (Academic philosophy)" className="relative overflow-hidden bg-navy-dark py-16 text-white md:py-20">
        <div className="container-site max-w-4xl text-center" data-reveal>
          <Quote className="mx-auto size-10 text-gold" aria-hidden="true" />
          <blockquote className="mt-6">
            <p className="font-serif text-xl leading-relaxed sm:text-2xl">{profile.quote.translation}</p>
            <p lang="en" className="mt-5 text-base text-white/70 italic">“{profile.quote.text}”</p>
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-gold-light">— {profile.name}</p>
        </div>
      </section>

      {/* Fellowships */}
      <section aria-labelledby="fellowships-title" className="section">
        <div className="container-site">
          <SectionHeading id="fellowships-title" eyebrow="Fellowships & Projects" title="ફેલોશિપ અને સંશોધન પ્રોજેક્ટ" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.fellowships.map((f) => (
              <li key={f.body + f.period} className="card p-5" data-reveal>
                <p className="text-sm font-semibold text-gold-dark">{f.period}</p>
                <p className="mt-1 font-bold text-navy">{f.title}</p>
                <p className="text-[0.9375rem] text-ink/80">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo gallery */}
      <section aria-labelledby="gallery-title" className="section bg-white">
        <div className="container-site">
          <SectionHeading id="gallery-title" eyebrow="Moments" title="ક્ષણચિત્રો" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[images.lecture, images.felicitation, images.booksStack].map((img) => (
              <figure key={img.src} className="group" data-reveal>
                <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-card)] bg-navy-50">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width:768px) 400px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">{img.alt.split(" — ")[0]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Image credits */}
      <section id="credits" aria-labelledby="credits-title" className="scroll-mt-28 border-t border-line bg-white py-12">
        <div className="container-site">
          <h2 id="credits-title" className="text-lg font-bold text-navy">
            ફોટોગ્રાફ શ્રેય (Image credits)
          </h2>
          <ul className="mt-4 grid gap-x-8 gap-y-1.5 text-sm text-muted md:grid-cols-2">
            {Object.values(images).flatMap((img) => ("credit" in img ? [<li key={img.src}>{img.credit}</li>] : []))}
          </ul>
        </div>
      </section>
    </>
  );
}

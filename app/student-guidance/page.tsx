import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { GuidanceCard } from "@/components/home/StudentGuidance";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGuidance } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "વિદ્યાર્થી માર્ગદર્શન — Ph.D. અને સંશોધન માર્ગદર્શન",
  description:
    "ગુજરાતી સાહિત્યમાં Ph.D., M.Phil./ડિઝર્ટેશન, સંશોધન પદ્ધતિ અને શૈક્ષણિક-કારકિર્દી માર્ગદર્શન — ડૉ. ભરત મહેતા, M.S. યુનિવર્સિટી, વડોદરા. Ph.D. guidance in Gujarati literature.",
  path: "/student-guidance",
});

export default async function StudentGuidancePage() {
  const { intro, areas, process, faqs } = await getGuidance();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Student Guidance"
        title="વિદ્યાર્થી માર્ગદર્શન"
        description="વિદ્યાર્થીઓના શૈક્ષણિક અને સંશોધન વિકાસ માટે માર્ગદર્શન"
        image={images.library}
        crumbs={[{ name: "વિદ્યાર્થી માર્ગદર્શન", path: "/student-guidance" }]}
      />

      <section aria-labelledby="areas-title" className="section">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <SectionHeading id="areas-title" eyebrow="Areas" title="માર્ગદર્શનનાં ક્ષેત્રો" className="lg:col-span-5" />
            <p className="text-[1.0625rem] text-ink/85 lg:col-span-7 lg:pt-8" data-reveal>
              {intro}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {areas.map((area, i) => (
              <GuidanceCard key={area.slug} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="section bg-white">
        <div className="container-site">
          <SectionHeading id="process-title" eyebrow="Process" title="Ph.D. માર્ગદર્શન પ્રક્રિયા" align="center" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step} className="relative" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                {i < process.length - 1 && (
                  <span aria-hidden="true" className="absolute top-6 left-14 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-gold/60 to-transparent lg:block" />
                )}
                <span className="relative grid size-12 place-items-center rounded-full border-2 border-gold bg-white font-serif text-lg font-bold text-navy">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-[0.9375rem] text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="વારંવાર પૂછાતા પ્રશ્નો" />
            <div className="mt-8" data-reveal>
              <ButtonLink href="/contact">
                માર્ગદર્શન માટે સંપર્ક <Arrow />
              </ButtonLink>
            </div>
          </div>
          <div className="space-y-3 lg:col-span-8">
            {faqs.map((f, i) => (
              <details key={f.q} className="card group p-0 open:shadow-[var(--shadow-lift)]" open={i === 0} data-reveal>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-gold-dark transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="border-t border-line px-5 py-4 text-[0.9375rem] text-ink/85">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

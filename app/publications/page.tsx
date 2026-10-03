import type { Metadata } from "next";
import { PublicationsExplorer } from "@/components/pages/PublicationsExplorer";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { getPublications } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "પ્રકાશનો — પુસ્તકો, સંશોધન લેખો અને શોધપત્રો",
  description:
    "ડૉ. ભરત મહેતાનાં પુસ્તકો, સંશોધન લેખો, શોધપત્રો, પરિસંવાદ પત્રો અને અન્ય પ્રકાશનો — વર્ષ, શ્રેણી અને મુખ્ય શબ્દ દ્વારા શોધો. Publications on Gujarati literature and language.",
  path: "/publications",
});

export default async function PublicationsPage() {
  const publications = await getPublications();
  const books = publications.filter((p) => p.category === "book").length;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Publications of Dr. Bharat Mehta",
          url: absoluteUrl("/publications"),
          itemListElement: publications.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": p.category === "book" ? "Book" : "ScholarlyArticle",
              name: p.title,
              ...(p.titleEn ? { alternateName: p.titleEn } : {}),
              inLanguage: "gu",
              datePublished: String(p.year),
              author: { "@type": "Person", name: siteConfig.nameEn },
              ...(p.category === "book" ? { publisher: p.venue } : { isPartOf: p.venue }),
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Publications"
        title="પ્રકાશનો"
        description="પુસ્તકો, સંશોધન લેખો, શોધપત્રો અને શૈક્ષણિક પ્રકાશનો — ગુજરાતી સાહિત્ય અને ભાષાના અભ્યાસમાં યોગદાન."
        image={images.library}
        crumbs={[{ name: "પ્રકાશનો", path: "/publications" }]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { v: publications.length, l: "કુલ પ્રકાશનો" },
            { v: books, l: "પુસ્તકો" },
            { v: publications.length - books, l: "લેખ અને શોધપત્રો" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col-reverse">
              <dt className="text-sm text-white/70">{s.l}</dt>
              <dd className="font-serif text-3xl font-bold text-gold-light">{s.v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>
      <section aria-label="પ્રકાશન સૂચિ (Publication list)" className="section">
        <div className="container-site">
          <PublicationsExplorer publications={publications} />
        </div>
      </section>
    </>
  );
}

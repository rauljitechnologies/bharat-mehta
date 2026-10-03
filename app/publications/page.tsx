import type { Metadata } from "next";
import { PublicationsExplorer } from "@/components/pages/PublicationsExplorer";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { getPublications } from "@/lib/api";
import { images } from "@/lib/content/images";
import { publicationCategoryLabels } from "@/lib/content/publications";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "પ્રકાશનો — વિવેચન, સંશોધન અને સંપાદનનાં પુસ્તકો",
  description:
    "પ્રો. ભરત મહેતાનાં પ્રકાશિત પુસ્તકો — પ્રતિબદ્ધ, કલાકારનો ઇતિહાસબોધ, ચાર નવલકથાકારો, સમકાલીન ગુજરાતી નવલકથા સહિત વિવેચન, સંશોધન અને સંપાદન. Books by Prof. Bharat Mehta on Gujarati literary criticism.",
  path: "/publications",
});

export default async function PublicationsPage() {
  const publications = await getPublications();
  const authored = publications.filter((p) => p.role === "author").length;

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
              "@type": "Book",
              name: p.title,
              ...(p.titleEn ? { alternateName: p.titleEn } : {}),
              inLanguage: "gu",
              genre: publicationCategoryLabels[p.category].en,
              ...(p.year ? { datePublished: String(p.year) } : {}),
              ...(p.cover ? { image: absoluteUrl(p.cover.src) } : {}),
              [p.role === "editor" ? "editor" : "author"]: { "@type": "Person", name: siteConfig.nameEn },
              ...(p.publisher ? { publisher: { "@type": "Organization", name: p.publisher } } : {}),
              ...(p.award ? { award: p.award } : {}),
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Publications"
        title="પ્રકાશનો"
        description="વિવેચન, સંશોધન, સંપાદન, સર્જન સ્વાધ્યાય-શ્રેણી અને ફિલ્મ-આસ્વાદ શ્રેણીનાં પ્રકાશિત પુસ્તકો."
        image={images.booksStack}
        crumbs={[{ name: "પ્રકાશનો", path: "/publications" }]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { v: publications.length, l: "પ્રકાશિત પુસ્તકો" },
            { v: authored, l: "વિવેચન અને સંશોધન" },
            { v: publications.length - authored, l: "સંપાદન અને શ્રેણી" },
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

import type { Metadata } from "next";
import { ContactDetails } from "@/components/home/ContactSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { getProfile } from "@/lib/api";
import { images } from "@/lib/content/images";
import { buildMetadata, personJsonLd } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "સંપર્ક — ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી",
  description:
    "ડૉ. ભરત મહેતાનો સંપર્ક: ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા – 390002. ઇમેઇલ, ફોન, કાર્યાલય સમય અને સંપર્ક ફોર્મ. Contact Dr. Bharat Mehta, Gujarati Professor, Vadodara.",
  path: "/contact",
});

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          inLanguage: "gu-IN",
          mainEntity: personJsonLd(),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="સંપર્ક"
        description="સંશોધન માર્ગદર્શન, વ્યાખ્યાન આમંત્રણ કે શૈક્ષણિક સહયોગ માટે નિઃસંકોચ સંપર્ક કરો."
        image={images.palace}
        crumbs={[{ name: "સંપર્ક", path: "/contact" }]}
      />
      <section aria-labelledby="contact-details-title" className="section">
        <div className="container-site grid grid-cols-1 gap-6 lg:grid-cols-12 [&>*]:min-w-0">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <h2 id="contact-details-title" className="sr-only">
              સંપર્ક વિગતો
            </h2>
            <ContactDetails profile={profile} />
            <MapEmbed query={siteConfig.mapQuery} label="ગુજરાતી વિભાગ, કલા વિદ્યાશાખા, M.S. યુનિવર્સિટી, વડોદરા" />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

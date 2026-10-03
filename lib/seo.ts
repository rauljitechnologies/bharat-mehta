import type { Metadata } from "next";
import { profile } from "./content/profile";
import { researchAreas } from "./content/research";
import { absoluteUrl, siteConfig } from "./site";
import type { BlogPost } from "./types";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  type = "website",
  publishedTime,
  keywords = [],
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords: [...keywords, ...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.titleSuffix,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime, authors: [profile.nameEn] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ---------------------------- JSON-LD builders ---------------------------- */

const personId = absoluteUrl("/#person");
const orgId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function universityJsonLd() {
  return {
    "@type": "CollegeOrUniversity",
    "@id": orgId,
    name: siteConfig.university.name,
    alternateName: "M.S. University of Baroda",
    url: siteConfig.university.url,
    department: {
      "@type": "EducationalOrganization",
      name: siteConfig.university.departmentName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: profile.postalCode,
      addressCountry: "IN",
    },
  };
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.nameEn,
    alternateName: profile.name,
    honorificPrefix: "Dr.",
    jobTitle: `${profile.titleEn}, ${profile.departmentEn}`,
    description: siteConfig.descriptionEn,
    url: absoluteUrl("/"),
    image: absoluteUrl(profile.portrait?.src ?? siteConfig.ogImage),
    award: profile.awards.map((a) => `${a.title}${a.body ? `, ${a.body}` : ""} (${a.year})`),
    memberOf: profile.memberships.map((m) => ({ "@type": "Organization", name: m.name })),
    email: `mailto:${profile.email}`,
    worksFor: { "@id": orgId },
    affiliation: { "@id": orgId },
    alumniOf: { "@id": orgId },
    knowsLanguage: ["gu", "en", "hi"],
    knowsAbout: researchAreas.map((a) => a.titleEn),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Department of Gujarati, Faculty of Arts",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: profile.postalCode,
      addressCountry: "IN",
    },
    sameAs: Object.values(profile.social).filter(Boolean),
  };
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: siteConfig.titleSuffix,
        description: siteConfig.descriptionEn,
        inLanguage: ["gu-IN", "en-IN"],
        publisher: { "@id": personId },
      },
      personJsonLd(),
      universityJsonLd(),
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "gu-IN",
    datePublished: post.date,
    dateModified: post.date,
    image: [absoluteUrl(post.image.src)],
    author: { "@type": "Person", "@id": personId, name: profile.nameEn, url: absoluteUrl("/about") },
    publisher: { "@type": "Person", "@id": personId, name: profile.nameEn },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(", "),
  };
}

/** Serialise JSON-LD safely for a <script> tag (escapes "<" per Next.js guidance). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

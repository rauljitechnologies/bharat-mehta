import type { Metadata, Viewport } from "next";
import { Noto_Sans_Gujarati, Noto_Serif_Gujarati } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { RevealObserver, revealBootScript } from "@/components/ui/RevealObserver";
import { getProfile } from "@/lib/api";
import { buildSearchIndex } from "@/lib/search";
import { siteJsonLd } from "@/lib/seo";
import { footerNav, mainNav, siteConfig } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_Gujarati({
  variable: "--font-gujarati-sans",
  subsets: ["gujarati", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Noto_Serif_Gujarati({
  variable: "--font-gujarati-serif",
  subsets: ["gujarati", "latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.titleSuffix,
    template: `%s | ${siteConfig.nameEn} — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.nameEn, url: siteConfig.url }],
  creator: siteConfig.nameEn,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: ["en_IN"],
    siteName: siteConfig.titleSuffix,
    url: "/",
    title: siteConfig.titleSuffix,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.titleSuffix }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleSuffix,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#041D33",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [profile, searchIndex] = await Promise.all([getProfile(), buildSearchIndex()]);

  return (
    <html lang="gu" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Header
          nav={mainNav}
          name={profile.name}
          role={`${profile.title}, ${profile.department}`}
          university={profile.university}
          email={profile.email}
          phone={profile.phone}
          phoneHref={profile.phoneHref}
          searchIndex={searchIndex}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer profile={profile} nav={footerNav} />
        <RevealObserver />
        <JsonLd data={siteJsonLd()} />
      </body>
    </html>
  );
}

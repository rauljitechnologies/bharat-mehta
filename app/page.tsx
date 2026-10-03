import type { Metadata } from "next";
import { AboutProfessor } from "@/components/home/AboutProfessor";
import { AcademicHighlights, type Highlight } from "@/components/home/AcademicHighlights";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { LatestUpdates } from "@/components/home/LatestUpdates";
import { PublicationsSection } from "@/components/home/PublicationsSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { StudentGuidance } from "@/components/home/StudentGuidance";
import { TeachingSection } from "@/components/home/TeachingSection";
import { getGuidance, getLatestUpdates, getProfile, getPublications, getResearchAreas, getTeaching } from "@/lib/api";
import { images } from "@/lib/content/images";
import { publicationTabs } from "@/lib/content/publications";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.titleSuffix,
    description: siteConfig.description,
    path: "/",
    type: "profile",
  }),
  title: { absolute: siteConfig.titleSuffix },
};

const highlights: Highlight[] = [
  { title: "અધ્યાપન", text: "સ્નાતક અને અનુસ્નાતક વર્ગોમાં ગુણવત્તાસભર શિક્ષણ", icon: "graduation-cap", href: "/teaching" },
  { title: "સંશોધન", text: "ગુજરાતી સાહિત્યના વિવિધ ક્ષેત્રોમાં સંશોધન કાર્ય", icon: "book-open", href: "/research" },
  { title: "પ્રકાશનો", text: "પુસ્તકો, સંશોધન લેખો અને શૈક્ષણિક પ્રકાશનો", icon: "feather", href: "/publications" },
  {
    title: "વિદ્યાર્થી માર્ગદર્શન",
    text: "સંશોધન માર્ગદર્શન અને વ્યક્તિત્વ વિકાસ માટે સહયોગ",
    icon: "users",
    href: "/student-guidance",
  },
];

export default async function HomePage() {
  const [profile, areas, teaching, publications, guidance, updates] = await Promise.all([
    getProfile(),
    getResearchAreas(),
    getTeaching(),
    getPublications(),
    getGuidance(),
    getLatestUpdates(3),
  ]);

  return (
    <>
      <Hero
        eyebrow="સ્વાગત છે મારા શૈક્ષણિક વેબસાઇટ પર"
        title={["અધ્યાપન, સંશોધન અને", "ગુજરાતી ભાષા-સાહિત્ય પ્રત્યે સમર્પિત"]}
        text={profile.shortBio}
        image={images.heroDome}
      />
      <AcademicHighlights items={highlights} />
      <AboutProfessor profile={profile} />
      <ResearchSection areas={areas} />
      <TeachingSection
        philosophy={teaching.philosophy}
        levels={teaching.levels.filter((l) => l.level !== "research")}
        courses={teaching.courses}
        image={images.barodaCollege}
      />
      <PublicationsSection publications={publications} tabs={publicationTabs} />
      <StudentGuidance areas={guidance.areas} />
      <LatestUpdates posts={updates} />
      <ContactSection profile={profile} />
    </>
  );
}

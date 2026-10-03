/**
 * Content models. These mirror what a headless CMS (Sanity, Strapi, Contentful…)
 * would return, so UI components never depend on where the data comes from.
 */

/** Keys resolved to icons by components/ui/Icon.tsx — keeps icon choice in content. */
export type IconName =
  | "graduation-cap"
  | "book-open"
  | "feather"
  | "users"
  | "landmark"
  | "scroll"
  | "languages"
  | "library"
  | "pen-line"
  | "quote"
  | "lightbulb"
  | "compass"
  | "briefcase"
  | "presentation"
  | "notebook"
  | "scale"
  | "layers"
  | "award"
  | "microscope"
  | "book-marked"
  | "file-text"
  | "globe"
  | "handshake";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Attribution for openly licensed images */
  credit?: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description?: string;
}

export interface ProfessorProfile {
  name: string;
  nameEn: string;
  honorific: string;
  title: string;
  titleEn: string;
  department: string;
  departmentEn: string;
  university: string;
  universityShort: string;
  universityEn: string;
  city: string;
  address: string[];
  postalCode: string;
  email: string;
  phone: string;
  phoneHref: string;
  officeHours: { days: string; time: string };
  shortBio: string;
  bio: string[];
  portrait?: ImageAsset;
  cvUrl: string;
  stats: Stat[];
  qualifications: TimelineItem[];
  experience: TimelineItem[];
  interests: string[];
  responsibilities: string[];
  awards: { year: string; title: string; body: string }[];
  memberships: { name: string; role: string }[];
  social: { facebook?: string; twitter?: string; linkedin?: string };
}

export interface ResearchArea {
  slug: string;
  title: string;
  titleEn: string;
  icon: IconName;
  summary: string;
  description: string;
  keywords: string[];
}

export interface ResearchProject {
  title: string;
  funder: string;
  period: string;
  status: "ongoing" | "completed";
  role: string;
  summary: string;
}

export interface ConferencePresentation {
  title: string;
  event: string;
  place: string;
  year: number;
  type: "keynote" | "paper" | "invited";
}

export interface SupervisionRecord {
  degree: "Ph.D." | "M.Phil." | "M.A. Dissertation";
  topic: string;
  year: string;
  status: "awarded" | "ongoing" | "submitted";
}

export interface Collaboration {
  institution: string;
  nature: string;
  place: string;
}

export type PublicationCategory =
  | "book"
  | "research-paper"
  | "journal-article"
  | "conference-paper"
  | "other";

export interface Publication {
  slug: string;
  title: string;
  titleEn?: string;
  category: PublicationCategory;
  year: number;
  /** Publisher for books, journal / proceedings name otherwise */
  venue: string;
  description: string;
  keywords: string[];
  isbn?: string;
  pages?: string;
  coAuthors?: string[];
  /** Optional real cover; otherwise a typographic cover is generated */
  cover?: ImageAsset;
  coverTone?: "navy" | "maroon" | "forest" | "ink" | "sand";
  featured?: boolean;
}

export interface Course {
  slug: string;
  level: "ug" | "pg" | "research";
  title: string;
  titleEn: string;
  icon: IconName;
  description: string;
  topics: string[];
}

export interface TeachingLevel {
  level: Course["level"];
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
}

export interface GuidanceArea {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  points: string[];
  image: ImageAsset;
}

export type BlogCategory = "publication" | "lecture" | "research" | "essay" | "event";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO date string */
  date: string;
  author: string;
  image: ImageAsset;
  tags: string[];
  featured?: boolean;
  content: BlogBlock[];
}

export interface AcademicEvent {
  slug: string;
  title: string;
  date: string;
  place: string;
  kind: string;
}

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

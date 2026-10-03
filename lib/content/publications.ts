import type { ImageAsset, Publication, PublicationCategory } from "../types";

/**
 * Prof. Bharat Mehta's published books, grouped exactly as in his own list
 * ("ભરત મહેતાના પ્રકાશિત પુસ્તકો"). Covers are photographs of the books.
 * Publication years are not yet available — add `year` per book when known.
 */

export const publicationCategoryLabels: Record<PublicationCategory, { gu: string; en: string }> = {
  criticism: { gu: "વિવેચન", en: "Criticism" },
  research: { gu: "સંશોધન", en: "Research" },
  edited: { gu: "સંપાદન", en: "Edited Volumes" },
  "study-series": { gu: "સર્જન સ્વાધ્યાય-શ્રેણી", en: "Author Study Series" },
  "film-series": { gu: "ફિલ્મ-આસ્વાદ શ્રેણી", en: "Film Appreciation Series" },
};

/** Tabs used in the homepage publications section */
export const publicationTabs: { id: string; label: string; categories: PublicationCategory[] | "all" }[] = [
  { id: "all", label: "બધા", categories: "all" },
  { id: "criticism", label: "વિવેચન", categories: ["criticism"] },
  { id: "research", label: "સંશોધન", categories: ["research"] },
  { id: "edited", label: "સંપાદન", categories: ["edited"] },
  { id: "series", label: "સ્વાધ્યાય અને ફિલ્મ શ્રેણી", categories: ["study-series", "film-series"] },
];

const parshva = "પાર્શ્વ પબ્લિકેશન, અમદાવાદ";

function cover(slug: string, title: string): ImageAsset {
  return {
    src: `/images/books/${slug}.webp`,
    alt: `‘${title}’ પુસ્તકનું મુખપૃષ્ઠ — ભરત મહેતા (Book cover)`,
    width: 480,
    height: 720,
  };
}

type BookInput = Omit<Publication, "cover" | "keywords" | "description"> & {
  description?: string;
  keywords?: string[];
  hasCover?: boolean;
};

function book({ hasCover = true, description, keywords, ...b }: BookInput): Publication {
  const label = publicationCategoryLabels[b.category].gu;
  return {
    ...b,
    description:
      description ??
      (b.role === "editor"
        ? `${b.byline ? `${b.byline} ` : ""}‘${b.title}’ — ભરત મહેતા દ્વારા સંપાદિત (${label}).`
        : `ભરત મહેતાનો ${label} ગ્રંથ.`),
    keywords: [label, ...(keywords ?? [])],
    ...(hasCover ? { cover: cover(b.slug, b.title) } : {}),
  };
}

export const publications: Publication[] = [
  /* ---------------- વિવેચન (Criticism) ---------------- */
  book({
    slug: "pratibaddh",
    title: "પ્રતિબદ્ધ",
    titleEn: "Pratibaddh",
    category: "criticism",
    role: "author",
    award: "ગુજરાત સાહિત્ય અકાદમી વિવેચન પુરસ્કાર (2006)",
    featured: true,
  }),
  book({ slug: "kathamanthan", title: "કથામંથન", titleEn: "Kathamanthan", category: "criticism", role: "author", keywords: ["કથાસાહિત્ય"] }),
  book({ slug: "natyanandi", title: "નાટ્યનાન્દી", titleEn: "Natyanandi", category: "criticism", role: "author", keywords: ["નાટક"] }),
  book({ slug: "sandarbh-sanket", title: "સંદર્ભ સંકેત", titleEn: "Sandarbh Sanket", category: "criticism", role: "author" }),
  book({ slug: "vivechanpurvak", title: "વિવેચનપૂર્વક", titleEn: "Vivechanpurvak", category: "criticism", role: "author" }),
  book({ slug: "bharat-vakya", title: "ભરત વાક્ય", titleEn: "Bharat Vakya", category: "criticism", role: "author" }),
  book({ slug: "rekhankit", title: "રેખાંકિત", titleEn: "Rekhankit", category: "criticism", role: "author" }),
  book({
    slug: "bharatiya-navalkatha",
    title: "ભારતીય નવલકથા",
    titleEn: "Bharatiya Navalkatha",
    category: "criticism",
    role: "author",
    keywords: ["નવલકથા"],
    featured: true,
  }),
  book({
    slug: "meghani-sahityani-bhumika",
    title: "મેઘાણી સાહિત્યની ભૂમિકા",
    titleEn: "Meghani Sahityani Bhumika",
    category: "criticism",
    role: "author",
    keywords: ["ઝવેરચંદ મેઘાણી"],
  }),
  book({
    slug: "samkalin-gujarati-navalkatha",
    title: "સમકાલીન ગુજરાતી નવલકથા",
    titleEn: "Samkalin Gujarati Navalkatha",
    category: "criticism",
    role: "author",
    keywords: ["નવલકથા"],
    featured: true,
  }),
  book({
    slug: "samkalin-gujarati-navlika",
    title: "સમકાલીન ગુજરાતી નવલિકા",
    titleEn: "Samkalin Gujarati Navlika",
    category: "criticism",
    role: "author",
    keywords: ["નવલિકા", "ટૂંકી વાર્તા"],
  }),
  book({ slug: "sangnasanyog", title: "સંજ્ઞાસંયોગ", titleEn: "Sangnasanyog", category: "criticism", role: "author", publisher: parshva }),
  book({
    slug: "krutisamipe-sarjaksamipe",
    title: "કૃતિસમીપે, સર્જકસમીપે",
    titleEn: "Krutisamipe, Sarjaksamipe",
    category: "criticism",
    role: "author",
    publisher: parshva,
    featured: true,
  }),

  /* ---------------- સંશોધન (Research) ---------------- */
  book({
    slug: "jayant-gaditnu-kathasahitya",
    title: "જયંત ગાડીતનું કથાસાહિત્ય",
    titleEn: "Jayant Gaditnu Kathasahitya",
    category: "research",
    role: "author",
    keywords: ["જયંત ગાડીત", "કથાસાહિત્ય"],
  }),
  book({
    slug: "char-navalkathakaro",
    title: "ચાર નવલકથાકારો",
    titleEn: "Char Navalkathakaro",
    category: "research",
    role: "author",
    keywords: ["નવલકથા"],
    featured: true,
  }),
  book({
    slug: "kalakarno-itihasbodh",
    title: "કલાકારનો ઇતિહાસબોધ",
    titleEn: "Kalakarno Itihasbodh",
    category: "research",
    role: "author",
    award: "ગુજરાત સાહિત્ય અકાદમી વિવેચન પુરસ્કાર (2007)",
    keywords: ["ઇતિહાસબોધ"],
    featured: true,
  }),
  book({
    slug: "arnoldno-kavyavichar",
    title: "આર્નોલ્ડનો કાવ્યવિચાર",
    titleEn: "Arnoldno Kavyavichar",
    category: "research",
    role: "author",
    keywords: ["મેથ્યુ આર્નોલ્ડ", "કાવ્યશાસ્ત્ર"],
  }),

  /* ---------------- સંપાદન (Edited) ---------------- */
  book({ slug: "gyanpith-puraskrut-navalkatha", title: "જ્ઞાનપીઠ પુરસ્કૃત નવલકથા", category: "edited", role: "editor", keywords: ["નવલકથા"] }),
  book({ slug: "mari-hakikat", title: "મારી હકીકત", byline: "કવિ નર્મદકૃત", category: "edited", role: "editor", keywords: ["નર્મદ", "આત્મકથા"] }),
  book({ slug: "sannidhan", title: "સન્નિધાન (૧ થી ૩)", category: "edited", role: "editor", hasCover: false }),
  book({ slug: "vivechanna-vividh-abhigamo", title: "વિવેચનના વિવિધ અભિગમો", category: "edited", role: "editor", keywords: ["વિવેચન સિદ્ધાંત"] }),
  book({
    slug: "tagorni-shreshth-vartao",
    title: "રવીન્દ્રનાથ ટાગોરની શ્રેષ્ઠ વાર્તાઓ",
    byline: "અનુવાદ: રમણલાલ સોની",
    category: "edited",
    role: "editor",
    keywords: ["ટાગોર", "વાર્તા"],
  }),
  book({ slug: "himanshi-shelatno-vartalok", title: "હિમાંશી શેલતનો વાર્તાલોક", category: "edited", role: "editor", keywords: ["હિમાંશી શેલત", "વાર્તા"] }),
  book({
    slug: "mohan-parmar-adhyayan-granth-1",
    title: "મોહન પરમાર અધ્યયન ગ્રંથ-૧ (નવલિકા)",
    category: "edited",
    role: "editor",
    keywords: ["મોહન પરમાર", "નવલિકા"],
  }),
  book({ slug: "kafka-ane-metamorphosis", title: "કાફકા અને મેટામોર્ફોસીસ", category: "edited", role: "editor", publisher: parshva, keywords: ["કાફકા"] }),

  /* ---------------- સર્જન સ્વાધ્યાય-શ્રેણી ---------------- */
  book({ slug: "tagorni-vartakala", title: "ટાગોરની વાર્તાકલા", category: "study-series", role: "editor", publisher: parshva, keywords: ["ટાગોર"] }),
  book({ slug: "mantoni-vartakala", title: "મંટોની વાર્તાકલા", category: "study-series", role: "editor", publisher: parshva, keywords: ["મંટો"] }),
  book({ slug: "valamana", title: "વળામણાં", byline: "પન્નાલાલ પટેલકૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "satyana-prayogo", title: "સત્યના પ્રયોગો", byline: "ગાંધીજીકૃત", category: "study-series", role: "editor", hasCover: false }),
  book({ slug: "tamas", title: "તમસ", byline: "ભીષ્મ સાહનીકૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "gora", title: "ગોરા", byline: "રવીન્દ્રનાથ ટાગોરકૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "badalati-kshitij", title: "બદલાતી ક્ષિતિજ", byline: "જયંત ગાડીત કૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "sharvilak", title: "શર્વિલક", byline: "રસિકલાલ પરીખ", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "iliad", title: "ઈલિયડ", byline: "હોમર", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "siddharth", title: "સિદ્ધાર્થ", byline: "હરમાન હેસકૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "sanskar", title: "સંસ્કાર", byline: "યુ. આર. અનંતમૂર્તિ કૃત", category: "study-series", role: "editor", publisher: parshva }),
  book({ slug: "the-waste-land", title: "ધ વેસ્ટલેન્ડ (મરુભૂમિ)", byline: "ટી. એસ. એલિયટ કૃત", category: "study-series", role: "editor", publisher: parshva }),

  /* ---------------- ફિલ્મ-આસ્વાદ શ્રેણી ---------------- */
  book({ slug: "mirch-masala", title: "મિર્ચ મસાલા", category: "film-series", role: "editor", keywords: ["ફિલ્મ"] }),
  book({ slug: "charulata", title: "ચારુલતા", byline: "રવીન્દ્રનાથ ટાગોરની વાર્તા પર આધારિત સત્યજિત રાયની ફિલ્મ", category: "film-series", role: "editor", keywords: ["ફિલ્મ", "સત્યજિત રાય"] }),
];

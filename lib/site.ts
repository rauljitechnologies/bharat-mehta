import type { NavItem } from "./types";

/**
 * Global site settings. Set NEXT_PUBLIC_SITE_URL in production so canonical URLs,
 * Open Graph tags and the sitemap point at the real domain.
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  name: "ડૉ. ભરત મહેતા",
  nameEn: "Dr. Bharat Mehta",
  titleSuffix: "ડૉ. ભરત મહેતા | Gujarati Professor, M.S. University of Baroda",
  description:
    "ડૉ. ભરત મહેતા — પ્રોફેસર, ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા. ગુજરાતી સાહિત્ય, લોકસાહિત્ય, ભાષાવિજ્ઞાન અને આધુનિક ગુજરાતી સાહિત્યમાં અધ્યાપન, સંશોધન અને પ્રકાશનો.",
  descriptionEn:
    "Official academic website of Dr. Bharat Mehta, Professor of Gujarati at The Maharaja Sayajirao University of Baroda, Vadodara — teaching, Gujarati literature research, publications and student guidance.",
  keywords: [
    "Dr. Bharat Mehta",
    "ડૉ. ભરત મહેતા",
    "Gujarati Professor",
    "Gujarati Literature",
    "Gujarati Research",
    "Gujarati Language",
    "M.S. University Gujarati Department",
    "Gujarati Literature Research",
    "Gujarati Academic Research",
    "Gujarati Professor Vadodara",
    "ગુજરાતી સાહિત્ય",
    "ગુજરાતી સંશોધન",
  ],
  locale: "gu_IN",
  ogImage: "/og-image.jpg",
  university: {
    name: "The Maharaja Sayajirao University of Baroda",
    url: "https://www.msubaroda.ac.in",
    departmentName: "Department of Gujarati, Faculty of Arts",
  },
  mapQuery: "Faculty of Arts, The Maharaja Sayajirao University of Baroda, Vadodara",
} as const;

export const mainNav: NavItem[] = [
  { label: "મુખ્યપૃષ્ઠ", labelEn: "Home", href: "/" },
  { label: "વિશે", labelEn: "About", href: "/about" },
  { label: "અધ્યાપન", labelEn: "Teaching", href: "/teaching" },
  { label: "સંશોધન", labelEn: "Research", href: "/research" },
  { label: "પ્રકાશનો", labelEn: "Publications", href: "/publications" },
  { label: "વિદ્યાર્થી માર્ગદર્શન", labelEn: "Student Guidance", href: "/student-guidance" },
  { label: "સંપર્ક", labelEn: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  ...mainNav.slice(1, 6),
  { label: "લેખો અને અપડેટ્સ", labelEn: "Blog", href: "/blog" },
  mainNav[6],
];

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

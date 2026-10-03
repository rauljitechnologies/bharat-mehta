import type {
  AcademicEvent,
  Collaboration,
  ConferencePresentation,
  ResearchArea,
  ResearchProject,
  SupervisionRecord,
} from "../types";

/** Projects, fellowships, supervision and roles: from Prof. Mehta's 2026 promotion presentation. */

export const researchOverview = [
  "મારું સંશોધન ગુજરાતી કથાસાહિત્ય — નવલકથા અને નવલિકા —ના વિવેચનથી લઈને ભારતીય તથા વિશ્વ સાહિત્યના તુલનાત્મક અધ્યયન સુધી વિસ્તરેલું છે. સાહિત્ય સમાજની ચેતના કેવી રીતે ઘડે છે અને સમાજ સાહિત્યને કેવી રીતે ઘડે છે — એ મારા અભ્યાસનો કેન્દ્રીય પ્રશ્ન છે.",
  "‘કલાકારનો ઇતિહાસબોધ’, ‘ચાર નવલકથાકારો’ અને ‘આર્નોલ્ડનો કાવ્યવિચાર’ જેવા સંશોધન ગ્રંથો ઉપરાંત IIAS શિમલા, સાહિત્ય અકાદમી, સંસ્કૃતિ વિભાગ (ભારત સરકાર) અને UGCની ફેલોશિપ તથા સંશોધન પ્રોજેક્ટ દ્વારા આ કાર્ય આગળ વધ્યું છે.",
];

export const researchAreas: ResearchArea[] = [
  {
    slug: "gujarati-literature",
    title: "ગુજરાતી સાહિત્ય",
    titleEn: "Gujarati Literature",
    icon: "book-open",
    summary: "મધ્યકાલીનથી અર્વાચીન ગુજરાતી સાહિત્યની પરંપરા, સ્વરૂપો અને વિકાસનો અભ્યાસ.",
    description:
      "નરસિંહ મહેતાથી લઈને સમકાલીન સર્જકો સુધી ગુજરાતી સાહિત્યના ઇતિહાસ, સ્વરૂપવિકાસ અને યુગચેતનાનું અધ્યયન.",
    keywords: ["સાહિત્ય ઇતિહાસ", "કાવ્ય", "નવલકથા", "નાટક"],
  },
  {
    slug: "folk-literature",
    title: "લોકસાહિત્ય",
    titleEn: "Folk Literature",
    icon: "scroll",
    summary: "લોકગીત, લોકકથા, ભવાઈ અને મૌખિક પરંપરાનું ક્ષેત્રકાર્ય આધારિત સંશોધન.",
    description:
      "ગુજરાતના વિવિધ પ્રદેશોમાં ક્ષેત્રકાર્ય દ્વારા લોકગીતો, લોકકથાઓ અને ભવાઈ જેવી પ્રદર્શનકળાઓનું દસ્તાવેજીકરણ અને વિશ્લેષણ.",
    keywords: ["લોકગીત", "ભવાઈ", "મૌખિક પરંપરા", "ક્ષેત્રકાર્ય"],
  },
  {
    slug: "gujarati-linguistics",
    title: "ગુજરાતી ભાષાવિજ્ઞાન",
    titleEn: "Gujarati Linguistics",
    icon: "languages",
    summary: "ગુજરાતી ભાષાની સંરચના, બોલીઓ અને સમાજભાષાવિજ્ઞાનનો અભ્યાસ.",
    description:
      "ગુજરાતી ભાષાની ધ્વનિવ્યવસ્થા, વ્યાકરણ, બોલીવૈવિધ્ય અને સમાજભાષાવૈજ્ઞાનિક પરિવર્તનોનું અધ્યયન.",
    keywords: ["બોલીઅભ્યાસ", "વ્યાકરણ", "સમાજભાષાવિજ્ઞાન"],
  },
  {
    slug: "modern-gujarati-literature",
    title: "આધુનિક ગુજરાતી સાહિત્ય",
    titleEn: "Modern Gujarati Literature",
    icon: "feather",
    summary: "આધુનિકતાવાદ, અનુઆધુનિકતા અને સમકાલીન ગુજરાતી સર્જનના પ્રવાહો.",
    description:
      "સુરેશ જોષીથી શરૂ થયેલા આધુનિકતાવાદી વળાંક અને ત્યાર પછીના અનુઆધુનિક તથા સમકાલીન પ્રવાહોનું વિવેચનાત્મક અધ્યયન.",
    keywords: ["આધુનિકતાવાદ", "અનુઆધુનિકતા", "ટૂંકી વાર્તા"],
  },
  {
    slug: "cultural-studies",
    title: "સાંસ્કૃતિક અભ્યાસ",
    titleEn: "Cultural Studies",
    icon: "landmark",
    summary: "સાહિત્ય, સમાજ અને સંસ્કૃતિના પારસ્પરિક સંબંધોનો આંતરવિદ્યાકીય અભ્યાસ.",
    description:
      "ઓળખ, પ્રદેશ, લિંગ અને સમાજવ્યવસ્થાના પ્રશ્નોને સાહિત્યિક પાઠના માધ્યમથી તપાસતો આંતરવિદ્યાકીય અભિગમ.",
    keywords: ["ઓળખ", "પ્રદેશ", "સમાજ"],
  },
  {
    slug: "literary-criticism",
    title: "સાહિત્ય સમીક્ષા",
    titleEn: "Literary Criticism",
    icon: "pen-line",
    summary: "ભારતીય અને પાશ્ચાત્ય વિવેચન સિદ્ધાંતોના પ્રકાશમાં ગુજરાતી કૃતિઓની સમીક્ષા.",
    description:
      "રસ-ધ્વનિ જેવા ભારતીય કાવ્યશાસ્ત્રીય સિદ્ધાંતો અને સંરચનાવાદ, નારીવાદ જેવા પાશ્ચાત્ય અભિગમો દ્વારા કૃતિવિવેચન.",
    keywords: ["કાવ્યશાસ્ત્ર", "વિવેચન સિદ્ધાંત", "તુલનાત્મક સાહિત્ય"],
  },
];

export const researchProjects: ResearchProject[] = [
  { title: "ફેલોશિપ", funder: "ભારતીય ઉચ્ચ અધ્યયન સંસ્થાન (IIAS), શિમલા", period: "2005 – 2008", status: "completed", role: "ફેલો" },
  { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", funder: "UGC, નવી દિલ્હી", period: "2012 – 2014", status: "completed", role: "મુખ્ય સંશોધક" },
  { title: "ફેલોશિપ", funder: "સાહિત્ય અકાદમી, નવી દિલ્હી", period: "2003 – 2005", status: "completed", role: "ફેલો" },
  { title: "ફેલોશિપ", funder: "સંસ્કૃતિ વિભાગ, ભારત સરકાર, નવી દિલ્હી", period: "2000 – 2002", status: "completed", role: "ફેલો" },
  { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", funder: "M.S. યુનિવર્સિટી ઑફ બરોડા", period: "2001 – 2002", status: "completed", role: "મુખ્ય સંશોધક" },
  { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", funder: "M.S. યુનિવર્સિટી ઑફ બરોડા", period: "2000 – 2001", status: "completed", role: "મુખ્ય સંશોધક" },
];

// TODO: add individual seminar / conference papers when available
export const conferencePresentations: ConferencePresentation[] = [];

export const seminarNote =
  "ગુજરાતી સાહિત્ય પરિષદ, ગુજરાતી સાહિત્ય અધ્યાપક સંઘ અને ‘અક્ષરા’ જેવી સંસ્થાઓના અગ્રણી સભ્ય તરીકે અનેક પરિસંવાદો અને પરિષદોનું સંકલન કર્યું છે.";

// TODO: add thesis topics of supervised scholars when available
export const supervision: SupervisionRecord[] = [];

export const supervisionStats = [
  { value: "9", label: "કુલ Ph.D. સંશોધકો" },
  { value: "6", label: "Ph.D. પૂર્ણ" },
  { value: "3", label: "હાલ ચાલુ" },
];

export const collaborations: Collaboration[] = [
  {
    institution: "ગુજરાતી સાહિત્ય પરિષદ",
    nature: "મંત્રી (2014 – 2026) · સાહિત્યિક સામયિક ‘પરબ’નું સંપાદન",
    place: "અમદાવાદ",
  },
  {
    institution: "અક્ષરા",
    nature: "પ્રમુખ (2010 – 2026) · ગુજરાતી વિભાગ સાથે ઇન્ટર્નશિપ",
    place: "વડોદરા",
  },
  {
    institution: "સાહિત્ય અકાદમી",
    nature: "પુરસ્કાર પસંદગી સમિતિના સભ્ય (2008, 2012) · ફેલોશિપ",
    place: "નવી દિલ્હી",
  },
  {
    institution: "ભારતીય ઉચ્ચ અધ્યયન સંસ્થાન (IIAS)",
    nature: "ફેલોશિપ (2005 – 2008)",
    place: "શિમલા",
  },
];

// Upcoming academic events — add entries here (or from the CMS) to show them on /blog
export const events: AcademicEvent[] = [];

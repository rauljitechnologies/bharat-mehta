import type {
  AcademicEvent,
  Collaboration,
  ConferencePresentation,
  ResearchArea,
  ResearchProject,
  SupervisionRecord,
} from "../types";

/** PLACEHOLDER research content — replace with verified records / CMS data. */

export const researchOverview = [
  "મારું સંશોધન ગુજરાતી સાહિત્યને તેના સામાજિક, સાંસ્કૃતિક અને ભાષાકીય સંદર્ભમાં સમજવાનો પ્રયાસ છે. મધ્યકાલીન કવિતાથી લઈને અનુઆધુનિક નવલકથા સુધી, સાહિત્ય સમાજની ચેતના કેવી રીતે ઘડે છે અને સમાજ સાહિત્યને કેવી રીતે ઘડે છે — એ મારા અભ્યાસનો કેન્દ્રીય પ્રશ્ન છે.",
  "લોકસાહિત્ય અને મૌખિક પરંપરાના ક્ષેત્રકાર્ય, ભાષાવિજ્ઞાનીય વિશ્લેષણ અને આધુનિક વિવેચન સિદ્ધાંતોને જોડીને હું આંતરવિદ્યાકીય સંશોધન પદ્ધતિ અપનાવું છું.",
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
  {
    title: "મધ્ય ગુજરાતનાં લોકગીતોનું દસ્તાવેજીકરણ અને ડિજિટલ સંગ્રહ",
    funder: "UGC મુખ્ય સંશોધન પ્રોજેક્ટ (ઉદાહરણ)",
    period: "ચાલુ",
    status: "ongoing",
    role: "મુખ્ય સંશોધક",
    summary:
      "ખેડા, પંચમહાલ અને વડોદરા જિલ્લાનાં લગ્નગીતો, ઋતુગીતો અને શ્રમગીતોનું ધ્વનિમુદ્રણ, લિપ્યંતર અને ટીકા સાથેનું સંપાદન.",
  },
  {
    title: "અનુઆધુનિક ગુજરાતી નવલકથામાં નગરચેતના",
    funder: "યુનિવર્સિટી સંશોધન અનુદાન (ઉદાહરણ)",
    period: "પૂર્ણ",
    status: "completed",
    role: "મુખ્ય સંશોધક",
    summary:
      "૧૯૮૦ પછીની ગુજરાતી નવલકથામાં શહેરીકરણ, સ્થળાંતર અને ઓળખના પ્રશ્નોનું વિવેચનાત્મક વિશ્લેષણ.",
  },
  {
    title: "ગુજરાતી બોલીઓનો સમાજભાષાવૈજ્ઞાનિક નકશો",
    funder: "આંતર-યુનિવર્સિટી સહયોગ (ઉદાહરણ)",
    period: "ચાલુ",
    status: "ongoing",
    role: "સહ-સંશોધક",
    summary: "ચરોતરી, સુરતી અને કાઠિયાવાડી બોલીઓમાં શબ્દભંડોળ અને ઉચ્ચારપરિવર્તનનો તુલનાત્મક અભ્યાસ.",
  },
];

export const conferencePresentations: ConferencePresentation[] = [
  {
    title: "લોકગીતોમાં સ્ત્રીસ્વર: પરંપરા અને પ્રતિકાર",
    event: "રાષ્ટ્રીય પરિસંવાદ — ભારતીય લોકસાહિત્ય",
    place: "અમદાવાદ",
    year: 2024,
    type: "keynote",
  },
  {
    title: "આધુનિક ગુજરાતી કવિતામાં નગરબોધ",
    event: "ગુજરાતી સાહિત્ય પરિષદ અધિવેશન",
    place: "સુરત",
    year: 2023,
    type: "paper",
  },
  {
    title: "Oral Narratives of Central Gujarat: Method and Archive",
    event: "International Conference on South Asian Folklore",
    place: "New Delhi",
    year: 2022,
    type: "invited",
  },
  {
    title: "ગુજરાતી ભાષાશિક્ષણમાં ડિજિટલ સાધનો",
    event: "UGC પ્રાયોજિત કાર્યશાળા",
    place: "વડોદરા",
    year: 2021,
    type: "paper",
  },
];

export const supervision: SupervisionRecord[] = [
  { degree: "Ph.D.", topic: "ગુજરાતી દલિત ટૂંકી વાર્તામાં પ્રતિરોધની ચેતના", year: "ચાલુ", status: "ongoing" },
  { degree: "Ph.D.", topic: "પંચમહાલના આદિવાસી લોકગીતો: સ્વરૂપ અને સંદર્ભ", year: "ચાલુ", status: "ongoing" },
  { degree: "Ph.D.", topic: "અનુઆધુનિક ગુજરાતી કવિતામાં ભાષાપ્રયોગ", year: "એનાયત", status: "awarded" },
  { degree: "Ph.D.", topic: "ગુજરાતી નાટકમાં મિથનું પુનઃસર્જન", year: "એનાયત", status: "awarded" },
  { degree: "M.Phil.", topic: "ભવાઈના વેશોમાં સામાજિક વ્યંગ", year: "એનાયત", status: "awarded" },
  { degree: "M.A. Dissertation", topic: "ચરોતરી બોલીનો શબ્દકોશીય અભ્યાસ", year: "સબમિટ", status: "submitted" },
];

export const supervisionStats = [
  { value: "12+", label: "Ph.D. માર્ગદર્શન (ઉદાહરણ)" },
  { value: "6", label: "હાલના સંશોધકો (ઉદાહરણ)" },
  { value: "25+", label: "M.Phil./ડિઝર્ટેશન (ઉદાહરણ)" },
];

export const collaborations: Collaboration[] = [
  {
    institution: "ગુજરાત યુનિવર્સિટી, ભાષાસાહિત્ય ભવન",
    nature: "સંયુક્ત પરિસંવાદો અને સંશોધન વિનિમય",
    place: "અમદાવાદ",
  },
  {
    institution: "ભાષા સંશોધન અને પ્રકાશન કેન્દ્ર",
    nature: "આદિવાસી બોલીઓ અને મૌખિક પરંપરાનું દસ્તાવેજીકરણ",
    place: "વડોદરા",
  },
  {
    institution: "સાહિત્ય અકાદમી",
    nature: "અનુવાદ કાર્યશાળા અને વ્યાખ્યાનો",
    place: "નવી દિલ્હી",
  },
];

export const events: AcademicEvent[] = [
  {
    slug: "folk-literature-workshop-2026",
    title: "લોકસાહિત્ય ક્ષેત્રકાર્ય કાર્યશાળા",
    date: "2026-11-14",
    place: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી",
    kind: "કાર્યશાળા",
  },
  {
    slug: "research-methodology-series-2026",
    title: "સંશોધન પદ્ધતિ વ્યાખ્યાનમાળા — Ph.D. સંશોધકો માટે",
    date: "2026-12-05",
    place: "કલા વિદ્યાશાખા, વડોદરા",
    kind: "વ્યાખ્યાનમાળા",
  },
  {
    slug: "national-seminar-2027",
    title: "રાષ્ટ્રીય પરિસંવાદ: એકવીસમી સદીનું ગુજરાતી સાહિત્ય",
    date: "2027-01-22",
    place: "M.S. યુનિવર્સિટી, વડોદરા",
    kind: "પરિસંવાદ",
  },
];

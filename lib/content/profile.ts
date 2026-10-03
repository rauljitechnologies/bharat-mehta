import type { ProfessorProfile } from "../types";

/**
 * PLACEHOLDER PROFILE — degrees, years, awards and memberships below are
 * illustrative and must be replaced with Dr. Mehta's verified details
 * (or loaded from the CMS) before launch.
 */
export const profile: ProfessorProfile = {
  name: "ડૉ. ભરત મહેતા",
  nameEn: "Dr. Bharat Mehta",
  honorific: "ડૉ.",
  title: "પ્રોફેસર",
  titleEn: "Professor",
  department: "ગુજરાતી વિભાગ",
  departmentEn: "Department of Gujarati",
  university: "M.S. યુનિવર્સિટી, વડોદરા",
  universityShort: "M.S. યુનિવર્સિટી",
  universityEn: "The Maharaja Sayajirao University of Baroda",
  city: "વડોદરા",
  address: ["ગુજરાતી વિભાગ, કલા વિદ્યાશાખા", "M.S. યુનિવર્સિટી", "વડોદરા – 390002, ગુજરાત"],
  postalCode: "390002",
  email: "bharat.mehta@msubaroda.ac.in",
  phone: "+91 XXXXX XXXXX",
  phoneHref: "tel:+91XXXXXXXXXX",
  officeHours: { days: "સોમવાર – શુક્રવાર", time: "10:00 AM – 5:00 PM" },
  shortBio:
    "ગુજરાતી ભાષા અને સાહિત્યના અભ્યાસ, અધ્યાપન અને સંશોધન દ્વારા સમાજ અને સંસ્કૃતિના સમૃદ્ધિકરણ માટે સમર્પિત.",
  bio: [
    "હું ડૉ. ભરત મહેતા, ગુજરાતી વિભાગમાં પ્રોફેસર તરીકે M.S. યુનિવર્સિટી, વડોદરા ખાતે શૈક્ષણિક સેવા આપી રહ્યો છું.",
    "મારો મુખ્ય અભ્યાસ ક્ષેત્ર ગુજરાતી સાહિત્ય, લોકસાહિત્ય, ભાષાવિજ્ઞાન અને આધુનિક ગુજરાતી સાહિત્ય છે.",
    "અધ્યાપન, સંશોધન અને વિદ્યાર્થીઓના સર્વાંગી વિકાસ માટે હું સતત કાર્યરત છું.",
  ],
  cvUrl: "/cv/bharat-mehta-cv.pdf",
  stats: [
    { value: "M.S. યુનિવર્સિટી", label: "વડોદરા", icon: "landmark" },
    { value: "Ph.D. (ગુજરાતી)", label: "M.S. યુનિવર્સિટી", icon: "graduation-cap" },
    { value: "20+ વર્ષ", label: "અધ્યાપન અનુભવ", icon: "presentation" },
    { value: "સંશોધન માર્ગદર્શન", label: "અને વિદ્યાર્થી માર્ગદર્શન", icon: "users" },
  ],
  qualifications: [
    {
      period: "Ph.D.",
      title: "ડૉક્ટર ઑફ ફિલોસોફી (ગુજરાતી)",
      institution: "M.S. યુનિવર્સિટી, વડોદરા",
      description: "શોધનિબંધ: અનુઆધુનિક ગુજરાતી નવલકથામાં સામાજિક ચેતના — એક વિવેચનાત્મક અધ્યયન",
    },
    {
      period: "M.A.",
      title: "અનુસ્નાતક — ગુજરાતી સાહિત્ય",
      institution: "M.S. યુનિવર્સિટી, વડોદરા",
      description: "પ્રથમ વર્ગ સાથે; મધ્યકાલીન અને અર્વાચીન સાહિત્ય વિશેષ અભ્યાસ",
    },
    {
      period: "UGC-NET",
      title: "રાષ્ટ્રીય પાત્રતા કસોટી — ગુજરાતી",
      institution: "યુનિવર્સિટી ગ્રાન્ટ્સ કમિશન",
    },
    {
      period: "B.A.",
      title: "સ્નાતક — ગુજરાતી (મુખ્ય વિષય)",
      institution: "M.S. યુનિવર્સિટી, વડોદરા",
    },
  ],
  experience: [
    {
      period: "વર્તમાન",
      title: "પ્રોફેસર",
      institution: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા",
      description: "અનુસ્નાતક અધ્યાપન, Ph.D. માર્ગદર્શન અને વિભાગીય શૈક્ષણિક આયોજન",
    },
    {
      period: "અગાઉ",
      title: "સહ-પ્રાધ્યાપક (Associate Professor)",
      institution: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા",
      description: "સાહિત્ય વિવેચન, લોકસાહિત્ય અને સંશોધન પદ્ધતિના અભ્યાસક્રમો",
    },
    {
      period: "શરૂઆત",
      title: "મદદનીશ પ્રાધ્યાપક (Assistant Professor)",
      institution: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા",
      description: "સ્નાતક અને અનુસ્નાતક વર્ગોમાં ગુજરાતી ભાષા-સાહિત્યનું અધ્યાપન",
    },
  ],
  interests: [
    "આધુનિક અને અનુઆધુનિક ગુજરાતી સાહિત્ય",
    "ગુજરાતી લોકસાહિત્ય અને મૌખિક પરંપરા",
    "ગુજરાતી ભાષાવિજ્ઞાન અને બોલીઅભ્યાસ",
    "સાહિત્ય વિવેચન અને સિદ્ધાંત",
    "તુલનાત્મક અને સાંસ્કૃતિક અભ્યાસ",
    "દલિત અને પ્રાદેશિક સાહિત્ય",
  ],
  responsibilities: [
    "અભ્યાસ સમિતિ (Board of Studies) — ગુજરાતી, સભ્ય",
    "Ph.D. સંશોધન સલાહકાર સમિતિ, સભ્ય",
    "વિભાગીય સેમિનાર અને વ્યાખ્યાનમાળાનું સંકલન",
    "અભ્યાસક્રમ સુધારણા અને NEP 2020 અમલીકરણ સમિતિ",
    "યુનિવર્સિટી પરીક્ષા અને મૂલ્યાંકન કાર્ય",
  ],
  awards: [
    { year: "—", title: "શ્રેષ્ઠ વિવેચન ગ્રંથ પુરસ્કાર", body: "ગુજરાતી સાહિત્ય પરિષદ (ઉદાહરણ)" },
    { year: "—", title: "ઉત્કૃષ્ટ શિક્ષક સન્માન", body: "M.S. યુનિવર્સિટી, વડોદરા (ઉદાહરણ)" },
    { year: "—", title: "શ્રેષ્ઠ સંશોધન લેખ", body: "રાષ્ટ્રીય પરિસંવાદ (ઉદાહરણ)" },
  ],
  memberships: [
    { name: "ગુજરાતી સાહિત્ય પરિષદ", role: "આજીવન સભ્ય" },
    { name: "ગુજરાતી અધ્યાપક સંઘ", role: "આજીવન સભ્ય" },
    { name: "ભાષાવિજ્ઞાન પરિષદ (Linguistic Society)", role: "સભ્ય" },
    { name: "લોકસાહિત્ય અભ્યાસ મંડળ", role: "સભ્ય" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

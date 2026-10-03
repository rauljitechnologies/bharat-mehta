import type { ProfessorProfile } from "../types";
import { images } from "./images";

/**
 * Career, awards, fellowships and roles come from Prof. Mehta's own promotion
 * presentation (2026). Items marked "TODO verify" still need his confirmation.
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
  bioExtended: [
    "1991માં મદદનીશ પ્રાધ્યાપક તરીકે ગુજરાતી વિભાગ, કલા વિદ્યાશાખા, M.S. યુનિવર્સિટી ઑફ બરોડામાં જોડાયા પછી 1998માં સહ-પ્રાધ્યાપક અને 2006થી પ્રોફેસર તરીકે કાર્યરત છું.",
    "વિવેચન, સંશોધન અને સંપાદન ક્ષેત્રે 40 પુસ્તકો પ્રકાશિત થયાં છે. ‘પ્રતિબદ્ધ’ અને ‘કલાકારનો ઇતિહાસબોધ’ને ગુજરાત સાહિત્ય અકાદમીના વિવેચન પુરસ્કાર મળ્યા છે.",
    "ગુજરાતી સાહિત્ય પરિષદના મંત્રી તરીકે અને પરિષદના સાહિત્યિક સામયિક ‘પરબ’ના સંપાદક તરીકે સેવા આપી છે. વડોદરાની સંસ્થા ‘અક્ષરા’ના પ્રમુખ તરીકે ગુજરાતી વિભાગ સાથે ઇન્ટર્નશિપની પહેલ કરી છે.",
  ],
  quote: {
    text: "I believe that true academic success is not measured only by publications and achievements, but the lives we influence. Blessed is he who found his job. I would like to say that in this sense I am blessed.",
    translation:
      "સાચી શૈક્ષણિક સફળતા માત્ર પ્રકાશનો અને સિદ્ધિઓથી નહીં, પરંતુ આપણે જે જીવનોને સ્પર્શીએ છીએ તેનાથી મપાય છે. જેને પોતાનું કાર્ય મળ્યું તે ધન્ય છે — એ અર્થમાં હું ધન્ય છું.",
  },
  portrait: images.portrait,
  cvUrl: "/cv/bharat-mehta-cv.pdf",
  stats: [
    { value: "M.S. યુનિવર્સિટી", label: "વડોદરા", icon: "landmark" },
    { value: "35 વર્ષ", label: "અધ્યાપન અનુભવ (1991થી)", icon: "presentation" },
    { value: "40 પુસ્તકો", label: "વિવેચન, સંશોધન અને સંપાદન", icon: "book-marked" },
    { value: "9 Ph.D. સંશોધકો", label: "6 પૂર્ણ · 3 ચાલુ", icon: "users" },
  ],
  // TODO verify: degree details were not in the source material
  qualifications: [
    {
      period: "Ph.D.",
      title: "ડૉક્ટર ઑફ ફિલોસોફી (ગુજરાતી)",
      institution: "M.S. યુનિવર્સિટી, વડોદરા",
    },
  ],
  experience: [
    {
      period: "2006 – વર્તમાન",
      title: "પ્રોફેસર (Academic Level 14)",
      institution: "ગુજરાતી વિભાગ, કલા વિદ્યાશાખા, M.S. યુનિવર્સિટી, વડોદરા",
      description: "28 પુસ્તકો (8 સ્વતંત્ર, 20 સંપાદિત) · Ph.D. માર્ગદર્શન",
    },
    {
      period: "1998 – 2006",
      title: "સહ-પ્રાધ્યાપક (Associate Professor)",
      institution: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા",
      description: "6 પુસ્તકો (5 સ્વતંત્ર, 1 સંપાદિત)",
    },
    {
      period: "1991 – 1998",
      title: "મદદનીશ પ્રાધ્યાપક (Assistant Professor)",
      institution: "ગુજરાતી વિભાગ, M.S. યુનિવર્સિટી, વડોદરા",
      description: "6 પુસ્તકો (4 સ્વતંત્ર, 2 સંપાદિત)",
    },
  ],
  interests: [
    "ગુજરાતી નવલકથા અને નવલિકાનું વિવેચન",
    "ભારતીય અને વિશ્વ સાહિત્યનું તુલનાત્મક અધ્યયન",
    "સાહિત્ય સિદ્ધાંત અને કાવ્યવિચાર",
    "નાટ્યવિવેચન",
    "દલિત સાહિત્ય વિવેચન",
    "ફિલ્મ અને સાહિત્યનો આસ્વાદ",
  ],
  responsibilities: [
    "વૉર્ડન, હૉલ્સ ઑફ રેસિડન્સ, M.S. યુનિવર્સિટી",
    "સભ્ય, સયાજી સાહિત્યમાળા, M.S. યુનિવર્સિટી",
    "પ્રૂફ રીડર, પરીક્ષા વિભાગ, M.S. યુનિવર્સિટી",
    "B.A./M.A. પ્રવેશ અધિકારી, કલા વિદ્યાશાખા",
    "સભ્ય, D.R.C. અને F.R.C.",
    "સિનિયર સુપરવાઇઝર, વિદ્યાશાખા પરીક્ષાઓ",
    "સભ્ય, અભ્યાસ સમિતિ (Board of Studies)",
  ],
  awards: [
    { year: "2026", title: "જયંત ઊર્મિ પુરસ્કાર", body: "સાહિત્યિક કાર્ય માટે" },
    { year: "2017", title: "નર્મદ સાહિત્ય સભા પુરસ્કાર", body: "વિવેચન માટે" },
    { year: "2012", title: "હરિ ૐ આશ્રમ શ્રેષ્ઠ લેખ પુરસ્કાર", body: "સરદાર પટેલ યુનિવર્સિટી" },
    { year: "2011", title: "દલિત વિવેચન પુરસ્કાર", body: "ગુજરાત દલિત સાહિત્ય અકાદમી" },
    { year: "2009", title: "કમળાશંકર પંડ્યા પુરસ્કાર", body: "" },
    { year: "2008", title: "ઉપેન્દ્ર પંડ્યા પુરસ્કાર", body: "ગુજરાતી સાહિત્ય પરિષદ" },
    { year: "2007", title: "વિવેચન પુરસ્કાર — ‘ઇતિહાસબોધ’", body: "ગુજરાત સાહિત્ય અકાદમી" },
    { year: "2006", title: "વિવેચન પુરસ્કાર — ‘પ્રતિબદ્ધ’", body: "ગુજરાત સાહિત્ય અકાદમી" },
    { year: "2004", title: "રમણલાલ જોશી પુરસ્કાર", body: "ગુજરાતી સાહિત્ય પરિષદ" },
    { year: "1997", title: "પ્રમોદકુમાર પટેલ વિવેચક પુરસ્કાર", body: "સરદાર પટેલ યુનિવર્સિટી" },
  ],
  fellowships: [
    { title: "ફેલોશિપ", body: "ભારતીય ઉચ્ચ અધ્યયન સંસ્થાન (IIAS), શિમલા", period: "2005 – 2008" },
    { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", body: "UGC, નવી દિલ્હી", period: "2012 – 2014" },
    { title: "ફેલોશિપ", body: "સાહિત્ય અકાદમી, નવી દિલ્હી", period: "2003 – 2005" },
    { title: "ફેલોશિપ", body: "સંસ્કૃતિ વિભાગ, ભારત સરકાર, નવી દિલ્હી", period: "2000 – 2002" },
    { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", body: "M.S. યુનિવર્સિટી ઑફ બરોડા", period: "2001 – 2002" },
    { title: "માઇનર રિસર્ચ પ્રોજેક્ટ", body: "M.S. યુનિવર્સિટી ઑફ બરોડા", period: "2000 – 2001" },
    { title: "પ્રવાસ ફેલોશિપ (Travel Fellowship)", body: "સાહિત્ય અકાદમી, નવી દિલ્હી", period: "1999" },
  ],
  memberships: [
    { name: "ગુજરાતી સાહિત્ય પરિષદ", role: "મંત્રી · ‘પરબ’ના સંપાદક", period: "2014 – 2026" },
    { name: "અક્ષરા, વડોદરા", role: "પ્રમુખ", period: "2010 – 2026" },
    { name: "BUTA, વડોદરા", role: "ઉપપ્રમુખ", period: "2020 – 2025" },
    { name: "ગુજરાતી સાહિત્ય અધ્યાપક સંઘ", role: "પ્રમુખ", period: "2016 – 17" },
    { name: "સાહિત્ય અકાદમી, નવી દિલ્હી", role: "સભ્ય, પુરસ્કાર પસંદગી સમિતિ", period: "2008, 2012" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { ProfessorProfile } from "@/lib/types";
import { buttonClasses } from "../ui/Button";
import { ContactForm } from "../ui/ContactForm";
import { MapEmbed } from "../ui/MapEmbed";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactDetails({ profile }: { profile: ProfessorProfile }) {
  const rows = [
    {
      icon: MapPin,
      label: "સરનામું",
      content: (
        <address className="not-italic">
          {profile.name}
          <br />
          {profile.title}, {profile.department}
          <br />
          {profile.universityShort}, {profile.city} – {profile.postalCode}
        </address>
      ),
    },
    {
      icon: Phone,
      label: "ફોન",
      content: (
        <a href={profile.phoneHref} className="hover:text-gold-dark">
          {profile.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      label: "ઇમેઇલ",
      content: (
        <a href={`mailto:${profile.email}`} className="break-all hover:text-gold-dark">
          {profile.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: "કાર્યાલય સમય",
      content: (
        <>
          {profile.officeHours.days}
          <br />
          {profile.officeHours.time}
        </>
      ),
    },
  ];

  return (
    <div className="card p-6 sm:p-8">
      <dl className="space-y-6">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy text-gold-light">
              <row.icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <dt className="text-sm font-semibold text-gold-dark">{row.label}</dt>
              <dd className="mt-0.5 text-ink">{row.content}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={`mailto:${profile.email}`} className={buttonClasses("primary", "flex-1")}>
          <Mail className="size-4" aria-hidden="true" /> ઇમેઇલ કરો
        </a>
        <a href={profile.phoneHref} className={buttonClasses("outline", "flex-1")}>
          <Phone className="size-4" aria-hidden="true" /> ફોન કરો
        </a>
      </div>
    </div>
  );
}

export function ContactSection({ profile, headingLevel = "h2" }: { profile: ProfessorProfile; headingLevel?: "h1" | "h2" }) {
  return (
    <section aria-labelledby="contact-title" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          as={headingLevel}
          id="contact-title"
          eyebrow="Contact"
          title="સંપર્ક"
          description="સંશોધન માર્ગદર્શન, વ્યાખ્યાન આમંત્રણ કે શૈક્ષણિક સહયોગ માટે નિઃસંકોચ સંપર્ક કરો."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 [&>*]:min-w-0">
          <div className="flex flex-col gap-6 lg:col-span-5" data-reveal>
            <ContactDetails profile={profile} />
            <MapEmbed query={siteConfig.mapQuery} label="ગુજરાતી વિભાગ, કલા વિદ્યાશાખા, M.S. યુનિવર્સિટી, વડોદરા" />
          </div>
          <div className="lg:col-span-7" data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

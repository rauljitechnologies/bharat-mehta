import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { NavItem, ProfessorProfile } from "@/lib/types";
import { Emblem } from "../ui/Emblem";
import { SocialIcons } from "../ui/SocialIcons";

export function Footer({ profile, nav }: { profile: ProfessorProfile; nav: NavItem[] }) {
  return (
    <footer className="relative bg-navy-dark text-white">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-site grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <Emblem className="size-14" />
            <span className="font-serif text-xl font-bold">{profile.name}</span>
          </Link>
          <p className="mt-4 text-white/75">
            {profile.title}, {profile.department}
            <br />
            {profile.university}
          </p>
          <p className="mt-4 max-w-sm text-sm text-white/55">{profile.shortBio}</p>
          <SocialIcons social={profile.social} email={profile.email} className="mt-6" />
        </div>

        <nav aria-labelledby="footer-links" className="lg:col-span-3">
          <h2 id="footer-links" className="text-lg font-semibold text-gold-light">
            ઝડપી લિંક્સ
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-lg font-semibold text-gold-light">સંપર્ક</h2>
          <ul className="mt-4 space-y-3.5 text-white/75">
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={profile.phoneHref} className="hover:text-gold-light">
                {profile.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-gold-light">
                {profile.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic">{profile.address.join(", ")}</address>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {profile.officeHours.days}, {profile.officeHours.time}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dr. Bharat Mehta. All Rights Reserved.</p>
          <p>
            ફોટોગ્રાફ્સ ·{" "}
            <Link href="/about#credits" className="underline decoration-white/30 underline-offset-4 hover:text-gold-light">
              શ્રેય (Credits)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

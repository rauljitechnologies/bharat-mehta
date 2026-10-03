"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Click-to-load map: no third-party scripts or cookies until the visitor asks,
 * which keeps the contact page fast and privacy-friendly.
 */
export function MapEmbed({ query, label }: { query: string; label: string }) {
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(query);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-line bg-navy-50">
      {loaded ? (
        <iframe
          title={`નકશો: ${label}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <svg aria-hidden="true" className="absolute inset-0 size-full text-navy/[0.07]" preserveAspectRatio="none" viewBox="0 0 400 250">
            <path d="M0 60h400M0 140h400M0 205h400M70 0v250M180 0v250M300 0v250" stroke="currentColor" strokeWidth="10" />
            <path d="M0 230 140 90l120 40 140-110" stroke="currentColor" strokeWidth="18" fill="none" />
          </svg>
          <span className="relative grid size-14 place-items-center rounded-full bg-navy text-gold-light shadow-lg ring-8 ring-navy/10">
            <MapPin className="size-6" aria-hidden="true" />
          </span>
          <p className="relative font-semibold text-navy">{label}</p>
          <div className="relative flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-700"
            >
              નકશો લોડ કરો
            </button>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-navy/20 bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-gold"
            >
              Google Maps માં ખોલો
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

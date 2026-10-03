/**
 * Personal academic seal (open book + lamp) — deliberately NOT the university's
 * official crest, which should only be used with the university's permission.
 */
export function Emblem({ className = "size-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="શૈક્ષણિક પ્રતીક — Academic emblem">
      <circle cx="32" cy="32" r="31" fill="#062B49" />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="#C89B3C" strokeOpacity=".45" strokeWidth=".75" strokeDasharray="1.5 2.2" />
      {/* lamp flame */}
      <path d="M32 12.5c3 3.6 4.2 6.3 4.2 8.4a4.2 4.2 0 0 1-8.4 0c0-2.1 1.2-4.8 4.2-8.4Z" fill="#E1C477" />
      <path d="M32 17.5c1.2 1.6 1.7 2.8 1.7 3.6a1.7 1.7 0 0 1-3.4 0c0-.8.5-2 1.7-3.6Z" fill="#062B49" fillOpacity=".55" />
      {/* open book */}
      <path d="M32 31.5c-4.6-3.2-9.8-4.2-15.5-3.6v16.5c5.7-.6 10.9.4 15.5 3.6 4.6-3.2 9.8-4.2 15.5-3.6V27.9c-5.7-.6-10.9.4-15.5 3.6Z" fill="none" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M32 31.5V48" stroke="#C89B3C" strokeWidth="1.8" />
      <path d="M20.5 33.2c3.2-.1 6 .6 8.3 1.9M20.5 37.2c3.2-.1 6 .6 8.3 1.9M43.5 33.2c-3.2-.1-6 .6-8.3 1.9M43.5 37.2c-3.2-.1-6 .6-8.3 1.9" stroke="#E1C477" strokeOpacity=".7" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

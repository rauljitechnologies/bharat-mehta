"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { publicationCategoryLabels } from "@/lib/content/publications";
import type { Publication, PublicationCategory } from "@/lib/types";
import { buttonClasses } from "../ui/Button";
import { PublicationCard } from "../ui/PublicationCard";

const PAGE_SIZE = 6;

const selectClass =
  "h-11 w-full rounded-lg border border-line bg-white px-3 text-[0.9375rem] text-ink hover:border-navy/30 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none";

export function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PublicationCategory | "">("");
  const [year, setYear] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Deep links such as /publications?q=… (used by site search and cards)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const c = params.get("category") as PublicationCategory | null;
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from the URL after hydration */
    if (q) setQuery(q);
    if (c && c in publicationCategoryLabels) setCategory(c);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    [publications],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter(
      (p) =>
        (!category || p.category === category) &&
        (!year || p.year === Number(year)) &&
        (!q ||
          [p.title, p.titleEn, p.venue, p.description, ...p.keywords].join(" ").toLowerCase().includes(q)),
    );
  }, [publications, query, category, year]);

  const counts = useMemo(() => {
    const map = new Map<PublicationCategory, number>();
    publications.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return map;
  }, [publications]);

  const hasFilters = Boolean(query || category || year);
  const reset = () => {
    setQuery("");
    setCategory("");
    setYear("");
    setVisible(PAGE_SIZE);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div>
      <form
        role="search"
        aria-label="પ્રકાશનો શોધો (Search publications)"
        onSubmit={(e) => e.preventDefault()}
        className="card grid gap-3 p-4 sm:p-5 md:grid-cols-[1fr_12rem_9rem_auto] md:items-end"
      >
        <div>
          <label htmlFor="pub-q" className="text-sm font-semibold text-ink">
            મુખ્ય શબ્દ (Keyword)
          </label>
          <div className="relative mt-1.5">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              id="pub-q"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="શીર્ષક, સામયિક, વિષય…"
              className={`${selectClass} pl-9`}
            />
          </div>
        </div>
        <div>
          <label htmlFor="pub-cat" className="text-sm font-semibold text-ink">
            શ્રેણી (Category)
          </label>
          <select
            id="pub-cat"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as PublicationCategory | "");
              setVisible(PAGE_SIZE);
            }}
            className={`${selectClass} mt-1.5`}
          >
            <option value="">બધી શ્રેણીઓ</option>
            {(Object.keys(publicationCategoryLabels) as PublicationCategory[]).map((c) => (
              <option key={c} value={c}>
                {publicationCategoryLabels[c].gu} · {publicationCategoryLabels[c].en} ({counts.get(c) ?? 0})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pub-year" className="text-sm font-semibold text-ink">
            વર્ષ (Year)
          </label>
          <select
            id="pub-year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            className={`${selectClass} mt-1.5`}
          >
            <option value="">બધાં વર્ષ</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={reset} disabled={!hasFilters} className={buttonClasses("outline", "h-11")}>
          <X className="size-4" aria-hidden="true" /> રીસેટ
        </button>
      </form>

      <p className="mt-6 flex items-center gap-2 text-sm text-muted" role="status" aria-live="polite">
        <SlidersHorizontal className="size-4" aria-hidden="true" />
        કુલ {publications.length} માંથી <strong className="text-navy">{filtered.length}</strong> પ્રકાશનો
      </p>

      {filtered.length === 0 ? (
        <div className="card mt-6 p-10 text-center">
          <p className="text-lg font-semibold text-navy">કોઈ પ્રકાશન મળ્યું નથી.</p>
          <p className="mt-1 text-muted">અન્ય શબ્દ અજમાવો અથવા ફિલ્ટર રીસેટ કરો.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filtered.slice(0, visible).map((p) => (
            <PublicationCard key={p.slug} publication={p} headingLevel="h2" />
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className={buttonClasses("secondary")}>
            વધુ પ્રકાશનો બતાવો ({filtered.length - visible} બાકી)
          </button>
        </div>
      )}
    </div>
  );
}

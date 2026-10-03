"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { Publication, PublicationCategory } from "@/lib/types";
import { Arrow, ButtonLink } from "../ui/Button";
import { PublicationCard } from "../ui/PublicationCard";
import { SectionHeading } from "../ui/SectionHeading";

interface Tab {
  id: string;
  label: string;
  categories: PublicationCategory[] | "all";
}

export function PublicationsSection({ publications, tabs }: { publications: Publication[]; tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const items = publications
    .filter((p) => tab.categories === "all" || tab.categories.includes(p.category))
    .slice(0, 6);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (index + delta + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="publications-title" className="section bg-white">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="publications-title"
            eyebrow="Publications"
            title="પ્રકાશનો"
            description="પુસ્તકો, સંશોધન લેખો, શોધપત્રો અને સંપાદનો — ગુજરાતી સાહિત્ય અને ભાષાના અભ્યાસમાં યોગદાન."
          />
          <ButtonLink href="/publications" variant="outline" className="self-start md:self-auto">
            બધાં પ્રકાશનો <Arrow />
          </ButtonLink>
        </div>

        <div
          role="tablist"
          aria-label="પ્રકાશન શ્રેણીઓ (Publication categories)"
          className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
        >
          {tabs.map((t, i) => {
            const selected = t.id === active;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "shrink-0 rounded-lg border px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                  selected
                    ? "border-navy bg-navy text-white shadow-[inset_0_-2px_0_var(--color-gold)]"
                    : "border-line bg-white text-ink/80 hover:border-gold/60 hover:text-navy",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((p) => (
            <PublicationCard key={p.slug} publication={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

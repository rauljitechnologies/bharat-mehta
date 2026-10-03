"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchItem } from "@/lib/search";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  index: SearchItem[];
}

export function SearchDialog({ open, onClose, index }: SearchDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.filter((i) => i.kind === "પૃષ્ઠ");
    return index.filter((i) => `${i.title} ${i.text}`.toLowerCase().includes(q)).slice(0, 12);
  }, [query, index]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => {
        setQuery("");
        onClose();
      }}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-0 mx-auto mt-[8vh] w-[min(40rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-[var(--radius-card)] bg-white p-0 text-ink shadow-2xl backdrop:bg-navy-dark/70 backdrop:backdrop-blur-sm"
    >
      <h2 id={titleId} className="sr-only">
        વેબસાઇટમાં શોધો (Search the site)
      </h2>
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Search className="size-5 shrink-0 text-muted" aria-hidden="true" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="સંશોધન, પ્રકાશનો, લેખો શોધો…"
          aria-label="શોધ શબ્દ (Search term)"
          className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
        />
        <button
          type="button"
          onClick={onClose}
          className="grid size-9 shrink-0 place-items-center rounded-md text-muted hover:bg-canvas hover:text-navy"
          aria-label="શોધ બંધ કરો (Close search)"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="max-h-[60vh] overflow-y-auto p-2" aria-live="polite">
        {results.length === 0 ? (
          <p className="px-3 py-8 text-center text-muted">“{query}” માટે કોઈ પરિણામ મળ્યું નથી.</p>
        ) : (
          <ul>
            {results.map((item) => (
              <li key={item.href + item.title}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start justify-between gap-4 rounded-lg px-3 py-2.5 hover:bg-canvas focus-visible:bg-canvas"
                >
                  <span className="font-medium text-navy">{item.title}</span>
                  <span className="mt-0.5 shrink-0 rounded bg-gold-50 px-2 py-0.5 text-xs text-gold-dark">
                    {item.kind}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
}

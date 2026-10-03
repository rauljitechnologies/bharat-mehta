"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { BlogCategory, BlogPost } from "@/lib/types";
import { PostCard } from "../ui/PostCard";

interface BlogExplorerProps {
  posts: (BlogPost & { minutes: number })[];
  categories: Record<BlogCategory, string>;
}

export function BlogExplorer({ posts, categories }: BlogExplorerProps) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const [query, setQuery] = useState("");

  const used = useMemo(() => new Set(posts.map((p) => p.category)), [posts]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!q || [p.title, p.excerpt, ...p.tags].join(" ").toLowerCase().includes(q)),
    );
  }, [posts, category, query]);

  const chips: { id: BlogCategory | "all"; label: string }[] = [
    { id: "all", label: "બધા" },
    ...(Object.keys(categories) as BlogCategory[]).filter((c) => used.has(c)).map((c) => ({ id: c, label: categories[c] })),
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="શ્રેણી ફિલ્ટર (Category filter)" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              className={cn(
                "shrink-0 rounded-lg border px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                category === c.id
                  ? "border-navy bg-navy text-white shadow-[inset_0_-2px_0_var(--color-gold)]"
                  : "border-line bg-white text-ink/80 hover:border-gold/60 hover:text-navy",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="relative lg:w-80" role="search">
          <label htmlFor="blog-q" className="sr-only">
            લેખો શોધો (Search articles)
          </label>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            id="blog-q"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="લેખો શોધો…"
            className="h-11 w-full rounded-lg border border-line bg-white pr-3 pl-9 text-[0.9375rem] hover:border-navy/30 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
          />
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {filtered.length} લેખો મળ્યા
      </p>

      {filtered.length === 0 ? (
        <div className="card mt-8 p-10 text-center">
          <p className="text-lg font-semibold text-navy">કોઈ લેખ મળ્યો નથી.</p>
          <p className="mt-1 text-muted">અન્ય શબ્દ કે શ્રેણી અજમાવો.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <PostCard key={post.slug} post={post} minutes={post.minutes} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

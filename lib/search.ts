import { blogCategoryLabels } from "./content/blog";
import { publicationCategoryLabels } from "./content/publications";
import { getPosts, getPublications, getResearchAreas, getTeaching } from "./api";
import { mainNav } from "./site";

export interface SearchItem {
  title: string;
  href: string;
  kind: string;
  text: string;
}

/** Small client-side search index across pages, research, publications and posts. */
export async function buildSearchIndex(): Promise<SearchItem[]> {
  const [areas, pubs, posts, teaching] = await Promise.all([
    getResearchAreas(),
    getPublications(),
    getPosts(),
    getTeaching(),
  ]);
  return [
    ...mainNav.slice(1).map((n) => ({ title: n.label, href: n.href, kind: "પૃષ્ઠ", text: n.labelEn })),
    ...areas.map((a) => ({
      title: a.title,
      href: `/research#${a.slug}`,
      kind: "સંશોધન",
      text: `${a.titleEn} ${a.summary} ${a.keywords.join(" ")}`,
    })),
    ...teaching.courses.map((c) => ({
      title: c.title,
      href: `/teaching#${c.slug}`,
      kind: "અધ્યાપન",
      text: `${c.titleEn} ${c.description}`,
    })),
    ...pubs.map((p) => ({
      title: p.title,
      href: `/publications?q=${encodeURIComponent(p.title)}`,
      kind: `${publicationCategoryLabels[p.category].gu} · ${p.year}`,
      text: `${p.titleEn ?? ""} ${p.venue} ${p.keywords.join(" ")}`,
    })),
    ...posts.map((p) => ({
      title: p.title,
      href: `/blog/${p.slug}`,
      kind: blogCategoryLabels[p.category],
      text: `${p.excerpt} ${p.tags.join(" ")}`,
    })),
  ];
}

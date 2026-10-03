/**
 * Data access layer. Every page reads content through these async functions,
 * so swapping the static files for a CMS / REST API only touches this module.
 */
import { blogPosts } from "./content/blog";
import { profile } from "./content/profile";
import { publications } from "./content/publications";
import {
  collaborations,
  conferencePresentations,
  events,
  researchAreas,
  researchOverview,
  researchProjects,
  seminarNote,
  supervision,
  supervisionStats,
} from "./content/research";
import {
  courses,
  guidanceAreas,
  guidanceFaqs,
  guidanceIntro,
  guidanceProcess,
  teachingLevels,
  teachingPhilosophy,
} from "./content/teaching";
import type { BlogBlock, BlogPost } from "./types";

const byDateDesc = (a: { date: string }, b: { date: string }) => b.date.localeCompare(a.date);

export async function getProfile() {
  return profile;
}

export async function getResearch() {
  return {
    overview: researchOverview,
    areas: researchAreas,
    projects: researchProjects,
    presentations: conferencePresentations,
    seminarNote,
    supervision,
    supervisionStats,
    collaborations,
  };
}

export async function getResearchAreas() {
  return researchAreas;
}

/** Books in the order of Prof. Mehta's own list (criticism → research → edited → series). */
export async function getPublications() {
  return publications;
}

export async function getFeaturedPublications(limit = 6) {
  return publications.filter((p) => p.featured).slice(0, limit);
}

export async function getTeaching() {
  return { philosophy: teachingPhilosophy, levels: teachingLevels, courses };
}

export async function getGuidance() {
  return {
    intro: guidanceIntro,
    areas: guidanceAreas,
    process: guidanceProcess,
    faqs: guidanceFaqs,
  };
}

export async function getEvents() {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}

export async function getPosts() {
  return [...blogPosts].sort(byDateDesc);
}

export async function getLatestUpdates(limit = 3) {
  const posts = await getPosts();
  const featured = posts.filter((p) => p.featured);
  return (featured.length >= limit ? featured : posts).slice(0, limit);
}

export async function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedPosts(post: BlogPost, limit = 3) {
  const posts = await getPosts();
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || byDateDesc(a.post, b.post))
    .slice(0, limit)
    .map((r) => r.post);
}

/** Approximate reading time (Gujarati prose ≈ 160 words / minute) */
export function readingMinutes(content: BlogBlock[]) {
  const words = content
    .flatMap((b) => (b.type === "list" ? b.items : [b.text]))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 160));
}

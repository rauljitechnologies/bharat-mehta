import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/api";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const latest = posts[0]?.date ?? new Date().toISOString();

  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/research", priority: 0.9, changeFrequency: "monthly" },
    { path: "/publications", priority: 0.9, changeFrequency: "monthly" },
    { path: "/teaching", priority: 0.8, changeFrequency: "monthly" },
    { path: "/student-guidance", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: latest,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [absoluteUrl(post.image.src)],
    })),
  ];
}

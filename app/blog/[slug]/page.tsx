import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { ShareButtons } from "@/components/pages/ShareButtons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { PostCard } from "@/components/ui/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPost, getPosts, getRelatedPosts, readingMinutes } from "@/lib/api";
import { blogCategoryLabels } from "@/lib/content/blog";
import { images } from "@/lib/content/images";
import { formatDate } from "@/lib/format";
import { articleJsonLd, buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import type { BlogBlock } from "@/lib/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image.src,
    type: "article",
    publishedTime: post.date,
    keywords: post.tags,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.cite && <cite className="mt-2 block text-sm text-muted not-italic">— {block.cite}</cite>}
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const related = await getRelatedPosts(post, 3);
  const minutes = readingMinutes(post.content);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <article>
        <header className="bg-navy-dark text-white">
          <div className="container-site pt-12 pb-40 sm:pt-16 sm:pb-48">
            <div className="hero-in mx-auto max-w-3xl">
              <Breadcrumbs
                items={[
                  { name: "લેખો", path: "/blog" },
                  { name: post.title, path: `/blog/${post.slug}` },
                ]}
              />
              <p className="mt-8">
                <span className="rounded-md bg-gold px-2.5 py-1 text-sm font-semibold text-navy-dark">
                  {blogCategoryLabels[post.category]}
                </span>
              </p>
              <h1 className="mt-5 font-serif text-[1.875rem] leading-snug font-bold sm:text-[2.5rem]">{post.title}</h1>
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={images.headshot.src}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7 rounded-full object-cover ring-2 ring-gold/60"
                  />
                  <Link href="/about" rel="author" className="hover:text-gold-light">
                    {post.author}
                  </Link>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-gold" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4 text-gold" aria-hidden="true" /> {minutes} મિનિટ વાંચન
                </span>
              </p>
            </div>
          </div>
        </header>

        <div className="container-site">
          <figure className="relative mx-auto -mt-32 max-w-4xl sm:-mt-40">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-lift)]">
              <Image src={post.image.src} alt={post.image.alt} fill preload sizes="(min-width:1024px) 900px, 100vw" className="object-cover" />
            </div>
            {post.image.credit && <figcaption className="mt-2 text-right text-xs text-muted">ફોટો: {post.image.credit}</figcaption>}
          </figure>

          <div className="mx-auto max-w-3xl py-12 sm:py-16">
            <p className="font-serif text-xl leading-relaxed text-navy">{post.excerpt}</p>
            <div className="prose-gu mt-8">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <ul className="mt-10 flex flex-wrap gap-2" aria-label="ટૅગ્સ">
              {post.tags.map((t) => (
                <li key={t} className="rounded-md bg-white px-3 py-1 text-sm text-ink/80 ring-1 ring-line">
                  #{t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
              <ShareButtons url={url} title={post.title} />
            </div>

            <Link href="/blog" className="group mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold-dark">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" /> બધા લેખો
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section bg-white">
          <div className="container-site">
            <SectionHeading id="related-title" eyebrow="Related" title="સંબંધિત લેખો" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} minutes={readingMinutes(p.content)} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

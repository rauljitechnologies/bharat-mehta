import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { blogCategoryLabels } from "@/lib/content/blog";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/types";
import { Arrow } from "./Button";

interface PostCardProps {
  post: BlogPost;
  minutes?: number;
  index?: number;
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function PostCard({ post, minutes, index = 0, headingLevel = "h3", className }: PostCardProps) {
  const Heading = headingLevel;
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
      className={cn("card card-hover group relative flex flex-col overflow-hidden", className)}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-4 left-4 rounded-md bg-navy-dark/85 px-2.5 py-1 text-xs font-semibold text-gold-light backdrop-blur">
          {blogCategoryLabels[post.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          {minutes !== undefined && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {minutes} મિનિટ વાંચન
            </span>
          )}
        </p>
        <Heading className="mt-3 text-lg leading-snug font-bold text-navy transition-colors group-hover:text-navy-700">
          {post.title}
        </Heading>
        <p className="mt-2 line-clamp-2 flex-1 text-[0.9375rem] text-muted">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-navy after:absolute after:inset-0 hover:text-gold-dark"
          aria-label={`${post.title} — વધુ વાંચો`}
        >
          વધુ વાંચો <Arrow />
        </Link>
      </div>
    </article>
  );
}

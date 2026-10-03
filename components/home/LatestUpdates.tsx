import { Arrow, ButtonLink } from "../ui/Button";
import { PostCard } from "../ui/PostCard";
import { SectionHeading } from "../ui/SectionHeading";
import type { BlogPost } from "@/lib/types";

export function LatestUpdates({ posts }: { posts: BlogPost[] }) {
  return (
    <section aria-labelledby="updates-title" className="section">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="updates-title" eyebrow="Latest Updates" title="તાજા અપડેટ્સ" />
          <ButtonLink href="/blog" variant="outline" className="self-start md:self-auto">
            બધા અપડેટ્સ <Arrow />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

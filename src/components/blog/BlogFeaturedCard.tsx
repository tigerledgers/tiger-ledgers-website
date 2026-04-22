import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { formatPostDate } from "@/lib/blog";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-200 hover:shadow-elegant md:grid-cols-2"
    >
      <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span>Featured</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground">{formatPostDate(post.date)}</span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-navy transition-colors group-hover:text-gold sm:text-3xl md:text-4xl">
          {post.title}
        </h2>
        <p className="mt-4 text-base text-muted-foreground">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          Read full article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

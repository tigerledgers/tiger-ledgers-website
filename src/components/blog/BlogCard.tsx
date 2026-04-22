import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { formatPostDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span>{post.tag}</span>
          <span className="text-muted-foreground/60">•</span>
          <span className="text-muted-foreground">{formatPostDate(post.date)}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-navy transition-colors group-hover:text-gold">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

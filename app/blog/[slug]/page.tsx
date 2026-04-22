import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { getAllPosts, getPostBySlug, getRelatedPosts, formatPostDate } from "@/lib/blog";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article — Tiger Ledgers" };

  return {
    title: `${post.title} — Tiger Ledgers Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main className="pt-28">
        <article className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {post.tag}
              </span>
              <h1 className="mt-6 font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-navy/80">{post.author}</span>
                <span className="text-muted-foreground/50">•</span>
                <span>{formatPostDate(post.date)}</span>
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl shadow-card">
              <img
                src={post.cover}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <p className="mt-10 text-lg leading-relaxed text-foreground/80">{post.excerpt}</p>

            <div className="mt-2">
              <MarkdownContent>{post.content}</MarkdownContent>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-secondary/30 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                  Other blog posts
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 rounded-md bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy/90"
                >
                  View All
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

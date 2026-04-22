import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { getPostBySlug, getRelatedPosts, formatPostDate } from "@/lib/blog";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article — Tiger Ledgers" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Tiger Ledgers Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: post.cover },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-semibold text-navy">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <Link to="/blog" className="mt-6 inline-block text-sm font-semibold text-gold">
          Back to blog
        </Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy">
          Article not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/blog" className="mt-6 inline-block text-sm font-semibold text-gold">
          ← Back to blog
        </Link>
      </div>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main className="pt-28">
        <article className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
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

            <p className="mt-10 text-lg leading-relaxed text-foreground/80">
              {post.excerpt}
            </p>

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
                  to="/blog"
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

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFeaturedCard } from "@/components/blog/BlogFeaturedCard";
import { getAllPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tiger Ledgers Resource Library" },
      {
        name: "description",
        content:
          "Insights, playbooks, and industry analysis from the Tiger Ledgers team on accounting, tax, fractional CFO leadership, and modern finance operations.",
      },
      { property: "og:title", content: "Blog — Tiger Ledgers Resource Library" },
      {
        property: "og:description",
        content:
          "Insights, playbooks, and industry analysis on accounting, tax, fractional CFO leadership, and modern finance operations.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background">
      <Header solid />
      <main className="pt-24">
        <section className="px-4 pb-12 pt-8 sm:px-6 md:pb-16 md:pt-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Resource Library
            </p>
            <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl md:text-6xl">
              The Tiger Ledgers Blog
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Practical perspectives on accounting, tax, and financial leadership for
              founders and finance teams building durable businesses.
            </p>
          </div>
        </section>

        {featured && (
          <section className="px-4 pb-12 sm:px-6 md:pb-16">
            <div className="mx-auto max-w-6xl">
              <BlogFeaturedCard post={featured} />
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <section className="px-4 pb-24 sm:px-6 md:pb-32">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Latest articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
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

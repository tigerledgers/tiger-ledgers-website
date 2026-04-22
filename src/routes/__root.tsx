import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tiger Ledgers — Strategic Financial Leadership" },
      {
        name: "description",
        content:
          "Accounting, tax, fractional CFO, and AI-enabled finance operations for small businesses, eCommerce, freelancers, and SaaS startups.",
      },
      { name: "author", content: "Tiger Ledgers" },
      { property: "og:title", content: "Tiger Ledgers — Strategic Financial Leadership" },
      {
        property: "og:description",
        content:
          "A modern finance partner for growing businesses — accounting, tax, payroll, and fractional CFO services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Tiger Ledgers — Strategic Financial Leadership" },
      { name: "description", content: "Tiger Ledgers Financial Hub is a professional financial services SPA." },
      { property: "og:description", content: "Tiger Ledgers Financial Hub is a professional financial services SPA." },
      { name: "twitter:description", content: "Tiger Ledgers Financial Hub is a professional financial services SPA." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ZO7w6oGhC5YjmzjXKEp8oY7qSYi2/social-images/social-1776753445456-logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ZO7w6oGhC5YjmzjXKEp8oY7qSYi2/social-images/social-1776753445456-logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster richColors position="top-right" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

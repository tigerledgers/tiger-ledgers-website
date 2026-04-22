import type { BlogPost } from "@/types/blog";
import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function getPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

function slugFromPath(file: string): string {
  return file.replace(/\.md$/, "");
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colon = trimmed.indexOf(":");
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value = trimmed.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content: body };
}

function parsePost(file: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug: slugFromPath(file),
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "Tiger Ledgers",
    date: data.date ?? "",
    cover: data.cover ?? "",
    tag: data.tag ?? "Blog",
    content,
  };
}

function getAllPostsSync(): BlogPost[] {
  const files = getPostFiles();
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      return parsePost(file, raw);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const allPosts: BlogPost[] = getAllPostsSync();

export function getAllPosts(): BlogPost[] {
  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return allPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function formatPostDate(date: string): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

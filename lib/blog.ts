import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPostMeta } from "@/data/types";
import type { ImageKey } from "@/data/images";

const DIR = path.join(process.cwd(), "content", "blog");

function read(file: string) {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta: BlogPostMeta = {
    slug: file.replace(/\.mdx?$/, ""),
    title: String(data.title),
    description: String(data.description ?? ""),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    author: String(data.author ?? "The Cenote House team"),
    image: (data.image ?? "hero-cenote") as ImageKey,
    readingMinutes: Number(data.readingMinutes ?? 6),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
  return { meta, content };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => read(f).meta)
    .sort((a, b) => (a.slug === "best-of-mexico" ? -1 : b.slug === "best-of-mexico" ? 1 : b.date.localeCompare(a.date)));
}

export function getPost(slug: string) {
  const file = ["mdx", "md"].map((ext) => `${slug}.${ext}`).find((f) => fs.existsSync(path.join(DIR, f)));
  return file ? read(file) : null;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** h2 headings for a table of contents */
export function headings(content: string) {
  return [...content.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = m[1].replace(/[*_`]/g, "").trim();
    return { text, id: slugify(text) };
  });
}

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

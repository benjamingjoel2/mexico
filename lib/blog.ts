import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { trusted } from "@/i18n/server";
import type { BlogPostMeta } from "@/data/types";
import type { ImageKey } from "@/data/images";

const ROOT = path.join(process.cwd(), "content", "blog");
// English posts sit in content/blog; translations in content/blog/{fr,de,es} with the same file names.
const dirFor = (locale = "en") => (locale === "en" ? ROOT : path.join(ROOT, locale));

function read(file: string, locale = "en") {
  let p = path.join(dirFor(locale), file);
  // While collecting strings for translation (I18N_COLLECT), untranslated posts fall back to English.
  if (process.env.I18N_COLLECT && !fs.existsSync(p)) p = path.join(ROOT, file);
  const raw = fs.readFileSync(p, "utf8");
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

export function getAllPosts(locale = "en"): BlogPostMeta[] {
  return listPosts(locale).map((m) => {
    // Posts are written per language, so their own text is already translated.
    trusted(m.title, m.description, m.author, ...m.tags);
    return m;
  });
}

function listPosts(locale: string): BlogPostMeta[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => read(f, locale).meta)
    .sort((a, b) => (a.slug === "best-of-mexico" ? -1 : b.slug === "best-of-mexico" ? 1 : b.date.localeCompare(a.date)));
}

export function getPost(slug: string, locale = "en") {
  const file = ["mdx", "md"].map((ext) => `${slug}.${ext}`).find((f) => fs.existsSync(path.join(ROOT, f)));
  if (!file) return null;
  const post = read(file, locale);
  trusted(post.meta.title, post.meta.description, post.meta.author, ...post.meta.tags);
  return post;
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

export const formatDate = (iso: string, locale = "en") =>
  new Date(iso + "T12:00:00Z").toLocaleDateString(locale === "en" ? "en-GB" : locale, { day: "numeric", month: "long", year: "numeric" });

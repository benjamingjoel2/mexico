import { slugify } from "./blog";

type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

const text = (n: Node): string => (n.type === "text" ? n.value ?? "" : (n.children ?? []).map(text).join(""));

/** Adds accent-insensitive ids to h2/h3 so "Mérida" → "merida" (matches the TOC). */
export function rehypeHeadingIds() {
  return (tree: Node) => {
    const walk = (n: Node) => {
      if (n.type === "element" && (n.tagName === "h2" || n.tagName === "h3")) {
        n.properties = { ...n.properties, id: slugify(text(n)) };
      }
      n.children?.forEach(walk);
    };
    walk(tree);
  };
}

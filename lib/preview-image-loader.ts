/** Preview build only: serve bundled images relative to the page's <base>. */
export default function previewLoader({ src }: { src: string; width: number; quality?: number }) {
  return src.replace(/^\//, "");
}

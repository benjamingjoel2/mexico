#!/usr/bin/env node
/**
 * Builds a fully static, relative-path copy of the site into ./preview-out
 * so it can be hosted from any sub-path (e.g. a shared preview link).
 *
 * - Next.js static export (API routes removed; forms simulate success)
 * - Unsplash images downloaded and bundled locally
 * - Every URL rewritten to be relative to a per-page <base href>
 *
 * Usage: node scripts/build-preview.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const work = path.join(root, ".preview-build");
const outDir = path.join(root, "preview-out");
const sh = (cmd, cwd = work) => execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, NEXT_PUBLIC_PREVIEW_EXPORT: "1", NEXT_TELEMETRY_DISABLED: "1" } });

// 1. Fresh working copy without server-only routes
fs.rmSync(work, { recursive: true, force: true });
fs.mkdirSync(work);
for (const f of fs.readdirSync(root)) {
  if ([".git", ".next", "node_modules", ".preview-build", "preview-out", "preview"].includes(f)) continue;
  fs.cpSync(path.join(root, f), path.join(work, f), { recursive: true });
}
fs.symlinkSync(path.join(root, "node_modules"), path.join(work, "node_modules"));
fs.rmSync(path.join(work, "app", "api"), { recursive: true, force: true });

// 2. Bundle images locally
const ids = [...fs.readFileSync(path.join(root, "data/images.ts"), "utf8").matchAll(/u\("(photo-[\w-]+)"\)/g)].map((m) => m[1]);
const cache = path.join(root, ".preview-cache");
fs.mkdirSync(cache, { recursive: true });
fs.mkdirSync(path.join(work, "public", "img"), { recursive: true });
for (const id of new Set(ids)) {
  const file = path.join(cache, `${id}.jpg`);
  if (!fs.existsSync(file)) {
    const res = await fetch(`https://images.unsplash.com/${id}?auto=format&fm=jpg&fit=crop&w=1400&q=68`);
    if (!res.ok) throw new Error(`Image ${id}: ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  fs.copyFileSync(file, path.join(work, "public", "img", `${id}.jpg`));
}

// 3. Static export
sh("npx next build");
fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(path.join(work, "out"), outDir, { recursive: true });
// Some hosts reserve top-level names starting with "_", so ship assets under /assets
fs.renameSync(path.join(outDir, "_next"), path.join(outDir, "assets"));
for (const f of ["404.html", "404", "icon.svg"]) fs.rmSync(path.join(outDir, f), { recursive: true, force: true });

// 4. Rewrite URLs to be relative
const toRel = (h) => {
  const m = h.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  let p = m[1].replace(/^\//, "");
  if (p === "" || p.endsWith("/")) p += "index.html";
  else if (!/\.[a-z0-9]+$/i.test(p)) p += "/index.html";
  return p + (m[2] ?? "") + (m[3] ?? "");
};

const linkScript = `<script>(function(){var F=window.fetch;window.fetch=function(u,o){var s=String(u&&u.url||u);if(/[?&]_rsc=/.test(s))return new Promise(function(){});return F.apply(this,arguments)};function r(h){var m=h.match(/^([^?#]*)(\\?[^#]*)?(#.*)?$/),p=m[1].replace(/^\\//,"");if(p===""||/\\/$/.test(p))p+="index.html";else if(!/\\.[a-z0-9]+$/i.test(p))p+="/index.html";return p+(m[2]||"")+(m[3]||"")}
addEventListener("click",function(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target.closest&&e.target.closest("a[href]");if(!a||a.target==="_blank")return;var h=a.getAttribute("href");if(/^(https?:|mailto:|tel:|\\/\\/)/.test(h))return;e.preventDefault();e.stopPropagation();
if(h.charAt(0)==="#"){var el=document.getElementById(decodeURIComponent(h.slice(1)));if(el)el.scrollIntoView({behavior:"smooth"});return}
location.href=new URL(h.charAt(0)==="/"?r(h):h,document.baseURI).href},true)})();</script>`;

let files = 0;
const walk = (dir) => {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) { walk(p); continue; }
    const rel = path.relative(outDir, p);
    if (/\.txt$/.test(f) && f !== "robots.txt") { fs.rmSync(p); continue; } // RSC payloads: not needed, clicks do full loads
    files++;
    if (f.endsWith(".html")) {
      const depth = rel.split(path.sep).length - 1;
      const base = depth ? "../".repeat(depth) : "./";
      let s = fs.readFileSync(p, "utf8");
      s = s.replaceAll("/__AP__/_next/", "assets/");
      s = s.replace(/(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, rest) => `${attr}="${attr === "src" ? rest : toRel("/" + rest)}"`);
      s = s.replace(/srcSet="([^"]*)"/gi, (_, v) => `srcSet="${v.replace(/(^|,\s*)\//g, "$1")}"`);
      s = s.replace(/<head>/, `<head><base href="${base}">${linkScript}`);
      fs.writeFileSync(p, s);
    } else if (f.endsWith(".js")) {
      const s = fs.readFileSync(p, "utf8");
      // Escape literal U+FFFD (some hosts reject it); identical meaning inside JS strings/regexes
      const t = s.replaceAll("/__AP__/_next/", "assets/").replaceAll("\uFFFD", "\\uFFFD");
      if (t !== s) fs.writeFileSync(p, t);
    } else if (f.endsWith(".css")) {
      const s = fs.readFileSync(p, "utf8");
      fs.writeFileSync(p, s.replaceAll("/__AP__/_next/static/media/", "../media/").replaceAll("/__AP__/_next/", "../../"));
    }
  }
};
walk(outDir);
fs.rmSync(work, { recursive: true, force: true });
console.log(`\nPreview build ready: ${outDir} (${files} files)`);

/**
 * POST JSON to one of our API routes. In the static preview build
 * (NEXT_PUBLIC_PREVIEW_EXPORT=1) there is no server, so submissions are simulated.
 */
export async function postJSON(url: string, body: unknown): Promise<{ ok: boolean }> {
  if (process.env.NEXT_PUBLIC_PREVIEW_EXPORT === "1") {
    console.info("[preview] would POST", url, body);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true };
  }
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return { ok: res.ok };
}

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL.replace(/\/?$/, "/"), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", root)}\n`, {
    headers: { "Content-Type": "text/plain" },
  });
};

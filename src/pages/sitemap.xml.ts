// Generated for the deployment's own address (SITE_URL + BASE_PATH).
import type { APIRoute } from "astro";
import releases from "../data/releases.json";

const pages = [
  "", "docs/start/", "docs/desktop/", "docs/settings/", "docs/shell/", "docs/plugins/",
  "docs/api/", "docs/architecture/", "slintlu/", "slintlu/api/", "slintlu/ipc/",
  "slintlu/theming/", "slintlu/i18n/", "slintlu/lockscreen/", "releases/",
];

export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL.replace(/\/?$/, "/"), site);
  const slugs = (releases as Array<{ slug?: string }>).map(release => release.slug).filter(Boolean);
  const urls = [...pages, ...slugs.map(slug => `releases/${slug}/`)]
    .map(page => `  <url><loc>${new URL(page, root)}</loc></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};

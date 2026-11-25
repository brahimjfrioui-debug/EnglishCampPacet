import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/config/site";
import { NEWS } from "@/content/news";

const STATIC_PATHS = ["/", "/about", "/programs", "/gallery", "/news", "/admissions", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          ...STATIC_PATHS.map((p) => ({ loc: `${SITE.url}${p === "/" ? "" : p}` })),
          ...NEWS.map((n) => ({ loc: `${SITE.url}/news/${n.slug}`, lastmod: n.date })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${u.loc}</loc>${"lastmod" in u && u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
  .join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});

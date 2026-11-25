import { SITE } from "@/config/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string;
};

const DEFAULT_KEYWORDS =
  "English Camp Pacet, English course in Pacet, English learning center Mojokerto, kursus bahasa Inggris Pacet, kursus bahasa Inggris Mojokerto";

/** Per-page head() helper: unique title, description, social tags and canonical URL. */
export function pageHead({ title, description, path, type = "website", keywords }: PageSeo) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords ?? DEFAULT_KEYWORDS },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

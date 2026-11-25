import { IMAGES } from "./images";

/**
 * NEWS & EVENTS — sample posts. Replace with official announcements.
 * Add a new post by copying an entry and giving it a unique slug.
 */
export type NewsCategory = "Announcement" | "Event" | "Activity";

export type NewsPost = {
  slug: string;
  title: string;
  category: NewsCategory;
  /** ISO date, e.g. "2026-12-05" */
  date: string;
  /** For events: optional date shown as "Event date" */
  eventDate?: string;
  location?: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const NEWS: NewsPost[] = [
  {
    slug: "english-camp-2-days-1-night",
    title: "FunTasticEnglishPacet English Camp — 2 Days 1 Night",
    category: "Event",
    date: "2026-11-08",
    location: "Jl. Raya Pacet No.339, Petak, Pacet, Mojokerto",
    excerpt:
      "Learn English, make friends, explore nature, build character. Registration is open — limited seats!",
    body: [
      "Join our 2 Days 1 Night English Camp in Pacet: four English classes, traditional cooking, batik and angklung, outdoor adventure, traditional games, a campfire, talent show and movie night.",
      "Included: shared-room accommodation, meals 3x a day + snack, English classes & materials, all activities, camp t-shirt & souvenir, and a certificate of participation.",
      "Limited seats — don't miss it! Contact us on WhatsApp at 0813-3077-2949 to register. See the full rundown on the Programs page.",
    ],
    image: IMAGES.activityCampfire,
    imageAlt: "Students sitting around a campfire at the English Camp",
  },
];

export const NEWS_SORTED = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return NEWS.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

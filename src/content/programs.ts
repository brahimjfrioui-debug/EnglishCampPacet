import { IMAGES } from "./images";

/**
 * Program parts of the FunTasticEnglishPacet English Camp (2 Days 1 Night),
 * taken from the school's official flyer. No prices are listed on purpose.
 */
export type Program = {
  slug: string;
  title: string;
  tagline: string;
  audience: string;
  level: string;
  description: string;
  objectives: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
};

const AUDIENCE = "English Camp participants";
const LEVEL = "Part of the 2 Days 1 Night camp";

export const PROGRAMS: Program[] = [
  {
    slug: "english-classes",
    title: "English Classes",
    tagline: "Speaking, listening, reading & writing",
    audience: AUDIENCE,
    level: LEVEL,
    description:
      "Four English classes across the two days, moving from speaking and listening to reading, vocabulary, conversation, role play and team challenges.",
    objectives: [
      "Build confidence in speaking English",
      "Improve listening, reading & writing skills",
      "Practise conversation through role play",
    ],
    highlights: [
      "Class 1: Speaking & Listening",
      "Class 2: Reading & Vocabulary",
      "Class 3: Conversation & Role Play",
      "Class 4: Games & Team Challenge",
    ],
    image: IMAGES.campEnglishClass,
    imageAlt: "Children in a colourful English class with two camp instructors",
  },
  {
    slug: "traditional-culture",
    title: "Traditional Art, Culture & Cooking",
    tagline: "Live like a local",
    audience: AUDIENCE,
    level: LEVEL,
    description:
      "Participants cook traditional food (nasi liwet, jadah, getuk, klepon, wedang jahe), paint batik, play angklung and learn traditional dance and crafts.",
    objectives: [
      "Learn about local Indonesian culture",
      "Create your own batik and crafts",
      "Cook and taste traditional food together",
    ],
    highlights: [
      "Traditional Cooking Class",
      "Batik painting & angklung",
      "Traditional dance & handicraft",
      "Cooking competition",
    ],
    image: IMAGES.campCookingClass,
    imageAlt: "Smiling children in a cooking class in a rustic wooden kitchen",
  },
  {
    slug: "outdoor-adventure",
    title: "Outdoor Adventure & Traditional Games",
    tagline: "Explore nature around Pacet",
    audience: AUDIENCE,
    level: LEVEL,
    description:
      "Trekking, nature exploration, river fun and plant & animal discovery, plus traditional games like engklek, lompat tali, gobak sodor, ular naga, egrang and bakiak.",
    objectives: [
      "Explore nature and local flora & fauna",
      "Build teamwork through games",
      "Stay fresh and active",
    ],
    highlights: [
      "Tracking & nature exploration",
      "Traditional games",
      "Team games & challenges",
      "Morning exercise",
    ],
    image: IMAGES.campFeedingTurtles,
    imageAlt: "Children feeding turtles outdoors at the camp",
  },
  {
    slug: "character-and-evening-fun",
    title: "Character Building & Evening Fun",
    tagline: "Friendship lasts forever",
    audience: AUDIENCE,
    level: LEVEL,
    description:
      "Campfire storytelling and sing-along, a talent show, an English movie night with discussion and a photo challenge — building confidence, teamwork, responsibility, creativity, kindness and leadership.",
    objectives: [
      "Develop character, leadership and teamwork",
      "Make new friends",
      "Create unforgettable memories",
    ],
    highlights: [
      "Dinner & campfire",
      "Talent show",
      "Movie night (English movie & discussion)",
      "Farewell, certificate & souvenir",
    ],
    image: IMAGES.activityCampfire,
    imageAlt: "Students sitting around a campfire in the evening",
  },
];

export const PROGRAM_OPTIONS = ["English Camp — 2 Days 1 Night", "Not sure yet — please advise"];

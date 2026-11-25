/** FunTasticEnglishPacet English Camp — official details from the school's flyer. */
export const CAMP = {
  name: "FunTasticEnglishPacet English Camp",
  duration: "2 Days 1 Night",
  motto: "Learn English, Make Friends, Explore Nature, Build Character.",
  slogan: "Small Steps, Big Confidence in English.",
};

export type RundownItem = { time: string; title: string; detail?: string };

export const RUNDOWN: { day: string; items: RundownItem[] }[] = [
  {
    day: "Day 1",
    items: [
      { time: "07.00 – 08.00", title: "Arrival & Registration", detail: "Welcome & Ice Breaking" },
      { time: "08.00 – 09.00", title: "English Class 1", detail: "Speaking & Listening" },
      { time: "09.00 – 10.00", title: "Traditional Cooking Class", detail: "Memasak nasi liwet & jajanan tradisional" },
      { time: "10.00 – 10.30", title: "Snack Break" },
      { time: "10.30 – 12.00", title: "Outdoor Adventure", detail: "Tracking & Nature Exploration" },
      { time: "12.00 – 13.00", title: "Lunch & Rest" },
      { time: "13.00 – 14.30", title: "English Class 2", detail: "Reading & Vocabulary" },
      { time: "14.30 – 16.00", title: "Traditional Games", detail: "Engklek, Lompat Tali, Ular Naga" },
      { time: "16.00 – 17.30", title: "Team Games & Challenge", detail: "Team Building" },
      { time: "17.30 – 19.00", title: "Dinner & Campfire", detail: "Story Telling & Sing Along" },
      { time: "19.00 – 20.30", title: "Talent Show", detail: "Show Your Skill!" },
      { time: "20.30 – 21.30", title: "Movie Night", detail: "English Movie & Discussion" },
      { time: "21.30 –", title: "Free Time & Sleep" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { time: "06.00 – 06.30", title: "Morning Exercise", detail: "Fresh & Healthy" },
      { time: "06.30 – 07.30", title: "Breakfast & Traditional Food", detail: "Nasi Pecel / Lontong Sayur" },
      { time: "07.30 – 09.00", title: "English Class 3", detail: "Conversation & Role Play" },
      { time: "09.00 – 10.00", title: "Nature Exploration", detail: "Plant & Animal Discovery" },
      { time: "10.00 – 10.30", title: "Snack Break" },
      { time: "10.30 – 12.00", title: "Traditional Art & Culture", detail: "Batik Painting / Angklung" },
      { time: "12.00 – 13.00", title: "Lunch & Rest" },
      { time: "13.00 – 14.30", title: "English Class 4", detail: "Games & Team Challenge" },
      { time: "14.30 – 15.30", title: "Cooking Together", detail: "Membuat Wedang Jahe & Jajanan Tradisional" },
      { time: "15.30 – 16.00", title: "Farewell & Awarding", detail: "Certificate & Souvenir" },
      { time: "16.00 – 16.30", title: "Closing Ceremony", detail: "Say Goodbye" },
      { time: "16.30 –", title: "Return Home" },
    ],
  },
];

export const CAMP_GOALS = [
  "Build confidence in speaking English",
  "Improve listening, reading & writing skills",
  "Make new friends",
  "Explore nature & learn about local culture",
  "Develop character, leadership and teamwork",
  "Have fun and create unforgettable memories",
];

export const CHARACTER_VALUES = ["Confidence", "Teamwork", "Responsibility", "Creativity", "Kindness", "Leadership"];

export const INCLUDED = [
  "Accommodation (shared room)",
  "Meals 3x a day + snack",
  "English classes & materials",
  "All activities & program",
  "Camp t-shirt & souvenir",
  "Certificate of participation",
];

export const SPECIAL_FEATURES = [
  "Native / experienced teachers",
  "Small group (more attention)",
  "Safe & comfortable environment",
  "Beautiful nature in Pacet",
  "Fun, friendly & supportive atmosphere",
  "Cultural experience (live like a local)",
];

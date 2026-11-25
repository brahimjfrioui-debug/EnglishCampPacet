import { IMAGES } from "./images";

export const GALLERY_CATEGORIES = ["All", "Classroom", "Art & Culture", "Cooking", "Outdoor", "Events"] as const;
export type GalleryCategory = Exclude<(typeof GALLERY_CATEGORIES)[number], "All">;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Display shape. Wide group photos use "16/9" so nobody is cut off. */
  ratio?: "4/3" | "3/4" | "16/9";
};

/** Real photos from the English Camp. Add, remove or reorder here. */
export const GALLERY: GalleryItem[] = [
  { src: IMAGES.campGroupPendopo, alt: "Children and instructors with the English & Cultural Camp banner in front of a traditional Javanese meeting hall, mountains behind", caption: "Camp group photo in front of the pendopo", category: "Events", ratio: "16/9" },
  { src: IMAGES.campEnglishClass, alt: "Children in a colourful English class with two camp instructors", caption: "English class with our instructors", category: "Classroom" },
  { src: IMAGES.campCookingClass, alt: "Smiling children in a cooking class in a rustic wooden kitchen", caption: "Cooking class in the camp kitchen", category: "Cooking" },
  { src: IMAGES.campPaintingHat, alt: "A young girl painting a traditional conical hat", caption: "Painting a traditional caping hat", category: "Art & Culture" },
  { src: IMAGES.campFeedingTurtles, alt: "Children feeding turtles outdoors", caption: "Feeding the turtles", category: "Outdoor" },
  { src: IMAGES.campCreativeWorkshop, alt: "Children at an open-air creative workshop", caption: "Open-air creative workshop", category: "Art & Culture" },
  { src: IMAGES.campKitchenAprons, alt: "Children in green aprons in a wooden kitchen", caption: "Little chefs in green aprons", category: "Cooking" },
  { src: IMAGES.campStrawberryKiosk, alt: "A wooden kiosk selling fresh strawberries", caption: "Fresh strawberries from Pacet", category: "Outdoor" },
  { src: IMAGES.campBasketFloral, alt: "Floral painting on a woven prang-grass basket", caption: "Floral painting on a woven basket", category: "Art & Culture" },
  { src: IMAGES.campPaintingOutdoor, alt: "Children painting together outdoors", caption: "Outdoor painting session", category: "Art & Culture" },
  { src: IMAGES.campBasketBamboo, alt: "Colourful painting on a bamboo basket", caption: "Colourful bamboo basket art", category: "Art & Culture" },
  { src: IMAGES.campGroupWide, alt: "Wide shot of the camp group with the banner in front of the wooden meeting hall", caption: "The whole camp family", category: "Events", ratio: "16/9" },
  { src: IMAGES.campGroupEntrance, alt: "Camp group at the pavilion entrance with hanging lanterns", caption: "At the pavilion entrance", category: "Events", ratio: "16/9" },
  { src: IMAGES.campGroupSunny, alt: "Camp group photo in the sunny courtyard", caption: "Sunny day at camp", category: "Events", ratio: "16/9" },
  { src: IMAGES.campBrightClassWorkshop, alt: "Children at a creative workshop in a bright classroom", caption: "Creative workshop in a bright classroom", category: "Classroom" },
  { src: IMAGES.campEcoWorkshopGroup, alt: "Happy group photo at the eco-creative workshop", caption: "Eco-creative workshop group", category: "Art & Culture" },
  { src: IMAGES.campKitchenStrawberries, alt: "Fresh strawberries in a wooden kitchen", caption: "Strawberries ready for cooking class", category: "Cooking" },
  { src: IMAGES.campKitchenFruit, alt: "Strawberries and bananas in a rustic kitchen", caption: "Fruit prep in the rustic kitchen", category: "Cooking" },
  { src: IMAGES.campPicnicGirls, alt: "Four girls enjoying a cheerful picnic outdoors", caption: "Cheerful picnic time", category: "Outdoor" },
  { src: IMAGES.campTeensDoorway, alt: "Four teenagers smiling in a doorway at camp", caption: "Camp friends", category: "Events" },
  { src: IMAGES.campGroupShelter, alt: "Camp group photo under a rural shelter", caption: "Group photo under the shelter", category: "Events" },
  { src: IMAGES.campStorytellingPicnic, alt: "Children and parents reading storybooks together on mats by the water, with mountains behind", caption: "Storytelling picnic by the water", category: "Events", ratio: "16/9" },
  { src: IMAGES.campEcoFestival, alt: "Colourful tent and welcome gate at the environmental literacy camp festival", caption: "Environmental literacy festival", category: "Events", ratio: "16/9" },
  { src: IMAGES.campFlyingfoxRed, alt: "A child in a red helmet riding the flying fox", caption: "Flying fox adventure", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campFlyingfoxSky, alt: "A child gliding on the flying fox high against the sky", caption: "Gliding through the sky", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campFlyingfoxYellow, alt: "A smiling child in a yellow helmet on the flying fox", caption: "Brave smiles on the flying fox", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campStrawberryClass, alt: "Young children in pink uniforms learning in the strawberry garden", caption: "Strawberry garden class", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campPlantingWorkshop, alt: "Children planting strawberry seedlings with their teacher", caption: "Planting strawberry seedlings", category: "Outdoor" },
  { src: IMAGES.campTomatoGarden, alt: "Students walking through rows of tomato plants on a field trip", caption: "Field trip to the tomato garden", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campTotebagPainting, alt: "Children painting strawberry designs on tote bags", caption: "Painting our own tote bags", category: "Art & Culture", ratio: "16/9" },
  { src: IMAGES.campTeamCircle, alt: "A large team-building circle in the park during an outbound session", caption: "Team-building circle", category: "Events", ratio: "16/9" },
  { src: IMAGES.campRiverSplash, alt: "Laughing children splashing in a shallow forest stream", caption: "Splashing fun in the stream", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campCircleGame, alt: "Young children holding hands in a big circle game on the grass with mountains behind", caption: "Circle games on the grass", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campCookingDemo, alt: "Children watching an outdoor cooking demonstration with a steaming wok", caption: "Outdoor cooking demonstration", category: "Cooking", ratio: "3/4" },
  { src: IMAGES.campGroupMountain, alt: "Large group of campers in orange shirts posing with a mountain backdrop", caption: "Camp friends in front of the mountain", category: "Events", ratio: "16/9" },
  { src: IMAGES.campGardeningClass, alt: "Children in green uniforms learning about strawberry plants at Pondok Strawberry", caption: "Gardening class at Pondok Strawberry", category: "Outdoor" },
  { src: IMAGES.campBlindfoldGame, alt: "Blindfolded children guiding each other in a team game on the grass", caption: "Blindfold team challenge", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campStagePerformance, alt: "Children in leaf costumes performing together on stage", caption: "Stage performance in costume", category: "Events", ratio: "16/9" },
  { src: IMAGES.campRiverTubing, alt: "A child in an orange life jacket floating on a river tube", caption: "River tubing adventure", category: "Outdoor" },
  { src: IMAGES.campGoatFarm, alt: "Children in yellow uniforms visiting goats at a farm", caption: "Visiting the goat farm", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campRopeBridge, alt: "Children in yellow hats crossing a rope bridge at the playground", caption: "Crossing the rope bridge", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campTomatoPicking, alt: "Children picking tomatoes among the plants", caption: "Picking fresh tomatoes", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campVegetableHarvest, alt: "Students and teachers harvesting corn and vegetables in a mountain garden", caption: "Harvest day in the vegetable garden", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campForestRopeCourse, alt: "Children crossing a rope bridge course between pine trees", caption: "Rope course in the pine forest", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campStrawberryLesson, alt: "Children in yellow headscarves learning about strawberry plants with their teachers", caption: "Strawberry garden lesson", category: "Outdoor", ratio: "16/9" },
  { src: IMAGES.campTomatoGardenKids, alt: "Young children in yellow and red uniforms walking through the tomato garden", caption: "Exploring the tomato garden", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campFlyingfoxLanding, alt: "A smiling child in a red helmet landing from the flying fox", caption: "Happy landing on the flying fox", category: "Outdoor", ratio: "3/4" },
  { src: IMAGES.campLeafCrowns, alt: "Children wearing crowns made of leaves at a nature-themed event", caption: "Nature parade with leaf crowns", category: "Events", ratio: "3/4" },
  { src: IMAGES.campGlassPainting, alt: "A young girl carefully painting a glass outdoors", caption: "Painting glass in the garden", category: "Art & Culture", ratio: "3/4" },
  { src: IMAGES.campGrassArt, alt: "Two girls making art on paper on the grass", caption: "Art time on the grass", category: "Art & Culture", ratio: "16/9" },
  { src: IMAGES.campCrownFitting, alt: "A teacher fitting a crown of leaves and jasmine flowers on a child", caption: "Getting ready for the nature parade", category: "Events", ratio: "16/9" },
];

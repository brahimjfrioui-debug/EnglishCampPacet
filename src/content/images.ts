// Temporary photography. Replace files in src/assets with real school photos
// (keep the same file names) and every page updates automatically.
import heroStudents from "@/assets/hero-students.jpg";
import heroBackdrop from "@/assets/hero-backdrop.jpg";
import programKids from "@/assets/program-kids.jpg";
import programTeens from "@/assets/program-teens.jpg";
import programAdults from "@/assets/program-adults.jpg";
import activityOutdoor from "@/assets/activity-outdoor.jpg";
import activityCampfire from "@/assets/activity-campfire.jpg";
import activityGroup from "@/assets/activity-group.jpg";
import facilityLibrary from "@/assets/facility-library.jpg";
import facilityCampus from "@/assets/facility-campus.jpg";
// Real camp photos (CDN-hosted).
import campGroupBanner from "@/assets/camp-group-banner.jpg.asset.json";
import campGroupPendopo from "@/assets/camp-group-pendopo.jpg.asset.json";
import campGroupSunny from "@/assets/camp-group-sunny.jpg.asset.json";
import campBasketFloral from "@/assets/camp-basket-floral.webp.asset.json";
import campCreativeWorkshop from "@/assets/camp-creative-workshop.webp.asset.json";
import campEnglishClass from "@/assets/camp-english-class.webp.asset.json";
import campFeedingTurtles from "@/assets/camp-feeding-turtles.webp.asset.json";
import campCookingClass from "@/assets/camp-cooking-class.webp.asset.json";
import campStrawberryKiosk from "@/assets/camp-strawberry-kiosk.webp.asset.json";
import campKitchenAprons from "@/assets/camp-kitchen-aprons.webp.asset.json";
import campPaintingHat from "@/assets/camp-painting-hat.webp.asset.json";
import campPaintingOutdoor from "@/assets/camp-painting-outdoor.webp.asset.json";
import campBasketBamboo from "@/assets/camp-basket-bamboo.webp.asset.json";
import campGroupWide from "@/assets/camp-group-wide.png.asset.json";
import campGroupEntrance from "@/assets/camp-group-entrance.png.asset.json";
import campKitchenStrawberries from "@/assets/camp-kitchen-strawberries.webp.asset.json";
import campKitchenFruit from "@/assets/camp-kitchen-fruit.webp.asset.json";
import campTeensDoorway from "@/assets/camp-teens-doorway.webp.asset.json";
import campGroupShelter from "@/assets/camp-group-shelter.webp.asset.json";
import campEcoWorkshopGroup from "@/assets/camp-eco-workshop-group.webp.asset.json";
import campBrightClassWorkshop from "@/assets/camp-bright-class-workshop.webp.asset.json";
import campPicnicGirls from "@/assets/camp-picnic-girls.webp.asset.json";
import campStorytellingPicnic from "@/assets/camp-storytelling-picnic.png.asset.json";
import campEcoFestival from "@/assets/camp-eco-festival.png.asset.json";
import campFlyingfoxRed from "@/assets/camp-flyingfox-red.jpg.asset.json";
import campFlyingfoxSky from "@/assets/camp-flyingfox-sky.jpg.asset.json";
import campFlyingfoxYellow from "@/assets/camp-flyingfox-yellow.jpg.asset.json";
import campStrawberryClass from "@/assets/camp-strawberry-class.webp.asset.json";
import campPlantingWorkshop from "@/assets/camp-planting-workshop.webp.asset.json";
import campTomatoGarden from "@/assets/camp-tomato-garden.webp.asset.json";
import campTotebagPainting from "@/assets/camp-totebag-painting.webp.asset.json";
import campTeamCircle from "@/assets/camp-team-circle.webp.asset.json";
import campRiverSplash from "@/assets/camp-river-splash.webp.asset.json";
import campCircleGame from "@/assets/camp-circle-game.png.asset.json";
import campCookingDemo from "@/assets/camp-cooking-demo.webp.asset.json";
import campGroupMountain from "@/assets/camp-group-mountain.png.asset.json";
import campGardeningClass from "@/assets/camp-gardening-class.webp.asset.json";
import campBlindfoldGame from "@/assets/camp-blindfold-game.jpg.asset.json";
import campStagePerformance from "@/assets/camp-stage-performance.jpg.asset.json";
import campRiverTubing from "@/assets/camp-river-tubing.jpg.asset.json";
import campGoatFarm from "@/assets/camp-goat-farm.jpg.asset.json";
import campRopeBridge from "@/assets/camp-rope-bridge.jpg.asset.json";
import campTomatoPicking from "@/assets/camp-tomato-picking.jpg.asset.json";
import campVegetableHarvest from "@/assets/camp-vegetable-harvest.jpg.asset.json";
import campForestRopeCourse from "@/assets/camp-forest-rope-course.jpg.asset.json";
import campStrawberryLesson from "@/assets/camp-strawberry-lesson.jpg.asset.json";
import campTomatoGardenKids from "@/assets/camp-tomato-garden-kids.jpg.asset.json";
import campFlyingfoxLanding from "@/assets/camp-flyingfox-landing.jpg.asset.json";
import campLeafCrowns from "@/assets/camp-leaf-crowns.jpg.asset.json";
import campGlassPainting from "@/assets/camp-glass-painting.jpg.asset.json";
import campGrassArt from "@/assets/camp-grass-art.jpg.asset.json";
import campCrownFitting from "@/assets/camp-crown-fitting.jpg.asset.json";

export const IMAGES = {
  heroStudents,
  heroBackdrop,
  programKids,
  programTeens,
  programAdults,
  activityOutdoor,
  activityCampfire,
  activityGroup,
  facilityLibrary,
  facilityCampus,
  campGroupBanner: campGroupBanner.url,
  campGroupPendopo: campGroupPendopo.url,
  campGroupSunny: campGroupSunny.url,
  campKitchenStrawberries: campKitchenStrawberries.url,
  campKitchenFruit: campKitchenFruit.url,
  campTeensDoorway: campTeensDoorway.url,
  campGroupShelter: campGroupShelter.url,
  campEcoWorkshopGroup: campEcoWorkshopGroup.url,
  campBrightClassWorkshop: campBrightClassWorkshop.url,
  campPicnicGirls: campPicnicGirls.url,
  campBasketFloral: campBasketFloral.url,
  campCreativeWorkshop: campCreativeWorkshop.url,
  campEnglishClass: campEnglishClass.url,
  campFeedingTurtles: campFeedingTurtles.url,
  campCookingClass: campCookingClass.url,
  campStrawberryKiosk: campStrawberryKiosk.url,
  campKitchenAprons: campKitchenAprons.url,
  campPaintingHat: campPaintingHat.url,
  campPaintingOutdoor: campPaintingOutdoor.url,
  campBasketBamboo: campBasketBamboo.url,
  campGroupWide: campGroupWide.url,
  campGroupEntrance: campGroupEntrance.url,
  campStorytellingPicnic: campStorytellingPicnic.url,
  campEcoFestival: campEcoFestival.url,
  campFlyingfoxRed: campFlyingfoxRed.url,
  campFlyingfoxSky: campFlyingfoxSky.url,
  campFlyingfoxYellow: campFlyingfoxYellow.url,
  campStrawberryClass: campStrawberryClass.url,
  campPlantingWorkshop: campPlantingWorkshop.url,
  campTomatoGarden: campTomatoGarden.url,
  campTotebagPainting: campTotebagPainting.url,
  campTeamCircle: campTeamCircle.url,
  campRiverSplash: campRiverSplash.url,
  campCircleGame: campCircleGame.url,
  campCookingDemo: campCookingDemo.url,
  campGroupMountain: campGroupMountain.url,
  campGardeningClass: campGardeningClass.url,
  campBlindfoldGame: campBlindfoldGame.url,
  campStagePerformance: campStagePerformance.url,
  campRiverTubing: campRiverTubing.url,
  campGoatFarm: campGoatFarm.url,
  campRopeBridge: campRopeBridge.url,
  campTomatoPicking: campTomatoPicking.url,
  campVegetableHarvest: campVegetableHarvest.url,
  campForestRopeCourse: campForestRopeCourse.url,
  campStrawberryLesson: campStrawberryLesson.url,
  campTomatoGardenKids: campTomatoGardenKids.url,
  campFlyingfoxLanding: campFlyingfoxLanding.url,
  campLeafCrowns: campLeafCrowns.url,
  campGlassPainting: campGlassPainting.url,
  campGrassArt: campGrassArt.url,
  campCrownFitting: campCrownFitting.url,
};

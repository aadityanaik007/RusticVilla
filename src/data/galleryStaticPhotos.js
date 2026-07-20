// Photos that ship baked into the frontend bundle (not the CMS-managed ones
// added via the Admin > Gallery tab). Each entry has a stable `id` so the
// Admin panel can let you hide/restore individual built-in photos without
// touching this file — the hidden list is stored server-side under the
// "gallery.hidden_static_ids" content key.

// Gallery Images
import droneShot from "../images/new_images/drone_shot.jpeg";
import bonfire1 from "../images/bonfire/bonfire-1.jpg";
import bonfireGathering from "../images/bonfire/people-get-togetther.jpeg";
import dinningTable from "../images/GalleryImages/diningTable.jpeg";
import group1 from "../images/GalleryImages/group1.jpeg";
import kid1 from "../images/GalleryImages/kid1.jpeg";
import outdoor1 from "../images/GalleryImages/outdoor1.jpeg";
import outdoor2 from "../images/GalleryImages/outdoor2.jpeg";
import outdoor3 from "../images/GalleryImages/outdoor3.jpeg";
import outdoor4 from "../images/GalleryImages/outdoor4.jpeg";
import outdoor5 from "../images/GalleryImages/outdoor5.jpeg";
import outdoor6 from "../images/GalleryImages/outdoor6.jpeg";
import poolAerial from "../images/outside/pool.jpg";
import poolEvening from "../images/outside/pool-2.jpg";
import poolNight from "../images/outside/pool-3.jpg";
import swing from "../images/outside/swing.jpg";
import tent1 from "../images/GalleryImages/tent1.jpeg";
import tent2 from "../images/GalleryImages/tent2.jpeg";
// Villa Images
import bedroom1 from "../images/villa_images/bedroom1.jpeg";
import blackSheetBDR from "../images/villa_images/blackSheetBDR.jpeg";
import foodPlate from "../images/food/food-in-a-plate.jpeg";
import foodMenu from "../images/food/food-menu.jpg";
import lightBGBedroom from "../images/villa_images/lightBGBedroom.jpeg";
import livingRoom from "../images/villa_images/living_room.jpeg";
// First Floor Images
import animals from "../images/FirstFloor/animals.jpeg";
import doll2 from "../images/FirstFloor/doll2.jpeg";
import doll3 from "../images/FirstFloor/doll3.jpeg";
import doll4 from "../images/FirstFloor/doll4.jpeg";
import dolls from "../images/FirstFloor/dolls.jpeg";
import miniatures from "../images/FirstFloor/miniatures.jpeg";
import teddy2 from "../images/FirstFloor/teddy2.jpeg";
import teddybear from "../images/FirstFloor/teddybear.jpeg";

export const STATIC_GALLERY_PHOTOS = [
  // Interior Spaces
  { id: "livingRoom", src: livingRoom, alt: "Luxurious Living Room", category: "interior" },
  { id: "lightBGBedroom", src: lightBGBedroom, alt: "Bright & Airy Bedroom", category: "interior" },
  { id: "blackSheetBDR", src: blackSheetBDR, alt: "Elegant Master Bedroom", category: "interior" },
  { id: "bedroom1", src: bedroom1, alt: "Comfortable Guest Room", category: "interior" },
  { id: "dinningTable", src: dinningTable, alt: "Elegant Dining Area", category: "interior" },

  // Outdoor Spaces
  { id: "droneShot", src: droneShot, alt: "Aerial View of the Pool & Villa Grounds", category: "outdoor" },
  { id: "outdoor1", src: outdoor1, alt: "Beautiful Pool Area", category: "outdoor" },
  { id: "outdoor2", src: outdoor2, alt: "Garden & Landscape", category: "outdoor" },
  { id: "outdoor3", src: outdoor3, alt: "Outdoor Seating Area", category: "outdoor" },
  { id: "outdoor4", src: outdoor4, alt: "Villa Exterior View", category: "outdoor" },
  { id: "outdoor5", src: outdoor5, alt: "Peaceful Garden Space", category: "outdoor" },
  { id: "outdoor6", src: outdoor6, alt: "Natural Surroundings", category: "outdoor" },
  { id: "poolAerial", src: poolAerial, alt: "Aerial View of the Private Pool", category: "outdoor" },
  { id: "poolEvening", src: poolEvening, alt: "Pool Deck at Dusk", category: "outdoor" },
  { id: "poolNight", src: poolNight, alt: "Pool Area Lit Up at Night", category: "outdoor" },
  { id: "swing", src: swing, alt: "Garden Swing at Sunset", category: "outdoor" },

  // Activities & Experiences
  { id: "bonfire1", src: bonfire1, alt: "Bonfire Night at Rustic Farm Villaa", category: "activities" },
  { id: "bonfireGathering", src: bonfireGathering, alt: "Birthday Celebration Around the Bonfire Hut", category: "activities" },
  { id: "tent1", src: tent1, alt: "Camping Experience", category: "activities" },
  { id: "tent2", src: tent2, alt: "Outdoor Adventures", category: "activities" },
  { id: "group1", src: group1, alt: "Group Gatherings", category: "activities" },
  { id: "kid1", src: kid1, alt: "Family Fun Activities", category: "activities" },

  // Dining & Culinary
  {
    id: "foodPlate",
    src: foodPlate,
    alt: "Homestyle Thali Meal",
    category: "dining",
    imageFit: "contain",
    bgGradient: "linear-gradient(135deg, rgb(230, 221, 210) 0%, rgb(120, 100, 101) 100%)",
  },
  { id: "foodMenu", src: foodMenu, alt: "Sample Menu at Rustic Farm Villaa", category: "dining" },

  // First Floor - Toys & Decorations
  { id: "teddybear", src: teddybear, alt: "Adorable Teddy Bear Collection", category: "firstfloor" },
  { id: "teddy2", src: teddy2, alt: "Plush Teddy Bears", category: "firstfloor" },
  { id: "dolls", src: dolls, alt: "Charming Doll Display", category: "firstfloor" },
  { id: "doll2", src: doll2, alt: "Decorative Dolls", category: "firstfloor" },
  { id: "doll3", src: doll3, alt: "Traditional Doll Collection", category: "firstfloor" },
  { id: "doll4", src: doll4, alt: "Artistic Doll Arrangement", category: "firstfloor" },
  { id: "animals", src: animals, alt: "Animal Figurines", category: "firstfloor" },
  { id: "miniatures", src: miniatures, alt: "Miniature Collection", category: "firstfloor" },
];

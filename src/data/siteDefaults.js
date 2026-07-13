// Canonical fallback content for the site — every value here is exactly what was
// hardcoded in the page components before the admin content system existed.
// Both the pages (as a fallback when the CMS has no override) and the Admin
// "Site Content" tab (as the pre-filled starting point for each field) import
// from this single file so the two can never drift apart.

import homeHero from "../images/villa_images/living_room.jpeg";
import homeAbout from "../images/villa_images/blackSheetBDR.jpeg";
import homeTour from "../images/villa_images/lightBGBedroom.jpeg";
import aboutStory from "../images/GalleryImages/outdoor2.jpeg";
import aboutVintage from "../images/villa_images/lightBGBedroom.jpeg";
import stayHero from "../images/new_images/drone_shot.jpeg";
import stayRoomMaster from "../images/villa_images/blackSheetBDR.jpeg";
import stayRoomBright from "../images/villa_images/lightBGBedroom.jpeg";
import stayAnnexe from "../images/GalleryImages/outdoor6.jpeg";
import stayCamping from "../images/GalleryImages/tent2.jpeg";
import stayAttic1 from "../images/FirstFloor/teddybear.jpeg";
import stayAttic2 from "../images/FirstFloor/dolls.jpeg";
import stayAttic3 from "../images/FirstFloor/miniatures.jpeg";
import stayAttic4 from "../images/FirstFloor/animals.jpeg";
import stayDining from "../images/GalleryImages/diningTable.jpeg";
import packagesWeekend from "../images/GalleryImages/tent1.jpeg";
import packagesCelebration from "../images/GalleryImages/group1.jpeg";

export const TEXT_DEFAULTS = {
  "contact.phone_front_desk": "+91 8108266499",
  "contact.phone_reservations": "+91 8108266399",
  "contact.whatsapp_number": "918108266499",
  "contact.email": "info@rusticfarmvilla.com",
  "contact.address":
    "Near Mandawa Grampanchayat, Mandva, Wada, Maharashtra 421303, India",
  "contact.instagram_url": "https://www.instagram.com/rusticfarmvilla/",
  "contact.facebook_url":
    "https://www.facebook.com/profile.php?id=61580996151085",
  "contact.maps_url":
    "https://www.google.com/maps/place/Rustic+Farm+Villa/@19.7019817,73.2093252,19z/data=!4m10!1m2!2m1!1srustic+farm+villa+wada+mandwa!3m6!1s0x3be771fbc5679b97:0xe3defa4d2ebf6ee5!8m2!3d19.7019817!4d73.2099689!15sCh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YVofIh1ydXN0aWMgZmFybSB2aWxsYSB3YWRhIG1hbmR3YZIBBXZpbGxhmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJXY1hONmNrdG5FQUXgAQA!16s%2Fg%2F11lcfy4621?entry=ttu",

  "home.hero.quote": "Entire place just for you",
  "home.about.description":
    "Nestled in the heart of nature, Rustic Farm Villa offers an escape from the ordinary. Our thoughtfully designed spaces blend rustic charm with modern luxury, creating an atmosphere of tranquil sophistication that rejuvenates the soul.",
  "home.tour.description":
    "Experience the authentic charm of rural Maharashtra at Rustic Farm Villa. Discover serene landscapes, traditional architecture, and modern comforts that create unforgettable memories in the heart of Mandwa, Wada.",
  "home.amenities.description":
    "Nestled in the serene hills of Mandwa, Wada, our villa offers a perfect escape from city life. Surrounded by lush greenery and scenic landscapes, experience authentic rural charm with modern luxury amenities.",

  "about.hero.subtitle": "Where nature meets luxury",
  "about.story.paragraph1":
    "Welcome to our enchanting villa nestled in the serene outskirts of Wada, Palghar, Maharashtra. Surrounded by the breathtaking beauty of nature, our villa is a hidden gem situated amidst lush greenery and majestic trees.",
  "about.story.paragraph2":
    "The picturesque location provides a tranquil escape from the hustle and bustle of city life, offering a perfect retreat for those seeking peace and relaxation.",
  "about.vintage.paragraph1":
    "As you step into our vintage-inspired villa, you'll be captivated by its timeless charm. The architecture exudes a classic elegance, creating an atmosphere of warmth and nostalgia.",
  "about.vintage.paragraph2":
    "The villa is designed to seamlessly blend with its natural surroundings, offering guests a unique and immersive experience. With spacious interiors and thoughtful detailing, every corner tells a story.",

  "stay.hero.subtitle":
    "Thoughtfully designed rooms blending rustic charm with modern comfort",
  "stay.rooms.intro":
    "Two beautifully appointed bedrooms, each with its own character, ready to host families, couples, and groups alike.",
  "stay.room.master.desc":
    "An elegant master suite with plush bedding, a dark-toned aesthetic, and modern comforts for a restful night.",
  "stay.room.bright.desc":
    "Sunlit and spacious, this bedroom blends rustic textures with a calm, contemporary palette.",
  "stay.annexe.description":
    "Set slightly apart from the main house, quieter and more private. Built for slow evenings — think low lighting, a good sound system, and a window seat made for reading or doing absolutely nothing. In winter, this is where guests curl up with a hot cup of chai while a playlist runs low and easy in the background. In summer, it's the cool retreat you escape to after a day at the pool.",
  "stay.camping.description":
    "For guests who'd rather sleep with canvas over their heads than a ceiling. Tents are pitched at the edge of the clearing — close enough to the farmhouse for a warm meal and a hot shower, close enough to the treeline to fall asleep to actual forest sounds. A firepit evening right outside your tent is basically mandatory.",
  "stay.attic.description":
    "Climb up to our beloved mezzanine attic — guests often say it brings back childhood memories of a cozy treehouse. Filled with soft toys, dolls, and miniature curios, it's a whimsical retreat for kids and the young at heart, and a favourite photo spot for everyone.",
  "stay.dining.description":
    "Gather around our dining table for home-style Maharashtrian and North Indian meals, prepared fresh with local ingredients — breakfast, lunch, and dinner included in your stay.",

  "packages.weekend.tagline": "Overnight stay with all the essentials",
  "packages.weekend.price": "₹1,800 per person",
  "packages.celebration.tagline":
    "Birthdays, anniversaries & special occasions",

  "footer.description":
    "Escape to luxury in the heart of nature. Where rustic charm meets modern elegance for an unforgettable experience.",
};

export const IMAGE_DEFAULTS = {
  "home.hero": { src: homeHero, alt: "Rustic Farm Villa" },
  "home.about": { src: homeAbout, alt: "Luxury Bedroom" },
  "home.tour": { src: homeTour, alt: "Bright, airy bedroom at Rustic Farm Villa" },
  "about.story": { src: aboutStory, alt: "Lush garden surroundings" },
  "about.vintage": { src: aboutVintage, alt: "Comfortable Living" },
  "stay.hero": {
    src: stayHero,
    alt: "Aerial view of the pool and grounds at Rustic Farm Villa",
  },
  "stay.room.master": { src: stayRoomMaster, alt: "Master Bedroom" },
  "stay.room.bright": { src: stayRoomBright, alt: "Bright & Airy Bedroom" },
  "stay.annexe": { src: stayAnnexe, alt: "The Hearth Annexe lounge" },
  "stay.camping": { src: stayCamping, alt: "Camping tent at the edge of the clearing" },
  "stay.attic.1": { src: stayAttic1, alt: "Teddy bear collection in the attic" },
  "stay.attic.2": { src: stayAttic2, alt: "Doll display in the attic" },
  "stay.attic.3": { src: stayAttic3, alt: "Miniature curio collection" },
  "stay.attic.4": { src: stayAttic4, alt: "Animal figurine collection" },
  "stay.dining": { src: stayDining, alt: "Elegant dining area" },
  "packages.weekend": { src: packagesWeekend, alt: "Weekend Getaway" },
  "packages.celebration": { src: packagesCelebration, alt: "Celebration Package" },
};

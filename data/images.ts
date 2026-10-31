import { msg } from "@/i18n/locales";
/**
 * Central image registry. Swap any `src` for your own photography later —
 * every page references images by key, never by URL.
 * Sources: Unsplash (free to use under the Unsplash License). PLACEHOLDERS.
 */

export interface SiteImage {
  src: string;
  alt: string;
}

const u = (id: string) =>
  process.env.NEXT_PUBLIC_PREVIEW_EXPORT === "1"
    ? `/img/${id}.jpg` // static preview build bundles local copies (scripts/build-preview.mjs)
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export const images = {
  "hero-cenote": { src: u("photo-1546838849-6eb6269ae2db"), alt: msg("Turquoise water inside a limestone cenote cave") },
  "cenote-1": { src: u("photo-1719941463960-f3310fe64e46"), alt: msg("Blue cenote pool inside a cave with roots and greenery hanging from the opening") },
  "cenote-2": { src: u("photo-1721066799058-53bcf5c8b16a"), alt: msg("Cave chamber filled with clear blue cenote water") },
  "cenote-3": { src: u("photo-1665617366582-ad4847f7c439"), alt: msg("Open-air cenote ringed by jungle trees") },
  "cenote-swim": { src: u("photo-1520974822564-9b91874afe9c"), alt: msg("Woman swimming in a cenote beneath a limestone cave ceiling") },
  "mexico-city": { src: u("photo-1580934738416-ad531f2920f7"), alt: msg("Colorful paper umbrellas and red lanterns above a narrow street in Mexico City") },
  "mexico-city-2": { src: u("photo-1574493264149-87880133a2ba"), alt: msg("Angel of Independence monument rising above Mexico City") },
  "tulum": { src: u("photo-1665618980645-ca9cd5e68508"), alt: msg("Ancient Maya castle ruin on a rocky Caribbean shore at Tulum") },
  "tulum-2": { src: u("photo-1645557180229-98bfc29dbdbf"), alt: msg("Cliff above the ocean with a Maya watchtower in the distance at Tulum") },
  "oaxaca": { src: u("photo-1686448921254-b326a7914d2f"), alt: msg("Oaxaca street lined with colorful flags and buildings") },
  "oaxaca-2": { src: u("photo-1660670173026-ec491dd3dd1a"), alt: msg("Domed colonial building and courtyard in Oaxaca with people walking") },
  "cancun": { src: u("photo-1630252421399-ddde79af47b3"), alt: msg("Aerial view of beachgoers on the Cancun shoreline") },
  "los-cabos": { src: u("photo-1562095241-8c6714fd4178"), alt: msg("The Arch of Cabo San Lucas rising from the sea at low sun") },
  "los-cabos-2": { src: u("photo-1587334408697-4f08f6d1c726"), alt: msg("Brown rock formations on the shore of Los Cabos under a blue sky") },
  "san-miguel": { src: u("photo-1739582767008-faa274e18ac2"), alt: msg("Narrow street in San Miguel de Allende with the town spread out beyond") },
  "san-miguel-2": { src: u("photo-1717654543196-4d6826ec4bb8"), alt: msg("Cobblestone street in San Miguel de Allende hung with colorful flags") },
  "merida": { src: u("photo-1700264120929-11e7420a7082"), alt: msg("Cobblestone street lined with yellow colonial buildings in Merida") },
  "valladolid": { src: u("photo-1695385246289-2e7d2ab5e16b"), alt: msg("Street of colorful buildings and flags in Valladolid, Yucatan") },
  "holbox": { src: u("photo-1646703186183-f367d1b070e5"), alt: msg("Swings hanging over shallow turquoise water at Holbox") },
  "isla-mujeres": { src: u("photo-1585324526467-cd7de921027a"), alt: msg("White sailboat on the Caribbean off Isla Mujeres") },
  "bacalar": { src: u("photo-1661806327865-1cfc6d50a1bb"), alt: msg("Wide Bacalar lagoon with a beach and houses along the shore") },
  "bacalar-2": { src: u("photo-1597030608130-ed3208658e68"), alt: msg("Wooden house standing over the water of Bacalar lagoon") },
  "playa-del-carmen": { src: u("photo-1640617547871-15e4fb41d0c5"), alt: msg("Sandy Playa del Carmen beach lined with palm trees and lawn chairs") },
  "puebla": { src: u("photo-1653661279002-692227e35f0f"), alt: msg("Street of colorful buildings with outdoor tables in Puebla") },
  "guanajuato": { src: u("photo-1579116316943-8c5b40fa63f0"), alt: msg("Hillside city of Guanajuato with mountains behind") },
  "puerto-vallarta": { src: u("photo-1645556655631-9764270324fa"), alt: msg("Aerial view of a Puerto Vallarta beach with the city behind") },
  "puerto-escondido": { src: u("photo-1727118576865-30f7bc1325ca"), alt: msg("Person walking along a Puerto Escondido beach carrying a surfboard") },
  "chiapas": { src: u("photo-1646808000803-a6273bb358b5"), alt: msg("Waterfall tumbling into turquoise water in Chiapas") },
  "copper-canyon": { src: u("photo-1565558810352-d2d62b70aa41"), alt: msg("Rugged brown mountains of the Copper Canyon region") },
  "copper-canyon-train": { src: u("photo-1626122489195-4c4debefb14d"), alt: msg("Black train moving along tracks in northern Mexico") },
  "ruins-chichen-itza": { src: u("photo-1518638150340-f706e86654de"), alt: msg("El Castillo pyramid at Chichen Itza") },
  "ruins-palenque": { src: u("photo-1658012268321-4502231e2fcc"), alt: msg("Stone temple with steps rising from the jungle at Palenque") },
  "ruins-tulum": { src: u("photo-1523995909020-37bcf4bbbc31"), alt: msg("Weathered stone Maya building at the Tulum ruins") },
  "mezcal": { src: u("photo-1598294032141-b4818a331ad7"), alt: msg("Bottle of artisanal mezcal resting on gravel") },
  "mexican-food": { src: u("photo-1700625916627-16ad4fb0553c"), alt: msg("Table spread with plates of Mexican dishes and a bowl of guacamole") },
  "tacos": { src: u("photo-1599974579688-8dbdd335c77f"), alt: msg("Three beef tacos topped with chopped onion and fresh cilantro") },
  "market": { src: u("photo-1584208632661-f8db31bb6489"), alt: msg("Shoppers browsing stalls at a busy Mexican market") },
  "day-of-the-dead": { src: u("photo-1601325979086-d54da2c7419c"), alt: msg("White and red ceramic skull figurine for Day of the Dead") },
  "whale-shark": { src: u("photo-1540202404-b2979d19ed37"), alt: msg("Whale shark with white spots swimming in deep blue water") },
  "whale": { src: u("photo-1568430462989-44163eb1752f"), alt: msg("Humpback whale breaching the ocean surface in a burst of spray") },
  "monarch": { src: u("photo-1562262560-d5c98204f981"), alt: msg("Monarch butterfly perched on an orange flower") },
  "honeymoon": { src: u("photo-1519307212971-dd9561667ffb"), alt: msg("Couple silhouetted on the beach watching the sunset") },
  "family-beach": { src: u("photo-1475503572774-15a45e5d60b9"), alt: msg("Parents and child holding hands on the seashore") },
  "hacienda": { src: u("photo-1698110742784-dfff8ba3ae9f"), alt: msg("Archway leading to a historic hacienda building with a clock") },
  "hacienda-pool": { src: u("photo-1693934304978-22274e6a3276"), alt: msg("Large swimming pool beside a lush green hillside") },
  "boutique-hotel": { src: u("photo-1611892440504-42a792e24d32"), alt: msg("Boutique hotel bedroom with wooden bed, teal pillows and garden view") },
  "beach-resort": { src: u("photo-1742171046853-0961eabdc7d4"), alt: msg("Luxury resort pool surrounded by palm trees") },
  "eco-lodge": { src: u("photo-1709220762690-61f6b533c295"), alt: msg("Aerial view of a lodge set in the middle of a forest") },
  "hotel-room": { src: u("photo-1631049307264-da0ec9d70304"), alt: msg("Bright hotel room with crisp white bed linen") },
  "wellness": { src: u("photo-1600334089648-b0d9d3028eb2"), alt: msg("Spa treatment with smooth black massage stones") },
  "surf": { src: u("photo-1559627755-42212e5c5fdf"), alt: msg("Surfer paddling on a board in turquoise ocean water") },
  "sea-of-cortez": { src: u("photo-1647636739924-de2ae01f233a"), alt: msg("Calm Sea of Cortez water with a mountain rising behind") },
  "yucatan-guide-cover": { src: u("photo-1568402102990-bc541580b59f"), alt: msg("El Castillo pyramid at Chichen Itza under a blue sky") },
  "talavera": { src: u("photo-1601158582515-b06582f67d16"), alt: msg("Hand-painted floral Talavera ceramic bowl") },
  "textile": { src: u("photo-1630084305900-b297cff3a608"), alt: msg("Blue, red and yellow handwoven Mexican textile") },
  "beach": { src: u("photo-1506953823976-52e1fdc0149a"), alt: msg("Palm tree leaning over a quiet tropical shore") },
  "jungle": { src: u("photo-1704502790544-e59a8b1ed49c"), alt: msg("Thatched hut tucked into the jungle") },
  "colonial-street": { src: u("photo-1604436467632-895049fa868b"), alt: msg("Brick colonial street with potted plants along the side") },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

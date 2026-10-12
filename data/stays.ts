/**
 * Stays — FICTIONAL PLACEHOLDER PROPERTIES.
 * None of these hotels exist. They illustrate the kind of places our specialists
 * book and must be replaced with real, contracted properties before launch.
 */

import type { Stay } from "./types";

export const stays: Stay[] = [
  {
    slug: "hacienda-sac-be",
    name: "Hacienda Sac Be",
    type: "Hacienda",
    destination: "merida",
    locationLabel: "Near Mérida, Yucatán",
    image: "hacienda",
    gallery: ["hacienda-pool", "hotel-room", "merida", "cenote-2"],
    summary:
      "A restored 19th-century henequen estate 40 minutes from Mérida, with ochre walls, a machine-house bar and its own cenote.",
    description: [
      "Sac Be takes its name from the white limestone roads the Maya built between their cities, and the estate still sits beside the faint trace of one. The main house dates from the henequen boom of the 1800s, when sisal rope made the Yucatán briefly one of the richest corners of Mexico; today the old machine house holds the bar, its rusted flywheel left exactly where it stopped.",
      "Rooms are spread through the former workers' quarters and the casa principal, with high beamed ceilings, cement-tile floors made in Mérida and outdoor rain showers. Breakfast is served under the arcade — expect huevos motuleños, fresh papaya and recado-rubbed cochinita on Sundays. The trade-off is heat: from April to June afternoons pass 38°C, so plan the pool, the hammock and a siesta into your day.",
    ],
    priceFromUSD: 420,
    rooms: 14,
    features: [
      "Private cenote on the grounds, swimmable year-round",
      "Pool set among the old henequen drying racks",
      "Cooking class with a Maya cook from the nearby village",
      "Spa treatments using local honey and chaya",
      "Bicycles for the sacbé track at dawn",
      "40 minutes from Mérida airport and city centre",
    ],
    whyWeLoveIt:
      "We go down the stone steps into the hacienda's cenote before breakfast, when the light shafts are sharpest and nobody else is up — it's the quiet heart of the place.",
    seo: {
      title: "Hacienda Sac Be, Mérida | Restored Yucatán Hacienda | Cenote House",
      description:
        "Stay in a restored henequen hacienda near Mérida with a private cenote, spa and Maya cooking classes. Tailor-made by Cenote House.",
    },
  },
  {
    slug: "casa-de-luz-oaxaca",
    name: "Casa de Luz",
    type: "Boutique hotel",
    destination: "oaxaca",
    locationLabel: "Oaxaca City, Oaxaca",
    image: "boutique-hotel",
    gallery: ["oaxaca", "oaxaca-2", "hotel-room", "textile", "mezcal"],
    summary:
      "Eleven rooms around a jacaranda courtyard, two blocks from Santo Domingo, with a mezcal library stocked from small family palenques.",
    description: [
      "Casa de Luz occupies a green-cantera colonial house on a quiet street just off the Andador Macedonio Alcalá. Rooms open onto a courtyard shaded by a jacaranda that turns violet in March, and the walls carry rugs woven in Teotitlán del Valle by families we know by name.",
      "Breakfast is the reason many guests stay an extra night: tlayudas, chilaquiles with mole coloradito, and hot chocolate ground with cinnamon at the market in the morning. In the evening the rooftop mezcal bar pours espadín, tobalá and tepextate from producers in Santiago Matatlán. Oaxaca sits at around 1,550 metres, so nights can be cool from November to February — the rooms have heaters and wool blankets.",
    ],
    priceFromUSD: 260,
    rooms: 11,
    features: [
      "Courtyard setting two blocks from Santo Domingo",
      "Rooftop mezcal bar with tastings from small palenques",
      "Textiles and ceramics from Oaxacan workshops",
      "Breakfast cooked to order by a local cocinera",
      "Introductions to weavers and alebrije carvers",
    ],
    whyWeLoveIt:
      "The rooftop at dusk, when the bells of Santo Domingo start and the mountains turn blue — and the bartender pours you a copita from a palenque we've visited ourselves.",
    seo: {
      title: "Casa de Luz, Oaxaca | Boutique Hotel Near Santo Domingo | Cenote House",
      description:
        "An 11-room courtyard boutique hotel in central Oaxaca with a rooftop mezcal bar and local craft. Book as part of a tailor-made trip.",
    },
  },
  {
    slug: "selva-azul-tulum",
    name: "Selva Azul",
    type: "Eco-lodge",
    destination: "tulum",
    locationLabel: "Tulum, Quintana Roo",
    image: "eco-lodge",
    gallery: ["jungle", "tulum", "cenote-1", "wellness"],
    summary:
      "Solar-powered treehouse suites in the jungle west of Tulum, a short bike ride from three cenotes and away from the beach-road crowds.",
    description: [
      "Selva Azul sits in the jungle along the road to Cobá, where Tulum quietens and the canopy closes in. Suites are built from chukum plaster and local hardwoods, raised on stilts so you wake at eye level with toucans and motmots. Power comes from solar panels, water is treated on site, and there's no air conditioning in the open-air lounge — the ceiling fans and the breeze do the work.",
      "It suits travellers who want cenotes before beaches: Calavera, Gran Cenote and Zacil-Ha are all within 15 minutes by bike. The beach is a 20-minute drive, and between roughly April and October sargassum seaweed can affect the shoreline, so we'll point you to the cleanest stretches or a lagoon day in Bacalar. Mosquitoes are real here at dusk — long sleeves and repellent are part of the deal.",
    ],
    priceFromUSD: 340,
    rooms: 9,
    features: [
      "Raised jungle suites with plunge pools",
      "Solar power and on-site water treatment",
      "Bicycles for three cenotes within 15 minutes",
      "Temazcal ceremony led by a local practitioner",
      "Yoga deck and plant-based kitchen",
      "Adults only",
    ],
    whyWeLoveIt:
      "Cycling to Cenote Calavera at 8am, before the tour vans, and dropping through that hole in the jungle floor into clear blue water — this is Tulum below the surface.",
    seo: {
      title: "Selva Azul, Tulum | Jungle Eco-Lodge Near Cenotes | Cenote House",
      description:
        "Solar-powered jungle suites with plunge pools near Tulum's best cenotes. Adults-only eco-lodge, part of a tailor-made Yucatán trip.",
    },
  },
  {
    slug: "casa-roma-norte",
    name: "Casa Roma Norte",
    type: "Boutique hotel",
    destination: "mexico-city",
    locationLabel: "Roma Norte, Mexico City",
    image: "mexico-city",
    gallery: ["mexico-city-2", "hotel-room", "tacos", "colonial-street"],
    summary:
      "A 1920s Art Nouveau mansion on a tree-lined street in Roma Norte, walking distance from the city's best cafés, galleries and taquerías.",
    description: [
      "Roma Norte was laid out in the early 1900s for the city's new bourgeoisie, and Casa Roma Norte is one of its surviving mansions: wrought-iron balconies, a sweeping staircase and a garden of bougainvillea out back. Sixteen rooms mix original parquet floors with Mexican design — chairs from Guadalajara workshops, prints from contemporary artists in the neighbourhood.",
      "Step out the door and you're on Avenida Álvaro Obregón, with its central walkway, a short walk from Mercado Medellín and Parque México. We leave a hand-drawn map of our favourite taco stands at check-in. Mexico City sits at 2,240 metres, so take the first day slowly and drink plenty of water; and pack a light jacket for evenings, which drop to around 10°C in winter.",
    ],
    priceFromUSD: 230,
    rooms: 16,
    features: [
      "Restored 1920s mansion with private garden",
      "In-house café roasting beans from Veracruz and Chiapas",
      "Concierge bookings for Pujol, Contramar and Quintonil",
      "Rooftop terrace with views to the volcanoes on clear days",
      "Walking distance to Condesa, galleries and markets",
    ],
    whyWeLoveIt:
      "A Sunday morning walk from the front door to Parque México, past the dog-walkers and the tamal sellers, then a long brunch — it's the city as locals actually live it.",
    seo: {
      title: "Casa Roma Norte, Mexico City | Boutique Mansion Hotel | Cenote House",
      description:
        "A 16-room boutique hotel in a 1920s Roma Norte mansion, steps from Mexico City's best food and galleries. Tailor-made by Cenote House.",
    },
  },
  {
    slug: "laguna-siete-colores",
    name: "Laguna Siete Colores",
    type: "Eco-lodge",
    destination: "bacalar",
    locationLabel: "Bacalar, Quintana Roo",
    image: "bacalar",
    gallery: ["bacalar-2", "eco-lodge", "hotel-room", "jungle"],
    summary:
      "Palapa-roofed cabañas on the shore of Bacalar's Lagoon of Seven Colours, with kayaks and paddleboards straight from your deck.",
    description: [
      "Bacalar's lagoon is fed by underground rivers and cenotes, which is why it shifts from pale turquoise to deep indigo over a few metres. Laguna Siete Colores has ten wooden cabañas strung along the western shore, each with a hammock deck and a ladder into the water. There's no motorboat dock — the lodge supports the town's efforts to protect the lagoon's ancient stromatolites, so you'll explore by kayak, sailboat or paddleboard.",
      "The kitchen cooks with what arrives from Chetumal and the local milpa: fish tikin-xic in banana leaf, sopa de lima, salbutes. Bacalar is more rustic and slower than Tulum, with fewer restaurants, and the shore can be buggy after rain. Go for the stillness, not the nightlife.",
    ],
    priceFromUSD: 210,
    rooms: 10,
    features: [
      "Lagoon-front cabañas with private ladders into the water",
      "Kayaks, paddleboards and a sailboat at no charge",
      "Sunrise sail to Cenote Negro and the Pirates' Channel",
      "Biodegradable-only toiletries to protect the stromatolites",
      "Open-air restaurant with Yucatecan and Caribbean dishes",
    ],
    whyWeLoveIt:
      "Paddling out at sunrise when the lagoon is glass, then looking down where Cenote Negro drops away beneath you — the colour simply falls off a cliff.",
    seo: {
      title: "Laguna Siete Colores, Bacalar | Lagoon Eco-Lodge | Cenote House",
      description:
        "Lagoon-front cabañas in Bacalar with kayaks, sailing and quiet stromatolite shores. A slow-paced eco-lodge in a tailor-made Yucatán trip.",
    },
  },
  {
    slug: "mar-de-cortes-cabos",
    name: "Mar de Cortés",
    type: "Beach resort",
    destination: "los-cabos",
    locationLabel: "East Cape, Los Cabos, Baja California Sur",
    image: "beach-resort",
    gallery: ["los-cabos", "los-cabos-2", "sea-of-cortez", "whale"],
    summary:
      "A low-rise desert-modern resort on the quieter East Cape, where the Sea of Cortez is calm enough to swim and humpbacks pass offshore in winter.",
    description: [
      "Most of Los Cabos faces the Pacific, where the surf is beautiful but often too strong to swim. Mar de Cortés sits on the East Cape instead, on the Sea of Cortez side, where the water is calmer and Cabo Pulmo marine park — one of the most successful protected reefs in the region — is about an hour up the coast. Villas are built in stone and timber, low against the desert, each with a terrace facing the sunrise.",
      "From roughly December to April, humpback whales migrate past and you can often see them breaching from the infinity pool. The kitchen leans on Baja's ingredients: chocolata clams, yellowtail crudo, Valle de Guadalupe wines. The trade-off is distance — it's around 75 minutes from San José del Cabo airport, partly on unpaved road — and summer brings heat and the risk of hurricanes, peaking in September.",
    ],
    priceFromUSD: 780,
    rooms: 28,
    features: [
      "Swimmable beach on the Sea of Cortez",
      "Whale-watching from the pool, December to April",
      "Snorkelling and diving trips to Cabo Pulmo",
      "Infinity pool and desert spa",
      "Baja wine cellar from the Valle de Guadalupe",
      "Private villas with outdoor showers",
    ],
    whyWeLoveIt:
      "Coffee on the terrace in February, watching a humpback breach in the first light — no boat, no crowd, just you and the Sea of Cortez.",
    seo: {
      title: "Mar de Cortés, Los Cabos | East Cape Beach Resort | Cenote House",
      description:
        "A low-rise luxury beach resort on Los Cabos' East Cape with a swimmable beach, whale-watching and Cabo Pulmo trips. Tailor-made by Cenote House.",
    },
  },
  {
    slug: "casa-del-mirador",
    name: "Casa del Mirador",
    type: "Boutique hotel",
    destination: "san-miguel-de-allende",
    locationLabel: "San Miguel de Allende, Guanajuato",
    image: "san-miguel",
    gallery: ["san-miguel-2", "boutique-hotel", "colonial-street", "talavera"],
    summary:
      "Twelve rooms on the hill above San Miguel's centre, with a terrace looking straight at the pink spires of the Parroquia.",
    description: [
      "Casa del Mirador climbs the slope of the Guadalupe neighbourhood, a steep but short walk from the Jardín. The house is built around three terraced patios, each with a fountain and a different shade of terracotta, and every room has a fireplace — welcome on December nights, when the town at 1,900 metres can drop near freezing.",
      "Staff will book you into a cooking class with a San Miguel cook, a morning at the Fábrica La Aurora galleries or a hot-spring soak at La Gruta. Bring good walking shoes: the cobbles are uneven and the streets are steep, and the walk back up the hill after dinner is part of the experience. Expect it to be busier around Easter, Independence Day in September and Day of the Dead.",
    ],
    priceFromUSD: 290,
    rooms: 12,
    features: [
      "Rooftop terrace facing the Parroquia",
      "Fireplace in every room",
      "Three fountain patios with Talavera tiling",
      "Cooking classes and gallery visits arranged in-house",
      "Ten minutes' walk from the Jardín Principal",
    ],
    whyWeLoveIt:
      "The rooftop at golden hour, when the Parroquia glows pink, the church bells overlap across town and the swifts come out.",
    seo: {
      title: "Casa del Mirador, San Miguel de Allende | Boutique Hotel | Cenote House",
      description:
        "A 12-room hillside boutique hotel with fireplaces and views of the Parroquia in San Miguel de Allende. Part of a tailor-made colonial Mexico trip.",
    },
  },
  {
    slug: "playa-escondida-holbox",
    name: "Playa Escondida",
    type: "Beach resort",
    destination: "holbox",
    locationLabel: "Holbox Island, Quintana Roo",
    image: "holbox",
    gallery: ["beach", "beach-resort", "whale-shark", "hotel-room"],
    summary:
      "Barefoot beach bungalows on car-free Holbox, at the quiet western end of Playa Punta Cocos, with shallow water and pink-sky sunsets.",
    description: [
      "Holbox has no cars, only golf carts and sand streets, and Playa Escondida sits away from the village at the quieter end of the island. Eighteen palapa bungalows face shallow, milky-green water where you can wade out for a hundred metres. At night, in the right season, the shallows glow with bioluminescent plankton.",
      "Between roughly June and September whale sharks gather off the island to feed, and we arrange small-boat swims with licensed operators who follow the reserve's rules. It's humid and the mosquitoes can be fierce after rain; Holbox isn't polished luxury, and the charm is in that. Getting here means a drive from Cancún to Chiquilá, then a short ferry — we handle the whole journey.",
    ],
    priceFromUSD: 360,
    rooms: 18,
    features: [
      "Beachfront palapa bungalows with hammocks",
      "Whale shark swims arranged June to September",
      "Kayak trips through the mangroves to Isla Pasión",
      "Sunset bar on the sand at Punta Cocos",
      "Car-free island — golf cart and bike transfers",
    ],
    whyWeLoveIt:
      "Wading into the dark shallows on a moonless night and watching every step light up with bioluminescence — Holbox still has a few secrets.",
    seo: {
      title: "Playa Escondida, Holbox | Barefoot Beach Bungalows | Cenote House",
      description:
        "Beachfront palapa bungalows on car-free Holbox Island with whale shark swims and sunset bar. Tailor-made Mexico by Cenote House.",
    },
  },
];

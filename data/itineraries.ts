import type { Itinerary } from "./types";

export const itineraries: Itinerary[] = [
  {
    slug: "yucatan-below-the-surface",
    title: "Yucatán Below the Surface",
    nights: 10,
    regionLabel: "Yucatán · Quintana Roo",
    regions: ["yucatan-caribbean"],
    destinations: ["holbox", "valladolid", "merida", "tulum", "cancun-riviera-maya"],
    experiences: ["cenotes-and-caves", "mayan-ruins", "luxury-haciendas", "whale-sharks-and-whales"],
    budget: "premium",
    image: "cenote-2",
    summary:
      "Our signature Yucatán loop: barefoot days on Holbox, sunrise at Chichén Itzá, a restored henequen hacienda outside Mérida and the jungle cenotes around Tulum — the peninsula as the Maya knew it, beneath the resort strip.",
    inclusionLine:
      "Breakfast daily, 3 dinners, 7 guided activities, all private transfers and ferries",
    highlights: [
      "Walk into Chichén Itzá at 8am, before the day-trip coaches arrive",
      "Two nights in a restored henequen hacienda with its own pool and gardens",
      "Swim in village-run cenotes around Homún and Valladolid",
      "Flamingos, bioluminescence and (Jun–Sep) whale sharks on Holbox",
    ],
    priceFromUSD: 6900,
    days: [
      {
        day: "1",
        title: "Arrive in Cancún, ferry to Holbox",
        location: "Holbox",
        description:
          "Your driver meets you at Cancún airport for the 2.5-hour run to Chiquilá, where a private water taxi takes you across the lagoon to Holbox. No cars, sand streets, golf carts: you'll feel the pace drop before you reach the hotel. Dinner of grilled fish and a lobster pizza (an island institution) on the main square.",
        staySlug: "playa-escondida-holbox",
        meals: "Dinner",
      },
      {
        day: "2–3",
        title: "Holbox: flamingos, sandbars and starry nights",
        location: "Holbox",
        description:
          "A morning boat trip to Isla Pájaros and the Yalahau freshwater spring, with flamingos and pelicans along the mangroves. From June to September we swap in a dawn whale shark trip instead. Afternoons are for wading out to Punta Mosquito's sandbar; on dark, moonless nights we'll arrange a kayak to see the bioluminescence.",
        staySlug: "playa-escondida-holbox",
        meals: "Breakfast daily",
      },
      {
        day: "4",
        title: "To Valladolid via Ek' Balam",
        location: "Valladolid",
        description:
          "Ferry back to Chiquilá and drive south (about 2.5 hours) to Ek' Balam, where you can still climb the Acropolis to see its winged stucco figures. Swim in the nearby cenote X'Canché before checking into a colonial house in Valladolid. Evening walk down the Calzada de los Frailes to the San Bernardino convent.",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "Chichén Itzá at opening, cenotes in the afternoon",
        location: "Valladolid",
        description:
          "Leave at 7.15am for the 40-minute drive to Chichén Itzá with your archaeologist guide, arriving as the gates open. After lunch, the quieter cenotes around Valladolid — we'll take you to Oxmán's hanging roots or Suytun's single beam of light, depending on the hour. Dinner of longaniza de Valladolid and lomitos on the main square.",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "Izamal, the yellow city, and on to the hacienda",
        location: "Mérida",
        description:
          "Drive west through Izamal, where every building is painted ochre and a Franciscan convent sits on top of a Maya pyramid. Arrive at the hacienda in the afternoon in time for a swim in the old water tank, now the pool, and a candlelit dinner under the arcades.",
        staySlug: "hacienda-sac-be",
        meals: "Breakfast, dinner",
      },
      {
        day: "7",
        title: "Cenotes of Homún",
        location: "Mérida",
        description:
          "A morning in Homún, where families run cenotes on their own land. Your guide picks three — usually one open, one semi-open and one cave — and lunch is cochinita pibil at a local loncheria. The afternoon is free at the hacienda.",
        staySlug: "hacienda-sac-be",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "Uxmal and Mérida",
        location: "Mérida",
        description:
          "An early start for Uxmal and the Puuc stone mosaics, with Kabah on the way back. In the evening your driver drops you in Mérida's Centro for a walk along Paseo de Montejo and dinner in one of the city's courtyard restaurants before returning to the hacienda.",
        staySlug: "hacienda-sac-be",
        meals: "Breakfast, dinner",
      },
      {
        day: "9",
        title: "Across the peninsula to Tulum via Cobá",
        location: "Tulum",
        description:
          "A private driver takes you east (about 4 hours with stops), breaking the journey at Cobá, where jungle paths link temples under a dense canopy. Arrive at your eco-lodge on the edge of the jungle in time for a sunset swim.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "Tulum: cave cenotes and the Caribbean",
        location: "Tulum",
        description:
          "Morning at Tulum's clifftop ruins at 8am, then a guided swim in the Sac Actun cave system — or a cavern dive if you're certified. Afternoon on the beach; we'll tell you honestly which stretch is clearest of sargassum that week.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast",
      },
      {
        day: "11",
        title: "Departure",
        location: "Tulum",
        description:
          "Private transfer to Tulum international airport (about 40 minutes) or Cancún (about 1 hour 45 minutes) for your flight home.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "10 nights' accommodation in hand-picked hotels, hacienda and eco-lodge",
      "Daily breakfast, plus 3 dinners",
      "Private guided visits to Ek' Balam, Chichén Itzá, Uxmal, Kabah, Cobá and Tulum",
      "Guided cenote days in Homún and Tulum, including Sac Actun",
      "Holbox boat trip to Isla Pájaros and Yalahau (or whale shark trip Jun–Sep)",
      "All private road transfers and Holbox ferries",
      "Site entrance fees on guided days",
      "24/7 support from your Cenote House specialist",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "Quintana Roo visitor tax (Visitax) and local hotel taxes paid locally",
      "Gratuities for guides and drivers",
    ],
    seo: {
      title: "Yucatán Itinerary: Holbox, Chichén Itzá, Mérida & Tulum",
      description:
        "A 10-night tailor-made Yucatán trip with cenotes, early-access Maya ruins, a hacienda stay near Mérida, Holbox and Tulum. From $6,900 per person.",
    },
  },
  {
    slug: "mexico-city-and-oaxaca",
    title: "Mexico City and Oaxaca",
    nights: 9,
    regionLabel: "Mexico City · Oaxaca",
    regions: ["central-highlands", "oaxaca-chiapas"],
    destinations: ["mexico-city", "oaxaca"],
    experiences: ["food-and-mezcal", "day-of-the-dead", "wellness-retreats"],
    budget: "ultra-luxury",
    image: "oaxaca-2",
    summary:
      "Two of the world's great food cities, done properly: Mexico City's markets, museums and tasting counters, then Oaxaca's mole kitchens, weaving villages and mezcal palenques, with private guides and the best tables throughout.",
    inclusionLine:
      "Breakfast daily, 5 lunches or dinners, 8 private guided experiences, domestic flight and all private transfers",
    highlights: [
      "A private guide through the Museo Nacional de Antropología's Mexica and Oaxaca halls",
      "Cook mole negro on a metate with a Zapotec family in Teotitlán del Valle",
      "Tasting wild agave mezcals at a family palenque in Santiago Matatlán",
      "Reserved tables at two of Mexico City's most celebrated restaurants",
    ],
    priceFromUSD: 8900,
    days: [
      {
        day: "1",
        title: "Arrive in Mexico City",
        location: "Mexico City",
        description:
          "Private transfer from the airport to Roma Norte, a leafy neighbourhood of Art Nouveau mansions and coffee bars. Your specialist's tip: walk Calle Colima and Álvaro Obregón at dusk, then a mezcal at a tiny bar off Plaza Río de Janeiro.",
        staySlug: "casa-roma-norte",
      },
      {
        day: "2",
        title: "Centro Histórico and a street-food night",
        location: "Mexico City",
        description:
          "Morning with a historian in the Centro: the Templo Mayor, Diego Rivera's murals at the Palacio Nacional and the tilting Metropolitan Cathedral. After a siesta, a private evening food walk — tacos al pastor, suadero, tlacoyos and churros at El Moro.",
        staySlug: "casa-roma-norte",
        meals: "Breakfast, dinner",
      },
      {
        day: "3",
        title: "Anthropology, Chapultepec and a tasting menu",
        location: "Mexico City",
        description:
          "A private guide walks you through the Museo Nacional de Antropología, focusing on the Aztec Sun Stone and the Oaxaca halls you'll want context for later. Afternoon in Chapultepec or Polanco's galleries; dinner is a reserved tasting menu at one of the city's top kitchens.",
        staySlug: "casa-roma-norte",
        meals: "Breakfast, dinner",
      },
      {
        day: "4",
        title: "Teotihuacán at sunrise, Coyoacán by afternoon",
        location: "Mexico City",
        description:
          "Optional hot-air balloon over Teotihuacán at dawn, then the Avenue of the Dead before the crowds. Back via Coyoacán for the Frida Kahlo Museum (timed tickets booked for you) and a market lunch of quesadillas de flor de calabaza.",
        staySlug: "casa-roma-norte",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "Fly to Oaxaca",
        location: "Oaxaca",
        description:
          "A one-hour flight south to Oaxaca. Settle into your boutique hotel a few blocks from Santo Domingo, then an evening stroll along the Andador Turístico and dinner on a rooftop facing the church as the bells ring.",
        staySlug: "casa-de-luz-oaxaca",
        meals: "Breakfast, dinner",
      },
      {
        day: "6",
        title: "Markets and the mole kitchen",
        location: "Oaxaca",
        description:
          "Breakfast of hot chocolate and pan de yema at the Mercado de la Merced, then a drive to Teotitlán del Valle to cook mole negro with a Zapotec family who also weave rugs with cochineal and indigo dyes. Lunch is what you've made.",
        staySlug: "casa-de-luz-oaxaca",
        meals: "Breakfast, lunch",
      },
      {
        day: "7",
        title: "Mezcal country",
        location: "Oaxaca",
        description:
          "South to Santiago Matatlán and the palenques of the valley, watching agave piñas roast in earth pits and tasting espadín, tobalá and tepextate with the mezcalero. Stop at the vast Tule tree on the way home.",
        staySlug: "casa-de-luz-oaxaca",
        meals: "Breakfast, lunch",
      },
      {
        day: "8",
        title: "Monte Albán and a temazcal",
        location: "Oaxaca",
        description:
          "Early morning at Monte Albán, the Zapotec capital on its flattened mountaintop, with the valley spread out below. Late afternoon, a private temazcal ceremony with a traditional healer — the best possible end to a week of eating.",
        staySlug: "casa-de-luz-oaxaca",
        meals: "Breakfast",
      },
      {
        day: "9",
        title: "A free day in Oaxaca",
        location: "Oaxaca",
        description:
          "Time to wander the galleries and textile shops of Calle Alcalá, visit the Ethnobotanical Garden (guided tours only, booked for you) or simply sit in the zócalo with a nieve from the Soledad stalls.",
        staySlug: "casa-de-luz-oaxaca",
        meals: "Breakfast",
      },
      {
        day: "10",
        title: "Departure",
        location: "Oaxaca",
        description:
          "Transfer to Oaxaca airport for your connecting flight home via Mexico City or a direct US route.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "9 nights in boutique hotels in Roma Norte and central Oaxaca",
      "Daily breakfast, plus 5 lunches or dinners including two reserved tasting menus",
      "Private guides for the Centro Histórico, Anthropology Museum, Teotihuacán, Monte Albán and Oaxaca valleys",
      "Private street-food evening in Mexico City",
      "Cooking class with a Zapotec family in Teotitlán del Valle",
      "Palenque visit and mezcal tasting",
      "Private temazcal ceremony",
      "Mexico City–Oaxaca flight and all private transfers",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Optional Teotihuacán balloon flight",
      "Meals and drinks not listed",
      "Gratuities",
    ],
    seo: {
      title: "Mexico City & Oaxaca Itinerary: Food, Mezcal & Culture",
      description:
        "A 9-night luxury food and culture trip through Mexico City and Oaxaca — markets, mole, mezcal palenques and private guides. From $8,900 per person.",
    },
  },
  {
    slug: "colonial-heartland",
    title: "The Colonial Heartland",
    nights: 11,
    regionLabel: "Puebla · Mexico City · Bajío",
    regions: ["central-highlands"],
    destinations: ["puebla", "mexico-city", "san-miguel-de-allende", "guanajuato"],
    experiences: ["food-and-mezcal", "monarch-butterflies", "luxury-haciendas"],
    budget: "value-luxury",
    image: "guanajuato",
    summary:
      "Talavera-tiled Puebla, the capital's grand boulevards, the painted lanes of San Miguel de Allende and Guanajuato's tunnels and stairways — a journey through the silver-rich cities that shaped colonial Mexico.",
    inclusionLine: "Breakfast daily, 6 guided activities, all private road transfers",
    highlights: [
      "A Talavera workshop and mole poblano in the city that invented it",
      "Four unhurried nights in San Miguel de Allende",
      "Guanajuato's callejones and underground roads on foot",
      "Optional day to the monarch sanctuaries (Nov–Mar)",
    ],
    priceFromUSD: 4300,
    days: [
      {
        day: "1",
        title: "Arrive and drive to Puebla",
        location: "Puebla",
        description:
          "Your driver meets you at Mexico City airport for the two-hour drive east to Puebla, with the snowy cone of Popocatépetl on your right on a clear day. Check into a colonial hotel near the zócalo.",
      },
      {
        day: "2",
        title: "Puebla and Cholula",
        location: "Puebla",
        description:
          "Morning at a certified Talavera workshop and the gilded Rosary Chapel, then mole poblano and cemitas at the Mercado del Carmen. Afternoon in Cholula, where a church sits atop the largest pyramid by volume in the world, with tunnels you can walk through.",
        meals: "Breakfast",
      },
      {
        day: "3–5",
        title: "Mexico City",
        location: "Mexico City",
        description:
          "Back to the capital for three nights in Roma Norte. A guided morning in the Centro Histórico and Rivera's murals; a day at Teotihuacán; and one day left free for the Anthropology Museum, Coyoacán or a Sunday on Paseo de la Reforma when it closes to cars.",
        staySlug: "casa-roma-norte",
        meals: "Breakfast daily",
      },
      {
        day: "6",
        title: "North to San Miguel de Allende",
        location: "San Miguel de Allende",
        description:
          "A 3.5-hour private drive into the Bajío, stopping for lunch in Querétaro's arcaded old town (or, from November to March, swapping this for a detour to the monarch sanctuaries with an extra night en route). Sunset from your hotel's terrace over the pink spires of the Parroquia.",
        staySlug: "casa-del-mirador",
        meals: "Breakfast",
      },
      {
        day: "7–9",
        title: "San Miguel de Allende",
        location: "San Miguel de Allende",
        description:
          "A guided walk through the cobbled centro and the Fábrica La Aurora art centre; a morning at the Atotonilco sanctuary, Mexico's 'Sistine Chapel'; and an afternoon at a nearby vineyard or the El Charco del Ingenio botanical garden. Evenings are for rooftop bars and long dinners — this is a town for lingering.",
        staySlug: "casa-del-mirador",
        meals: "Breakfast daily",
      },
      {
        day: "10–11",
        title: "Guanajuato",
        location: "Guanajuato",
        description:
          "An hour and a half west to Guanajuato, a former silver capital squeezed into a ravine. Walk the callejones and the Callejón del Beso, ride the funicular to El Pípila for the view, and drive through the tunnels that run beneath the city. In the evening, follow a callejoneada — student minstrels leading a singing walk through the alleys.",
        meals: "Breakfast daily",
      },
      {
        day: "12",
        title: "Departure",
        location: "Guanajuato",
        description:
          "Transfer to Bajío international airport at León (about 40 minutes) for your flight home via Mexico City or a direct US connection.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "11 nights in boutique and colonial hotels",
      "Daily breakfast",
      "Private guides in Puebla, Mexico City, Teotihuacán, San Miguel and Guanajuato",
      "Talavera workshop visit",
      "Entrance to Teotihuacán and Atotonilco",
      "All private road transfers between cities",
      "24/7 in-country support",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Optional monarch sanctuary detour",
      "Gratuities",
    ],
    seo: {
      title: "Colonial Mexico Itinerary: CDMX, San Miguel & Guanajuato",
      description:
        "An 11-night journey through Mexico's colonial heartland — Puebla, Mexico City, San Miguel de Allende and Guanajuato, with private guides. From $4,300.",
    },
  },
  {
    slug: "tulum-and-bacalar",
    title: "Tulum and Bacalar",
    nights: 8,
    regionLabel: "Quintana Roo",
    regions: ["yucatan-caribbean"],
    destinations: ["tulum", "bacalar"],
    experiences: ["cenotes-and-caves", "honeymoons", "wellness-retreats", "mayan-ruins"],
    budget: "value-luxury",
    image: "bacalar-2",
    summary:
      "Jungle cenotes and the Caribbean in Tulum, then the soft, seven-coloured freshwater lagoon of Bacalar — a slow southern Quintana Roo escape that's perfect for couples and anyone craving water without the crowds.",
    inclusionLine: "Breakfast daily, 4 guided activities, all private transfers",
    highlights: [
      "Swim through Tulum's cave cenotes with a local guide",
      "Paddle-board Bacalar's lagoon at sunrise",
      "Explore the quiet Maya city of Chacchoben",
      "A temazcal ceremony in the jungle",
    ],
    priceFromUSD: 3700,
    days: [
      {
        day: "1",
        title: "Arrive and head to Tulum",
        location: "Tulum",
        description:
          "Private transfer from Tulum or Cancún airport to your eco-lodge in the jungle. Dinner at one of the taquerías in Tulum town, where the locals eat — cochinita tacos for a fraction of beach-road prices.",
        staySlug: "selva-azul-tulum",
      },
      {
        day: "2",
        title: "Ruins and the reef",
        location: "Tulum",
        description:
          "Tulum's cliffside ruins at 8am opening, then snorkelling with turtles at Akumal's bay with a licensed guide. Afternoon swim at Playa Paraíso.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast",
      },
      {
        day: "3",
        title: "Cave cenotes",
        location: "Tulum",
        description:
          "A guided morning in the cenotes north of Tulum — a cave swim in the Sac Actun system and a sunny jungle pool for lunch. In the evening, a temazcal ceremony at a family-run centre in the jungle.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast",
      },
      {
        day: "4",
        title: "A free day in Tulum",
        location: "Tulum",
        description:
          "Cycle the beach road, take a yoga class, or book a day trip to the Sian Ka'an Biosphere Reserve, floating down its ancient Maya canals.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast",
      },
      {
        day: "5",
        title: "South to Bacalar",
        location: "Bacalar",
        description:
          "A 2.5-hour drive south (or the Tren Maya, if the timetable suits). Arrive at the lagoon in the afternoon and watch the water shift from turquoise to deep indigo as the sun goes down.",
        staySlug: "laguna-siete-colores",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "The lagoon by boat",
        location: "Bacalar",
        description:
          "A private sailboat trip to Los Rápidos, the Canal de los Piratas and Cenote Esmeralda, with a stop to see the stromatolites — some of the oldest life forms on Earth — from a respectful distance.",
        staySlug: "laguna-siete-colores",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Chacchoben and Cenote Azul",
        location: "Bacalar",
        description:
          "A morning at Chacchoben, a quiet Maya city of temples among palms and ramón trees, then lunch on the edge of Cenote Azul, a 90-metre-deep sinkhole beside the lagoon.",
        staySlug: "laguna-siete-colores",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "Slow day on the lagoon",
        location: "Bacalar",
        description:
          "Sunrise paddle-board on glassy water, a hammock, a swim from your own dock. Tonight, dinner at the fort on the zócalo, which once guarded the town against pirates.",
        staySlug: "laguna-siete-colores",
        meals: "Breakfast",
      },
      {
        day: "9",
        title: "Departure",
        location: "Bacalar",
        description:
          "Transfer to Chetumal airport (about 45 minutes) for a flight via Mexico City, or back to Tulum international airport (about 2.5 hours).",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "8 nights in jungle and lagoon-side eco-lodges",
      "Daily breakfast",
      "Guided Tulum ruins and cenote mornings",
      "Licensed turtle snorkel at Akumal",
      "Private Bacalar sailboat trip",
      "Guided visit to Chacchoben",
      "Temazcal ceremony",
      "All private transfers",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Sian Ka'an day trip (optional)",
      "Quintana Roo Visitax and local taxes",
      "Gratuities",
    ],
    seo: {
      title: "Tulum & Bacalar Itinerary: Cenotes and Lagoon (8 Nights)",
      description:
        "An 8-night Quintana Roo escape — Tulum's jungle cenotes and ruins, then Bacalar's seven-coloured lagoon. Ideal for couples. From $3,700 per person.",
    },
  },
  {
    slug: "chiapas-and-yucatan",
    title: "Chiapas and the Yucatán",
    nights: 14,
    regionLabel: "Chiapas · Campeche · Yucatán",
    regions: ["oaxaca-chiapas", "yucatan-caribbean"],
    destinations: ["chiapas", "merida", "valladolid", "tulum"],
    experiences: ["mayan-ruins", "cenotes-and-caves", "luxury-haciendas"],
    budget: "premium",
    image: "ruins-palenque",
    summary:
      "The full sweep of the Maya world, from the misty highlands of San Cristóbal and the jungle temples of Palenque to walled Campeche, Mérida's haciendas and the Caribbean coast, linked by the new Tren Maya.",
    inclusionLine:
      "Breakfast daily, 4 dinners, 9 guided activities, Tren Maya tickets and all private transfers",
    highlights: [
      "Boat through the 1,000-metre walls of the Sumidero Canyon",
      "Palenque in the early morning mist with an archaeologist",
      "Ride the Tren Maya from the jungle to colonial Campeche",
      "Hacienda nights, Chichén Itzá at opening and a Caribbean finale",
    ],
    priceFromUSD: 7600,
    days: [
      {
        day: "1",
        title: "Fly to Tuxtla, boat the Sumidero Canyon",
        location: "San Cristóbal de las Casas, Chiapas",
        description:
          "Fly to Tuxtla Gutiérrez via Mexico City. If your flight lands by midday, a boat trip through the Sumidero Canyon, with crocodiles basking below cliffs over a kilometre high; then an hour's drive up into the highlands to San Cristóbal (2,200m — bring a jumper).",
        meals: "Dinner",
      },
      {
        day: "2–4",
        title: "San Cristóbal and the highland villages",
        location: "San Cristóbal de las Casas, Chiapas",
        description:
          "Walk the cobbled streets and the Santo Domingo market with a local guide; visit the Tzotzil communities of San Juan Chamula and Zinacantán, whose church rituals and flower-filled greenhouses are unlike anywhere else in Mexico (no photos inside the church). One day is yours for the amber and textile workshops, or a coffee-farm visit.",
        meals: "Breakfast daily",
      },
      {
        day: "5",
        title: "Down to Palenque",
        location: "Palenque, Chiapas",
        description:
          "A long but beautiful drive to the lowlands (6–7 hours), stopping to swim below the Misol-Ha waterfall. We choose the route on the day based on current road conditions, and your driver knows both well.",
        meals: "Breakfast",
      },
      {
        day: "6",
        title: "Palenque",
        location: "Palenque, Chiapas",
        description:
          "In at 8am with an archaeologist guide, as howler monkeys call from the canopy. The Temple of the Inscriptions, the Palace with its observation tower and the forest trails to unexcavated temples — then a cool-off at the site's waterfalls.",
        meals: "Breakfast",
      },
      {
        day: "7",
        title: "Tren Maya to Campeche",
        location: "Campeche",
        description:
          "Board the Tren Maya for the run north-east to Campeche, a UNESCO-listed walled port of pastel houses. Evening walk along the ramparts and the malecón at sunset, then pan de cazón for dinner.",
        meals: "Breakfast, dinner",
      },
      {
        day: "8–10",
        title: "Uxmal and the hacienda",
        location: "Mérida",
        description:
          "Drive to Mérida via the Puuc Route — Edzná, Kabah and Uxmal — arriving at your hacienda in the late afternoon. The next two days: a cenote morning in Homún, and an evening in Mérida's Centro for the Sunday-night dancing in the Plaza Grande if your dates allow.",
        staySlug: "hacienda-sac-be",
        meals: "Breakfast daily, 2 dinners",
      },
      {
        day: "11–12",
        title: "Valladolid and Chichén Itzá",
        location: "Valladolid",
        description:
          "Via Izamal to Valladolid. Chichén Itzá at 8am with your guide, then afternoons at Ek' Balam and the cenotes of Oxmán and Suytun.",
        meals: "Breakfast daily",
      },
      {
        day: "13–14",
        title: "Caribbean finale in Tulum",
        location: "Tulum",
        description:
          "A 1.5-hour drive to the coast, stopping at Cobá. Two nights to swim, rest and enjoy the sea after two weeks of ruins.",
        staySlug: "selva-azul-tulum",
        meals: "Breakfast daily, 1 dinner",
      },
      {
        day: "15",
        title: "Departure",
        location: "Tulum",
        description:
          "Transfer to Tulum or Cancún airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "14 nights in boutique hotels, a hacienda and a jungle eco-lodge",
      "Daily breakfast, plus 4 dinners",
      "Sumidero Canyon boat trip",
      "Private guides at Palenque, Uxmal, Chichén Itzá, Ek' Balam and in the Chiapas highlands",
      "Tren Maya first-class (Patal) tickets, Palenque–Campeche",
      "Guided cenote day in Homún",
      "All private road transfers",
      "Site entrance fees on guided days",
    ],
    exclusions: [
      "International flights",
      "Domestic flight to Tuxtla Gutiérrez",
      "Travel insurance",
      "Meals not listed",
      "Gratuities",
    ],
    seo: {
      title: "Chiapas & Yucatán Itinerary: Palenque to Tulum by Train",
      description:
        "A 14-night journey through the Maya world — San Cristóbal, Palenque, Campeche, Mérida, Chichén Itzá and Tulum, with the Tren Maya. From $7,600.",
    },
  },
  {
    slug: "baja-whales-and-cabos",
    title: "Baja Whales and Los Cabos",
    nights: 9,
    regionLabel: "Baja California Sur",
    regions: ["baja-north"],
    destinations: ["los-cabos"],
    experiences: ["whale-sharks-and-whales", "honeymoons", "surf-trips"],
    budget: "ultra-luxury",
    image: "whale",
    summary:
      "A winter wildlife journey down the Baja peninsula: sea lions and whale sharks around La Paz, grey whales and their calves in Magdalena Bay, then humpbacks breaching off Los Cabos from the deck of a beachfront resort.",
    inclusionLine:
      "Breakfast daily, full board at the whale camp, 6 guided wildlife trips, all private transfers",
    highlights: [
      "Grey whale mothers and calves alongside your panga in Magdalena Bay",
      "Snorkel with sea lions at Espíritu Santo's Los Islotes",
      "Swim with juvenile whale sharks in the Bay of La Paz",
      "A private sunset sail to see humpbacks off Land's End",
    ],
    priceFromUSD: 9800,
    days: [
      {
        day: "1",
        title: "Arrive in La Paz",
        location: "La Paz, Baja California Sur",
        description:
          "Fly into La Paz (via Mexico City or a US gateway). Your boutique hotel sits on the malecón — walk it at sunset, when the whole city seems to be out, and eat fish tacos at a stand two blocks inland.",
      },
      {
        day: "2",
        title: "Espíritu Santo",
        location: "La Paz, Baja California Sur",
        description:
          "A full day by private boat to the UNESCO-listed Espíritu Santo archipelago: red cliffs, empty coves and a snorkel with the playful sea lion colony at Los Islotes. Lunch of ceviche on the beach.",
        meals: "Breakfast, lunch",
      },
      {
        day: "3",
        title: "Whale sharks of the Bay of La Paz",
        location: "La Paz, Baja California Sur",
        description:
          "A short boat ride from town to swim with juvenile whale sharks (October to April) under a strict permit system. Afternoon free to explore the Museo de la Ballena or the beaches at Balandra.",
        meals: "Breakfast",
      },
      {
        day: "4–5",
        title: "Grey whales in Magdalena Bay",
        location: "Magdalena Bay, Baja California Sur",
        description:
          "Drive three hours across the peninsula to the Pacific lagoons. Two nights in a comfortable tented camp on the bay, with two whale-watching sessions in small pangas. From January to March, grey whale mothers often bring their calves close enough to touch — an encounter that leaves most people speechless.",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: "6",
        title: "Todos Santos and Cerritos",
        location: "Todos Santos, Baja California Sur",
        description:
          "South along the Pacific to the artists' town of Todos Santos. Try a beginners' surf lesson at Cerritos or watch the surfers from the beach, then dinner in a garden restaurant on a sandy street.",
        meals: "Breakfast",
      },
      {
        day: "7–9",
        title: "Los Cabos",
        location: "Los Cabos",
        description:
          "An hour on to Los Cabos and three nights at a beachfront resort on the Sea of Cortez. A private sunset sail past El Arco at Land's End to watch humpbacks breach (December to March), a snorkel in the sheltered bay of Santa María, and a spa morning. The Pacific side is too rough to swim; your resort's beach on the Corridor is chosen for calm water.",
        staySlug: "mar-de-cortes-cabos",
        meals: "Breakfast daily, 1 dinner",
      },
      {
        day: "10",
        title: "Departure",
        location: "Los Cabos",
        description:
          "Private transfer to Los Cabos international airport (about 25 minutes) for your flight home.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "9 nights in a boutique hotel, a whale camp, a Todos Santos inn and a beachfront resort",
      "Daily breakfast; full board at Magdalena Bay",
      "Private boat day to Espíritu Santo",
      "Whale shark swim in La Paz",
      "Two grey whale sessions in Magdalena Bay",
      "Private sunset sail in Los Cabos",
      "Marine park permits and fees",
      "All private road transfers",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "Spa treatments and surf lesson",
      "Gratuities",
    ],
    seo: {
      title: "Baja Whale Watching Itinerary: La Paz to Los Cabos",
      description:
        "A 9-night luxury Baja wildlife trip with grey whales in Magdalena Bay, whale sharks in La Paz and humpbacks off Los Cabos. Best Jan–Mar. From $9,800.",
    },
  },
  {
    slug: "pacific-coast-surf-and-sand",
    title: "Pacific Coast Surf and Sand",
    nights: 10,
    regionLabel: "Nayarit · Oaxaca Coast",
    regions: ["pacific-coast"],
    destinations: ["puerto-vallarta", "puerto-escondido"],
    experiences: ["surf-trips", "wellness-retreats", "family-trips"],
    budget: "value-luxury",
    image: "puerto-escondido",
    summary:
      "Two Pacific coasts in one trip: the easy rights of Sayulita and Punta de Mita near Puerto Vallarta, then the legendary waves, turtle beaches and yoga shalas of Puerto Escondido and Mazunte on the Oaxaca coast.",
    inclusionLine:
      "Breakfast daily, 5 surf lessons, 3 guided activities, domestic flights and all private transfers",
    highlights: [
      "Surf lessons for every level in Sayulita and at La Punta",
      "Watch the Mexican Pipeline break at Zicatela",
      "Release baby turtles at dusk (seasonal) and swim in a bioluminescent lagoon",
      "Sunset at Punta Cometa in Mazunte",
    ],
    priceFromUSD: 4100,
    days: [
      {
        day: "1",
        title: "Arrive in Puerto Vallarta, drive to Sayulita",
        location: "Sayulita, Riviera Nayarit",
        description:
          "Your driver meets you at Puerto Vallarta airport for the 50-minute drive north to Sayulita. Check into a small hotel up the hill from the beach and take your first swim. In summer, Banderas Bay is warm and the vibe is quiet; in winter the town buzzes.",
      },
      {
        day: "2–4",
        title: "Sayulita and Punta de Mita",
        location: "Sayulita, Riviera Nayarit",
        description:
          "Morning surf lessons on Sayulita's gentle right-hander, or for stronger surfers a panga out to the point breaks of Punta de Mita. One day we'll take you by boat to the Marietas Islands to snorkel (permits limited, booked in advance) — and from December to March, to look for humpbacks in the bay.",
        meals: "Breakfast daily",
      },
      {
        day: "5",
        title: "Fly to Puerto Escondido",
        location: "Puerto Escondido",
        description:
          "Fly from Puerto Vallarta via Mexico City to Puerto Escondido (a travel day — we book the tightest safe connection). Arrive to a beachfront hotel in time for a cold beer and sunset over Zicatela.",
        meals: "Breakfast",
      },
      {
        day: "6–8",
        title: "Puerto Escondido",
        location: "Puerto Escondido",
        description:
          "Surf lessons at La Punta or Carrizalillo, and a dawn coffee watching the pros at Zicatela. One evening, a boat on the Manialtepec lagoon for bioluminescence (best on dark nights, roughly Jul–Dec); another, a turtle hatchling release with a local conservation group, in season. Eat tlayudas and fresh tuna tostadas in the Rinconada.",
        meals: "Breakfast daily",
      },
      {
        day: "9–10",
        title: "Mazunte and San Agustinillo",
        location: "Mazunte, Oaxaca coast",
        description:
          "An hour south to the laid-back village of Mazunte for yoga, swimming at San Agustinillo and the walk out to Punta Cometa for sunset. Be guided by the lifeguards: the currents here are strong.",
        meals: "Breakfast daily",
      },
      {
        day: "11",
        title: "Departure",
        location: "Puerto Escondido",
        description:
          "Transfer back to Puerto Escondido airport (about 1 hour) or Huatulco (about 1 hour) for your flight home via Mexico City.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "10 nights in small beachside hotels",
      "Daily breakfast",
      "5 surf lessons with board and rash-vest hire",
      "Marietas Islands snorkel trip",
      "Manialtepec lagoon evening tour",
      "Daily yoga class in Mazunte",
      "Puerto Vallarta–Puerto Escondido flights (via Mexico City)",
      "All private road transfers",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Board rental outside lessons",
      "Gratuities",
    ],
    seo: {
      title: "Pacific Mexico Surf Itinerary: Sayulita to Puerto Escondido",
      description:
        "A 10-night Pacific surf and beach trip — Sayulita, Punta de Mita, Puerto Escondido and Mazunte, with lessons for every level. From $4,100 per person.",
    },
  },
  {
    slug: "copper-canyon-by-rail",
    title: "Copper Canyon by Rail",
    nights: 10,
    regionLabel: "Sinaloa · Chihuahua · Mexico City",
    regions: ["baja-north", "central-highlands"],
    destinations: ["copper-canyon", "mexico-city"],
    experiences: ["copper-canyon-rail"],
    budget: "premium",
    image: "copper-canyon",
    summary:
      "Ride El Chepe from the colonial town of El Fuerte up into the Sierra Tarahumara, staying at the canyon rim and in mountain villages, before finishing with two nights in Mexico City.",
    inclusionLine:
      "Breakfast daily, 5 dinners, 6 guided excursions, El Chepe tickets, domestic flights and private transfers",
    highlights: [
      "The dramatic stretch of El Chepe between El Fuerte and Divisadero",
      "Two nights on the canyon rim at Divisadero",
      "Hike to the Urique canyon viewpoint from Cerocahui",
      "The cable car and suspension bridges at the Parque de Aventura",
    ],
    priceFromUSD: 6300,
    days: [
      {
        day: "1",
        title: "Fly to Los Mochis, drive to El Fuerte",
        location: "El Fuerte, Sinaloa",
        description:
          "Fly to Los Mochis via Mexico City and drive an hour and a quarter to El Fuerte, a sleepy colonial town on the river where you'll spend the night in a hacienda-style inn.",
        meals: "Dinner",
      },
      {
        day: "2",
        title: "El Fuerte and the river",
        location: "El Fuerte, Sinaloa",
        description:
          "A gentle float down the Río Fuerte at dawn, with herons and kingfishers along the banks, and a walk to see ancient petroglyphs. Afternoon walk around the plaza and the small fort museum.",
        meals: "Breakfast, dinner",
      },
      {
        day: "3–4",
        title: "El Chepe to Cerocahui",
        location: "Cerocahui, Chihuahua",
        description:
          "Board El Chepe in the morning for the most dramatic part of the line, as the track climbs through tunnels and over the Chínipas bridge. Leave the train at Bahuichivo and drive to the mission village of Cerocahui. Next day, a drive and hike to the Cerro del Gallego viewpoint above the Urique canyon, 1,800 metres deep.",
        meals: "Breakfast and dinner daily",
      },
      {
        day: "5–6",
        title: "The canyon rim at Divisadero",
        location: "Divisadero, Chihuahua",
        description:
          "Rejoin the train for a short hop to Divisadero, where three canyons meet. Your hotel room hangs over the edge. Ride the cable car across the canyon, walk the suspension bridges, and visit Rarámuri women selling their baskets along the rim. Sunsets here turn the walls copper, as the name promises.",
        meals: "Breakfast and dinner daily",
      },
      {
        day: "7",
        title: "Creel",
        location: "Creel, Chihuahua",
        description:
          "Onward by rail or road to Creel, a timber town at 2,300m. Afternoon among the mushroom-shaped rock formations of the Valle de los Monjes and the Arareko lake, with a Rarámuri guide.",
        meals: "Breakfast",
      },
      {
        day: "8",
        title: "To Chihuahua",
        location: "Chihuahua City",
        description:
          "A private drive (about 4 hours) down to Chihuahua City, with time for the cathedral and Pancho Villa's former house, now a museum. Steak for dinner — this is cattle country.",
        meals: "Breakfast",
      },
      {
        day: "9–10",
        title: "Mexico City",
        location: "Mexico City",
        description:
          "Fly to Mexico City for two nights in Roma Norte. A private guide takes you through the Centro Histórico and the Anthropology Museum; evenings are for the taquerías and mezcal bars of the neighbourhood.",
        staySlug: "casa-roma-norte",
        meals: "Breakfast daily",
      },
      {
        day: "11",
        title: "Departure",
        location: "Mexico City",
        description: "Private transfer to Mexico City airport for your flight home.",
        meals: "Breakfast",
      },
    ],
    inclusions: [
      "10 nights in characterful inns, canyon lodges and a Mexico City boutique hotel",
      "Daily breakfast, plus 5 dinners in the sierra",
      "El Chepe first-class train tickets",
      "Guided excursions in El Fuerte, Cerocahui, Divisadero and Creel",
      "Parque de Aventura cable car tickets",
      "Private Centro Histórico and Anthropology Museum tour in Mexico City",
      "Domestic flights: Mexico City–Los Mochis and Chihuahua–Mexico City",
      "All private road transfers",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Meals not listed",
      "Zip-line at the Parque de Aventura",
      "Gratuities",
    ],
    seo: {
      title: "Copper Canyon Train Itinerary: El Chepe & Mexico City",
      description:
        "A 10-night Copper Canyon rail journey on El Chepe — El Fuerte, Cerocahui, Divisadero, Creel and Chihuahua, ending in Mexico City. From $6,300.",
    },
  },
];

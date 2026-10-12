import type { Destination, Month, MonthInfo, MonthRating } from "../types";

/** Compact helper for the 12-month climate calendar. */
const m = (month: Month, rating: MonthRating, note: string): MonthInfo => ({
  month,
  rating,
  note,
});

export const yucatanDestinations: Destination[] = [
  // ---------------------------------------------------------------------------
  // TULUM
  // ---------------------------------------------------------------------------
  {
    slug: "tulum",
    name: "Tulum",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "A walled Maya port above the Caribbean, with jungle cenotes and barefoot dinners just inland.",
    bestFor:
      "Couples, design lovers and swimmers who want beach, ruins and cenotes within a twenty-minute radius.",
    keyHighlights:
      "Clifftop Maya ruins, Gran Cenote, Sian Ka'an Biosphere Reserve, Cobá, the beach road's candlelit restaurants",
    image: "tulum",
    gallery: ["tulum-2", "ruins-tulum", "cenote-swim"],
    overview: [
      "Tulum is the only major Maya city built right on the edge of the sea, and arriving at the ruins at 8am, before the tour buses, is still one of our favourite mornings in Mexico. The Templo del Dios del Viento sits on its own little headland, frigatebirds hang over the cliff, and the water below is the colour of a swimming-pool tile. By ten it is hot and busy; by then we want you in a cenote.",
      "The town has grown up fast and it is honest to say it is no longer a sleepy secret. The beach road is a strip of thatched boutique hotels and restaurants cooking over wood fire, while Tulum Pueblo, a few kilometres inland, is where you will find the better-value taquerías: cochinita pibil tacos at breakfast and a cold horchata are a rite of passage. Our specialists steer you to the quieter southern end of the beach and towards the Sian Ka'an Biosphere Reserve, where the road turns to potholed limestone and the crowds disappear.",
      "The real reason we love Tulum is what lies underneath it. The peninsula is a sponge of limestone, threaded with the longest underwater cave systems on Earth, and within half an hour of town you can float through Gran Cenote's stalactite chambers, snorkel the twin caverns of Dos Ojos, or drop into the open jungle pool of Cenote Calavera. Getting there is now easier too: Tulum's own international airport opened in December 2023, and the Tren Maya stops just outside town.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "December to April is dry, breezy and around 28°C, the classic window, though it is also the busiest and priciest. May and November are our sweet spots for value. Sargassum seaweed can affect the beaches from roughly April to August, and hurricane season runs June to November, peaking in September and October. Cenotes stay a constant 24–25°C year round.",
      months: [
        m("Jan", "best", "Dry and sunny, 27°C; peak season"),
        m("Feb", "best", "Dry, 28°C; ideal beach and ruins weather"),
        m("Mar", "best", "Dry, 29°C; busy around Easter"),
        m("Apr", "good", "Hot and dry, 31°C; sargassum season begins"),
        m("May", "good", "Hot, 32°C; fewer crowds, sargassum possible"),
        m("Jun", "mixed", "Rains start, humid; hurricane season opens"),
        m("Jul", "mixed", "Hot, humid, short storms; sargassum often heavy"),
        m("Aug", "mixed", "Hot and humid, 33°C; school-holiday crowds"),
        m("Sep", "mixed", "Wettest month; peak hurricane risk"),
        m("Oct", "mixed", "Rainy, humid; hurricane risk, low prices"),
        m("Nov", "good", "Drying out, 29°C; seas clearing, good value"),
        m("Dec", "best", "Dry, 27°C; festive weeks book up early"),
      ],
    },
    highlights: [
      {
        title: "Tulum Archaeological Zone",
        description:
          "The walled Maya port of Zamá, perched on 12-metre cliffs above the Caribbean. Go at opening time, then walk down the wooden steps to the beach cove below the castle.",
      },
      {
        title: "Gran Cenote and Dos Ojos",
        description:
          "Crystal caverns on the road to Cobá and towards Akumal, with turtles drifting through Gran Cenote's shallows and Dos Ojos' famous 'two eyes' opening into the Sac Actun system.",
      },
      {
        title: "Sian Ka'an Biosphere Reserve",
        description:
          "A UNESCO World Heritage wetland of mangroves, lagoons and reef south of town. Float down ancient Maya canals from Muyil or boat out to see dolphins and nesting birds.",
      },
      {
        title: "Cobá",
        description:
          "A sprawling Maya city deep in the forest, linked by raised white roads (sacbeob). Rent a bike or a tricycle taxi between the groups and look for spider monkeys around the lakes.",
      },
      {
        title: "The beach road at dusk",
        description:
          "Candlelit tables in the sand, wood-fired kitchens and mezcal bars along the hotel zone. Book ahead in high season: the best tables go weeks in advance.",
      },
    ],
    thingsToDo: [
      {
        title: "Swim the cenote circuit",
        description:
          "Pair an open cenote such as Calavera or Cenote Azul with a cavern like Gran Cenote, and finish at Casa Cenote, where mangroves meet the sea. Go early: most open at 8am.",
      },
      {
        title: "Float the canals of Muyil",
        description:
          "Walk the ruins of Muyil (Chunyaxché), boat across the lagoon and drift with the current through a Maya-cut channel in Sian Ka'an, life jacket worn as a nappy, as the locals joke.",
      },
      {
        title: "Cycle to the beach",
        description:
          "Traffic on the beach road can crawl, so a bike is often the quickest way between town, the ruins and the sand. Most hotels lend them; the bike path runs alongside the main road.",
      },
      {
        title: "Breakfast like a local in Tulum Pueblo",
        description:
          "Cochinita pibil tacos with pickled red onion, eaten standing up before 11am when the pork runs out. Ask your specialist for the current favourite stands.",
      },
      {
        title: "Snorkel with turtles at Akumal",
        description:
          "Twenty-five minutes north, green turtles graze on seagrass in Akumal Bay. Go with a certified local guide in the morning; the bay has protected zones and rules worth respecting.",
      },
      {
        title: "Sunrise at Playa Paraíso",
        description:
          "Just north of the ruins, this long white beach is almost empty at sunrise. Bring coffee, watch the pelicans dive, and be back at the ruins as the gates open.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Fly into Tulum International Airport (TQO), about 30 minutes from town, or Cancún (CUN), around 1 hour 45 minutes away by road. The Tren Maya also has a Tulum station, handy for onward trips to Valladolid or Bacalar.",
      },
      {
        title: "Getting around",
        description:
          "Taxis are expensive and do not use meters, so agree the fare first. A private driver for day trips, plus bikes locally, is the combination we recommend. Parking near the beach is limited.",
      },
      {
        title: "Money",
        description:
          "Tulum is priced like a resort town. Carry pesos for taxis, cenote entry fees and the national park, which charges a separate entrance to reach the beaches beside the ruins. Many beach-road spots add a service charge.",
      },
      {
        title: "Reef-safe habits",
        description:
          "Most cenotes require you to shower before entering and ban sunscreen and repellent. Use a rash vest or a genuinely mineral, biodegradable sunscreen for the sea.",
      },
      {
        title: "Timing",
        description:
          "Visit the ruins and big cenotes at opening time and leave the afternoons for the beach. Sargassum varies week to week; our specialists check the monitoring reports before you travel.",
      },
    ],
    faqs: [
      {
        id: "tulum-1",
        question: "Is Tulum still worth visiting now it is so popular?",
        answer:
          "Yes, if you plan around the crowds. Visit the ruins at opening, stay towards the quieter southern beach or in a jungle lodge, and use Tulum as a base for Sian Ka'an, Cobá and the cenotes rather than just the beach clubs.",
        category: "Before you go",
      },
      {
        id: "tulum-2",
        question: "Is there an airport in Tulum?",
        answer:
          "Yes. Felipe Carrillo Puerto International Airport opened in December 2023, around 30 minutes from town. Cancún remains the main hub with many more international routes, and the transfer from there takes about 1 hour 45 minutes.",
        category: "Before you go",
      },
      {
        id: "tulum-3",
        question: "When is sargassum seaweed a problem in Tulum?",
        answer:
          "Sargassum typically arrives between April and August, peaking in early summer, but it varies a lot by year and by beach. The cenotes and lagoons are unaffected, so a trip in those months still works well with a flexible plan.",
        category: "Before you go",
      },
      {
        id: "tulum-4",
        question: "Can you climb the pyramids near Tulum?",
        answer:
          "Not anymore. The ruins at Tulum are viewed from roped paths, and climbing Nohoch Mul at Cobá is no longer permitted. Both sites are still extraordinary, especially early in the morning.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Tulum Travel Guide: Ruins, Cenotes & Beaches",
      description:
        "Our specialists' guide to Tulum: clifftop Maya ruins, jungle cenotes, Sian Ka'an and the best time to visit, from a tailor-made Mexico expert.",
    },
  },

  // ---------------------------------------------------------------------------
  // CANCÚN & RIVIERA MAYA
  // ---------------------------------------------------------------------------
  {
    slug: "cancun-riviera-maya",
    name: "Cancún & Riviera Maya",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "The Caribbean gateway: impossibly blue water, the world's second-largest reef and easy jumping-off points.",
    bestFor:
      "Families, first-timers and anyone wanting effortless beach time with reef, islands and cenotes close by.",
    keyHighlights:
      "Cancún's turquoise beaches, the MUSA underwater museum, Puerto Morelos reef, Isla Contoy, Akumal's turtles, the Ruta de los Cenotes",
    image: "cancun",
    gallery: ["beach-resort", "family-beach", "cenote-2"],
    overview: [
      "Most journeys to the Yucatán begin here, and it is easy to be snobbish about Cancún until you see the sea. Along the Hotel Zone, a 22-kilometre sandbar shaped like a figure seven, the water shifts from pale jade to deep sapphire within a few strokes of the shore, and the sand is fine coral that stays cool underfoot even at noon. We like the calmer, north-facing beaches near Playa Langosta for children, and the wilder eastern stretch for long morning walks.",
      "Downtown Cancún is where the city actually lives. Head to Parque de las Palapas on a weekend evening for marquesitas, crisp rolled crêpes filled with Edam cheese and cajeta, and to Mercado 28 for lunch among locals. The excellent Museo Maya de Cancún, with the San Miguelito ruins in its grounds, is the best introduction to the region before you head out to the big sites.",
      "The Riviera Maya proper runs south from Puerto Morelos, a low-rise fishing town with a protected reef a short swim offshore, to Tulum and beyond. Along the way are Akumal's turtle bay, the cenote-studded Ruta de los Cenotes inland of Puerto Morelos, and the turn-offs to secluded boutique hideaways. Our specialists usually suggest a night or two here for the reef and the easy airport access, then point you further below the surface: inland to Valladolid, or out to the islands.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "December to April brings dry weather around 27–29°C and calm seas, with peak prices over Christmas, Easter and US spring break in March. May and November are good-value shoulder months. Sargassum can affect east-facing beaches roughly from April to August, and hurricane season runs June to November, with the highest risk in September and October. Whale sharks gather offshore from June to September.",
      months: [
        m("Jan", "best", "Dry, 27°C; occasional cool 'norte' winds"),
        m("Feb", "best", "Dry and sunny, 27°C"),
        m("Mar", "good", "Dry, 28°C; spring-break crowds"),
        m("Apr", "good", "Hot and dry, 30°C; sargassum season starts"),
        m("May", "good", "Hot, 31°C; quieter, sargassum possible"),
        m("Jun", "mixed", "Rains begin; whale sharks arrive offshore"),
        m("Jul", "mixed", "Hot and humid; sargassum often at peak"),
        m("Aug", "mixed", "Hot, humid; whale-shark season continues"),
        m("Sep", "mixed", "Wettest month; peak hurricane risk"),
        m("Oct", "mixed", "Rainy spells, hurricane risk; low prices"),
        m("Nov", "good", "Drier, 28°C; clear water, good value"),
        m("Dec", "best", "Dry, 27°C; holiday weeks book early"),
      ],
    },
    highlights: [
      {
        title: "MUSA underwater museum",
        description:
          "Hundreds of sculptures sunk off Cancún and Isla Mujeres as an artificial reef, now crusted with coral and patrolled by fish. Best seen snorkelling or diving at the shallow Manchones site.",
      },
      {
        title: "Puerto Morelos reef",
        description:
          "Part of the Mesoamerican Barrier Reef, the second-longest in the world, protected as a national park just offshore. A 2-hour snorkel here beats almost anything on the Hotel Zone.",
      },
      {
        title: "Isla Contoy",
        description:
          "An uninhabited bird sanctuary north of Isla Mujeres where daily visitor numbers are capped. Expect frigatebirds, pelicans, cormorants and a beach with almost nobody on it.",
      },
      {
        title: "Akumal",
        description:
          "A crescent bay where green turtles feed on seagrass in the shallows. Go early with a local guide and keep to the marked areas.",
      },
      {
        title: "Ruta de los Cenotes",
        description:
          "A road heading inland from Puerto Morelos, lined with family-run cenotes, from open lagoons to dramatic caverns with zip lines and rope swings.",
      },
    ],
    thingsToDo: [
      {
        title: "Swim with whale sharks (June–September)",
        description:
          "Small licensed boats head out from Cancún, Isla Mujeres and Holbox to where the world's largest fish gather to feed. Strict rules limit swimmers per shark; we only use operators who follow them.",
      },
      {
        title: "Eat your way through downtown",
        description:
          "Ceviche and fried whole fish at Mercado 28, tacos al pastor at a neighbourhood stand, then marquesitas in Parque de las Palapas as families come out in the evening cool.",
      },
      {
        title: "Visit the Museo Maya de Cancún",
        description:
          "Modern galleries of Maya artefacts from across Quintana Roo and the wider region, with a jungle path to the small San Miguelito site in the grounds.",
      },
      {
        title: "Sail to Isla Mujeres",
        description:
          "A 20-minute ferry from Puerto Juárez or Playa Tortugas, or a private catamaran with snorkelling stops on the way. Easy with children and a lovely change of pace.",
      },
      {
        title: "Kayak the Nichupté Lagoon",
        description:
          "Behind the Hotel Zone, mangrove channels shelter herons, ospreys and the occasional crocodile. Paddle at sunset when the water turns bronze.",
      },
      {
        title: "Day-trip to Chichén Itzá",
        description:
          "Around 2.5 hours by road. Leave very early to arrive at the 8am opening, then cool off in a cenote on the way back.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Cancún International Airport (CUN) is Mexico's busiest leisure airport, with direct flights from across North America and Europe. The Hotel Zone is 20 minutes away; Puerto Morelos 25; Playa del Carmen 50.",
      },
      {
        title: "Getting around",
        description:
          "R1 and R2 public buses run the length of the Hotel Zone cheaply and around the clock. ADO coaches link the airport and the Riviera towns, and the Tren Maya has a station near the airport. For day trips, a private driver saves real time.",
      },
      {
        title: "Money",
        description:
          "US dollars are widely accepted in the Hotel Zone but at poor rates; pay in pesos where you can. Use bank ATMs inside shopping centres, and always choose to be charged in pesos on card terminals.",
      },
      {
        title: "Choosing your beach",
        description:
          "North-facing beaches near Playa Langosta and Playa Tortugas are calm and less exposed to sargassum. East-facing beaches have stronger surf, so watch the flag system and swim where lifeguards are posted.",
      },
      {
        title: "Etiquette",
        description:
          "Tipping of 10–15% is customary in restaurants, plus a small tip for bag porters and guides. A few words of Spanish go a long way, even in the most tourist-facing places.",
      },
    ],
    faqs: [
      {
        id: "cancun-riviera-maya-1",
        question: "Should we stay in Cancún or on the Riviera Maya?",
        answer:
          "Cancún suits families and short stays thanks to its proximity to the airport and calm northern beaches. The Riviera Maya offers smaller towns, boutique hotels and easier access to cenotes and ruins. Many of our guests split their stay between the two.",
        category: "Before you go",
      },
      {
        id: "cancun-riviera-maya-2",
        question: "When is whale-shark season?",
        answer:
          "Roughly June to September, with July and August usually the most reliable. Tours depart from Cancún, Isla Mujeres and Holbox, and numbers in the water are regulated to protect the animals.",
        category: "On the ground",
      },
      {
        id: "cancun-riviera-maya-3",
        question: "Is Cancún safe for tourists?",
        answer:
          "The Hotel Zone and the main Riviera towns are well policed and very used to visitors. Use sensible city precautions, take official taxis or pre-arranged transfers, and our specialists will brief you on any current advice before you travel.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Cancún & Riviera Maya Travel Guide",
      description:
        "Reefs, islands, cenotes and the calmest beaches of Cancún and the Riviera Maya, with honest advice on sargassum, seasons and where to stay.",
    },
  },

  // ---------------------------------------------------------------------------
  // MÉRIDA
  // ---------------------------------------------------------------------------
  {
    slug: "merida",
    name: "Mérida",
    region: "yucatan-caribbean",
    regionLabel: "Yucatán",
    hook: "The White City: colonial mansions, Sunday street dancing and the best food on the peninsula.",
    bestFor:
      "Food lovers, culture seekers and anyone wanting a graceful city base for haciendas, cenotes and the Puuc ruins.",
    keyHighlights:
      "Plaza Grande and the cathedral, Paseo de Montejo, Gran Museo del Mundo Maya, Uxmal, Cuzamá's cenotes, Celestún flamingos",
    image: "merida",
    gallery: ["colonial-street", "hacienda", "mexican-food"],
    overview: [
      "Mérida feels like a city that knows exactly who it is. The capital of Yucatán state was built in 1542 on top of the Maya city of T'Hó, and you can still see carved Maya stones reused in the walls of the Catedral de San Ildefonso, one of the oldest cathedrals in the Americas. Across the Plaza Grande, the Casa de Montejo's façade shows conquistadors standing on the heads of the conquered, an uncomfortable and fascinating piece of history in stone.",
      "Life here is lived outdoors in the evenings, when the heat lets go. On Sundays the centre closes to traffic and couples dance to live bands in front of the Palacio Municipal; on Thursday nights there is a serenade of trova music in Parque Santa Lucía. Walk Paseo de Montejo, lined with the Beaux-Arts mansions of the 19th-century henequen barons, and stop for a marquesita from a street cart. By day, eat cochinita pibil and sopa de lima at the Lucas de Gálvez market, and relleno negro wherever you see it.",
      "Mérida is also the perfect base for the peninsula's interior. Within an hour or two are the elegant Puuc-style ruins of Uxmal and Kabah, the yellow convent town of Izamal, the pink-feathered flamingos of Celestún and the cenotes of Cuzamá, reached by horse-drawn carts on old rail tracks. Stay in a restored townhouse in the centro, or in a converted hacienda outside town, where the old henequen machinery still stands in the garden.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "November to March is the most comfortable time, with warm days around 28–30°C and cooler evenings. April and May are fiercely hot, often reaching 40°C. June to October brings afternoon storms and humidity. Mérida is inland, so sargassum is not a concern, and although the state can feel the edge of tropical storms, hurricanes rarely strike the city directly.",
      months: [
        m("Jan", "best", "Dry, 28°C days and cool evenings"),
        m("Feb", "best", "Dry, 30°C; Carnival celebrations"),
        m("Mar", "good", "Dry and warming, 33°C"),
        m("Apr", "mixed", "Very hot, 36°C; Easter processions"),
        m("May", "mixed", "Hottest month, often 38–40°C"),
        m("Jun", "mixed", "Hot with first afternoon storms"),
        m("Jul", "mixed", "Humid, 35°C; brief daily downpours"),
        m("Aug", "mixed", "Humid, storms; green countryside"),
        m("Sep", "mixed", "Rainiest month, 33°C"),
        m("Oct", "good", "Rains easing; Hanal Pixán preparations"),
        m("Nov", "best", "Hanal Pixán, the Maya Day of the Dead; 30°C"),
        m("Dec", "best", "Dry and pleasant, 28°C; festive lights"),
      ],
    },
    highlights: [
      {
        title: "Plaza Grande and the Catedral de San Ildefonso",
        description:
          "Completed in 1598 using stone from Maya temples, the cathedral anchors a square shaded by laurel trees. Look for the 'confidenciales', the S-shaped chairs where couples sit face to face.",
      },
      {
        title: "Paseo de Montejo",
        description:
          "A grand boulevard of mansions built on henequen fortunes. Visit the Palacio Cantón, now an anthropology museum, or the Casa Museo Montes Molina for a glimpse of gilded-age interiors.",
      },
      {
        title: "Gran Museo del Mundo Maya",
        description:
          "A striking modern building north of the centre with a superb permanent collection on Maya life, past and present. Ideal before your first big archaeological site.",
      },
      {
        title: "Uxmal and the Ruta Puuc",
        description:
          "The Pyramid of the Magician and the Nunnery Quadrangle are among the finest Maya architecture anywhere. Continue to Kabah, Sayil and Labná for intricate mosaics and almost no crowds.",
      },
      {
        title: "Cenotes of Cuzamá",
        description:
          "Ride a mule-drawn truck along narrow rails through henequen fields to a series of deep, cave-like cenotes, climbing down ladders into water lit by shafts of sun.",
      },
    ],
    thingsToDo: [
      {
        title: "Mérida en Domingo",
        description:
          "Every Sunday the streets around the Plaza Grande fill with food stalls, crafts and dancing couples. Order panuchos and a horchata and watch the city at its most joyful.",
      },
      {
        title: "Take a cooking class",
        description:
          "Shop the Lucas de Gálvez market with a local cook, then learn to make recados, the spice pastes that give Yucatecan food its character, and wrap your own cochinita pibil in banana leaves.",
      },
      {
        title: "See the flamingos at Celestún",
        description:
          "About 90 minutes west, small boats glide through the mangroves of a biosphere reserve to where flamingos feed in the shallows, most numerous in winter and spring.",
      },
      {
        title: "Visit Izamal, the Yellow City",
        description:
          "A Pueblo Mágico painted entirely in ochre yellow, with a vast Franciscan convent built on a Maya platform and the huge Kinich Kak Moo pyramid a few blocks away.",
      },
      {
        title: "Stay a night in a hacienda",
        description:
          "The 19th-century henequen estates around Mérida have been restored as hotels with high ceilings, chapels and pools set in old water tanks. Some still hold demonstrations of sisal production.",
      },
      {
        title: "Hear the trova at Parque Santa Lucía",
        description:
          "Thursday night's free serenade brings guitar trios and folkloric dance to a colonnaded little square. Arrive early for a seat and stay for dinner nearby.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Mérida International Airport (MID) has direct flights from Mexico City and some US cities. By road it is about 4 hours from Cancún, and the Tren Maya's Teya-Mérida station lies on the eastern edge of the city.",
      },
      {
        title: "Getting around",
        description:
          "The centro is walkable and laid out on a numbered grid: even-numbered streets run north–south, odd-numbered east–west. Use app-based rides or taxis for longer hops and a private driver for ruins and cenotes.",
      },
      {
        title: "Money",
        description:
          "Mérida is excellent value compared with the coast. Markets, cenote cooperatives and smaller restaurants are cash-only, so carry pesos.",
      },
      {
        title: "Beating the heat",
        description:
          "Plan sightseeing for early morning and late afternoon, and use the middle of the day for a long lunch and a siesta by the pool. Most hotels in the centre have a plunge pool for exactly this reason.",
      },
      {
        title: "Etiquette",
        description:
          "Yucatecos are famously courteous; a 'buenos días' when entering a shop matters. Many people speak Yucatec Maya as a first language, and a simple 'Dios bo'otik' (thank you) is warmly received.",
      },
    ],
    faqs: [
      {
        id: "merida-1",
        question: "How many days do we need in Mérida?",
        answer:
          "We suggest at least three nights: one day for the city itself, one for Uxmal and the Ruta Puuc, and one for cenotes or Celestún. Five nights with a hacienda stay is even better.",
        category: "Before you go",
      },
      {
        id: "merida-2",
        question: "Is Mérida too hot in summer?",
        answer:
          "April and May are the hardest months, often hitting 40°C. Summer is hot and humid but storms cool the evenings. If you visit then, choose a hotel with a pool and keep sightseeing to the mornings.",
        category: "Before you go",
      },
      {
        id: "merida-3",
        question: "Is Mérida safe?",
        answer:
          "Mérida is widely regarded as one of the safest cities in Mexico, and walking the centre in the evening is a pleasure. Usual city precautions still apply.",
        category: "On the ground",
      },
      {
        id: "merida-4",
        question: "Can we reach the beach from Mérida?",
        answer:
          "Yes. Progreso, on the Gulf coast, is about 40 minutes away. The water is calmer and greener than the Caribbean, and it is where Meridanos head on summer weekends.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Mérida Travel Guide: Food, Haciendas & Ruins",
      description:
        "Discover Mérida, the Yucatán's elegant White City: Sunday dancing, cochinita pibil, haciendas, Uxmal and the cenotes of Cuzamá.",
    },
  },

  // ---------------------------------------------------------------------------
  // VALLADOLID
  // ---------------------------------------------------------------------------
  {
    slug: "valladolid",
    name: "Valladolid",
    region: "yucatan-caribbean",
    regionLabel: "Yucatán",
    hook: "A pastel colonial town with a cenote in its centre and Chichén Itzá on its doorstep.",
    bestFor:
      "Early risers who want Chichén Itzá before the crowds, cenote swimmers and travellers after small-town charm.",
    keyHighlights:
      "Convent of San Bernardino de Siena, Calzada de los Frailes, Cenote Zací, Chichén Itzá, Ek Balam, Río Lagartos flamingos",
    image: "valladolid",
    gallery: ["ruins-chichen-itza", "cenote-1", "colonial-street"],
    overview: [
      "Valladolid is where we send people who want the Yucatán to slow down. It is a Pueblo Mágico of low, candy-coloured houses and wrought-iron balconies, founded by the Spanish in 1543, with a main square where women in embroidered huipiles sell fresh fruit with chilli and lime. In the evening, families sit on the benches in Parque Francisco Cantón and the cathedral's façade glows gold.",
      "Walk the Calzada de los Frailes, a gently curving street of restored houses, to the fortress-like Convent of San Bernardino de Siena, built in the 1550s over a cenote. Then try the town's own dishes: lomitos de Valladolid, pork in a tomato sauce, and smoky longaniza sausage. Right in the middle of town, Cenote Zací is a huge open sinkhole hung with vines where local teenagers leap from the rock ledges.",
      "The real advantage is position. Chichén Itzá is about 45 minutes west, so staying here means you can be at the gates at 8am, an hour or two before the day-trippers from Cancún. Ek Balam, with its astonishingly well-preserved stucco frieze, is just 30 minutes north, and the cenotes around town, Suytun, Ik Kil, X'Canché and the cave pools of Dzitnup, are some of the most spectacular on the peninsula.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "November to March is the most comfortable season, with dry days around 29–31°C. April and May are very hot, and June to October brings humidity and afternoon storms, though rain rarely lasts all day. Visit Chichén Itzá on the spring equinox (around 20 March) to see the serpent shadow on El Castillo, but expect enormous crowds. Valladolid is inland, so sargassum is not a factor.",
      months: [
        m("Jan", "best", "Dry, 29°C; cool mornings at the ruins"),
        m("Feb", "best", "Dry and sunny, 30°C"),
        m("Mar", "good", "Hot, 32°C; equinox crowds at Chichén Itzá"),
        m("Apr", "mixed", "Very hot, 35°C; Easter holidays"),
        m("May", "mixed", "Hottest month, up to 37°C"),
        m("Jun", "mixed", "Hot, first rains"),
        m("Jul", "mixed", "Humid, 34°C; short afternoon storms"),
        m("Aug", "mixed", "Humid, storms; lush and green"),
        m("Sep", "mixed", "Rainiest month; quiet sites"),
        m("Oct", "good", "Rains easing, 31°C; few crowds"),
        m("Nov", "best", "Dry season returns, 30°C"),
        m("Dec", "best", "Dry, 29°C; festive and lively"),
      ],
    },
    highlights: [
      {
        title: "Chichén Itzá",
        description:
          "The New Seven Wonders icon, with El Castillo, the Great Ball Court and the Sacred Cenote. From Valladolid you can be there at opening, in the cool and the quiet.",
      },
      {
        title: "Ek Balam",
        description:
          "A jungle-wrapped site whose Acropolis hides a remarkable stucco doorway in the shape of a monster's jaws, its winged figures still crisp after more than a thousand years.",
      },
      {
        title: "Convent of San Bernardino de Siena",
        description:
          "A massive Franciscan convent at the end of the Calzada de los Frailes. In the evenings a light show is projected onto its walls, telling the town's story.",
      },
      {
        title: "Cenote Zací",
        description:
          "A deep, partly covered cenote a few blocks from the main square, with a walkway down through the rock and a restaurant above. Swim here in the late afternoon.",
      },
      {
        title: "Río Lagartos and Las Coloradas",
        description:
          "A boat trip through the mangroves of Río Lagartos to see flamingos, crocodiles and pelicans, then on to the pink salt-evaporation pools of Las Coloradas.",
      },
    ],
    thingsToDo: [
      {
        title: "Be first in at Chichén Itzá",
        description:
          "Leave Valladolid at 7.15am with a private guide and you will have El Castillo almost to yourselves for the first hour. Then retreat to a cenote before the midday heat.",
      },
      {
        title: "Swim the cenotes of Dzitnup",
        description:
          "Just west of town, Samulá and Xkekén are cave cenotes where a single shaft of light hits the water. Nearby Suytun, with its stone walkway, is best photographed around midday.",
      },
      {
        title: "Cycle to Ek Balam and X'Canché",
        description:
          "From the Ek Balam ruins, a short trail leads to Cenote X'Canché, where you can swim, rappel or zip-line in. Bikes can be rented at the cenote cooperative.",
      },
      {
        title: "Eat at the municipal market",
        description:
          "Start the day with relleno negro tacos or a bowl of escabeche at the Mercado Municipal, then pick up local honey from melipona bees, the stingless bees kept by the Maya.",
      },
      {
        title: "See flamingos at Río Lagartos",
        description:
          "Around 90 minutes north, local fishermen-guides take small boats out at dawn when the birds are most active. Bring binoculars and a hat.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Valladolid is about 2 hours from Cancún and 2 hours from Mérida by road, and around 1.5 hours from Tulum. The Tren Maya has a Valladolid station a short drive from the centre, and ADO buses run frequently.",
      },
      {
        title: "Getting around",
        description:
          "The centre is compact and easily walked; bikes are perfect for nearby cenotes. A car or driver makes sense for Chichén Itzá, Ek Balam and Río Lagartos.",
      },
      {
        title: "Money",
        description:
          "Prices are reasonable. Chichén Itzá charges both a federal and a state fee, and cenotes are often run by cooperatives that take cash only, so keep pesos on hand.",
      },
      {
        title: "Timing",
        description:
          "Stay at least two nights so you can do Chichén Itzá at opening one morning and Ek Balam the next. Avoid Sundays at Chichén Itzá, when Mexican residents enter free and it gets very busy.",
      },
    ],
    faqs: [
      {
        id: "valladolid-1",
        question: "Is it better to visit Chichén Itzá from Valladolid?",
        answer:
          "Yes. At around 45 minutes away, Valladolid lets you arrive at opening time, before coach tours from Cancún and the Riviera arrive. The difference in heat and crowds is significant.",
        category: "Before you go",
      },
      {
        id: "valladolid-2",
        question: "Can you climb El Castillo at Chichén Itzá?",
        answer:
          "No. Climbing has been prohibited since 2006 to protect the structure. You can walk freely around the site, and a good guide brings the carvings and astronomy to life.",
        category: "On the ground",
      },
      {
        id: "valladolid-3",
        question: "Which cenotes near Valladolid are best?",
        answer:
          "For drama, the cave cenotes of Samulá and Xkekén. For a classic open pool, Ik Kil. For something quieter, X'Canché near Ek Balam. Go early or late to avoid tour groups.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Valladolid Travel Guide: Cenotes & Chichén Itzá",
      description:
        "Valladolid is the perfect base for Chichén Itzá at sunrise, Ek Balam and spectacular cenotes. Plan your stay with a Mexico specialist.",
    },
  },

  // ---------------------------------------------------------------------------
  // HOLBOX
  // ---------------------------------------------------------------------------
  {
    slug: "holbox",
    name: "Holbox",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "A car-free island of sandy streets, flamingos and whale sharks where the Caribbean meets the Gulf.",
    bestFor:
      "Slow travellers, nature lovers and couples who want barefoot days, wildlife and glowing sunsets.",
    keyHighlights:
      "Whale sharks in summer, Punta Mosquito sandbar, Punta Cocos sunsets, bioluminescence, flamingos, colourful street murals",
    image: "holbox",
    gallery: ["whale-shark", "beach", "honeymoon"],
    overview: [
      "Holbox is a sliver of an island off the northern tip of the Yucatán, inside the Yum Balam protected area, and the first thing you notice is the silence. There are no cars here: people get around on foot, by bicycle or by golf cart, along streets of soft white sand. The village is a grid of brightly painted houses and murals, and by evening the whole island seems to wander down to the beach to watch the sun drop into the sea.",
      "The water is shallow, warm and milky turquoise, more Gulf than Caribbean, and you can wade for hundreds of metres. At low tide, walk east along the shore to the Punta Mosquito sandbar, where flamingos and pelicans feed. In the evening, head west to Punta Cocos for sunset, and on a moonless night return with a guide to see the bioluminescent plankton that glows when you move your hand through the water.",
      "From roughly June to September, Holbox is one of the world's great places to swim with whale sharks, which gather offshore to feed on plankton. Boats head out early, and swimming beside a fish the size of a bus is an experience none of our guests forget. Island life comes with trade-offs: power and Wi-Fi can be patchy, streets turn to puddles after summer rain, and mosquitoes appear at dusk. We think that is all part of its charm.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "November to April is dry and pleasant, though 'nortes' from December to February can bring wind, cooler days and choppy water. Whale-shark season runs from around June to September, coinciding with heat, humidity and hurricane season (June–November). Holbox faces the Gulf, so it is usually less affected by sargassum than the Caribbean coast, although some does arrive between April and August.",
      months: [
        m("Jan", "good", "Dry, 25°C; occasional windy 'nortes'"),
        m("Feb", "good", "Dry, 26°C; nortes possible"),
        m("Mar", "best", "Dry, sunny and calm, 28°C"),
        m("Apr", "best", "Dry, 29°C; Easter is busy"),
        m("May", "good", "Hot, calm seas; some sargassum possible"),
        m("Jun", "good", "Whale-shark season starts; rains begin"),
        m("Jul", "best", "Peak whale sharks; hot and humid"),
        m("Aug", "best", "Whale sharks; hot, mosquitoes at dusk"),
        m("Sep", "mixed", "Last whale sharks; peak hurricane risk"),
        m("Oct", "mixed", "Rainy, hurricane risk; very quiet"),
        m("Nov", "good", "Drying out, 27°C; peaceful"),
        m("Dec", "good", "Dry, 25°C; nortes possible, festive"),
      ],
    },
    highlights: [
      {
        title: "Swimming with whale sharks",
        description:
          "From June to September, licensed boats take small groups out to swim alongside the world's largest fish. Only two swimmers and a guide enter the water per shark at a time.",
      },
      {
        title: "Punta Mosquito",
        description:
          "A long sandbar east of the village where you can wade through knee-deep water to see flamingos, pelicans and herons. Best at low tide.",
      },
      {
        title: "Punta Cocos at sunset",
        description:
          "The island's western tip, quiet and wild, with clear views as the sun sinks into the Gulf. Cycle or take a golf cart along the beach road.",
      },
      {
        title: "Bioluminescence",
        description:
          "On dark nights, plankton in the shallows lights up with every movement. Go with a local guide and leave the torch behind.",
      },
    ],
    thingsToDo: [
      {
        title: "Island-hop to Isla Pasión and Isla de los Pájaros",
        description:
          "A half-day boat trip to a tiny islet, a bird sanctuary where you can see frigatebirds and flamingos, and a freshwater spring in the mangroves called Yalahau.",
      },
      {
        title: "Kayak the mangroves",
        description:
          "Paddle through quiet channels on the lagoon side of the island at sunrise, watching for herons, cormorants and rays.",
      },
      {
        title: "Eat lobster pizza and fresh ceviche",
        description:
          "Holbox's unexpected signature dish is pizza topped with local lobster. Pair it with ceviche made from the morning's catch at a beach shack.",
      },
      {
        title: "Wander the murals",
        description:
          "Street art by Mexican and international artists covers walls all over the village, much of it created during a public art festival. Explore by bike in the early evening.",
      },
      {
        title: "Fly-fish for tarpon",
        description:
          "From May to September, the waters around Holbox are known for tarpon. Local guides offer catch-and-release trips in the lagoon and along the coast.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Drive or transfer around 2.5 hours from Cancún to the port of Chiquilá, then take a 25-minute passenger ferry. Cars are left in a guarded lot in Chiquilá. Small charter planes also fly in from Cancún and Playa del Carmen.",
      },
      {
        title: "Getting around",
        description:
          "There are no cars on Holbox. Walk, cycle or use golf-cart taxis, which wait at the ferry dock. Pack light luggage on wheels that can handle sand.",
      },
      {
        title: "Money",
        description:
          "There are very few ATMs and they often run out of cash, especially at weekends. Bring enough pesos from the mainland. Many smaller places do not accept cards.",
      },
      {
        title: "What to pack",
        description:
          "Strong insect repellent for dusk (but not for the sea), a light rain jacket in summer, flip-flops and a torch for unlit streets.",
      },
      {
        title: "Timing",
        description:
          "For whale sharks, visit between June and September and allow at least three nights in case boats are cancelled by weather. For calm water and fewer bugs, March and April are lovely.",
      },
    ],
    faqs: [
      {
        id: "holbox-1",
        question: "Are there really no cars on Holbox?",
        answer:
          "Correct. Private cars are not allowed. Everyone gets around on foot, by bike or by golf cart, which is a huge part of the island's peaceful atmosphere.",
        category: "Before you go",
      },
      {
        id: "holbox-2",
        question: "When is the best time to swim with whale sharks in Holbox?",
        answer:
          "The season runs from roughly June to September, with July and August usually best. Tours start early in the morning and can be cancelled in rough weather, so allow extra days.",
        category: "Before you go",
      },
      {
        id: "holbox-3",
        question: "Is Holbox affected by sargassum?",
        answer:
          "Less than the Caribbean coast because the island faces the Gulf, but some seaweed can arrive between April and August. Mangroves and shallow lagoons are unaffected.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Holbox Island Guide: Whale Sharks & Car-Free Calm",
      description:
        "Holbox: a car-free island of sandy streets, flamingos, bioluminescence and whale sharks from June to September. How to get there and when to go.",
    },
  },

  // ---------------------------------------------------------------------------
  // ISLA MUJERES
  // ---------------------------------------------------------------------------
  {
    slug: "isla-mujeres",
    name: "Isla Mujeres",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "A little island of golf carts and glassy water, twenty minutes and a world away from Cancún.",
    bestFor:
      "Couples, families and day-to-week escapes with calm swimming, easy snorkelling and a laid-back village feel.",
    keyHighlights:
      "Playa Norte, Punta Sur and the Ixchel temple, MUSA underwater sculptures, Isla Contoy, whale sharks in summer",
    image: "isla-mujeres",
    gallery: ["beach", "family-beach", "whale-shark"],
    overview: [
      "Isla Mujeres is a narrow island, about seven kilometres long, just across the bay from Cancún, and it has managed to keep the feel of a fishing village. The ferry drops you in the small downtown grid, where streets are lined with brightly painted houses, hammock sellers and cafés, and golf carts outnumber cars. Spanish explorers named it 'Island of Women' after the statues of Maya goddesses they found here.",
      "Playa Norte, at the island's northern tip, has some of the calmest, clearest swimming water in the Caribbean, shallow enough to wade out a long way, and it faces west, so it is a natural spot for sunset. At the southern end, Punta Sur is the easternmost point in Mexico, where a small temple to Ixchel, the Maya goddess of the moon and fertility, stands on cliffs above crashing waves. Early risers here are the first in the country to see the sun come up.",
      "Under the water, the island's reefs and the sculptures of the MUSA underwater museum make for easy snorkelling. Day trips go out to Isla Contoy, a bird sanctuary with limited visitor numbers, and in summer the island is a launch point for swimming with whale sharks. We always urge guests to stay a few nights, after the day-trippers have left, to enjoy its slower rhythm: a breakfast of fruit and coffee on a terrace, a lazy afternoon on a sun lounger, fresh fish tikin xic for dinner.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "December to April brings dry, sunny weather around 27–29°C. Winter 'nortes' can make the ferry choppy for a day or two. Whale sharks are offshore from June to September. Hurricane season runs from June to November, and sargassum can affect the east coast roughly from April to August, while west-facing Playa Norte is usually far less affected.",
      months: [
        m("Jan", "best", "Dry, 27°C; the odd windy 'norte'"),
        m("Feb", "best", "Dry and sunny, 27°C"),
        m("Mar", "best", "Dry, 28°C; spring-break weeks busy"),
        m("Apr", "good", "Hot and dry, 29°C; sargassum begins on east coast"),
        m("May", "good", "Hot, calm seas; quieter"),
        m("Jun", "good", "Whale-shark season starts; rains begin"),
        m("Jul", "mixed", "Hot, humid; whale sharks, sargassum possible"),
        m("Aug", "mixed", "Hot and humid; whale sharks"),
        m("Sep", "mixed", "Wettest month; peak hurricane risk"),
        m("Oct", "mixed", "Rainy spells, hurricane risk; quiet"),
        m("Nov", "good", "Drier, 28°C; clear water"),
        m("Dec", "best", "Dry, 27°C; festive season"),
      ],
    },
    highlights: [
      {
        title: "Playa Norte",
        description:
          "A wide, white beach with shallow, sheltered water perfect for swimming and paddleboarding. Stay until sunset, when the sky turns pink over the bay.",
      },
      {
        title: "Punta Sur and the Temple of Ixchel",
        description:
          "Clifftop sculpture gardens and the remains of a Maya shrine at the island's southern tip, with sweeping views of the open Caribbean.",
      },
      {
        title: "MUSA underwater museum",
        description:
          "Snorkel or dive among hundreds of submerged sculptures that have become a living artificial reef, home to corals and tropical fish.",
      },
      {
        title: "Isla Contoy",
        description:
          "A protected island and bird sanctuary to the north, with limited daily visitors, nesting seabirds and a lovely snorkel stop on the way.",
      },
    ],
    thingsToDo: [
      {
        title: "Tour the island by golf cart",
        description:
          "Rent a cart for the day and loop the island: the colourful downtown, the turtle sanctuary, Punta Sur, the wild east coast and the lagoon.",
      },
      {
        title: "Snorkel the reefs",
        description:
          "Small boats take you to El Farito and the nearby MUSA sculptures and reefs. The water is clear and calm in the mornings.",
      },
      {
        title: "Visit the Tortugranja",
        description:
          "A small turtle conservation centre where sea turtle eggs are protected and hatchlings released. A good stop for families.",
      },
      {
        title: "Eat fish tikin xic",
        description:
          "Whole fish marinated in achiote and sour orange and grilled over coals, a Yucatecan-Caribbean classic. Order it at a beach restaurant with your toes in the sand.",
      },
      {
        title: "Explore Hacienda Mundaca",
        description:
          "The overgrown remains of a 19th-century estate built by a slave trader turned pirate, wrapped in a romantic legend of unrequited love.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Ferries run frequently from Puerto Juárez and Gran Puerto in Cancún, as well as less often from the Hotel Zone. The crossing takes around 20 minutes. Cancún airport is about 30 minutes from the ports.",
      },
      {
        title: "Getting around",
        description:
          "The downtown area is easy to explore on foot. For the rest of the island, rent a golf cart, scooter or bicycle, or take one of the inexpensive taxis.",
      },
      {
        title: "Money",
        description:
          "There are ATMs downtown, but carry pesos for golf cart rentals, small restaurants and tips. Prices are generally lower than in Cancún's Hotel Zone.",
      },
      {
        title: "Timing",
        description:
          "Day-trippers arrive mid-morning and leave by late afternoon. Stay overnight to enjoy quiet mornings and the island's relaxed evenings.",
      },
    ],
    faqs: [
      {
        id: "isla-mujeres-1",
        question: "Is Isla Mujeres worth staying on, or just a day trip?",
        answer:
          "Stay at least two nights if you can. The island is calmer and more authentic once day-trippers leave, and you will have Playa Norte and the sunset almost to yourselves.",
        category: "Before you go",
      },
      {
        id: "isla-mujeres-2",
        question: "Is Isla Mujeres good for families?",
        answer:
          "Very much so. Playa Norte's shallow, calm water is ideal for children, the island is small and easy to explore by golf cart, and there are turtles and snorkelling to keep everyone entertained.",
        category: "Before you go",
      },
      {
        id: "isla-mujeres-3",
        question: "Is the beach affected by sargassum?",
        answer:
          "Playa Norte faces west and is usually much less affected than the eastern Caribbean coast. Sargassum is most likely from April to August, but varies year to year.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Isla Mujeres Travel Guide: Beaches & Snorkelling",
      description:
        "Isla Mujeres: calm Playa Norte, golf carts, Punta Sur sunrises, underwater sculptures and whale sharks, just a 20-minute ferry from Cancún.",
    },
  },

  // ---------------------------------------------------------------------------
  // BACALAR
  // ---------------------------------------------------------------------------
  {
    slug: "bacalar",
    name: "Bacalar",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "The lagoon of seven colours, where freshwater shades from aquamarine to inky blue.",
    bestFor:
      "Slow travellers, paddlers and couples seeking peaceful lakeside stays, far from the busy Riviera.",
    keyHighlights:
      "Laguna de Bacalar, Canal de los Piratas, Cenote Azul, Los Rápidos, San Felipe fort, stromatolites",
    image: "bacalar",
    gallery: ["bacalar-2", "eco-lodge", "jungle"],
    overview: [
      "Bacalar is a small Pueblo Mágico on the shores of a long, narrow freshwater lagoon in southern Quintana Roo, and its waters are unlike any other in Mexico. Known as the Laguna de los Siete Colores, the lagoon shifts from white sand shallows through pale aquamarine to deep sapphire where cenotes plunge into the lake bed. At sunrise, mist sits on the water and the only sound is the dip of a paddle.",
      "Life here centres on the water. Our favourite way in is a paddle at first light; later, join a small sailing trip to the Canal de los Piratas, once used by smugglers, and the Isla de los Pájaros. Swim in Cenote Esmeralda or Cenote Negro, part of the lagoon itself, and wade among the stromatolites, ancient, living rock-like structures formed by microbes that are among the oldest life forms on Earth. Their fragility is why sunscreen is not welcome in the water here.",
      "Bacalar's town is quiet and unpretentious, with a lakeside square, the 18th-century Fuerte de San Felipe built to defend against pirates, and simple restaurants serving fresh fish. Nearby, Cenote Azul is a vast, 90-metre-deep sinkhole ringed by jungle, and the rarely visited Maya sites of Chacchoben, Kohunlich and Dzibanché make for rewarding day trips. We always book our guests into a lakeside lodge where you can step off the dock straight into the water, coffee in hand.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "November to April is dry and sunny, with temperatures around 27–30°C and the lagoon's colours at their brightest. Heavy rains from June to October can cloud the water. Hurricane season runs from June to November. As a freshwater lagoon, Bacalar is not affected by sargassum, making it a good alternative when the coast is affected.",
      months: [
        m("Jan", "best", "Dry, 27°C; clear water and colours"),
        m("Feb", "best", "Dry and sunny, 28°C"),
        m("Mar", "best", "Dry, 30°C; ideal paddling"),
        m("Apr", "good", "Hot, 32°C; Easter busy, lagoon calm"),
        m("May", "good", "Hot, 33°C; quieter"),
        m("Jun", "mixed", "Rains begin; hurricane season opens"),
        m("Jul", "mixed", "Hot, humid, storms"),
        m("Aug", "mixed", "Hot and humid; rain can cloud water"),
        m("Sep", "mixed", "Wettest month; peak hurricane risk"),
        m("Oct", "mixed", "Rainy, quiet, lagoon less vivid"),
        m("Nov", "good", "Drying out, 29°C"),
        m("Dec", "best", "Dry, 27°C; bright colours return"),
      ],
    },
    highlights: [
      {
        title: "Laguna de Bacalar",
        description:
          "Around 40 kilometres of freshwater in shifting shades of blue and green, best explored by kayak, paddleboard or sailboat.",
      },
      {
        title: "Canal de los Piratas",
        description:
          "A channel once used by pirates, now a gentle boat ride through bright turquoise water to the Isla de los Pájaros bird sanctuary.",
      },
      {
        title: "Cenote Azul",
        description:
          "A huge, deep cenote just south of town, surrounded by jungle and perfect for a cool swim.",
      },
      {
        title: "Los Rápidos",
        description:
          "Where the lagoon narrows into a gentle current that you can float down, surrounded by mangroves and stromatolites.",
      },
      {
        title: "Fuerte de San Felipe",
        description:
          "An 18th-century fort overlooking the lagoon, now a small museum telling the story of the pirates who once raided the region.",
      },
    ],
    thingsToDo: [
      {
        title: "Sunrise paddle",
        description:
          "Take a kayak or paddleboard out at dawn when the water is still and glassy, and watch the colours of the lagoon come alive.",
      },
      {
        title: "Sail the lagoon",
        description:
          "A small sailboat trip takes you to Cenote Esmeralda, the Canal de los Piratas and the bird island, with time to swim along the way.",
      },
      {
        title: "Float Los Rápidos",
        description:
          "Drift along a gentle current through mangroves at the lagoon's southern end, then have lunch at a waterside restaurant.",
      },
      {
        title: "Visit the ruins of Chacchoben or Kohunlich",
        description:
          "Quiet, jungle-wrapped Maya sites within an hour or so of Bacalar, with Kohunlich's famous stucco masks a highlight.",
      },
      {
        title: "Dive Cenote Azul",
        description:
          "Swim or freedive in one of the region's largest cenotes, with depths of around 90 metres.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "The nearest airport is Chetumal (CTM), about 40 minutes away. From Tulum it is roughly 2.5 to 3 hours by road, and the Tren Maya has a Bacalar station near the town.",
      },
      {
        title: "Getting around",
        description:
          "The town is small and walkable. For excursions, use local taxis, a rental car or a private driver. Many lodges offer kayaks and paddleboards.",
      },
      {
        title: "Money",
        description:
          "Bring pesos, as some smaller tour operators and restaurants are cash only. ATMs are available in town, but can be unreliable.",
      },
      {
        title: "Protect the lagoon",
        description:
          "Do not wear sunscreen or repellent in the water and never stand on the stromatolites. Choose operators that follow environmental rules.",
      },
    ],
    faqs: [
      {
        id: "bacalar-1",
        question: "Why is Bacalar called the lagoon of seven colours?",
        answer:
          "The lagoon's white sandy bottom, varying depths and deep cenotes create a range of blues and greens, from pale aquamarine in the shallows to deep navy over the sinkholes.",
        category: "Before you go",
      },
      {
        id: "bacalar-2",
        question: "Is Bacalar affected by sargassum?",
        answer:
          "No. Bacalar is a freshwater lagoon, so it is not affected by sargassum. It is a great alternative when the Caribbean beaches are affected.",
        category: "Before you go",
      },
      {
        id: "bacalar-3",
        question: "How many days should we spend in Bacalar?",
        answer:
          "We recommend at least two or three nights to enjoy sunrise paddles, a sailing trip and a day at the nearby ruins.",
        category: "Before you go",
      },
    ],
    seo: {
      title: "Bacalar Travel Guide: The Lagoon of Seven Colours",
      description:
        "Bacalar: paddle the lagoon of seven colours, float Los Rápidos, swim in Cenote Azul and stay in a lakeside eco-lodge. Our specialist guide.",
    },
  },

  // ---------------------------------------------------------------------------
  // PLAYA DEL CARMEN
  // ---------------------------------------------------------------------------
  {
    slug: "playa-del-carmen",
    name: "Playa del Carmen",
    region: "yucatan-caribbean",
    regionLabel: "Quintana Roo",
    hook: "The Riviera Maya's lively heart, with a pedestrian Fifth Avenue and the ferry to Cozumel's reefs.",
    bestFor:
      "Social travellers, divers and families wanting walkable restaurants, cenotes and easy day trips.",
    keyHighlights:
      "Quinta Avenida, Punta Esmeralda, Cozumel's reefs, Xcaret and Xel-Há, cenotes along Highway 307",
    image: "playa-del-carmen",
    gallery: ["beach", "cenote-3", "mexican-food"],
    overview: [
      "Playa del Carmen began as a small fishing village and ferry landing for Cozumel, and over three decades has grown into the lively heart of the Riviera Maya. Its spine is Quinta Avenida, Fifth Avenue, a pedestrian street that runs parallel to the beach for several kilometres, lined with cafés, boutiques, taquerías and bars. In the morning it is quiet and breezy; by evening it is buzzing with music and people.",
      "The beaches here are long and white. Our specialists' pick is Punta Esmeralda at the northern end, where a freshwater cenote spills into the sea, and the quieter stretch in front of Playacar to the south. Off the main avenue, Calle Corazón has some of the town's best restaurants, and the side streets reward exploration: look for cochinita tacos, fresh fish tacos and Yucatecan breakfasts at the local spots.",
      "Playa is the perfect base for exploring. The ferry to Cozumel, renowned for its drift diving along vibrant coral walls, takes about 45 minutes. Along Highway 307, cenotes such as Jardín del Edén, Cristalino and Azul are perfect for an afternoon swim, and the eco-parks of Xcaret and Xel-Há are nearby. Between November and March, experienced divers can even see bull sharks offshore.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "December to April brings sunny days around 27–30°C and calm seas, with peak crowds over the holidays and spring break. May and November are good-value shoulder months. Sargassum can affect beaches from about April to August, and hurricane season runs June to November. Bull-shark diving runs from roughly November to March.",
      months: [
        m("Jan", "best", "Dry, 27°C; bull-shark season"),
        m("Feb", "best", "Dry, sunny, 27°C"),
        m("Mar", "best", "Dry, 28°C; spring break busy"),
        m("Apr", "good", "Hot and dry, 30°C; sargassum starts"),
        m("May", "good", "Hot, 31°C; quieter"),
        m("Jun", "mixed", "Rains begin; sargassum possible"),
        m("Jul", "mixed", "Hot, humid; sargassum at peak"),
        m("Aug", "mixed", "Hot, humid; school holidays"),
        m("Sep", "mixed", "Wettest month; peak hurricane risk"),
        m("Oct", "mixed", "Rainy spells, hurricane risk; low prices"),
        m("Nov", "good", "Drier, 28°C; bull sharks arrive"),
        m("Dec", "best", "Dry, 27°C; festive season busy"),
      ],
    },
    highlights: [
      {
        title: "Quinta Avenida",
        description:
          "A long pedestrian avenue filled with restaurants, shops and nightlife, perfect for an evening stroll.",
      },
      {
        title: "Cozumel",
        description:
          "Mexico's largest Caribbean island, a short ferry ride away, with world-class drift diving and snorkelling along its reefs.",
      },
      {
        title: "Punta Esmeralda",
        description:
          "A local favourite beach where a cenote meets the sea, creating natural pools perfect for children.",
      },
      {
        title: "Cenotes along Highway 307",
        description:
          "Jardín del Edén, Cristalino and Azul are open-air cenotes surrounded by jungle, just 20 minutes south of town.",
      },
    ],
    thingsToDo: [
      {
        title: "Dive or snorkel Cozumel",
        description:
          "Catch the ferry to Cozumel to explore the famous Palancar and Columbia reefs, with drift dives along dramatic coral walls.",
      },
      {
        title: "Dive with bull sharks",
        description:
          "From November to March, certified divers can see bull sharks in the waters off Playa del Carmen with experienced local operators.",
      },
      {
        title: "Spend a day at Xcaret",
        description:
          "This eco-park combines underground rivers, wildlife and an evening show that celebrates Mexican culture, ideal for families.",
      },
      {
        title: "Cenote hop by bike or car",
        description:
          "Head south on Highway 307 to visit several cenotes in an afternoon, from open-air pools to underground caverns.",
      },
      {
        title: "Eat along Calle Corazón",
        description:
          "Explore the side streets off Fifth Avenue for some of the town's best food, from fish tacos to Yucatecan dishes.",
      },
    ],
    practicalTips: [
      {
        title: "Getting there",
        description:
          "Playa del Carmen is about 50 minutes from Cancún International Airport by car or ADO bus. The Tren Maya also has a station in Playa del Carmen.",
      },
      {
        title: "Getting around",
        description:
          "The centre is walkable, and colectivos (shared vans) run up and down Highway 307 cheaply. Taxis are plentiful but agree the fare first.",
      },
      {
        title: "Money",
        description:
          "ATMs are easy to find, but use those in banks or shopping centres. Pay in pesos for the best rates, and be wary of currency conversion offers on card machines.",
      },
      {
        title: "Timing",
        description:
          "Visit the cenotes and beaches in the morning to beat the crowds. In summer, check sargassum reports before planning beach days.",
      },
      {
        title: "Etiquette",
        description:
          "Tipping of 10–15% is customary in restaurants. Be respectful in local neighbourhoods and keep noise down late at night.",
      },
    ],
    faqs: [
      {
        id: "playa-del-carmen-1",
        question: "Is Playa del Carmen a good base for exploring the Riviera Maya?",
        answer:
          "Yes. Its central location makes it easy to reach Cozumel, cenotes, Tulum, Akumal and the eco-parks, while offering plenty of restaurants and nightlife.",
        category: "Before you go",
      },
      {
        id: "playa-del-carmen-2",
        question: "How do we get to Cozumel from Playa del Carmen?",
        answer:
          "Ferries run frequently from the main pier, taking about 45 minutes. The sea can be choppy, so take motion sickness precautions if needed.",
        category: "On the ground",
      },
      {
        id: "playa-del-carmen-3",
        question: "Is Playa del Carmen good for families?",
        answer:
          "Yes. Calm beaches like Punta Esmeralda, eco-parks like Xcaret and easy cenotes nearby make it a great family destination.",
        category: "Before you go",
      },
    ],
    seo: {
      title: "Playa del Carmen Travel Guide: Beaches & Cozumel",
      description:
        "Playa del Carmen: Fifth Avenue, Cozumel diving, cenotes and family-friendly beaches. Honest advice on seasons, sargassum and where to stay.",
    },
  },
];

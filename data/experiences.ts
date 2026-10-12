import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    slug: "cenotes-and-caves",
    name: "Cenotes and caves",
    summary:
      "Swim, snorkel and float through the Yucatán's freshwater sinkholes, from open jungle pools to cathedral-like caverns lit by a single shaft of sun.",
    description: [
      "There are thousands of cenotes scattered across the Yucatán, and the famous ones on the Tulum road can feel like water parks by 11am. Our specialists know the other kind: a family-run sinkhole near Homún where you climb down a wooden ladder into total silence, or a half-open cavern outside Valladolid where swallows nest in the roof and the water is so clear you lose all sense of depth. We plan your days around the light — most cenotes are at their most magical between 11am and 1pm, when the sun drops straight through the opening — and around the crowds, which usually means arriving at opening time and doing the busy ones last.",
      "For the Maya, these pools were portals to Xibalbá, the underworld, and many still hold offerings and bones beneath the surface. Seeing them with a local guide who grew up swimming in them changes the experience completely. If you dive, we can arrange cavern dives in the Sac Actun and Dos Ojos systems with certified guides; if you don't, a mask, a lifejacket and a quiet morning will do. Bring reef-safe sunscreen only if you must — most cenotes ask you to shower and skip it altogether.",
    ],
    image: "cenote-1",
    destinations: ["tulum", "valladolid", "merida", "playa-del-carmen"],
    bestMonths:
      "Year-round; Nov–Apr is driest and most comfortable, May–Sep is hot but the water is a welcome 24°C",
    whatToExpect: [
      {
        title: "Early starts, empty water",
        description:
          "We schedule the best-known cenotes for opening time (usually 8–9am) and save the quieter village sinkholes for the middle of the day.",
      },
      {
        title: "Open, semi-open and cave cenotes",
        description:
          "A mix of jungle pools, half-collapsed caverns and fully enclosed caves, so you see how differently each one feels and sounds.",
      },
      {
        title: "Local, community-run sites",
        description:
          "Around Homún, Cuzamá and Valladolid many cenotes are owned by ejidos (community land co-ops); your entry fee goes straight to the village.",
      },
      {
        title: "Cavern diving or snorkelling",
        description:
          "Certified divers can join small-group cavern dives with full cave-trained guides; everyone else gets a mask, fins and a lifejacket.",
      },
    ],
    seo: {
      title: "Cenote Swimming Tours in the Yucatán | Cenote House",
      description:
        "Swim in hidden cenotes and caves across the Yucatán with a specialist who knows the quiet ones. Tailor-made trips from Tulum, Valladolid and Mérida.",
    },
  },
  {
    slug: "mayan-ruins",
    name: "Mayan ruins",
    summary:
      "Climb, wander and linger at the great Maya cities, from jungle-wrapped Palenque to the sculpted facades of Uxmal, timed to beat both the heat and the coaches.",
    description: [
      "We have stood at the foot of El Castillo at Chichén Itzá at 8am with barely twenty other people, and again at noon with several thousand — the difference is the whole experience. That is why our itineraries put you in a nearby hacienda or Valladolid the night before, so you walk in as the gates open. We pair the headline sites with places that feel like discoveries: Ek' Balam, where you can still climb the Acropolis and see its winged stucco figures up close; Uxmal and the Puuc Route, with their intricate stone mosaics; or Calakmul, deep in the Campeche biosphere, where howler monkeys are the only soundtrack.",
      "In Chiapas, Palenque is the one that stays with people: temples rising out of rainforest, the tomb of the ruler Pakal, waterfalls running through the site. Our guides are archaeology graduates and Maya speakers who explain the politics, astronomy and ballgame rituals rather than reciting dates. Be prepared for real heat and humidity — hats, water and good shoes matter more here than anywhere else on your trip.",
    ],
    image: "ruins-chichen-itza",
    destinations: ["chiapas", "merida", "valladolid", "tulum", "bacalar"],
    bestMonths:
      "Nov–Mar for cooler mornings; avoid the spring equinox at Chichén Itzá unless you love crowds",
    whatToExpect: [
      {
        title: "Gate-opening entries",
        description:
          "We base you close to the major sites so you arrive at 8am, before the day-trip buses from Cancún and the worst of the heat.",
      },
      {
        title: "Specialist private guides",
        description:
          "Archaeologists and Maya-speaking guides who bring the cities to life with history, mythology and the latest excavation finds.",
      },
      {
        title: "The lesser-known sites",
        description:
          "Ek' Balam, Mayapán, Kabah, Cobá and Calakmul balance the big names and often have just a handful of visitors.",
      },
      {
        title: "Ruins plus a swim",
        description:
          "Almost every ruin day ends at a cenote or lagoon nearby — the best possible reward after a morning in the sun.",
      },
    ],
    seo: {
      title: "Mayan Ruins Tours: Chichén Itzá, Palenque & Uxmal | Cenote House",
      description:
        "Private, early-access visits to Mexico's great Maya cities with archaeologist guides — Chichén Itzá, Uxmal, Ek' Balam, Palenque and beyond.",
    },
  },
  {
    slug: "food-and-mezcal",
    name: "Food and mezcal journeys",
    summary:
      "Eat your way through Mexico's market halls, home kitchens and agave fields, with the cooks and mezcaleros who keep its recipes alive.",
    description: [
      "Mexican food was the first cuisine to be inscribed on UNESCO's intangible heritage list, and once you've eaten a tlayuda over charcoal at Oaxaca's Mercado 20 de Noviembre or a suadero taco at 1am in Mexico City's Centro, you understand why. Our food journeys are built around people: a cook in Teotitlán del Valle who grinds her mole on a metate, a family in Puebla making chiles en nogada in late summer, a cochinita pibil master in Mérida who buries his pork overnight. We avoid the tasting-menu circuit unless you ask for it, though we'll happily book you into the best of Mexico City's restaurants too.",
      "Mezcal is the other half of the story. We'll take you to palenques in the Oaxaca valleys around Santiago Matatlán, where agave hearts roast in earth pits and are crushed by a horse-drawn stone wheel, and you taste espadín beside wild tobalá and tepextate straight from the still. Pace yourself — mezcal is meant to be sipped, ideally with orange slices and sal de gusano, and a palenque visit before lunch is a dangerous thing.",
    ],
    image: "mezcal",
    destinations: ["oaxaca", "mexico-city", "puebla", "merida"],
    bestMonths:
      "Year-round; Jul–Sep for chiles en nogada in Puebla, Oct–Nov for Day of the Dead food traditions",
    whatToExpect: [
      {
        title: "Market mornings",
        description:
          "Breakfast-to-lunch walks through mercados with a local cook — tamales, tlayudas, chapulines and the best hot chocolate you'll find.",
      },
      {
        title: "Cooking in family kitchens",
        description:
          "Hands-on classes in homes rather than schools: mole negro in Oaxaca, recado and pibil in Yucatán, mole poblano in Puebla.",
      },
      {
        title: "Palenque visits and tastings",
        description:
          "Time with small-batch mezcaleros in the Oaxaca valleys, tasting wild and cultivated agaves straight from the clay or copper still.",
      },
      {
        title: "A balance of street and fine dining",
        description:
          "Late-night taquerías alongside a reservation or two at Mexico City's and Oaxaca's most exciting restaurants, if you'd like them.",
      },
    ],
    seo: {
      title: "Mexico Food & Mezcal Tours: Oaxaca, CDMX & Puebla | Cenote House",
      description:
        "Tailor-made food and mezcal journeys through Mexico — market walks, home cooking classes and palenque visits with the people behind the recipes.",
    },
  },
  {
    slug: "day-of-the-dead",
    name: "Day of the Dead",
    summary:
      "Join families honouring their ancestors with marigold altars, candlelit cemeteries and pan de muerto — respectfully, and away from the costume parades.",
    description: [
      "Día de Muertos is not Mexican Halloween. Between 31 October and 2 November, families build ofrendas at home loaded with cempasúchil marigolds, copal incense, photographs and the favourite food and drink of those they've lost, and spend the night of 1–2 November in cemeteries keeping them company. We've spent those nights in the panteones around Oaxaca, where brass bands play beside graves and children fall asleep wrapped in blankets, and it is one of the most moving things we know in Mexico.",
      "Because it is a family occasion, how you visit matters. We work with guides who are known in the villages, keep group sizes tiny, and brief you on etiquette — ask before photographing, bring a candle or flowers, and accept the mezcal when it's offered. Mexico City's huge parade (a newer tradition, inspired by a Bond film) is fun for an evening; Oaxaca, Mérida's Hanal Pixán and smaller towns show you the heart of it. Hotels sell out a year ahead, so this is the trip to book early.",
    ],
    image: "day-of-the-dead",
    destinations: ["oaxaca", "mexico-city", "merida", "puebla", "san-miguel-de-allende"],
    bestMonths: "Late Oct–2 Nov (arrive by 28 Oct to see altars and markets being prepared)",
    whatToExpect: [
      {
        title: "Altars and markets",
        description:
          "Markets fill with marigolds, sugar skulls and pan de muerto in the days before; we time your arrival to see the preparation, not just the finale.",
      },
      {
        title: "A night in the cemeteries",
        description:
          "Small-group visits to village panteones with a guide the families know, so you are a welcome guest rather than an onlooker.",
      },
      {
        title: "Comparsas and processions",
        description:
          "Oaxaca's costumed street processions and, if you'd like, Mexico City's grand parade and Zócalo installations.",
      },
      {
        title: "Book well ahead",
        description:
          "This is Mexico's busiest cultural week in Oaxaca — we recommend confirming 9–12 months out for the best small hotels.",
      },
    ],
    seo: {
      title: "Day of the Dead Tours in Oaxaca & Mexico City | Cenote House",
      description:
        "Experience Día de Muertos respectfully with local guides — ofrendas, candlelit cemetery vigils and processions in Oaxaca, Mérida and Mexico City.",
    },
  },
  {
    slug: "whale-sharks-and-whales",
    name: "Whale sharks and whale watching",
    summary:
      "Snorkel beside the world's largest fish off Holbox, or meet grey whales nose-to-nose in the lagoons of Baja California Sur.",
    description: [
      "Every summer, hundreds of whale sharks gather off the northern tip of the Yucatán to feed on plankton and fish spawn, and there is nothing quite like slipping into deep blue water and watching a spotted, bus-length shark glide past, mouth wide open. We use licensed operators from Holbox and Isla Mujeres who follow the strict rules — two swimmers plus a guide in the water at a time, no touching, no flash — and we pick quieter boats that leave early. Season runs roughly June to mid-September, with July and August the most reliable.",
      "In winter, attention shifts to the Pacific. From January to March, grey whales arrive in the sheltered lagoons of Baja California Sur to give birth, and at Magdalena Bay or San Ignacio the mothers often bring their calves right up to the small pangas, close enough to touch. Humpbacks breach off Los Cabos and in Puerto Vallarta's Banderas Bay from December to March, and La Paz has its own juvenile whale sharks in the cooler months. Seas can be choppy and sightings are wildlife, not guarantees, but we've rarely seen anyone come home disappointed.",
    ],
    image: "whale-shark",
    destinations: ["holbox", "isla-mujeres", "cancun-riviera-maya", "los-cabos", "puerto-vallarta"],
    bestMonths:
      "Whale sharks Jun–Sep (Caribbean) and Oct–Apr (La Paz); grey whales Jan–Mar; humpbacks Dec–Mar",
    whatToExpect: [
      {
        title: "Responsible, licensed boats",
        description:
          "We only use operators who keep to the federal swim rules and group limits, and who leave early to avoid the convoy.",
      },
      {
        title: "Grey whale encounters",
        description:
          "Small pangas in Baja's protected lagoons, where curious mothers and calves often approach the boat of their own accord.",
      },
      {
        title: "Time on the water",
        description:
          "Whale shark trips are a full morning, often 2–3 hours out to sea; good sea legs (or a seasickness tablet) help.",
      },
      {
        title: "Honest odds",
        description:
          "We plan around peak months and build in a spare day where we can, because weather and wildlife keep their own schedules.",
      },
    ],
    seo: {
      title: "Whale Shark Swimming & Grey Whale Watching in Mexico | Cenote House",
      description:
        "Swim with whale sharks off Holbox (Jun–Sep) and meet grey whales in Baja's lagoons (Jan–Mar) on a tailor-made Mexico wildlife trip.",
    },
  },
  {
    slug: "monarch-butterflies",
    name: "Monarch butterfly sanctuaries",
    summary:
      "Walk into the high fir forests of Michoacán and the State of Mexico, where millions of monarchs cling to the trees each winter.",
    description: [
      "After a journey of up to 4,000 kilometres from Canada and the United States, the monarchs spend the winter in a handful of oyamel fir forests at around 3,000 metres, a few hours west of Mexico City. On a cold morning they hang in heavy orange clusters from the branches; once the sun warms them, they lift off in their thousands and the air fills with a sound like light rain. We have stood in El Rosario and Sierra Chincua and watched branches bend under the weight — it's one of the great natural spectacles on Earth.",
      "The sanctuaries are inside the Monarch Butterfly Biosphere Reserve, a UNESCO World Heritage site, and visits are led by local ejido guides. The walk or horse ride up is steep and the altitude is real, so we spend the night nearby — in Valle de Bravo or a mountain lodge — to be on the trail by mid-morning, when the butterflies start to fly. It pairs beautifully with Mexico City and the colonial towns of the Bajío.",
    ],
    image: "monarch",
    destinations: ["mexico-city", "san-miguel-de-allende", "guanajuato"],
    bestMonths: "Nov–Mar, with the densest colonies from late Dec to Feb",
    whatToExpect: [
      {
        title: "High-altitude hiking",
        description:
          "Trails climb to around 3,000–3,300m; allow 45–90 minutes uphill, or go on horseback with a local wrangler.",
      },
      {
        title: "Local ejido guides",
        description:
          "Community guides from the reserve lead every visit, and your entry fees support forest protection.",
      },
      {
        title: "Timing the flight",
        description:
          "The colonies are most active between about 11am and 2pm on sunny days, so we avoid pre-dawn departures from the city.",
      },
      {
        title: "Cold mornings",
        description:
          "Expect near-freezing starts and warm afternoons at altitude — layers, a hat and sturdy shoes are essential.",
      },
    ],
    seo: {
      title: "Monarch Butterfly Sanctuary Tours from Mexico City | Cenote House",
      description:
        "See millions of monarch butterflies in Mexico's UNESCO biosphere reserve (Nov–Mar), with local guides and an overnight stay close to the sanctuaries.",
    },
  },
  {
    slug: "honeymoons",
    name: "Honeymoons",
    summary:
      "Private cenote swims, sunset sails and hideaway hotels — a Mexico honeymoon that feels like yours alone, not a resort package.",
    description: [
      "The best Mexico honeymoons we've planned mix two moods: a few days of real discovery and a few of doing absolutely nothing. That might be mezcal and mole in Oaxaca before flying to a bungalow above the Pacific, or a hacienda in the Yucatán countryside — candlelit dinners under the arches, a private cenote at dawn — followed by barefoot days on Holbox or the lagoon at Bacalar. We match the pace to you, and keep transfers short so you're not losing whole days in cars.",
      "Our specialists know which rooms have the plunge pools, which beaches are hit hardest by sargassum in summer (and where to go instead), and which restaurants are worth the table. Along the way we add touches that feel personal rather than performed: a private temazcal ceremony, a sunset sail on the Sea of Cortez, a picnic at a ruin before it opens. No rose-petal clichés unless you want them.",
    ],
    image: "honeymoon",
    destinations: ["tulum", "holbox", "bacalar", "oaxaca", "los-cabos"],
    bestMonths:
      "Nov–Apr for the Caribbean (dry, less sargassum); Oct–Jun for Los Cabos; Oaxaca is lovely year-round",
    whatToExpect: [
      {
        title: "Culture plus barefoot time",
        description:
          "Usually a city or colonial stop for food and history, then a long, slow finish by the sea.",
      },
      {
        title: "The right room",
        description:
          "We know the hotels room by room, so you get the private terrace, the sea view or the plunge pool rather than whatever's left.",
      },
      {
        title: "Private moments",
        description:
          "Early-morning cenote swims, sunset sails, temazcal ceremonies and private dinners arranged quietly in the background.",
      },
      {
        title: "Sargassum-smart planning",
        description:
          "Seaweed can affect Caribbean beaches from roughly May to September; we steer you to the lagoon, the Pacific or Holbox when it's bad.",
      },
    ],
    seo: {
      title: "Mexico Honeymoons: Tailor-Made & Off the Resort Track | Cenote House",
      description:
        "Romantic, tailor-made Mexico honeymoons — haciendas, private cenotes, Holbox, Bacalar and Los Cabos — planned by a specialist who knows every room.",
    },
  },
  {
    slug: "family-trips",
    name: "Family trips",
    summary:
      "Pyramids to climb, turtles to snorkel with and cenotes to jump into — Mexico is one big adventure playground for children of every age.",
    description: [
      "Children take to Mexico in a way that surprises parents. They love the food (quesadillas and tortillas are universal currency), they love the water, and a pyramid is the best climbing frame ever built. We design family trips around short travel days, swimming pools at the right moments and early starts that suit jet-lagged little ones. Snorkelling with sea turtles at Akumal, zip-lining over cenotes, feeding the flamingos' curiosity at Río Lagartos or building sandcastles on Isla Mujeres — every day has one big thing and plenty of space around it.",
      "We pick hotels with connecting rooms or family villas, find drivers with proper child seats, and choose guides who are good with kids (it really matters at the ruins). Mexico City surprises families too: the Chapultepec castle, the floating gardens of Xochimilco and the city's excellent museums. We're honest about the heat in summer and the crowds over Easter and Christmas, and help you choose dates that work for school holidays.",
    ],
    image: "family-beach",
    destinations: ["cancun-riviera-maya", "playa-del-carmen", "isla-mujeres", "mexico-city", "los-cabos"],
    bestMonths:
      "Feb half-term and Easter are ideal; Jul–Aug works with pools and cenotes, but it's hot and humid",
    whatToExpect: [
      {
        title: "Short transfers",
        description:
          "We keep drives under three hours where possible and break longer ones with a swim or lunch stop.",
      },
      {
        title: "Kid-friendly guides",
        description:
          "Guides who turn ruins into treasure hunts and know when it's time for an ice cream.",
      },
      {
        title: "Hands-on activities",
        description:
          "Turtle snorkelling, tortilla-making, chocolate workshops, zip lines and cenote jumps pitched to your children's ages.",
      },
      {
        title: "Family rooms and villas",
        description:
          "Connecting rooms, suites and private villas with pools, plus child seats in every private vehicle.",
      },
    ],
    seo: {
      title: "Mexico Family Holidays: Tailor-Made Trips with Kids | Cenote House",
      description:
        "Family trips to Mexico with short transfers, kid-friendly guides, cenotes, ruins and beaches — planned by specialists who travel with their own kids.",
    },
  },
  {
    slug: "luxury-haciendas",
    name: "Luxury haciendas",
    summary:
      "Sleep in restored 17th- to 19th-century estates, with machinery halls turned into lounges and private cenotes in the grounds.",
    description: [
      "The Yucatán's haciendas were built on henequen, the 'green gold' agave fibre that made Mérida one of the richest cities in the world in the late 1800s. When synthetic rope killed the trade, the estates fell into ruin; today a handful have been restored into some of the most atmospheric places to stay in Mexico. Picture deep-red walls, soaring ceilings, pools set inside old water tanks, and evenings when the only sound is birdsong and the ceiling fan. We love the drive in, down a long limestone road, as the chimney of the old factory appears above the trees.",
      "Beyond the Yucatán, haciendas and grand country houses dot the highlands around San Miguel de Allende and Puebla, often surrounded by vineyards or ranchland. They work best as a base for two or three nights — ruins and cenotes in the morning, a long lunch, and a swim before dinner. Most are rural, so expect a short drive to restaurants and plan on dining in at least one night.",
    ],
    image: "hacienda",
    destinations: ["merida", "valladolid", "san-miguel-de-allende", "puebla"],
    bestMonths: "Nov–Apr; May is very hot in the Yucatán, and Jun–Oct brings afternoon storms",
    whatToExpect: [
      {
        title: "History you can sleep in",
        description:
          "Rooms in former owners' houses, machine halls and workers' cottages, each with its own story of the henequen boom.",
      },
      {
        title: "Slow, spacious days",
        description:
          "Large grounds, pools and gardens — we leave afternoons free so you actually get to enjoy them.",
      },
      {
        title: "Near ruins and cenotes",
        description:
          "Many haciendas sit within 30–60 minutes of Uxmal, Chichén Itzá or the Homún cenotes.",
      },
      {
        title: "Rural seclusion",
        description:
          "Wonderful peace and dark skies, but limited dining nearby; we pair stays with a city night or two in Mérida.",
      },
    ],
    seo: {
      title: "Luxury Hacienda Stays in Yucatán & Central Mexico | Cenote House",
      description:
        "Stay in restored haciendas near Mérida, Valladolid and San Miguel de Allende — historic estates with pools, gardens and cenotes nearby.",
    },
  },
  {
    slug: "wellness-retreats",
    name: "Wellness retreats",
    summary:
      "Temazcal sweat lodges, jungle yoga and healing traditions rooted in Mexico's indigenous cultures, at a pace that genuinely restores.",
    description: [
      "Mexico's wellness traditions run deep. The temazcal — a domed stone sweat lodge used by Mesoamerican peoples for centuries — is still part of family life in Oaxaca and the highlands, and a ceremony led by a traditional healer, with copal smoke, herbs and singing, is unlike any spa treatment you've had. We also know the newer side: yoga shalas in the Tulum jungle, sound baths beside Bacalar's lagoon, hot springs in the hills around San Miguel de Allende, and slow mornings on the beaches near Mazunte.",
      "We build wellness into a trip rather than shutting you away for a week (unless you'd like that). Expect early nights, morning practice, healthy food that is genuinely good, and one or two experiences that move you. We vet practitioners carefully — some of the Riviera Maya's 'shamanic' offerings are more Instagram than ancestral — and will tell you which places feel authentic and which simply look the part.",
    ],
    image: "wellness",
    destinations: ["tulum", "bacalar", "san-miguel-de-allende", "oaxaca", "puerto-escondido"],
    bestMonths: "Nov–Apr for the coast; year-round in the highlands, with Jun–Sep bringing afternoon rain",
    whatToExpect: [
      {
        title: "Temazcal ceremonies",
        description:
          "Traditional sweat lodges led by healers who learned from their families, not from a weekend course.",
      },
      {
        title: "Daily movement",
        description:
          "Yoga, meditation or swimming each morning, at a pace you set — private or small-group classes.",
      },
      {
        title: "Food that nourishes",
        description:
          "Fresh, local, plant-forward cooking, from Oaxacan herbs to Caribbean fish, without the faddishness.",
      },
      {
        title: "Carefully vetted practitioners",
        description:
          "We only work with healers, teachers and spas we've personally experienced and trust.",
      },
    ],
    seo: {
      title: "Wellness Retreats in Mexico: Temazcal, Yoga & Spa | Cenote House",
      description:
        "Tailor-made wellness trips in Mexico — temazcal ceremonies, jungle yoga in Tulum, lagoon calm in Bacalar and hot springs near San Miguel de Allende.",
    },
  },
  {
    slug: "surf-trips",
    name: "Surf trips",
    summary:
      "From the heavy barrels of Zicatela to the gentle peelers of Sayulita and Cerritos, Mexico's Pacific coast has a wave for every level.",
    description: [
      "Mexico has some of the most consistent surf in the Americas. Puerto Escondido's Zicatela, the 'Mexican Pipeline', is a powerful beach break for experts only — on a big day in summer it's thrilling just to watch from the sand with a coffee. A few minutes away, La Punta and Carrizalillo offer friendlier waves for learning and progressing. Further north, Sayulita and the breaks around Punta de Mita are relaxed and fun, and on the Baja peninsula, Cerritos near Todos Santos is one of the best beginner beaches we know.",
      "We set you up with surf schools and coaches we trust, boards in the right size, and accommodation steps from the water. For experienced surfers, we work out which breaks will work with the forecast and arrange local guides to show you around. Non-surfers are well catered for too — yoga, turtle releases, lagoon trips and plenty of beach bars. Be aware that the Pacific is powerful: rips are strong and swimming beaches need choosing with care.",
    ],
    image: "surf",
    destinations: ["puerto-escondido", "puerto-vallarta", "los-cabos"],
    bestMonths:
      "Mar–Oct for bigger south swells (experts May–Aug); Nov–Mar for beginners and Baja's north swells",
    whatToExpect: [
      {
        title: "Lessons for every level",
        description:
          "Patient coaches at mellow breaks for first-timers, and video coaching for intermediates who want to progress.",
      },
      {
        title: "Local surf guides",
        description:
          "For confident surfers, guides who know which point or beach break will fire on the day's swell.",
      },
      {
        title: "Beachfront bases",
        description:
          "Small hotels and villas within walking distance of the waves, so a dawn session is easy.",
      },
      {
        title: "Plenty for non-surfers",
        description:
          "Yoga, turtle releases, bioluminescent lagoons and long lunches for anyone happier on the sand.",
      },
    ],
    seo: {
      title: "Surf Trips in Mexico: Puerto Escondido, Sayulita & Baja | Cenote House",
      description:
        "Tailor-made Mexico surf trips with lessons, guides and beachfront stays in Puerto Escondido, Sayulita, Punta de Mita and Cerritos.",
    },
  },
  {
    slug: "copper-canyon-rail",
    name: "Copper Canyon rail journey",
    summary:
      "Ride El Chepe through 86 tunnels and over 37 bridges into a canyon system larger and deeper in places than the Grand Canyon.",
    description: [
      "The Chihuahua al Pacífico railway, known to everyone as El Chepe, took nearly a century to build and climbs from near sea level at Los Mochis to over 2,400 metres in the Sierra Tarahumara. Sitting in the open vestibule between carriages as the train curls through tunnels and over gorges, with the smell of pine and woodsmoke coming in, is one of the great rail journeys of the world. The Barrancas del Cobre are actually a network of interlocking canyons, several deeper than Arizona's Grand Canyon.",
      "We break the journey with stays at the canyon rim and in small mountain villages, so you have time to hike, ride the cable car at Divisadero, or visit Rarámuri communities known for their long-distance running and fine basketry. Nights are cold from November to February and the infrastructure is simple in places, but the scale and silence of the canyons more than make up for it. We plan routes and timings with trusted local operators who know the sierra well.",
    ],
    image: "copper-canyon-train",
    destinations: ["copper-canyon", "los-cabos", "mexico-city"],
    bestMonths:
      "Oct–Nov after the rains (green canyons, waterfalls) and Mar–Apr; Dec–Feb is crisp with possible snow",
    whatToExpect: [
      {
        title: "Scenic train days",
        description:
          "Several hours on El Chepe each travel day; the most dramatic stretch is between El Fuerte and Divisadero.",
      },
      {
        title: "Canyon-rim lodges",
        description:
          "Simple but characterful hotels perched on the edge of the canyon, with sunsets you'll talk about for years.",
      },
      {
        title: "Hikes and the cable car",
        description:
          "Guided walks to viewpoints and waterfalls, plus the zip lines and cable car at the Parque de Aventura Barrancas del Cobre.",
      },
      {
        title: "Rarámuri culture",
        description:
          "Respectful visits to Rarámuri (Tarahumara) communities, with guides who have long-standing relationships there.",
      },
    ],
    seo: {
      title: "Copper Canyon Train Journey on El Chepe | Cenote House",
      description:
        "Ride the El Chepe railway through Mexico's Copper Canyon with canyon-rim stays, guided hikes and Rarámuri culture — a tailor-made rail journey.",
    },
  },
];

import type { Destination } from "../types";

/**
 * Mainland destinations: Central Highlands, Oaxaca & Chiapas,
 * the Pacific coast, Baja and the north.
 */
export const mainlandDestinations: Destination[] = [
  // ---------------------------------------------------------------------------
  // MEXICO CITY
  // ---------------------------------------------------------------------------
  {
    slug: "mexico-city",
    name: "Mexico City",
    region: "central-highlands",
    regionLabel: "Central Highlands",
    hook: "A 700-year-old capital that eats, paints and argues better than almost anywhere on earth.",
    bestFor:
      "Food lovers, art and history buffs, and anyone who wants to understand Mexico before they see the rest of it.",
    keyHighlights:
      "Museo Nacional de Antropología, Roma and Condesa, Teotihuacan at sunrise, Frida Kahlo's Casa Azul, Xochimilco, street tacos",
    image: "mexico-city",
    gallery: ["mexico-city-2", "tacos", "market"],
    overview: [
      "Mexico City is where we tell almost every guest to begin. The Aztecs built Tenochtitlan on an island in a high-altitude lake; the Spanish built their capital on top of it; and modern CDMX keeps peeling back the layers. Stand in the Zócalo and you can see the cathedral tilting gently into the old lakebed, while a few steps away the excavated stones of the Templo Mayor sit below street level.",
      "But this isn't a museum city. Our favourite mornings start with a café de olla and a concha in Roma Norte, walking the jacaranda-lined Avenida Amsterdam ring in Condesa, then pushing into the Mercado de Medellín for mole pastes and Colombian coffee. Lunch, the main meal here, runs from 2pm until well past 5pm, and dinner reservations at the city's serious kitchens need booking weeks ahead.",
      "At 2,240 metres the air is thin and the sun is strong, and the city is vast: more than 20 million people in the metro area. The trick is to treat it as a collection of villages. We base guests in one or two neighbourhoods, plan days by area, and add a private guide for the big-ticket sights so the traffic works for you, not against you.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "Mexico City is a year-round destination. The dry season (November to April) brings clear blue mornings; March and April are warmest, with jacarandas in bloom. June to September sees short, heavy afternoon storms, usually clearing by evening.",
      months: [
        { month: "Jan", rating: "good", note: "Dry and sunny, 22°C days, near-freezing nights" },
        { month: "Feb", rating: "best", note: "Dry, clear skies, 24°C" },
        { month: "Mar", rating: "best", note: "Jacarandas bloom, warm and dry, 26°C" },
        { month: "Apr", rating: "best", note: "Warmest month, 27°C; Easter crowds" },
        { month: "May", rating: "good", note: "Hot and hazy, first storms late in the month" },
        { month: "Jun", rating: "mixed", note: "Rainy season begins, afternoon downpours" },
        { month: "Jul", rating: "mixed", note: "Daily afternoon rain, mornings fine, 23°C" },
        { month: "Aug", rating: "mixed", note: "Wettest stretch, green and fresh" },
        { month: "Sep", rating: "mixed", note: "Rain eases late; Independence Day on the 16th" },
        { month: "Oct", rating: "good", note: "Drying out, mild 23°C, Day of the Dead build-up" },
        { month: "Nov", rating: "best", note: "Day of the Dead, dry and crisp" },
        { month: "Dec", rating: "good", note: "Dry, cool nights, festive posadas" },
      ],
    },
    highlights: [
      {
        title: "Museo Nacional de Antropología",
        description:
          "One of the great museums of the world, set in Chapultepec Park. The Mexica hall holds the Sun Stone and the feathered headdress replica; give it at least half a day with a guide who can join the dots.",
      },
      {
        title: "Teotihuacan",
        description:
          "An hour north-east of the city, the Avenue of the Dead runs between the Pyramids of the Sun and Moon. Arrive at opening, or float over it at dawn by hot-air balloon before the crowds arrive.",
      },
      {
        title: "Roma and Condesa",
        description:
          "Art deco apartment blocks, leafy parks, independent galleries and the city's best cafés and cantinas. This is where we base most guests.",
      },
      {
        title: "Coyoacán and the Casa Azul",
        description:
          "Frida Kahlo's cobalt-blue family home is now the Museo Frida Kahlo. Tickets sell out days ahead; afterwards, wander the cobbled plazas and the market for tostadas.",
      },
      {
        title: "The Centro Histórico",
        description:
          "The Zócalo, Metropolitan Cathedral, Templo Mayor ruins and Diego Rivera's murals at the Palacio Nacional, all within a few blocks.",
      },
    ],
    thingsToDo: [
      {
        title: "Eat your way through a street-food tour",
        description:
          "Tacos al pastor carved from the trompo, tlacoyos with blue-corn masa, quesadillas (with or without cheese, a debate in itself). Our food guides know which stalls are worth the queue.",
      },
      {
        title: "Balloon over Teotihuacan at sunrise",
        description:
          "Lift off around 6:30am and drift over the pyramids as the light turns gold, then land for breakfast in a nearby village.",
      },
      {
        title: "Lucha libre at Arena México",
        description:
          "Tuesday and Friday nights are pure theatre: masked luchadores, roaring crowds and cold beer. We send you with a local who knows the rituals.",
      },
      {
        title: "Punt through Xochimilco",
        description:
          "Board a painted trajinera on the ancient canals, the last remnant of the lake. Go on a weekday morning to see the chinampa farms, not just the party boats.",
      },
      {
        title: "Mezcal and cantina crawl",
        description:
          "From the century-old Bar La Ópera with its bullet hole in the ceiling to tiny mezcalerías in Roma, sip your way through the city's drinking history.",
      },
      {
        title: "Murals and modern art",
        description:
          "Rivera at the Palacio de Bellas Artes and the Secretaría de Educación Pública, then contemporary work at Museo Jumex and the galleries of San Miguel Chapultepec.",
      },
    ],
    practicalTips: [
      {
        title: "Respect the altitude",
        description:
          "At 2,240 metres you'll feel short of breath on stairs for the first day or two. Drink plenty of water, go easy on mezcal the first night and wear sunscreen even when it feels cool.",
      },
      {
        title: "Plan by neighbourhood",
        description:
          "Traffic can turn a 5km trip into an hour. We group sights by area and schedule cross-city journeys outside the morning and evening rush.",
      },
      {
        title: "Use registered transport",
        description:
          "Use app-based rides or hotel cars rather than hailing street taxis. Our private drivers handle airport transfers and day trips.",
      },
      {
        title: "Book restaurants and museums early",
        description:
          "The top tasting-menu restaurants and the Casa Azul often sell out weeks in advance. Tell us your dates and we'll secure them.",
      },
      {
        title: "Mondays are museum-free",
        description:
          "Most museums, including the Anthropology Museum and Casa Azul, close on Mondays. It's a good day for markets, Xochimilco or a trip out of town.",
      },
    ],
    faqs: [
      {
        id: "mexico-city-1",
        question: "Is Mexico City safe for visitors?",
        answer:
          "The neighbourhoods most visitors spend time in, such as Roma, Condesa, Polanco, Coyoacán and the Centro by day, are lively and generally safe with normal city sense. Keep valuables discreet, use registered transport and ask us or your hotel about any area you're unsure of.",
        category: "On the ground",
      },
      {
        id: "mexico-city-2",
        question: "How many days do I need in Mexico City?",
        answer:
          "We suggest four nights as a minimum: one day for the Centro Histórico, one for Chapultepec and the Anthropology Museum, one for Teotihuacan and one for Coyoacán and Xochimilco. Food lovers rarely regret adding a fifth.",
        category: "Before you go",
      },
      {
        id: "mexico-city-3",
        question: "Will the altitude affect me?",
        answer:
          "Most people notice mild breathlessness and tire a little faster for the first day or two. Serious altitude sickness is rare at 2,240 metres, but if you have heart or lung conditions, check with your doctor before travelling.",
        category: "Before you go",
      },
      {
        id: "mexico-city-4",
        question: "Can I combine Mexico City with the beach?",
        answer:
          "Easily. Direct flights connect the city to Cancún, Oaxaca, Puerto Escondido, Puerto Vallarta and Los Cabos in one to three hours, so a city-then-coast trip is one of our most popular shapes.",
        category: "Booking with us",
      },
    ],
    seo: {
      title: "Mexico City Travel Guide | Cenote House",
      description:
        "Plan a tailor-made trip to Mexico City: Teotihuacan, Roma and Condesa, the Anthropology Museum, Frida's Casa Azul and the best street food.",
    },
  },

  // ---------------------------------------------------------------------------
  // OAXACA
  // ---------------------------------------------------------------------------
  {
    slug: "oaxaca",
    name: "Oaxaca",
    region: "oaxaca-chiapas",
    regionLabel: "Oaxaca",
    hook: "Seven moles, smoky mezcal and a living Zapotec culture in a jewel-box colonial city.",
    bestFor:
      "Cooks and eaters, mezcal curious, textile and craft collectors, and travellers who want living indigenous culture.",
    keyHighlights:
      "Monte Albán, Mercado 20 de Noviembre, mezcal palenques, Hierve el Agua, Teotitlán del Valle weavers, the Guelaguetza",
    image: "oaxaca",
    gallery: ["oaxaca-2", "mezcal", "textile"],
    overview: [
      "If Mexico City is the country's head, Oaxaca is its heart. The city sits at around 1,550 metres in a wide valley ringed by the Sierra Madre del Sur, and its centre is a grid of pastel houses, green-stone churches and courtyards hung with bougainvillea. The Templo de Santo Domingo, gilded inside almost to the ceiling, is worth a visit at least twice: once for the church, once for the ethnobotanical garden behind it.",
      "Most of all, Oaxaca is about food. In the Mercado 20 de Noviembre, the Pasillo de Humo is a smoke-filled aisle where you choose raw tasajo and cecina from the butchers and have it grilled on the spot, then carry it to a table with tortillas, guacamole and grilled spring onions. Moles come in seven classic colours, chocolate is ground with cinnamon and drunk at breakfast, and tlayudas crisp over charcoal on street corners after dark.",
      "Beyond the city, the valleys are where the culture lives. We take guests to family palenques where agave hearts roast in earth pits for days before being crushed by a stone wheel, to Teotitlán del Valle to watch rugs dyed with cochineal and indigo, and up to the Zapotec hilltop city of Monte Albán, which looks down on the whole valley.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "Oaxaca city enjoys spring-like weather year-round. October to April is dry and sunny, with Day of the Dead (late October to 2 November) the most atmospheric and most booked time. The rainy season runs June to September, but rain mostly falls in the afternoon, and July brings the Guelaguetza festival.",
      months: [
        { month: "Jan", rating: "best", note: "Dry, sunny, 25°C days, cool nights" },
        { month: "Feb", rating: "best", note: "Dry and warm, 27°C" },
        { month: "Mar", rating: "good", note: "Warm and dry, 29°C" },
        { month: "Apr", rating: "good", note: "Hottest month, 30°C; Easter processions" },
        { month: "May", rating: "mixed", note: "Hot, dusty, first storms" },
        { month: "Jun", rating: "mixed", note: "Rainy season starts, green valleys" },
        { month: "Jul", rating: "good", note: "Guelaguetza festival; afternoon showers" },
        { month: "Aug", rating: "mixed", note: "Afternoon rain, lush countryside" },
        { month: "Sep", rating: "mixed", note: "Wettest month, quieter streets" },
        { month: "Oct", rating: "best", note: "Drying out; Day of the Dead preparations" },
        { month: "Nov", rating: "best", note: "Día de Muertos, clear skies, 26°C" },
        { month: "Dec", rating: "best", note: "Dry and festive; Noche de Rábanos on the 23rd" },
      ],
    },
    highlights: [
      {
        title: "Monte Albán",
        description:
          "Founded around 500 BC, the Zapotec capital was built on a flattened mountaintop above the city. Come early to have the Gran Plaza almost to yourself and see the carved Danzantes stones.",
      },
      {
        title: "Mezcal country",
        description:
          "Santiago Matatlán calls itself the world capital of mezcal. Visit small family palenques to taste espadín, tobalá and wild agaves straight from the still.",
      },
      {
        title: "Hierve el Agua",
        description:
          "Mineral springs have built what look like frozen waterfalls down a cliff face. Swim in the natural infinity pools with the Sierra stretching away below.",
      },
      {
        title: "The Guelaguetza",
        description:
          "Held on the last two Mondays of July, this festival brings dancers from Oaxaca's eight regions to an amphitheatre on Cerro del Fortín for an explosion of costume and music.",
      },
      {
        title: "Craft villages",
        description:
          "Teotitlán del Valle for wool rugs, San Bartolo Coyotepec for black pottery and San Martín Tilcajete for painted alebrije carvings.",
      },
    ],
    thingsToDo: [
      {
        title: "Cook with a Oaxacan cocinera",
        description:
          "Shop the Mercado de la Merced with a local cook, then grind chiles on a metate and learn a mole from scratch in her family kitchen.",
      },
      {
        title: "Grill your own lunch in the Pasillo de Humo",
        description:
          "Pick your meat, have it grilled in the smoke-filled aisle of the Mercado 20 de Noviembre, and eat it with fresh tortillas and salsa.",
      },
      {
        title: "Walk the valley ruins",
        description:
          "Combine Monte Albán with the intricate stone fretwork of Mitla and the giant Árbol del Tule, a cypress with a trunk over 40 metres around.",
      },
      {
        title: "Visit a weaving family",
        description:
          "In Teotitlán del Valle, watch wool carded, spun and dyed with cochineal, pomegranate and indigo, then woven on a pedal loom.",
      },
      {
        title: "Hike the Sierra Norte",
        description:
          "Community-run cabins in the Pueblos Mancomunados give access to cloud-forest trails high above the valley. A rewarding two-day add-on.",
      },
      {
        title: "Day of the Dead in the cemeteries",
        description:
          "On the nights of 31 October to 2 November, families decorate graves with marigolds and candles. We arrange respectful visits with a local guide.",
      },
    ],
    practicalTips: [
      {
        title: "Book Day of the Dead early",
        description:
          "The best hotels for late October and early November fill up nine to twelve months ahead. The same goes for Guelaguetza week in July.",
      },
      {
        title: "Pace the mezcal",
        description:
          "Mezcal is sipped, not shot, and it can be 45% to 55% alcohol. Sip slowly, follow it with orange and sal de gusano, and drink water in between.",
      },
      {
        title: "Carry pesos for markets",
        description:
          "Markets, villages and palenques mostly deal in cash. Smaller notes are appreciated.",
      },
      {
        title: "Getting to the coast",
        description:
          "Oaxaca's beaches are on the other side of the mountains. The short flight to Puerto Escondido or Huatulco saves a long drive, though the newer highway now makes the road trip about four hours.",
      },
    ],
    faqs: [
      {
        id: "oaxaca-1",
        question: "When is the Guelaguetza?",
        answer:
          "It's held on the two Mondays following 16 July, known as the Lunes del Cerro, with concerts, parades and food events throughout the surrounding weeks. Amphitheatre seats sell out, so book early if you want to go.",
        category: "Before you go",
      },
      {
        id: "oaxaca-2",
        question: "How many days should I spend in Oaxaca?",
        answer:
          "Four nights lets you see the city, Monte Albán and one day each in the mezcal and craft villages. Add two nights for the Sierra Norte, or combine with the coast for a week on the beach.",
        category: "Booking with us",
      },
      {
        id: "oaxaca-3",
        question: "Is Oaxaca good for vegetarians?",
        answer:
          "Very. Tlayudas, memelas, squash-blossom quesadillas, tamales and many moles can all be made without meat. Our guides will tell cooks your preferences in advance.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Oaxaca Travel Guide: Mezcal, Mole & Ruins",
      description:
        "Discover Oaxaca with a specialist: Monte Albán, mezcal palenques, weaving villages, the Guelaguetza and Day of the Dead. Tailor-made trips.",
    },
  },

  // ---------------------------------------------------------------------------
  // LOS CABOS
  // ---------------------------------------------------------------------------
  {
    slug: "los-cabos",
    name: "Los Cabos",
    region: "baja-north",
    regionLabel: "Baja California Sur",
    hook: "Where the desert meets two seas, and humpback whales cruise past your breakfast table.",
    bestFor:
      "Luxury resort stays, whale watching, honeymoons, golf, and desert-meets-ocean landscapes.",
    keyHighlights:
      "El Arco at Land's End, winter humpback whales, San José del Cabo art walk, Cabo Pulmo reef, Todos Santos, desert ATV trails",
    image: "los-cabos",
    gallery: ["los-cabos-2", "whale", "sea-of-cortez"],
    overview: [
      "At the very tip of the Baja California peninsula, the Pacific Ocean and the Sea of Cortez meet at a granite arch called El Arco. Los Cabos is two towns joined by a 30km corridor of resorts and golf courses: lively Cabo San Lucas, with its marina and boat traffic, and quieter San José del Cabo, with a colonial church, a leafy plaza and an excellent gallery district.",
      "The landscape is the surprise. Behind the beaches, cardón cactus and rocky arroyos run up into the Sierra de la Laguna. Between December and April, humpback whales arrive to calve, and from a boat you can watch them breach close by. In the evenings, the light turns the desert pink, and dinner in a farm-to-table restaurant among the orchards of Las Ánimas Bajas is one of our favourite rituals.",
      "Be honest about the sea: much of the Pacific side has powerful surf and strong undertow, so we steer swimmers to protected bays like Medano, Chileno and Santa María. For reef life, the drive north-east to Cabo Pulmo, a national park whose coral has recovered dramatically since protection, takes you below the surface of the Sea of Cortez.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "November to May is dry, sunny and warm, with whale season peaking January to March. Summers are hot and humid, and hurricane season runs June to November, with the greatest risk from August to October.",
      months: [
        { month: "Jan", rating: "best", note: "Whale season peaks, 26°C, dry" },
        { month: "Feb", rating: "best", note: "Humpbacks and calves, dry, 27°C" },
        { month: "Mar", rating: "best", note: "Warm, dry, last of peak whales" },
        { month: "Apr", rating: "good", note: "Sunny, 29°C; Easter busy" },
        { month: "May", rating: "good", note: "Hot and dry, calm seas" },
        { month: "Jun", rating: "good", note: "Hot, 32°C; hurricane season begins" },
        { month: "Jul", rating: "mixed", note: "Hot and humid, warm sea for diving" },
        { month: "Aug", rating: "mixed", note: "Very hot, humid, storm risk" },
        { month: "Sep", rating: "mixed", note: "Peak hurricane risk, quietest month" },
        { month: "Oct", rating: "mixed", note: "Still warm, storm risk lingers" },
        { month: "Nov", rating: "good", note: "Pleasant 30°C, dry; marlin fishing" },
        { month: "Dec", rating: "best", note: "Whales return, 27°C, festive" },
      ],
    },
    highlights: [
      {
        title: "El Arco and Land's End",
        description:
          "Take a boat out to the famous granite arch, sea lion colony and Lovers' Beach, where the Pacific and the Sea of Cortez sit on either side of a narrow strip of sand.",
      },
      {
        title: "Whale season",
        description:
          "From December to April humpbacks breed and calve offshore. Small-boat trips with a marine biologist are the best way to see them.",
      },
      {
        title: "San José del Cabo",
        description:
          "The older, gentler town. On Thursday evenings from November to June, the art walk opens galleries around the historic centre with wine and live music.",
      },
      {
        title: "Cabo Pulmo National Park",
        description:
          "One of the healthiest reefs in the Sea of Cortez, about 2 hours north-east. Snorkel or dive among huge schools of jacks, rays and sea lions.",
      },
      {
        title: "Todos Santos",
        description:
          "An hour up the Pacific coast, an artsy Pueblo Mágico with galleries, mango orchards and surf beaches. Lovely for a long lunch.",
      },
    ],
    thingsToDo: [
      {
        title: "Whale-watch with a biologist",
        description:
          "Board a small boat in the early morning, when seas are calm, to watch humpbacks breach and slap their fins. Some guides drop hydrophones so you can hear them sing.",
      },
      {
        title: "Snorkel Chileno and Santa María bays",
        description:
          "Two protected coves on the corridor with calm water, sea turtles and colourful reef fish, a short drive from most resorts.",
      },
      {
        title: "Dine at a desert farm",
        description:
          "Organic farms in the foothills above San José serve dinner under the trees, cooked over wood fires from produce picked that day.",
      },
      {
        title: "Sail at sunset",
        description:
          "A private catamaran trip past the Arch at golden hour, with dolphins often appearing alongside.",
      },
      {
        title: "Ride the desert",
        description:
          "Explore arroyos and dunes by UTV or on horseback along the beach towards the Pacific lighthouse.",
      },
      {
        title: "Play golf",
        description:
          "The corridor has some of Mexico's most dramatic courses, with fairways running along the cliffs above the sea.",
      },
    ],
    practicalTips: [
      {
        title: "Check which beaches are swimmable",
        description:
          "Many Pacific-facing beaches, including Divorce Beach, have dangerous currents. Look for the blue flag and stick to Medano, Chileno, Santa María and Palmilla.",
      },
      {
        title: "Choose your base wisely",
        description:
          "Cabo San Lucas suits nightlife and boat trips; San José suits couples and art lovers; the corridor offers seclusion. We'll match the resort to your style.",
      },
      {
        title: "Ignore the airport timeshare desks",
        description:
          "On arrival, walk straight past the 'information' desks offering free tours. Your private driver will be waiting outside the terminal.",
      },
      {
        title: "Book whale trips with ethical operators",
        description:
          "We only work with operators who respect distance limits and use small boats, so the whales are disturbed as little as possible.",
      },
    ],
    faqs: [
      {
        id: "los-cabos-1",
        question: "When is whale season in Los Cabos?",
        answer:
          "Humpback whales are present from mid-December to mid-April, with the best sightings from January to March. Grey whales calve in the lagoons further north on the Pacific coast at the same time, and we can add an excursion to see them up close.",
        category: "Before you go",
      },
      {
        id: "los-cabos-2",
        question: "Should I worry about hurricanes?",
        answer:
          "Hurricane season runs June to November, with the highest risk from August to October. Most of the year the weather is reliably dry. If you travel in late summer, we recommend flexible bookings and good travel insurance, and we monitor forecasts for you.",
        category: "Before you go",
      },
      {
        id: "los-cabos-3",
        question: "Can I swim in the sea at Los Cabos?",
        answer:
          "Yes, at the right beaches. Medano Beach in Cabo San Lucas and the bays of Chileno and Santa María are calm and safe. Many Pacific-facing beaches have strong currents and are for looking at, not swimming.",
        category: "On the ground",
      },
      {
        id: "los-cabos-4",
        question: "Is Los Cabos only about resorts?",
        answer:
          "Not at all. Add a night or two in Todos Santos, a day at Cabo Pulmo, or a road trip north to La Paz to swim with whale sharks (October to April) and kayak around Isla Espíritu Santo.",
        category: "Booking with us",
      },
    ],
    seo: {
      title: "Los Cabos Travel Guide: Whales & Luxury",
      description:
        "Tailor-made Los Cabos holidays: whale watching, El Arco, Cabo Pulmo, Todos Santos and the best luxury resorts, planned by a Mexico specialist.",
    },
  },

  // ---------------------------------------------------------------------------
  // SAN MIGUEL DE ALLENDE
  // ---------------------------------------------------------------------------
  {
    slug: "san-miguel-de-allende",
    name: "San Miguel de Allende",
    region: "central-highlands",
    regionLabel: "Guanajuato state",
    hook: "Cobbled lanes, rooftop sunsets and a pink-spired church that looks like it fell from a storybook.",
    bestFor:
      "Couples, art and design lovers, slow travellers, food and wine fans, and anyone who loves a beautiful town to wander.",
    keyHighlights:
      "La Parroquia, rooftop bars, Fábrica La Aurora, Atotonilco sanctuary, highland vineyards, El Charco del Ingenio",
    image: "san-miguel",
    gallery: ["san-miguel-2", "colonial-street", "boutique-hotel"],
    overview: [
      "San Miguel de Allende is almost absurdly pretty. Its colonial centre, a UNESCO World Heritage Site, is a tight web of cobbled streets lined with ochre, terracotta and saffron walls, with heavy carved doors opening onto courtyards full of jacaranda and lemon trees. At its heart, the Parroquia de San Miguel Arcángel rises in pink stone, its neo-Gothic spires added in the 1880s by a local stonemason who reportedly worked from postcards of European cathedrals.",
      "Artists have been coming here since the 1930s, and the town has grown into one of Mexico's best places to shop for design, from the galleries and studios inside the former textile mill of Fábrica La Aurora to small ateliers selling tin, glass and embroidered linen. At dusk, everyone climbs to a rooftop terrace to watch the sun set behind the Parroquia with a mezcal or a glass of local wine in hand.",
      "Look beyond the postcard and you'll find the countryside: highland vineyards producing serious wines, hot springs set in tunnels and grottos, and the Sanctuary of Atotonilco, whose painted ceilings earned it the nickname 'the Sistine Chapel of Mexico'. At around 1,900 metres, the days are warm and the nights cool, so pack a layer.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "San Miguel is pleasant year-round. October to April is dry, with sunny days and cool nights (frosty in December and January). March to May is warm and dry, and June to September brings afternoon rain and green hills. September is busy with festivities for the town's patron saint.",
      months: [
        { month: "Jan", rating: "good", note: "Sunny, 22°C days, cold nights near 3°C" },
        { month: "Feb", rating: "best", note: "Dry, warming, 24°C" },
        { month: "Mar", rating: "best", note: "Jacarandas bloom, 27°C, dry" },
        { month: "Apr", rating: "best", note: "Warm, Holy Week processions" },
        { month: "May", rating: "good", note: "Hottest month, 30°C, dry and dusty" },
        { month: "Jun", rating: "good", note: "Rains begin, green hills" },
        { month: "Jul", rating: "mixed", note: "Afternoon showers, mild 25°C" },
        { month: "Aug", rating: "mixed", note: "Afternoon rain, lush countryside" },
        { month: "Sep", rating: "good", note: "Fiesta de San Miguel Arcángel, Independence celebrations" },
        { month: "Oct", rating: "best", note: "Dry, clear, 25°C; harvest wines" },
        { month: "Nov", rating: "best", note: "Day of the Dead, crisp and sunny" },
        { month: "Dec", rating: "good", note: "Festive posadas, cold nights" },
      ],
    },
    highlights: [
      {
        title: "La Parroquia and El Jardín",
        description:
          "The pink neo-Gothic church towers over El Jardín, the town's main square. Sit under the laurel trees at dusk as mariachis tune up and families gather.",
      },
      {
        title: "Rooftop sunsets",
        description:
          "The town's skyline is best seen from above. Our specialists know the quieter terraces where you can watch the domes glow without the crowds.",
      },
      {
        title: "Sanctuary of Atotonilco",
        description:
          "Fifteen minutes from town, this 18th-century sanctuary is covered almost entirely in folk-baroque murals. It shares UNESCO status with San Miguel.",
      },
      {
        title: "Fábrica La Aurora",
        description:
          "A converted textile factory filled with galleries, design studios and antique dealers. Plan a whole morning.",
      },
      {
        title: "Highland wine country",
        description:
          "Vineyards around San Miguel and Dolores Hidalgo produce excellent wines at altitude. Taste, lunch among the vines and stay overnight at a winery.",
      },
    ],
    thingsToDo: [
      {
        title: "Wander the botanical garden",
        description:
          "El Charco del Ingenio is a cactus-filled nature reserve above town, with trails around a canyon and a dam. Beautiful in the morning light.",
      },
      {
        title: "Soak in the hot springs",
        description:
          "Thermal pools outside town include La Gruta, where you wade through a stone tunnel into a domed grotto of warm water.",
      },
      {
        title: "Take a cooking class",
        description:
          "Visit the Mercado Ignacio Ramírez with a local chef, then cook a feast of the Bajío region in a private home kitchen.",
      },
      {
        title: "Ride or hot-air balloon at dawn",
        description:
          "Float over the town and the surrounding countryside at sunrise, or ride horses through the hills to a ranch breakfast.",
      },
      {
        title: "Wine tasting at local vineyards",
        description:
          "A private driver takes you to boutique wineries for tastings and lunch, so no one has to worry about driving.",
      },
      {
        title: "Shop for design and folk art",
        description:
          "Tin and brass lanterns, hand-blown glass, embroidered textiles and contemporary Mexican design in small shops across the centre.",
      },
    ],
    practicalTips: [
      {
        title: "Pack proper shoes",
        description:
          "The cobbles are steep and uneven, and heels are impossible. Comfortable shoes with good grip make all the difference.",
      },
      {
        title: "Layer up",
        description:
          "Even in summer, evenings get cool at 1,900 metres, and in winter, nights can fall to near freezing. Bring a warm layer for rooftop dinners.",
      },
      {
        title: "Getting here",
        description:
          "The nearest airports are Querétaro (about 1 hour) and León/Bajío (about 1.5 hours). Mexico City is around 3.5 to 4 hours by car.",
      },
      {
        title: "Weekends get busy",
        description:
          "San Miguel is a favourite weekend escape for city dwellers. Visit midweek if you can, and book weekend restaurant tables in advance.",
      },
    ],
    faqs: [
      {
        id: "san-miguel-de-allende-1",
        question: "How long should I stay in San Miguel de Allende?",
        answer:
          "Three nights is the sweet spot: one day for the town, one for Atotonilco and the hot springs, and one for wine country. Many guests combine it with nearby Guanajuato city.",
        category: "Booking with us",
      },
      {
        id: "san-miguel-de-allende-2",
        question: "Is San Miguel good for a honeymoon?",
        answer:
          "It's one of our favourites for couples: intimate boutique hotels, rooftop dinners, vineyard stays and spas. Pair it with a beach for the perfect balance.",
        category: "Booking with us",
      },
      {
        id: "san-miguel-de-allende-3",
        question: "Is San Miguel very touristy?",
        answer:
          "It's popular, with a large community of foreign residents, so English is widely spoken. The centre can feel busy at weekends, but step a few blocks out or into the countryside and it feels very local.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "San Miguel de Allende Travel Guide",
      description:
        "Plan your San Miguel de Allende trip: La Parroquia, rooftop sunsets, Atotonilco, hot springs and highland vineyards, tailored by a Mexico expert.",
    },
  },

  // ---------------------------------------------------------------------------
  // PUEBLA
  // ---------------------------------------------------------------------------
  {
    slug: "puebla",
    name: "Puebla",
    region: "central-highlands",
    regionLabel: "Puebla",
    hook: "The birthplace of mole poblano, wrapped in hand-painted Talavera tiles and watched over by volcanoes.",
    bestFor:
      "Food lovers, architecture fans, ceramic collectors, and an easy, rewarding escape from Mexico City.",
    keyHighlights:
      "Mole poblano, Talavera workshops, Capilla del Rosario, Cholula's Great Pyramid, Biblioteca Palafoxiana, Popocatépetl views",
    image: "puebla",
    gallery: ["talavera", "mexican-food", "colonial-street"],
    overview: [
      "Puebla is just two hours from Mexico City, but few visitors give it the time it deserves. Its centre, a UNESCO World Heritage Site, is one of the best-preserved colonial cities in the Americas, with more than 70 churches and façades covered in Talavera tile and sculpted plaster. On a clear morning, the snow-capped peaks of Popocatépetl and Iztaccíhuatl rise on the horizon.",
      "It's also one of Mexico's great food cities. Mole poblano, dark and complex with chiles, chocolate and spices, is said to have been invented by nuns in a convent kitchen here. Between late July and September, restaurants serve chiles en nogada, roasted poblano chiles stuffed with fruit and meat and covered in walnut sauce and pomegranate, the colours of the Mexican flag. Year-round, try cemitas, huge sesame-seed sandwiches layered with papalo herbs.",
      "Next door, Cholula hides the largest pyramid in the world by volume beneath a grassy hill topped by a bright yellow church. Walk the tunnels inside, then climb to the church for views over the city's countless domes.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "Puebla has a temperate highland climate. October to May is dry and sunny, with cool nights. The rainy season runs June to September, with afternoon storms, and this is also chiles en nogada season (August and September).",
      months: [
        { month: "Jan", rating: "good", note: "Dry, 22°C days, cold nights" },
        { month: "Feb", rating: "best", note: "Clear skies, volcano views" },
        { month: "Mar", rating: "best", note: "Warm and dry, 26°C" },
        { month: "Apr", rating: "best", note: "Warmest month, Holy Week" },
        { month: "May", rating: "good", note: "Warm; Cinco de Mayo celebrations" },
        { month: "Jun", rating: "mixed", note: "Rains begin, afternoon storms" },
        { month: "Jul", rating: "mixed", note: "Rainy afternoons, green countryside" },
        { month: "Aug", rating: "good", note: "Chiles en nogada season begins" },
        { month: "Sep", rating: "good", note: "Chiles en nogada, Independence festivities" },
        { month: "Oct", rating: "best", note: "Dry, clear, mild" },
        { month: "Nov", rating: "best", note: "Day of the Dead, crisp and sunny" },
        { month: "Dec", rating: "good", note: "Dry, cool, festive" },
      ],
    },
    highlights: [
      {
        title: "Capilla del Rosario",
        description:
          "Inside the Templo de Santo Domingo, this 17th-century chapel is covered floor to dome in gilded plaster and gold leaf. One of the most extraordinary baroque interiors in Mexico.",
      },
      {
        title: "Talavera workshops",
        description:
          "Puebla's tin-glazed pottery is still made by hand. Visit a workshop such as Uriarte to see clay prepared, shaped and painted in cobalt blue.",
      },
      {
        title: "Great Pyramid of Cholula",
        description:
          "Built over centuries, it's the largest pyramid by volume on earth. Explore the tunnels, then climb to the Church of Our Lady of Remedies on top.",
      },
      {
        title: "Biblioteca Palafoxiana",
        description:
          "Founded in 1646, it's considered the first public library in the Americas, with carved wooden shelves and thousands of antique books.",
      },
    ],
    thingsToDo: [
      {
        title: "A mole tasting",
        description:
          "Compare moles in a traditional fonda, then learn how one is made with a local cook, from toasting chiles to grinding spices.",
      },
      {
        title: "Wander Calle de los Dulces",
        description:
          "Shop for camotes, tortitas de Santa Clara and other convent-born sweets on this street of old-fashioned confectioners.",
      },
      {
        title: "Visit Museo Amparo",
        description:
          "A superb collection of pre-Hispanic and colonial art in a pair of historic buildings, with a rooftop café overlooking the cathedral.",
      },
      {
        title: "Browse the Barrio del Artista",
        description:
          "Artists paint in small studios around a little square, and the antiques and flea market of Los Sapos opens at weekends nearby.",
      },
      {
        title: "Day trip to Cuetzalan",
        description:
          "A misty Pueblo Mágico in the Sierra Norte, known for its cobbled streets, waterfalls and the Danza de los Voladores.",
      },
      {
        title: "Cholula by bike",
        description:
          "Cycle between Cholula's churches, said to number one for every day of the year, and stop in the village of Tonantzintla to see its exuberant baroque interior.",
      },
    ],
    practicalTips: [
      {
        title: "Combine with Mexico City",
        description:
          "Puebla is about two hours by car from Mexico City and works well as a two-night stop on the way to Oaxaca.",
      },
      {
        title: "Arrive hungry",
        description:
          "Lunch is the main event. Book a long comida at a traditional restaurant and plan a light dinner of street snacks.",
      },
      {
        title: "Mind the altitude",
        description:
          "At about 2,135 metres, Puebla is nearly as high as Mexico City. Take it easy if you come straight from the coast.",
      },
      {
        title: "Check the volcano",
        description:
          "Popocatépetl is active and sometimes puffs ash. It rarely affects visitors, but we monitor it and will adjust plans if needed.",
      },
    ],
    faqs: [
      {
        id: "puebla-1",
        question: "Is Puebla worth a visit from Mexico City?",
        answer:
          "Absolutely. Even a day trip shows you its churches, Talavera and food, but two nights let you add Cholula and enjoy the city in the evening when the squares come alive.",
        category: "Booking with us",
      },
      {
        id: "puebla-2",
        question: "When can I eat chiles en nogada?",
        answer:
          "Chiles en nogada are seasonal, made when walnuts and pomegranates are fresh, from roughly late July to September. They're especially popular around Independence Day on 16 September.",
        category: "On the ground",
      },
      {
        id: "puebla-3",
        question: "How do I know if Talavera is authentic?",
        answer:
          "Genuine Talavera comes from certified workshops in Puebla and Tlaxcala and carries a DO4 (designation of origin) mark. Our guides take you to workshops that make it the traditional way.",
        category: "Money",
      },
    ],
    seo: {
      title: "Puebla Travel Guide: Mole, Talavera, Cholula",
      description:
        "Discover Puebla: mole poblano, Talavera workshops, the Capilla del Rosario and Cholula's Great Pyramid. Tailor-made trips from Mexico City.",
    },
  },

  // ---------------------------------------------------------------------------
  // GUANAJUATO
  // ---------------------------------------------------------------------------
  {
    slug: "guanajuato",
    name: "Guanajuato",
    region: "central-highlands",
    regionLabel: "Guanajuato state",
    hook: "A rainbow-coloured silver town tumbling down a ravine, with roads that run underground.",
    bestFor:
      "Culture seekers, photographers, students of history, and travellers who love music and lively streets.",
    keyHighlights:
      "Callejón del Beso, underground tunnels, Teatro Juárez, Festival Cervantino, Pípila viewpoint, callejoneadas",
    image: "guanajuato",
    gallery: ["colonial-street", "san-miguel-2", "market"],
    overview: [
      "Guanajuato was once one of the richest cities in the world, built on silver from the La Valenciana mine. Its wealth went into lavish churches and theatres, and today its houses, painted in yellow, blue and pink, are stacked up the sides of a narrow ravine. It's a UNESCO World Heritage Site and a university town, which keeps it lively and young.",
      "What makes it unique is its tangle of underground roads. Old river tunnels and mine shafts now carry the traffic beneath the centre, leaving the surface streets for people. Above, the city is a maze of tiny alleys, or callejones. The most famous, the Callejón del Beso, is so narrow that couples on opposite balconies can kiss across it, and local legend says it's seven years' good luck if you kiss on the third step.",
      "Evenings belong to the estudiantinas, musicians dressed as Renaissance students, who lead callejoneadas, singing walks through the alleys. In October, the Festival Internacional Cervantino brings theatre, music and dance from around the world. Take the funicular to the monument of El Pípila for the view across the whole bowl of colour, best at sunset.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "Guanajuato has a mild highland climate. October to April is dry and sunny, with cool nights. The rainy season runs June to September, mostly with afternoon showers. October brings the Festival Cervantino, the city's busiest and liveliest time.",
      months: [
        { month: "Jan", rating: "good", note: "Dry, 21°C days, cold nights" },
        { month: "Feb", rating: "best", note: "Sunny and dry, 23°C" },
        { month: "Mar", rating: "best", note: "Warm and dry, 26°C" },
        { month: "Apr", rating: "good", note: "Warm; Holy Week events" },
        { month: "May", rating: "good", note: "Hottest month, 29°C" },
        { month: "Jun", rating: "mixed", note: "Rains begin" },
        { month: "Jul", rating: "mixed", note: "Afternoon showers, green hills" },
        { month: "Aug", rating: "mixed", note: "Wet afternoons, quieter streets" },
        { month: "Sep", rating: "good", note: "Rains ease, Independence festivities" },
        { month: "Oct", rating: "best", note: "Festival Cervantino, busy and vibrant" },
        { month: "Nov", rating: "best", note: "Dry, clear, Day of the Dead" },
        { month: "Dec", rating: "good", note: "Cool and festive" },
      ],
    },
    highlights: [
      {
        title: "Callejón del Beso",
        description:
          "The famous 'Alley of the Kiss', barely 70cm wide in places. Hear the tragic legend from a local storyteller, then take your turn on the third step.",
      },
      {
        title: "Teatro Juárez",
        description:
          "An opulent theatre opened in 1903, with a neoclassical façade, bronze muses on the roof and a Moorish-style interior.",
      },
      {
        title: "El Pípila viewpoint",
        description:
          "Ride the funicular up to the monument to an independence hero for the best panorama over the city's colourful houses and domes.",
      },
      {
        title: "Festival Internacional Cervantino",
        description:
          "Every October, Latin America's biggest performing-arts festival fills theatres, plazas and streets with performances.",
      },
      {
        title: "Alhóndiga de Granaditas",
        description:
          "A former grain store where an early battle of the War of Independence was fought in 1810, now a museum with powerful murals.",
      },
    ],
    thingsToDo: [
      {
        title: "Join a callejoneada",
        description:
          "Follow the estudiantinas through the alleys at night, singing, joking and stopping at small plazas to hear stories.",
      },
      {
        title: "Explore La Valenciana",
        description:
          "Visit the old silver mine and the magnificent churrigueresque Templo de San Cayetano, built from mining profits.",
      },
      {
        title: "Drive the tunnels",
        description:
          "Take a taxi or a guided ride through the underground roads, once riverbeds, for a unique view of how the city works.",
      },
      {
        title: "Visit Diego Rivera's birthplace",
        description:
          "The muralist was born here in 1886. His family home is now a museum with early works and sketches.",
      },
      {
        title: "Browse the Mercado Hidalgo",
        description:
          "A grand iron-and-glass market hall full of food stalls, sweets and crafts. Try an enchilada minera, the local miners' dish.",
      },
      {
        title: "Visit the Museo de las Momias",
        description:
          "A macabre but fascinating museum of naturally mummified bodies. Not for everyone, but very Mexican in its attitude to death.",
      },
    ],
    practicalTips: [
      {
        title: "Prepare for the hills",
        description:
          "Guanajuato is built on steep slopes, and many alleys are stairs. Comfortable shoes and a steady pace are essential.",
      },
      {
        title: "Book Cervantino early",
        description:
          "Hotels fill up for the October festival, and popular performances sell out. Let us know early if you want to go.",
      },
      {
        title: "Pair it with San Miguel",
        description:
          "San Miguel de Allende is about 1.5 hours away by road. We often combine the two in a colonial heartland trip.",
      },
      {
        title: "Getting here",
        description:
          "León/Bajío airport is around 40 minutes away, with flights from Mexico City and the US.",
      },
    ],
    faqs: [
      {
        id: "guanajuato-1",
        question: "Guanajuato or San Miguel de Allende: which should I choose?",
        answer:
          "Ideally both. San Miguel is more polished, with boutique hotels and rooftop dining. Guanajuato is livelier and more local, with a university buzz and lower prices. They're only 1.5 hours apart.",
        category: "Booking with us",
      },
      {
        id: "guanajuato-2",
        question: "How many nights do I need in Guanajuato?",
        answer:
          "Two nights is enough to explore the centre, join a callejoneada and visit La Valenciana. Stay longer during the Festival Cervantino.",
        category: "Before you go",
      },
      {
        id: "guanajuato-3",
        question: "Is the city easy to get around?",
        answer:
          "The centre is compact and best explored on foot, though it's hilly. Taxis are cheap for longer distances, and the funicular makes the climb to El Pípila easy.",
        category: "On the ground",
      },
    ],
    seo: {
      title: "Guanajuato Travel Guide | Cenote House",
      description:
        "Explore Guanajuato: colourful alleys, the Callejón del Beso, underground tunnels, Teatro Juárez and the Festival Cervantino. Tailor-made trips.",
    },
  },

  // ---------------------------------------------------------------------------
  // PUERTO VALLARTA
  // ---------------------------------------------------------------------------
  {
    slug: "puerto-vallarta",
    name: "Puerto Vallarta",
    region: "pacific-coast",
    regionLabel: "Pacific coast",
    hook: "A whitewashed old town between jungle mountains and a bay full of whales.",
    bestFor:
      "Couples, families, LGBTQ+ travellers, whale watchers, and anyone who wants a beach town with real Mexican character.",
    keyHighlights:
      "The Malecón, Zona Romántica, humpback whales, boat-only Yelapa, Marietas Islands, Sayulita and Punta de Mita",
    image: "puerto-vallarta",
    gallery: ["beach", "whale", "beach-resort"],
    overview: [
      "Puerto Vallarta sits on the Bay of Banderas, one of the largest bays in Mexico, with the jungle-covered Sierra Madre rising right behind the town. Unlike many purpose-built resorts, it grew from a fishing village, and the old town still has cobbled streets, whitewashed houses with red-tiled roofs and the crown-topped Church of Our Lady of Guadalupe.",
      "The Malecón seafront promenade, lined with bronze sculptures, is where the whole town comes to watch the sun set over the bay. South of the river, the Zona Romántica is full of small restaurants, art galleries and bars, and is the heart of Mexico's most welcoming LGBTQ+ scene. Grab fish on a stick at Playa de los Muertos, then a sunset cocktail on the pier.",
      "Between December and March, humpback whales come to the bay to mate and give birth. The south shore has jungle coves like Yelapa, reached only by boat, while to the north lie the surf town of Sayulita and the luxury peninsula of Punta de Mita, close to the protected Marietas Islands.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "November to April is the best time to visit, with dry, sunny days, warm seas and whale season from December to March. May is hot and dry. June to October is hot and humid, with tropical rain and hurricane risk, especially in September and October.",
      months: [
        { month: "Jan", rating: "best", note: "Dry and sunny, 27°C; whales in the bay" },
        { month: "Feb", rating: "best", note: "Peak whale season, 27°C" },
        { month: "Mar", rating: "best", note: "Dry and warm, last whales" },
        { month: "Apr", rating: "good", note: "Sunny, Easter crowds" },
        { month: "May", rating: "good", note: "Hot and dry, warmer seas" },
        { month: "Jun", rating: "mixed", note: "Rains begin, humid, hurricane season starts" },
        { month: "Jul", rating: "mixed", note: "Hot, humid, tropical storms" },
        { month: "Aug", rating: "mixed", note: "Hot and wet, lush jungle" },
        { month: "Sep", rating: "mixed", note: "Wettest month, peak storm risk" },
        { month: "Oct", rating: "mixed", note: "Humid, storm risk lingers" },
        { month: "Nov", rating: "best", note: "Dry season returns, 30°C" },
        { month: "Dec", rating: "best", note: "Whales arrive, festive and sunny" },
      ],
    },
    highlights: [
      {
        title: "The Malecón",
        description:
          "A seafront promenade lined with sculptures and street performers. Walk it at sunset, when the sky turns orange over the bay.",
      },
      {
        title: "Zona Romántica",
        description:
          "The old south-side neighbourhood around Playa de los Muertos, packed with taco stands, galleries, bars and boutique hotels.",
      },
      {
        title: "Whale watching",
        description:
          "Humpbacks fill the bay from December to March, and sightings are almost guaranteed from a small boat.",
      },
      {
        title: "Yelapa",
        description:
          "A village with no roads on a jungle cove, reached by water taxi. Hike to a waterfall and eat pie sold on the beach.",
      },
      {
        title: "Islas Marietas",
        description:
          "A protected archipelago home to blue-footed boobies and the famous Hidden Beach. Access is strictly limited to protect it.",
      },
    ],
    thingsToDo: [
      {
        title: "Taco tour of the old town",
        description:
          "Evening walks through street stands serving birria, marlin tacos and smoked fish, ending with a raicilla tasting.",
      },
      {
        title: "Visit the Vallarta Botanical Garden",
        description:
          "A beautiful garden in the mountains south of town, full of orchids and native plants, with a river for swimming.",
      },
      {
        title: "Snorkel at Los Arcos",
        description:
          "A marine park of granite arches just off the south shore, with tropical fish and calm water.",
      },
      {
        title: "Day trip to Sayulita",
        description:
          "A bohemian surf town with colourful streets and laid-back cafés. Take a beginner surf lesson in the gentle waves.",
      },
      {
        title: "Release baby turtles",
        description:
          "From summer into autumn, conservation camps along the bay release hatchlings into the sea at sunset.",
      },
      {
        title: "Ride into the Sierra Madre",
        description:
          "Horseback or zip-line through the jungle above town, or visit the old mining village of San Sebastián del Oeste.",
      },
    ],
    practicalTips: [
      {
        title: "Choose your area",
        description:
          "The old town and Zona Romántica suit walkers and foodies; the Hotel Zone and Marina suit families; Punta de Mita offers secluded luxury.",
      },
      {
        title: "Two states, one bay",
        description:
          "The Ameca River divides Jalisco from Nayarit, so Nuevo Vallarta, Punta de Mita and Sayulita are in a different state from Puerto Vallarta. Allow 45 to 60 minutes to reach the northern shore in traffic.",
      },
      {
        title: "Book the Marietas carefully",
        description:
          "Only a limited number of permits are issued each day for the Hidden Beach, and it's closed on certain days. We'll book a licensed operator.",
      },
      {
        title: "Prepare for summer humidity",
        description:
          "From June to October it's hot and humid, with heavy rain at night. Prices are lower, but pack light clothes and plan for storms.",
      },
    ],
    faqs: [
      {
        id: "puerto-vallarta-1",
        question: "When is the best time to see whales in Puerto Vallarta?",
        answer:
          "Humpback whales visit the Bay of Banderas from about mid-December to late March, with the best sightings from January to March.",
        category: "Before you go",
      },
      {
        id: "puerto-vallarta-2",
        question: "Is Puerto Vallarta good for families?",
        answer:
          "Very. Calm beaches, easy boat trips, turtle releases, zip-lines and family-friendly resorts all make it a great choice for children.",
        category: "Booking with us",
      },
      {
        id: "puerto-vallarta-3",
        question: "Does Puerto Vallarta get sargassum?",
        answer:
          "No. Sargassum seaweed affects Mexico's Caribbean coast, not the Pacific, so the beaches here are usually free of it.",
        category: "Before you go",
      },
    ],
    seo: {
      title: "Puerto Vallarta Travel Guide: Whales & Beaches",
      description:
        "Plan a tailor-made Puerto Vallarta trip: whale watching, the Malecón, Zona Romántica, Yelapa and the Marietas Islands, with a Mexico specialist.",
    },
  },

  // ---------------------------------------------------------------------------
  // PUERTO ESCONDIDO
  // ---------------------------------------------------------------------------
  {
    slug: "puerto-escondido",
    name: "Puerto Escondido",
    region: "pacific-coast",
    regionLabel: "Oaxaca coast",
    hook: "World-class waves, glowing lagoons and barefoot beach towns on Oaxaca's wild Pacific coast.",
    bestFor:
      "Surfers, young couples, nature lovers, and travellers looking for a relaxed, boho beach break with great food.",
    keyHighlights:
      "Zicatela's Mexican Pipeline, Carrizalillo cove, bioluminescent Manialtepec Lagoon, turtle releases, Mazunte and Zipolite",
    image: "puerto-escondido",
    gallery: ["surf", "beach", "eco-lodge"],
    overview: [
      "Puerto Escondido, 'the hidden port', has long been a pilgrimage for surfers. At Zicatela beach, the Mexican Pipeline throws some of the heaviest beach-break waves on the planet, and big-wave surfers come from around the world to ride them. For the rest of us, it's a joy to watch from a beach café with a coffee in hand.",
      "But Puerto Escondido is much more than surfing. Carrizalillo, down a long flight of steps, is a calm crescent cove perfect for learning to surf or swimming. The La Punta neighbourhood has a laid-back vibe of yoga studios and mezcal bars, while Rinconada has some of the best restaurants. Eat fresh tuna tostadas and pescado a la talla grilled over coals.",
      "The surrounding coast is wonderful. Mazunte, Zipolite and San Agustinillo are small, chilled beach villages an hour south, and in the Manialtepec Lagoon at night, plankton glows bright blue when you trail your hand in the water. From Bacocho beach, conservationists release baby turtles at sunset.",
    ],
    hurricaneSeason: true,
    bestTime: {
      summary:
        "November to April is the dry season, with sunny days and warm seas. May to October is the rainy season, hot and humid, with the biggest swells and the risk of tropical storms or hurricanes, especially from August to October.",
      months: [
        { month: "Jan", rating: "best", note: "Dry and sunny, 30°C" },
        { month: "Feb", rating: "best", note: "Dry, calm seas for swimming" },
        { month: "Mar", rating: "best", note: "Dry and warm, 30°C" },
        { month: "Apr", rating: "good", note: "Hot, Easter crowds from Mexico" },
        { month: "May", rating: "good", note: "Hot, big swells begin" },
        { month: "Jun", rating: "mixed", note: "Rains begin, pumping surf" },
        { month: "Jul", rating: "mixed", note: "Humid, big waves, lagoon glows" },
        { month: "Aug", rating: "mixed", note: "Hot and wet, storm risk" },
        { month: "Sep", rating: "mixed", note: "Wettest month, peak storm risk" },
        { month: "Oct", rating: "mixed", note: "Storm risk lingers, lush and quiet" },
        { month: "Nov", rating: "good", note: "Dry returns; surf competitions" },
        { month: "Dec", rating: "best", note: "Dry, sunny, festive" },
      ],
    },
    highlights: [
      {
        title: "Zicatela Beach",
        description:
          "Home of the Mexican Pipeline, one of the world's most powerful beach breaks. Watch the pros, but don't swim here.",
      },
      {
        title: "Playa Carrizalillo",
        description:
          "A sheltered cove reached by around 160 steps, with gentle waves for beginners and calm water for swimming.",
      },
      {
        title: "Manialtepec Lagoon",
        description:
          "A mangrove lagoon rich with birdlife by day and glowing with bioluminescent plankton on dark nights.",
      },
      {
        title: "Turtle releases",
        description:
          "Conservation projects collect eggs from the beach and release hatchlings into the sea at sunset.",
      },
      {
        title: "Mazunte and Zipolite",
        description:
          "Hippie-chic beach villages to the south, with a turtle centre and the clifftop viewpoint of Punta Cometa.",
      },
    ],
    thingsToDo: [
      {
        title: "Learn to surf",
        description:
          "Private lessons at Carrizalillo or the gentler point break at La Punta are perfect for beginners.",
      },
      {
        title: "Night kayak in the lagoon",
        description:
          "Paddle out on a moonless night and watch the water glow as you move your hand through it.",
      },
      {
        title: "Go dolphin and whale spotting",
        description:
          "Boat trips at dawn often find spinner dolphins, sea turtles and, in winter, humpback whales.",
      },
      {
        title: "Sunset at Punta Cometa",
        description:
          "Walk out to this rocky headland near Mazunte for one of the most beautiful sunsets in Mexico.",
      },
      {
        title: "Eat at the fish market",
        description:
          "Choose a fish from the morning catch and have it grilled at a beach shack.",
      },
      {
        title: "Practise yoga by the sea",
        description:
          "Puerto Escondido and Mazunte have many open-air yoga studios with classes for every level.",
      },
    ],
    practicalTips: [
      {
        title: "Respect the ocean",
        description:
          "Zicatela and many other beaches have powerful waves and rip currents. Swim only at sheltered beaches like Carrizalillo, Puerto Angelito and Manzanillo.",
      },
      {
        title: "Getting here",
        description:
          "Direct flights from Mexico City take about an hour. The newer highway from Oaxaca city has cut the mountain drive to around three to four hours.",
      },
      {
        title: "Bring cash",
        description:
          "Many small restaurants and shops only take cash, and ATMs can run dry at busy times.",
      },
      {
        title: "Embrace the simple life",
        description:
          "Many of the best places to stay are small, stylish eco-lodges and boutique hotels rather than big resorts.",
      },
    ],
    faqs: [
      {
        id: "puerto-escondido-1",
        question: "Is Puerto Escondido good for beginner surfers?",
        answer:
          "Yes. Zicatela is for experts only, but Carrizalillo and La Punta have smaller, more forgiving waves, and there are lots of good surf schools.",
        category: "On the ground",
      },
      {
        id: "puerto-escondido-2",
        question: "When can I see the bioluminescence?",
        answer:
          "The glow in Manialtepec Lagoon is usually strongest in the rainy months and early dry season (roughly July to December) and is best on dark, moonless nights.",
        category: "Before you go",
      },
      {
        id: "puerto-escondido-3",
        question: "Can I combine Puerto Escondido with Oaxaca city?",
        answer:
          "Definitely. It's one of our favourite pairings: culture and food in the city, then a few days on the beach. Fly or take the scenic road over the mountains.",
        category: "Booking with us",
      },
    ],
    seo: {
      title: "Puerto Escondido Travel Guide | Cenote House",
      description:
        "Plan your Puerto Escondido trip: Zicatela's surf, Carrizalillo cove, glowing lagoons, turtle releases and Mazunte, tailored by a Mexico expert.",
    },
  },

  // ---------------------------------------------------------------------------
  // CHIAPAS
  // ---------------------------------------------------------------------------
  {
    slug: "chiapas",
    name: "Chiapas (San Cristóbal)",
    region: "oaxaca-chiapas",
    regionLabel: "Chiapas",
    hook: "Misty highlands, Maya villages and jungle ruins in Mexico's most culturally rich state.",
    bestFor:
      "Adventurous travellers, culture and textile lovers, photographers, and anyone fascinated by the living Maya world.",
    keyHighlights:
      "San Cristóbal de las Casas, Sumidero Canyon, San Juan Chamula, Palenque, Agua Azul and Misol-Ha waterfalls, Lagos de Montebello",
    image: "chiapas",
    gallery: ["ruins-palenque", "textile", "jungle"],
    overview: [
      "Chiapas is Mexico's southernmost state and, for many of our guests, the most memorable. Its highland capital of culture, San Cristóbal de las Casas, sits at around 2,200 metres in a pine-covered valley. The town has cobbled streets, colourful one-storey houses, and markets where Tzotzil and Tzeltal Maya women sell embroidered blouses, woven belts and wool shawls.",
      "The surrounding villages keep their own traditions. In San Juan Chamula, the church has no pews: the floor is covered in pine needles and candles, and families pray in Tzotzil with offerings of eggs and Coca-Cola. Nearby Zinacantán is famous for its flower-embroidered textiles. Visiting with a respectful local guide is essential.",
      "Down in the lowlands, the landscape becomes tropical. The Sumidero Canyon's walls rise up to a kilometre above the river, and the Maya city of Palenque emerges from the jungle, with temples covered in carved hieroglyphs. Turquoise waterfalls at Agua Azul and Misol-Ha are perfect for a swim.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "November to April is the dry season, ideal for exploring. Highland nights can be cold from December to February. The rainy season runs May to October, with afternoon storms in the highlands and heavy rain in the jungle, when the waterfalls of Agua Azul can turn brown.",
      months: [
        { month: "Jan", rating: "good", note: "Dry and sunny; highland nights near 0°C" },
        { month: "Feb", rating: "best", note: "Dry, clear, cool nights" },
        { month: "Mar", rating: "best", note: "Dry and warm, turquoise waterfalls" },
        { month: "Apr", rating: "best", note: "Warm, Holy Week; jungle getting hot" },
        { month: "May", rating: "good", note: "Hot in the lowlands, first rains" },
        { month: "Jun", rating: "mixed", note: "Rainy season, afternoon storms" },
        { month: "Jul", rating: "mixed", note: "Wet, green highlands" },
        { month: "Aug", rating: "mixed", note: "Heavy rain, waterfalls can be murky" },
        { month: "Sep", rating: "mixed", note: "Wettest month" },
        { month: "Oct", rating: "mixed", note: "Rain easing, lush landscapes" },
        { month: "Nov", rating: "best", note: "Dry season returns, Day of the Dead" },
        { month: "Dec", rating: "good", note: "Dry, cold nights, festive" },
      ],
    },
    highlights: [
      {
        title: "San Cristóbal de las Casas",
        description:
          "A highland town of cobbled streets, churches and markets, with excellent cafés, textile shops and a lively cultural scene.",
      },
      {
        title: "Sumidero Canyon",
        description:
          "Take a boat from Chiapa de Corzo through this dramatic canyon, past cliffs up to 1,000 metres high, crocodiles and spider monkeys.",
      },
      {
        title: "San Juan Chamula and Zinacantán",
        description:
          "Two Tzotzil Maya villages with unique customs, visited with a local guide who can explain their traditions.",
      },
      {
        title: "Palenque",
        description:
          "One of the most beautiful Maya cities, set in the jungle, with the Temple of the Inscriptions, the tomb of the ruler Pakal.",
      },
      {
        title: "Waterfalls and lakes",
        description:
          "Swim at Misol-Ha and Agua Azul near Palenque, or visit the multicoloured Lagos de Montebello near the Guatemalan border.",
      },
    ],
    thingsToDo: [
      {
        title: "Shop for textiles",
        description:
          "Visit the Santo Domingo market and cooperatives where you can buy directly from Maya weavers.",
      },
      {
        title: "Visit Na Bolom",
        description:
          "A museum and cultural centre dedicated to the Lacandón Maya, in the former home of explorer Frans Blom and photographer Gertrude Duby-Blom.",
      },
      {
        title: "Taste Chiapas coffee and chocolate",
        description:
          "Chiapas is Mexico's largest coffee producer. Visit a café or a cooperative to taste local beans and cacao.",
      },
      {
        title: "Explore Yaxchilán and Bonampak",
        description:
          "Take a boat down the Usumacinta River to the remote Maya city of Yaxchilán, then see the famous murals at Bonampak.",
      },
      {
        title: "Hike in the highlands",
        description:
          "Walk through pine forests and villages around San Cristóbal with a local guide.",
      },
      {
        title: "Visit the Amber Museum",
        description:
          "Chiapas is famous for its amber. The museum in San Cristóbal shows pieces containing insects and plants millions of years old.",
      },
    ],
    practicalTips: [
      {
        title: "Ask before taking photos",
        description:
          "Many indigenous people don't want to be photographed, and photography is strictly forbidden inside the church in San Juan Chamula.",
      },
      {
        title: "Plan travel between highlands and jungle",
        description:
          "The road from San Cristóbal to Palenque is long and winding, with occasional roadblocks. We plan safe routes, or you can fly via Villahermosa.",
      },
      {
        title: "Pack layers",
        description:
          "San Cristóbal can be cold at night, while Palenque is hot and humid. Pack for both.",
      },
      {
        title: "Getting here",
        description:
          "Fly to Tuxtla Gutiérrez, about an hour from San Cristóbal by road, or to Palenque or Villahermosa for the jungle.",
      },
    ],
    faqs: [
      {
        id: "chiapas-1",
        question: "Is Chiapas safe to visit?",
        answer:
          "The main tourist areas, including San Cristóbal, Sumidero Canyon and Palenque, are visited by many travellers each year. Some roads can be affected by protests or roadblocks, so we monitor conditions and plan routes and drivers carefully.",
        category: "Before you go",
      },
      {
        id: "chiapas-2",
        question: "How many days do I need in Chiapas?",
        answer:
          "Allow five to seven nights: three in San Cristóbal for the town, villages and Sumidero Canyon, and two or more in Palenque for the ruins and waterfalls.",
        category: "Booking with us",
      },
      {
        id: "chiapas-3",
        question: "Can I combine Chiapas with the Yucatán?",
        answer:
          "Yes. From Palenque, you can travel on to Campeche and Mérida, or fly from Villahermosa. It's a wonderful route through the Maya world.",
        category: "Booking with us",
      },
    ],
    seo: {
      title: "Chiapas Travel Guide: San Cristóbal & Palenque",
      description:
        "Discover Chiapas: San Cristóbal de las Casas, Sumidero Canyon, Maya villages, Palenque and turquoise waterfalls. Tailor-made trips by experts.",
    },
  },

  // ---------------------------------------------------------------------------
  // COPPER CANYON
  // ---------------------------------------------------------------------------
  {
    slug: "copper-canyon",
    name: "Copper Canyon",
    region: "baja-north",
    regionLabel: "Chihuahua",
    hook: "A canyon system bigger than the Grand Canyon, crossed by one of the world's great train journeys.",
    bestFor:
      "Rail enthusiasts, hikers, adventure seekers, and travellers who want to see a wild side of Mexico few visitors reach.",
    keyHighlights:
      "El Chepe train, Divisadero viewpoint, Barrancas del Cobre Adventure Park, Rarámuri culture, Batopilas, El Fuerte",
    image: "copper-canyon",
    gallery: ["copper-canyon-train", "colonial-street", "eco-lodge"],
    overview: [
      "In the Sierra Tarahumara of Chihuahua, a network of six major canyons forms the Barrancas del Cobre, the Copper Canyon. Together they cover an area several times larger than the Grand Canyon, and some, like Urique, are deeper, at close to 1,900 metres. The name comes from the copper-green lichen on the canyon walls.",
      "The best way to see it is aboard El Chepe, the Chihuahua al Pacífico railway, completed in 1961. The line climbs from the coastal plains near Los Mochis up to the canyon rim at over 2,000 metres, crossing 37 bridges and passing through 86 tunnels. We recommend the Chepe Express, with its panoramic dining car and terrace bar, between Los Mochis and Creel, getting off along the way to stay in lodges right on the canyon edge.",
      "The canyons are home to the Rarámuri (Tarahumara) people, famous for their long-distance running. Many still live traditionally in the canyons, and you'll see women selling baskets and textiles at the stations. From Divisadero, the view drops away into the depths, and the Adventure Park offers a cable car and some of the world's longest zip-lines.",
    ],
    hurricaneSeason: false,
    bestTime: {
      summary:
        "The best times are October and November, after the rains, when the canyon is green and waterfalls are flowing, and March to April, when it's dry and warm. Winter brings cold nights and occasional snow on the rim, while summer is very hot at the canyon bottom, with afternoon rain from July to September.",
      months: [
        { month: "Jan", rating: "mixed", note: "Cold on the rim, possible snow" },
        { month: "Feb", rating: "good", note: "Cold nights, clear skies" },
        { month: "Mar", rating: "best", note: "Dry and sunny, mild on the rim" },
        { month: "Apr", rating: "best", note: "Warm days, ideal for hiking" },
        { month: "May", rating: "good", note: "Hot at the bottom, dry" },
        { month: "Jun", rating: "mixed", note: "Very hot, dusty before the rains" },
        { month: "Jul", rating: "mixed", note: "Rains begin, waterfalls flow" },
        { month: "Aug", rating: "mixed", note: "Afternoon storms, green canyons" },
        { month: "Sep", rating: "good", note: "Lush, Basaseachi Falls at full flow" },
        { month: "Oct", rating: "best", note: "Green, clear, perfect temperatures" },
        { month: "Nov", rating: "best", note: "Dry and crisp, clear views" },
        { month: "Dec", rating: "mixed", note: "Cold nights, festive" },
      ],
    },
    highlights: [
      {
        title: "El Chepe train",
        description:
          "A railway through mountains and canyons, crossing dozens of bridges and tunnels. One of the world's great train journeys.",
      },
      {
        title: "Divisadero",
        description:
          "The train's most famous stop, with a breathtaking view down into three canyons, and handicraft stalls on the platform.",
      },
      {
        title: "Barrancas del Cobre Adventure Park",
        description:
          "A cable car across the canyon and a series of zip-lines, including the ZipRider, one of the longest in the world.",
      },
      {
        title: "Batopilas",
        description:
          "An old silver-mining town at the bottom of the canyon, reached by a spectacular winding road down from the rim.",
      },
      {
        title: "El Fuerte",
        description:
          "A colonial Pueblo Mágico at the western end of the line, the perfect place to start or finish the train journey.",
      },
    ],
    thingsToDo: [
      {
        title: "Ride El Chepe",
        description:
          "Take the train between Los Mochis or El Fuerte and Creel, stopping along the way to explore.",
      },
      {
        title: "Hike to the canyon floor",
        description:
          "Walk with a local Rarámuri guide down trails into the canyon, past cliffside homes and orchards.",
      },
      {
        title: "Visit Basaseachi Falls",
        description:
          "At over 240 metres, one of Mexico's highest waterfalls, best in the rainy season.",
      },
      {
        title: "Explore around Creel",
        description:
          "Visit the Valley of the Monks, with its strange rock formations, Lake Arareco and the Cusárare waterfall.",
      },
      {
        title: "Fly over the canyon",
        description:
          "Ride the cable car or zip-line across the canyon at the Adventure Park near Divisadero.",
      },
      {
        title: "Meet the Rarámuri",
        description:
          "Visit a mission and learn about Rarámuri culture with a respectful local guide.",
      },
    ],
    practicalTips: [
      {
        title: "Book the train in advance",
        description:
          "The Chepe Express has limited seats, especially in peak season. We'll book your train and lodges together.",
      },
      {
        title: "Stay on the canyon rim",
        description:
          "Spend at least one night at a lodge on the rim near Divisadero or Posada Barrancas to see sunrise and sunset over the canyon.",
      },
      {
        title: "Prepare for temperature changes",
        description:
          "It can be cold on the rim and hot at the bottom of the canyon on the same day. Pack layers.",
      },
      {
        title: "Travel with experts",
        description:
          "Parts of the Sierra Tarahumara are remote and some areas are best avoided. We stick to well-established routes with trusted local partners.",
      },
    ],
    faqs: [
      {
        id: "copper-canyon-1",
        question: "Is the Copper Canyon bigger than the Grand Canyon?",
        answer:
          "Yes. The Copper Canyon system covers a much larger area, and several of its canyons, like Urique, are deeper than the Grand Canyon.",
        category: "Before you go",
      },
      {
        id: "copper-canyon-2",
        question: "How long is the El Chepe train journey?",
        answer:
          "The full route from Los Mochis to Chihuahua takes around 15 hours, but most travellers ride the most scenic part between El Fuerte and Creel, breaking it up with stops.",
        category: "On the ground",
      },
      {
        id: "copper-canyon-3",
        question: "Is the Copper Canyon safe?",
        answer:
          "The main tourist route, including El Fuerte, Divisadero and Creel, is well travelled. We work with trusted local guides and keep up to date with conditions.",
        category: "Before you go",
      },
    ],
    seo: {
      title: "Copper Canyon & El Chepe Train Guide",
      description:
        "Ride the El Chepe train through Mexico's Copper Canyon: Divisadero, Creel, Batopilas and Rarámuri culture. Tailor-made trips by Mexico experts.",
    },
  },
];

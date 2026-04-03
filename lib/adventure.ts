import type { ItineraryDay } from "@/components/ui/Itinerary";

export type SubSection = {
  heading: string;
  body: string;
};

export type QuickFact = {
  label: string;
  val: string;
  icon: string;
};

export type Adventure = {
  title: string;
  slug: string;
  imageSrc: string;
  duration?: string;
  difficulty: string;
  region?: string;
  price?: string;
  description: string;
  subSections?: SubSection[];
  highlights: string[];
  gallery: string[];
  itinerary?: ItineraryDay[];
  quickFacts: QuickFact[];
};

export const adventures: Adventure[] = [
  {
    title: "Boulder Trek",
    slug: "boulder-trek",
    imageSrc: "/bouldering_04.jpeg",
    duration: "18 Days",
    difficulty: "Moderate – Hard",
    region: "Langtang, Nepal",
    price: "$650",
    description: `The Langtang Valley Trek has evolved into a world-class frontier for adventure, hosting the only organized bouldering trek in the Nepal Himalaya. Set within a staggering high-altitude arena between 3,600m and 4,000m, this journey offers an absolute masterpiece of granite at the very feet of Himalayan giants like Langtang Lirung and Gangchempo. It is a seamless blend of high-altitude trekking and bouldering, situated in what is arguably the wildest bouldering area on the planet. The glacial debris scattered across the valley floor has created a natural playground that caters to every level of climber, featuring over 150 established routes ranging from beginner-friendly slabs to professional-grade test pieces.
What sets this experience apart is the complete freedom of exploration — the open doors of the Langtang mountains allow climbers to scout their own lines and name new problems amidst pristine alpine meadows. Imagine topping out boulders where the only witnesses are grazing yaks and the towering white peaks of the Langtang range. As you trek through ancient rhododendron forests and traditional Tamang villages, the transition from hiking to climbing becomes a rhythmic part of the journey. Between sessions, the rich Buddhist culture of the Langtang valley provides a spiritual sanctuary, making this the ultimate fusion of physical grit, breathtaking scenery, and deep cultural immersion for the modern mountain lover.`,
    highlights: [
      "The only organized bouldering trek in the Nepal Himalaya",
      "Over 150 established routes from beginner slabs to professional V-grade test pieces",
      "High-altitude granite fields between 3,600m and 4,000m — the wildest bouldering area on the planet",
      "Freedom to scout new lines and establish First Ascents in untouched terrain",
      "Three dedicated days at the Nespali Hard Rock Cafe arena with 80+ routes",
      "Optional summit of Tserko Ri (5,000m) for a 360° Himalayan panorama",
      "Deep Tamang and Buddhist cultural immersion throughout the valley",
    ],
    subSections: [
      {
        heading: "A Fusion of Himalayan Trekking and Elite Bouldering",
        body: 'This expedition represents the only organized bouldering trek in the Nepal Himalaya. It is designed to navigate the high-altitude granite fields of the Langtang Valley, offering a unique blend of traditional trekking and technical exploration. From the subtropical gorges at the valley\'s entrance to the 4,000m alpine crags, the journey provides climbers of all levels the freedom to session established lines or scout new "First Ascents" in the wildest bouldering area on the planet.',
      },
    ],
    quickFacts: [
      { label: "Starting Point", val: "Syabrubesi, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse + Tented Camp", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Physical Level", val: "Moderate – Hard", icon: "activity" },
    ],
    gallery: ["/expe_01.jpg", "/pic2.jpeg", "/people_03.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        badge: "Arrival",
        altitude: "1,350m",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Arrive at Tribhuvan International Airport (TIA) and transfer to your hotel in the vibrant heart of Kathmandu.",
          },
          {
            label: "Activity",
            content:
              "Dedicated trek briefing and gear inspection session. Head out for last-minute shopping — poles, down jackets, or snacks — whatever you still need.",
          },
          {
            label: "Evening",
            content:
              "A warm Welcome Dinner with the full team. Authentic Nepali flavors, first introductions, and the excitement of what lies ahead.",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Drive Kathmandu to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "125 km",
        duration: "6–7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content: "7:30 AM departure by private jeep from Kathmandu.",
          },
          {
            label: "Afternoon",
            content:
              "A 6-hour jeep journey following the Trishuli River, watching the landscape shift from city bustle to terraced alpine farms.",
          },
          {
            label: "Evening",
            content:
              "Arrival in Syabrubesi. Riverside stretching session to loosen up after the long drive.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek Syabrubesi to Lama Hotel",
        badge: "Trek",
        altitude: "2,470m",
        distance: "11 km",
        duration: "6–7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Starting the trek at 8:00 AM with an off-road stretch for an hour to Domen, then shifting onto the proper trekking trail.",
          },
          {
            label: "Afternoon",
            content:
              "Looking for wild 'Mad Honey' on the vertical cliffs above the river. Lunch stop at Bamboo village.",
          },
          {
            label: "Evening",
            content:
              "Arrival at Lama Hotel. Early night to prepare for the altitude jump tomorrow.",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Lama Hotel to Thangshyap — Initial Acclimatization",
        badge: "Trek",
        altitude: "3,200m",
        duration: "3–4 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Ascent through 'Alpine Forest'. The dense canopy gives way to wider glacial views at Ghoda Tabela.",
          },
          {
            label: "Afternoon",
            content:
              "Moving into the alpine zone. As the forest thins, we settle into our first Climber's Lodge. The afternoon is spent scouting nearby boulders to begin vertical acclimatization.",
          },
        ],
      },
      {
        day: "Days 5 & 6",
        title: "Thangshyap — Preliminary Bouldering (3,200m–3,300m)",
        badge: "Bouldering",
        altitude: "3,200m–3,300m",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Low-intensity flash sessions. Focus on footwork and adapting your breathing to the 3,300m air.",
          },
          {
            label: "Afternoon",
            content:
              "Projecting local V3–V6 lines. Exploring the unique friction of Langtang granite in the cool afternoon shade.",
          },
          {
            label: "Evening",
            content:
              "Group recovery sessions using foam rollers and discussing beta for tomorrow's moves.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Thangshyap to Langtang Village — Active Recovery",
        badge: "Rest",
        altitude: "3,450m",
        duration: "1.5 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content: "A slow 2-hour hike to Langtang Village.",
          },
          {
            label: "Afternoon",
            content:
              "Cultural immersion and active rest. Yoga overlooking Langtang Lirung and optional cold plunges in glacial streams.",
          },
          {
            label: "Evening",
            content:
              "Dedicated session to assess the team's physical condition. Sharing experiences on altitude adaptation and muscle fatigue — evaluating readiness for the 3,600m+ Hard Rock sessions ahead.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Langtang to Nespali — The Hard Rock Sessions Begin",
        badge: "Trek",
        altitude: "3,625m",
        duration: "1–1.5 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content: "Trek to the Nespali 'Hard Rock Cafe' bouldering arena.",
          },
          {
            label: "Afternoon",
            content:
              "Setting up tented camp. A light scouting hike to visualize the 80+ lines available in this massive high-altitude arena.",
          },
          {
            label: "Evening",
            content:
              "Campfire dinner. Strategy talk for the three-day Main Event.",
          },
        ],
      },
      {
        day: "Days 9, 10 & 11",
        title: "Nespali Hard Rock Cafe — High-Altitude Bouldering Focus",
        badge: "Bouldering",
        altitude: "3,600m–3,700m",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Coffee and send sessions. The air is crisp and friction is at its peak. No rigid schedule — climbers follow their own rhythm and energy.",
          },
          {
            label: "The climbing",
            content:
              "The world's highest bouldering arena. Over 80 routes from beginner grades to professional-level projects, with ample opportunity to establish new lines.",
          },
          {
            label: "Recovery",
            content:
              "Meals at set times in tented camp. Daily stretching and cold-plunge recovery to maintain physical peak throughout the sessions.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Nespali to Kyanjin Gompa — The Kyanjin Finale",
        badge: "Trek",
        altitude: "3,855m",
        duration: "2 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content: "Short hike to Kyanjin Gompa.",
          },
          {
            label: "Afternoon",
            content:
              "Sunset acclimatisation hike to the Glacier Lake (4,000m).",
          },
          {
            label: "Evening",
            content:
              "Visit the local Yak Cheese Factory for high-protein recovery snacks.",
          },
        ],
      },
      {
        day: "Days 13 & 14",
        title: "Kyanjin Gompa — Kyanjin Crags and Exploration",
        badge: "Bouldering",
        altitude: "3,800m–5,000m",
        duration: "7–8 hrs (Tserko Ri)",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Projecting blocks immediately surrounding the village. High exposure and epic backdrops of the Langtang and Jugal Himalayan ranges.",
          },
          {
            label: "Afternoon",
            content:
              "Optional 'Peak vs. Pad' — choose between more bouldering or a trek up Tserko Ri (5,000m) for the ultimate 360° view.",
          },
          {
            label: "Evening",
            content:
              "Final mountain celebration with local rock guides and staff.",
          },
        ],
      },
      {
        day: "Day 15",
        title: "Trek Kyanjin Gompa to Lama Hotel — Retracing the Valley",
        badge: "Trek",
        altitude: "2,470m",
        distance: "18 km",
        duration: "6–7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content: "Long descent back down the valley.",
          },
          {
            label: "Afternoon",
            content:
              "Refueling at Ghoda Tabela. Notice how much easier breathing feels as altitude drops.",
          },
          {
            label: "Evening",
            content: "Last night in a mountain teahouse at Lama Hotel.",
          },
        ],
      },
      {
        day: "Day 16",
        title: "Trek Lama Hotel to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "11 km",
        duration: "5–6 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content: "Trek back through mixed alpine and sub-alpine forest.",
          },
          {
            label: "Afternoon",
            content:
              "Arrival in Syabrubesi. Final gear packing and a celebratory End of Trail dinner.",
          },
          {
            label: "Evening",
            content: "Rest and relaxation at the riverside hotel.",
          },
        ],
      },
      {
        day: "Day 17",
        title: "Drive Syabrubesi to Kathmandu",
        badge: "Transfer",
        altitude: "1,350m",
        distance: "125 km",
        duration: "6–7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content: "8:00 AM jeep departure for Kathmandu.",
          },
          {
            label: "Afternoon",
            content:
              "Check into the hotel for a long-overdue hot shower and rest.",
          },
          {
            label: "Evening",
            content: "Farewell party and souvenir shopping in Thamel.",
          },
        ],
      },
      {
        day: "Day 18",
        title: "Departure",
        badge: "Departure",
        sections: [
          {
            label: "Morning",
            content: "Final breakfast in Kathmandu.",
          },
          {
            label: "Afternoon",
            content:
              "Private transfer to Tribhuvan International Airport for your onward flight. Safe travels.",
          },
        ],
      },
    ],
  },

  // ── Langtang Trek ──────────────────────────────────────────────────────────

  {
    title: "Langtang Trek",
    slug: "langtang-trek",
    imageSrc: "/trek_02.jpg",
    duration: "10 Days",
    difficulty: "Easy – Moderate",
    region: "Langtang, Nepal",
    price: "$550",
    description: `Just a day's drive from Kathmandu, the Langtang Valley Trek — often called the "Valley of Glaciers" — is a breathtaking journey through Nepal's Himalayan heartland. The trail begins in lush subtropical forests and ascends through vibrant stands of rhododendron, bamboo, and pine before the canopy thins and the valley dramatically opens to reveal a theater of ice and rock: the massive Langtang Lirung (7,227m), the pyramid-shaped Gangchempo (6,387m), and the jagged ridgeline of Langtang Ri.

Beyond the peaks, the valley is a sanctuary of Tibetan Buddhist culture. Home to the Langtangpa people, the region carries a rich history of trans-Himalayan trade and migration. Trekkers pass fluttering prayer flags, intricate mani walls, and ancient monasteries like Kyanjin Gompa — where traditions remain vivid through local rituals, the historic yak cheese factory, and a community defined by extraordinary resilience. Whether you're standing on the summit of Tserko Ri or sharing butter tea in a village teahouse, Langtang offers a profound connection to both the mountains and the spiritual soul of the Himalayas.`,
    highlights: [
      "Full valley traverse from subtropical forest to high alpine meadow",
      "Summit Tserko Ri (5,000m) for a 360° panorama of the Langtang and Jugal Himalayan ranges",
      "Overnight at Kyanjin Gompa — explore the monastery and ancient stone architecture",
      "Visit the famous yak cheese factory at Kyanjin",
      "Acclimatisation hike to the Glacier Lake (4,000m) on arrival at Kyanjin",
      "Deep immersion in Langtangpa and Tamang culture throughout",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Syabrubesi, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse Trek", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Physical Level", val: "Easy – Moderate", icon: "activity" },
    ],
    gallery: ["/landscape_01.jpg", "/people_03.jpg", "/expe_02.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu — Briefing & Welcome Dinner",
        badge: "Arrival",
        altitude: "1,350m",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Arrive at Tribhuvan International Airport (TIA) and transfer to your hotel in the vibrant heart of Kathmandu.",
          },
          {
            label: "Activity",
            content:
              "Dedicated trek briefing and gear inspection session. Head out for last-minute shopping — poles, down jackets, or snacks — whatever you still need.",
          },
          {
            label: "Evening",
            content:
              "A warm Welcome Dinner with the full team. Authentic Nepali flavors, first introductions, and the excitement of what's ahead.",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Drive Kathmandu to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "125 km",
        duration: "5–6 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Departure",
            content: "7:30 AM departure by private jeep from Kathmandu.",
          },
          {
            label: "The Journey",
            content:
              "A 6–7 hour scenic drive through winding mountain roads, passing the roaring Trishuli River and terraced hillside farms.",
          },
          {
            label: "Overnight",
            content:
              "Arrive at Syabrubesi (1,550m) — a riverside town and the gateway to Langtang. Settle into the hotel and rest.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek Syabrubesi to Lama Hotel",
        badge: "Trek",
        altitude: "2,470m",
        distance: "11 km",
        duration: "6–7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Trail begins at 7:30 AM. An off-road stretch to Domen marks the start of true wilderness. Route: Syabrubesi — Domen — Pairo — Bamboo — Rimche — Lama Hotel.",
          },
          {
            label: "Midday",
            content:
              "Hike through the dramatic Langtang River gorge. One-hour lunch stop at Bamboo village.",
          },
          {
            label: "Afternoon",
            content:
              "Steady climb through lush forest arrives at Lama Hotel (2,470m) — your first night in a traditional teahouse.",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Trek Lama Hotel to Langtang Village",
        badge: "Trek",
        altitude: "3,450m",
        distance: "12 km",
        duration: "6–7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Highlights",
            content:
              "Walking through 'Wood Land' — a dense alpine forest threaded with waterfalls and streams. Route: Lama Hotel — Riverside — Wood Land — Ghoda Tabela — Thangshyap — Chamki — Gomba — Langtang Village.",
          },
          {
            label: "The Transition",
            content:
              "At Ghoda Tabela (lunch stop), the dense forest opens into wide glacial valleys. Vegetation thins visibly as altitude rises.",
          },
          {
            label: "Evening",
            content:
              "Arrive at the rebuilt Langtang Village (3,450m) — a community that stands as a testament to extraordinary resilience.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Trek Langtang Village to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,855m",
        distance: "6.5 km",
        duration: "3 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Culture",
            content:
              "A shorter 3-hour hike through Mundu, Sindum, and Yamphu. Ancient stone architecture and local Buddhist art line the route.",
          },
          {
            label: "Arrival",
            content:
              "Arrive at Kyanjin Gompa (3,855m) by 1:00 PM. Explore the monastery and the famous yak cheese factory.",
          },
          {
            label: "Acclimat.",
            content:
              "Sunset acclimatisation hike to the Glacier Lake (4,000m) — a gentle push to help your body adapt to the thin air before tomorrow's summit attempt.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Summit Day — Tserko Ri (5,000m)",
        badge: "Summit",
        altitude: "5,000m",
        distance: "9.5 km",
        duration: "7–8 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "The Climb",
            content:
              "5:30 AM start. A steep, relentless, utterly rewarding ascent to Tserko Ri summit (5,000m).",
          },
          {
            label: "The Reward",
            content:
              "A full 360° theater of peaks — the entire Langtang and Jugal Himalayan ranges laid out before you. Packed lunch at the top.",
          },
          {
            label: "Descent",
            content:
              "Choose your descent: the steep direct route down or a scenic gradual detour around the mountain. Both return to Kyanjin Gompa.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Trek Kyanjin Gompa to Lama Hotel",
        badge: "Trek",
        altitude: "2,470m",
        distance: "18 km",
        duration: "6–7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "With the high peaks at your back, the long descent through the valley begins. The air thickens and the legs feel lighter with every metre lost.",
          },
          {
            label: "Midday",
            content:
              "Refuel with lunch at Ghoda Tabela before re-entering the forest.",
          },
          {
            label: "Evening",
            content:
              "Settle back into Lama Hotel (2,470m) for the night — familiar faces, familiar teahouse.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Trek Lama Hotel to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "11 km",
        duration: "5–6 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "A final morning walk through rhododendron and bamboo forest. The air is thick and warm again.",
          },
          {
            label: "Midday",
            content:
              "Lunch stop at Pairo village before the last stretch into Syabrubesi.",
          },
          {
            label: "Evening",
            content:
              "Arrive in Syabrubesi — the end of the trail. Celebrate the completion of the walk with the team over a well-earned meal.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Drive Syabrubesi to Kathmandu",
        badge: "Transfer",
        altitude: "1,350m",
        distance: "125 km",
        duration: "5–6 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Departure",
            content:
              "8:00 AM jeep departure from Syabrubesi for the return drive to Kathmandu.",
          },
          {
            label: "Afternoon",
            content:
              "Check into the hotel for a long-overdue hot shower and rest.",
          },
          {
            label: "Evening",
            content:
              "Farewell party and group dinner. The perfect time for souvenir shopping in Thamel.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Departure",
        badge: "Departure",
        altitude: "1,350m",
        sections: [
          {
            label: "Morning",
            content: "Final breakfast in Kathmandu together.",
          },
          {
            label: "Departure",
            content:
              "Private transfer to Tribhuvan International Airport for your onward flight. Safe travels — and see you on the next one.",
          },
        ],
      },
    ],
  },
  {
    title: "HighLine-SlackLine",
    slug: "highline",
    imageSrc: "/people_03.jpg",
    duration: "10 Days",
    difficulty: "Easy – Moderate",
    region: "Langtang, Nepal",
    price: "$550",
    description: `Langtang Valley is emerging as a unique destination for highlining, offering both adrenaline and breathtaking Himalayan scenery.  There are already few established highlines in the region, each providing a distinct experience.

Two of these lines are located at Nespali (Hard Rock Café), stretching 55m and 65m across the dramatic gorge of the Langtang River. Suspended above the rushing water, these lines offer an exhilarating combination of exposure and the calming beauty of alpine forests.
Further up the valley, near Kyanjin Gompa, three more highlines have been established, measuring 160m, 95m, and 60m. These longer lines sit at higher elevations and deliver a completely different atmosphere, surrounded by raw mountain landscapes and panoramic views of the Himalayas.

Each highline varies not only in length but also in elevation and scenery, from thin green forests and flowing rivers to rugged alpine terrain with towering peaks in the background. This diversity makes Langtang a truly special destination for both beginner and experienced highliners. For those new to the sport, Langtang Valley also features slacklines that are beginner-friendly. These lines provide a safe and supportive environment to learn the fundamentals before progressing to highlining.

We have been organizing highlining and slacklining as day activities, and with growing interest from trekkers, these experiences are now being integrated into standard trekking itineraries. This addition transforms a traditional trek into a more adventurous and unforgettable journey.`,
    highlights: [
      "Full valley traverse from subtropical forest to high alpine meadow",
      "Summit Tserko Ri (5,000m) for a 360° panorama of the Langtang and Jugal Himalayan ranges",
      "Overnight at Kyanjin Gompa — explore the monastery and ancient stone architecture",
      "Visit the famous yak cheese factory at Kyanjin",
      "Acclimatisation hike to the Glacier Lake (4,000m) on arrival at Kyanjin",
      "Deep immersion in Langtangpa and Tamang culture throughout",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Langtang, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse Trek", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Physical Level", val: "Easy – Moderate", icon: "activity" },
    ],
    gallery: ["/landscape_01.jpg", "/people_03.jpg", "/expe_02.jpg"],
  },
  {
    title: "Via Ferrata",
    slug: "via-ferrata",
    imageSrc: "/via_02.jpg",
    duration: "10 Days",
    difficulty: "Easy – Moderate",
    region: "Langtang, Nepal",
    price: "$550",
    description: `
Elevate your Himalayan adventure with the Langtang Lirung Via Ferrata, the first and only professional "Iron Way" in Nepal. Spanning 1.9km and anchored into the rugged granite above Langtang Village, this world-class route offers a breathtaking "bird’s-eye" perspective of the valley that traditional trekking route cannot match.

Designed to bridge the gap between high-altitude trekking and technical mountaineering, this experience takes you to the very base of the majestic Langtang Lirung (7,227m). It is a journey of iron, air, and granite—perfect for those who want to get the feel of mountaineering without needing years of climbing experience.`,
    highlights: [
      "Full valley traverse from subtropical forest to high alpine meadow",
      "Summit Tserko Ri (5,000m) for a 360° panorama of the Langtang and Jugal Himalayan ranges",
      "Overnight at Kyanjin Gompa — explore the monastery and ancient stone architecture",
      "Visit the famous yak cheese factory at Kyanjin",
      "Acclimatisation hike to the Glacier Lake (4,000m) on arrival at Kyanjin",
      "Deep immersion in Langtangpa and Tamang culture throughout",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Langtang, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse Trek", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Physical Level", val: "Easy – Moderate", icon: "activity" },
    ],
    gallery: ["/landscape_01.jpg", "/people_03.jpg", "/expe_02.jpg"],
  },
];

export function getAdventureBySlug(slug: string) {
  return adventures.find((e) => e.slug === slug);
}

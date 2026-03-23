import type { ItineraryDay } from "@/components/ui/Itinerary";

export type Expedition = {
  title: string;
  slug: string;
  imageSrc: string;
  duration: string;
  altitude: string;
  region?: string;
  price?: string;
  description: string;
  itinerary: ItineraryDay[];
  gallery: string[];
  quickFacts: { label: string; val: string; icon: string }[];
};

// ── Yala Peak ─────────────────────────────────────────────────────────────────

export const expeditions: Expedition[] = [
  {
    title: "Yala Peak 2026",
    slug: "yala-peak-2026",
    imageSrc: "/yala.jpg",
    duration: "12 Days",
    altitude: "5,520 M",
    region: "Langtang, Nepal",
    price: "$1,200",
    description: `Yala Peak (5,520m) is one of the most accessible trekking peaks in Nepal, located in the heart of the Langtang Valley. Ideal for climbers stepping into high-altitude mountaineering for the first time, Yala offers a genuine summit experience without extreme technical difficulty. The ascent follows a straightforward northeast ridge route with crampons and ice axe, rewarding climbers with sweeping panoramas of Shishapangma, Dorje Lakpa, Langtang Lirung, and the Tibetan plateau. Combined with the rich cultural trail through Tamang villages and the iconic Kyanjin Gompa monastery, this expedition is as spiritually enriching as it is physically demanding.`,
    gallery: ["/pic2.jpeg", "/people_03.jpg", "/pic4.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse + Base Camp", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      {
        label: "Physical Level",
        val: "Moderate – Strenuous",
        icon: "activity",
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        badge: "Arrival",
        altitude: "1,400m",
        sections: [
          {
            label: "Arrival",
            content:
              "Arrive at Tribhuvan International Airport (TIA). Meet your guide and transfer to your hotel in central Kathmandu.",
          },
          {
            label: "Briefing",
            content:
              "Full expedition briefing covering gear check, permits, and acclimatization strategy.",
          },
          {
            label: "Evening",
            content:
              "Welcome dinner with the team. Authentic Nepali flavors and first introductions.",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Departure",
            content: "Early morning departure by private jeep from Kathmandu.",
          },
          {
            label: "The Drive",
            content:
              "Scenic drive northwest through winding mountain roads, passing terraced fields and traditional Tamang villages.",
          },
          {
            label: "Overnight",
            content:
              "Arrive in Syabrubesi — the gateway to the Langtang Valley. Settle in and rest.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        badge: "Trek",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Enter Langtang National Park and descend into the Langtang Khola gorge.",
          },
          {
            label: "Trail",
            content:
              "The path winds through dense rhododendron and bamboo forest. Watch for red pandas and langur monkeys.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel. First night in a traditional teahouse.",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "The valley opens up dramatically as altitude increases. Pass through Ghoda Tabela for lunch.",
          },
          {
            label: "Highlights",
            content:
              "Yak pastures and traditional stone villages. First clear views of Langtang Lirung (7,227m).",
          },
          {
            label: "Evening",
            content:
              "Arrive at the rebuilt Langtang Village — a community defined by extraordinary resilience.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
        sections: [
          {
            label: "Morning",
            content: "Short but rewarding walk through open alpine meadows.",
          },
          {
            label: "Arrival",
            content:
              "Arrive at Kyanjin Gompa. Visit the famous monastery and local yak cheese factory.",
          },
          {
            label: "Afternoon",
            content:
              "Stunning views of Tserko Ri and Langtang Lirung. Prepare gear for higher altitude days.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Acclimatization at Kyanjin Gompa",
        badge: "Rest",
        altitude: "3,870m–4,773m",
        duration: "4–5 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Critical rest and acclimatization day. No rushing — let your body adapt.",
          },
          {
            label: "Activity",
            content:
              "Optional hike to Kyanjin Ri (4,773m) for panoramic views of the Langtang range, Ganesh Himal, and the Tibetan plateau.",
          },
          {
            label: "Evening",
            content:
              "Hydrate well, eat a full meal, and prepare kit for the base camp approach tomorrow.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Trek to Yala Peak Base Camp",
        badge: "Trek",
        altitude: "5,000m",
        distance: "~6 km",
        duration: "4–5 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Leave the teahouse trail behind. Trek across high-altitude yak grazing meadows at Yala Kharka.",
          },
          {
            label: "Arrival",
            content:
              "Set up base camp at 5,000m. The terrain becomes raw and silent up here.",
          },
          {
            label: "Evening",
            content:
              "Review summit plans, carry out final gear check, and rest early for the pre-dawn start.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Summit Day — Yala Peak",
        badge: "Summit",
        altitude: "5,520m",
        duration: "8–10 hrs",
        sections: [
          {
            label: "Start",
            content:
              "Pre-dawn alpine start at 2–3 AM. Crampons and ice axe from the outset.",
          },
          {
            label: "The Climb",
            content:
              "Ascend via the northeast ridge. Non-technical but physically demanding at altitude. Stay roped and focused.",
          },
          {
            label: "Summit",
            content:
              "360° panorama of Shishapangma, Dorje Lakpa, the entire Langtang range, and the Tibetan plateau. Packed lunch at the top.",
          },
          {
            label: "Descent",
            content:
              "Return to base camp by early afternoon. Rest and celebrate with the team.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Buffer Day",
        badge: "Reserve",
        altitude: "5,000m",
        sections: [
          {
            label: "Purpose",
            content:
              "Reserved for a second summit attempt if weather prevented it on Day 8.",
          },
          {
            label: "Alternative",
            content:
              "If the summit was reached, use this as a full rest and recovery day before the descent.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Trek Back to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Descend from base camp back through Kyanjin Gompa and down the valley.",
          },
          {
            label: "Afternoon",
            content:
              "Take your time on the rocky descent. The air thickens noticeably with each metre lost.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Langtang Village. Warm teahouse dinner and reflection on the climb.",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Trek to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "~22 km",
        duration: "6–7 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Long descent through forest and river crossings. The hard work is behind you.",
          },
          {
            label: "Afternoon",
            content:
              "Re-enter the lush lower valley. A satisfying final day of trekking.",
          },
          {
            label: "Evening",
            content: "Arrive in Syabrubesi. Celebratory End of Trail dinner.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Drive to Kathmandu — Farewell Dinner",
        badge: "Transfer",
        altitude: "1,400m",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Morning drive back to Kathmandu through the mountain roads.",
          },
          {
            label: "Afternoon",
            content: "Check into the hotel. Long-overdue hot shower and rest.",
          },
          {
            label: "Evening",
            content:
              "Farewell dinner at a traditional Nepali restaurant with the team.",
          },
        ],
      },
    ],
  },

  // ── Tserko Peak ─────────────────────────────────────────────────────────────

  {
    title: "Tserko Peak",
    slug: "tserko-peak",
    imageSrc: "/tserko_02.jpg",
    duration: "14 Days",
    altitude: "4,984 M",
    region: "Langtang, Nepal",
    price: "$1,000",
    description: `Tserko Ri (4,984m) rises dramatically above Kyanjin Gompa and is one of the most rewarding viewpoints in the entire Langtang region. While technically a trekking viewpoint rather than a technical climbing peak, the ascent is steep, strenuous, and deeply satisfying. From the summit, climbers are treated to an unobstructed 360-degree panorama of Langtang Lirung (7,227m), Ganesh Himal, Dorje Lakpa, and the vast Tibetan plateau to the north. The expedition pairs beautifully with the cultural richness of Kyanjin Gompa monastery and authentic teahouse trekking through the heart of Langtang Valley.`,
    gallery: ["/people_03.jpg", "/pic2.jpeg", "/people_04.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Teahouse + Base Camp", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      {
        label: "Physical Level",
        val: "Moderate – Strenuous",
        icon: "activity",
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        badge: "Arrival",
        altitude: "1,400m",
        sections: [
          {
            label: "Arrival",
            content:
              "Arrive at Tribhuvan International Airport. Meet your guide and transfer to hotel.",
          },
          {
            label: "Briefing",
            content:
              "Team briefing covering permits, gear, and the expedition plan.",
          },
          {
            label: "Evening",
            content: "Welcome dinner and first introductions with the group.",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Departure",
            content:
              "Early morning drive northwest through winding hill roads.",
          },
          {
            label: "The Drive",
            content:
              "Pass through Tamang villages and terraced farmland en route to the trailhead.",
          },
          {
            label: "Overnight",
            content:
              "Arrive at Syabrubesi. Settle in and prepare for the trek ahead.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        badge: "Trek",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Enter Langtang National Park and follow the Langtang Khola river trail.",
          },
          {
            label: "Trail",
            content:
              "Dense subtropical forest with good chance of spotting red pandas and langur monkeys.",
          },
          { label: "Evening", content: "First night at Lama Hotel teahouse." },
        ],
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Ascend through forest into the open valley. Pass yak herders and prayer flags.",
          },
          {
            label: "Views",
            content:
              "First sweeping views of Langtang Lirung and surrounding peaks.",
          },
          {
            label: "Evening",
            content: "Arrive at the rebuilt Langtang Village.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Short walk through alpine meadows to the iconic Kyanjin Gompa.",
          },
          {
            label: "Arrival",
            content: "Visit the monastery and the local yak cheese factory.",
          },
          {
            label: "Afternoon",
            content:
              "Explore the gompa and rest before the acclimatization push.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Acclimatization at Kyanjin",
        badge: "Rest",
        altitude: "3,870m",
        sections: [
          {
            label: "Morning",
            content:
              "Rest day for acclimatization. No rushing — let your body adapt to 3,870m.",
          },
          {
            label: "Activity",
            content:
              "Optional short hike to nearby viewpoints to aid acclimatization without overexertion.",
          },
          {
            label: "Evening",
            content:
              "Prepare equipment and review plans for the base camp push tomorrow.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Trek to Tserko Ri Base Camp",
        badge: "Trek",
        altitude: "4,200m",
        distance: "~5 km",
        duration: "3–4 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Ascend steeply from Kyanjin Gompa toward the base of Tserko Ri.",
          },
          {
            label: "Terrain",
            content:
              "The landscape becomes more rugged and exposed with dramatic ridge views in all directions.",
          },
          {
            label: "Camp",
            content:
              "Set up camp at 4,200m. Rest and hydrate ahead of summit day.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Summit Day — Tserko Ri",
        badge: "Summit",
        altitude: "4,984m",
        duration: "7–9 hrs",
        sections: [
          {
            label: "Start",
            content:
              "Early morning summit push before the mountain clouds move in.",
          },
          {
            label: "The Climb",
            content:
              "Steep and demanding terrain at altitude but non-technical. Stay steady and pace yourself.",
          },
          {
            label: "Summit",
            content:
              "Incredible 360° views of Langtang Lirung, Ganesh Himal, Dorje Lakpa, and the Tibetan plateau.",
          },
          {
            label: "Descent",
            content: "Descend back to Kyanjin Gompa for the night.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Rest at Kyanjin Monastery",
        badge: "Rest",
        altitude: "3,870m",
        sections: [
          {
            label: "Morning",
            content:
              "Recovery day after the summit. Full rest — body and mind.",
          },
          {
            label: "Activity",
            content:
              "Explore Kyanjin Monastery at a leisurely pace. Chat with local monks.",
          },
          {
            label: "Evening",
            content:
              "Enjoy the peaceful high-altitude setting before the long descent begins.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Trek Back to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~6 km",
        duration: "2–3 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Begin the descent back down the valley, retracing the route through yak pastures.",
          },
          {
            label: "Afternoon",
            content:
              "Pass back through the familiar meadows with a very different feeling — summit done.",
          },
          {
            label: "Evening",
            content: "Arrive at Langtang Village. Warm meal and early night.",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Trek to Lama Hotel",
        badge: "Trek",
        altitude: "2,380m",
        distance: "~14 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Continue descending through the valley and back into the denser forest zone.",
          },
          {
            label: "Afternoon",
            content:
              "Legs will feel the downhill but spirits are high. Lunch on the trail.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel. Familiar teahouse, well-earned rest.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Trek to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "~11 km",
        duration: "4–5 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Final day of trekking. Descend to Syabrubesi through river valleys and forest.",
          },
          {
            label: "Afternoon",
            content: "Celebrate the end of the trek with a hot meal.",
          },
          {
            label: "Evening",
            content: "Rest and relax at the riverside hotel.",
          },
        ],
      },
      {
        day: "Day 13",
        title: "Drive to Kathmandu",
        badge: "Transfer",
        altitude: "1,400m",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Morning",
            content: "Early morning drive back to Kathmandu.",
          },
          {
            label: "Afternoon",
            content:
              "Check into hotel. Relax, shower, and enjoy the city after days on the trail.",
          },
          { label: "Evening", content: "Farewell dinner with the team." },
        ],
      },
      {
        day: "Day 14",
        title: "Departure Day",
        badge: "Departure",
        altitude: "1,400m",
        sections: [
          {
            label: "Morning",
            content: "Final breakfast in Kathmandu together.",
          },
          {
            label: "Departure",
            content:
              "Transfer to Tribhuvan International Airport. Congratulations on your summit — safe travels.",
          },
        ],
      },
    ],
  },

  // ── Naya Kanga ───────────────────────────────────────────────────────────────

  {
    title: "Naya Kanga",
    slug: "naya-kanga",
    imageSrc: "/pic4.jpg",
    duration: "16 Days",
    altitude: "5,846 M",
    region: "Langtang, Nepal",
    price: "$1,500",
    description: `Naya Kanga (5,846m), also known as Ganja La Chuli, is one of the finest technical trekking peaks in the Langtang region. Sitting above the high Ganja La pass (5,130m), this peak demands solid mountaineering skills — climbers navigate crevassed glaciers, steep snow slopes, and exposed ridgelines to reach the summit. The reward is extraordinary: a sweeping high-altitude panorama of the entire Langtang massif, Jugal Himal, and across into Tibet. This is a serious mountaineering objective that suits climbers with prior glacier travel experience and a hunger for a genuine alpine challenge.`,
    gallery: ["/pic4.jpg", "/pic2.jpeg", "/people_03.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Glacier + Alpine Camp", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      {
        label: "Permits",
        val: "TIMS + Langtang NP + Climbing",
        icon: "fileText",
      },
      {
        label: "Physical Level",
        val: "Strenuous – Technical",
        icon: "activity",
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        badge: "Arrival",
        altitude: "1,400m",
        sections: [
          {
            label: "Arrival",
            content:
              "Arrive in Kathmandu. Meet the team and transfer to hotel.",
          },
          {
            label: "Briefing",
            content:
              "Full expedition briefing covering technical gear, permits, and acclimatization strategy.",
          },
          {
            label: "Evening",
            content: "Team welcome dinner and introductions.",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Departure",
            content:
              "Early morning drive northwest to Syabrubesi, the gateway to Langtang Valley.",
          },
          {
            label: "The Drive",
            content:
              "Winding mountain roads through Tamang villages and terraced hillside farmland.",
          },
          {
            label: "Overnight",
            content:
              "Arrive in Syabrubesi. Settle in and prepare for the trek.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        badge: "Trek",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Enter Langtang National Park through the dramatic river gorge.",
          },
          {
            label: "Trail",
            content:
              "Dense forest, waterfalls, and first views of the high peaks ahead.",
          },
          { label: "Evening", content: "Overnight at Lama Hotel teahouse." },
        ],
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Valley opens into wide alpine meadows. Pass yak pastures and traditional stone villages.",
          },
          {
            label: "Views",
            content:
              "Langtang Lirung (7,227m) dominates the skyline as you gain altitude.",
          },
          {
            label: "Evening",
            content: "Arrive at Langtang Village for the night.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Arrive at Kyanjin Gompa — the expedition hub for the next phase.",
          },
          {
            label: "Activity",
            content:
              "Visit the monastery and yak cheese factory. Rest and prepare for higher altitude days.",
          },
          {
            label: "Evening",
            content: "Early night ahead of the acclimatization hike tomorrow.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Acclimatization — Kyanjin Ri Hike",
        badge: "Rest",
        altitude: "4,773m",
        duration: "4–5 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Acclimatization hike to Kyanjin Ri (4,773m) — vital before the glacier approach.",
          },
          {
            label: "Views",
            content:
              "Panoramic views of the Langtang range, Ganesh Himal, and the Tibetan plateau.",
          },
          {
            label: "Evening",
            content:
              "Rest and hydrate well. Your body is adapting — do not rush this day.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Trek Toward Ganja La Base",
        badge: "Trek",
        altitude: "4,400m",
        distance: "~8 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Leave the main Langtang trail and head north toward the Ganja La approach.",
          },
          {
            label: "Terrain",
            content:
              "The landscape becomes wilder and more remote with every step.",
          },
          {
            label: "Camp",
            content:
              "Establish camp at 4,400m. Review technical systems before the pass crossing.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Cross Ganja La Pass",
        badge: "Trek",
        altitude: "5,130m",
        duration: "7–8 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Early start for the Ganja La crossing (5,130m) — high, snow-covered, and spectacular.",
          },
          {
            label: "The Pass",
            content:
              "Dramatic views from the top. Stay roped and move carefully on the snow.",
          },
          {
            label: "Descent",
            content:
              "Descend to camp on the far side near the Naya Kanga glacier approach.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Establish High Camp",
        badge: "Trek",
        altitude: "5,400m",
        distance: "~4 km",
        duration: "4–5 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Trek up onto the glacier. Rope up and move as a team through crevassed terrain.",
          },
          {
            label: "Camp",
            content:
              "Establish high camp at 5,400m below the final summit slopes.",
          },
          {
            label: "Evening",
            content: "Review summit systems, eat a full meal, and sleep early.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Summit Day — Naya Kanga",
        badge: "Summit",
        altitude: "5,846m",
        duration: "8–10 hrs",
        sections: [
          {
            label: "Start",
            content:
              "Pre-dawn start. Crampons and ice axe from the first step.",
          },
          {
            label: "The Climb",
            content:
              "Steep snow and mixed terrain to the summit ridge. The final push is exposed — demanding full focus.",
          },
          {
            label: "Summit",
            content:
              "Sweeping panorama of the entire Langtang-Jugal-Tibet landscape. One of the finest views in the range.",
          },
          {
            label: "Descent",
            content:
              "Return to high camp. Celebrate carefully — the descent still demands attention.",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Buffer Day",
        badge: "Reserve",
        altitude: "5,400m",
        sections: [
          {
            label: "Purpose",
            content:
              "Weather or condition reserve day for a second summit attempt if needed.",
          },
          {
            label: "Alternative",
            content:
              "If summit was reached, use as a recovery day before the long descent.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Descend to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,870m",
        duration: "6–7 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Retrace the glacier and pass route back toward Kyanjin Gompa.",
          },
          {
            label: "Afternoon",
            content:
              "A long but deeply satisfying descent. The hard work is done.",
          },
          {
            label: "Evening",
            content: "Arrive at Kyanjin Gompa. Warm meal and well-earned rest.",
          },
        ],
      },
      {
        day: "Day 13",
        title: "Trek to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        distance: "~6 km",
        duration: "2–3 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Easy descent through the valley back to Langtang Village.",
          },
          {
            label: "Afternoon",
            content: "Reflect on the climb over a warm teahouse meal.",
          },
          {
            label: "Evening",
            content: "Rest and relax before the long valley exit tomorrow.",
          },
        ],
      },
      {
        day: "Day 14",
        title: "Trek to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
        sections: [
          {
            label: "Morning",
            content: "Long descent back through forest and river crossings.",
          },
          {
            label: "Afternoon",
            content:
              "Re-enter the lush lower valley. Final night on the trail.",
          },
          {
            label: "Evening",
            content: "Arrive in Syabrubesi. Celebratory End of Trail dinner.",
          },
        ],
      },
      {
        day: "Day 15",
        title: "Drive to Kathmandu",
        badge: "Transfer",
        altitude: "1,400m",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Morning",
            content: "Return drive to Kathmandu through the mountain roads.",
          },
          {
            label: "Afternoon",
            content: "Hot shower, city comforts, and a well-earned rest.",
          },
          {
            label: "Evening",
            content: "Farewell dinner and souvenir shopping in Thamel.",
          },
        ],
      },
      {
        day: "Day 16",
        title: "Farewell & Departure",
        badge: "Departure",
        altitude: "1,400m",
        sections: [
          {
            label: "Morning",
            content: "Farewell breakfast with the full team.",
          },
          {
            label: "Departure",
            content:
              "Transfer to airport for onward travel. Summit certificate presented. Safe travels.",
          },
        ],
      },
    ],
  },

  // ── Scout Peak ───────────────────────────────────────────────────────────────

  {
    title: "Scout Peak",
    slug: "scout-peak",
    imageSrc: "/scout_01.jpg",
    duration: "10 Days",
    altitude: "5,600 M",
    region: "Langtang, Nepal",
    price: "$950",
    description: `Scout Peak (5,600m) is a lesser-known but spectacular trekking objective in the upper Langtang Valley, often used as an acclimatization and scouting summit before larger objectives like Naya Kanga. The ascent is non-technical on its standard route but gains altitude quickly, demanding good fitness and careful acclimatization. The summit offers intimate, close-up views of the Langtang Lirung glacier face and surrounding peaks that feel far more raw and immediate than more popular viewpoints. For adventurous trekkers seeking to go beyond the standard trail, Scout Peak delivers a genuine off-the-beaten-path experience.`,
    gallery: ["/people_03.jpg", "/pic2.jpeg", "/pic4.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Alpine + Base Camp", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      {
        label: "Physical Level",
        val: "Moderate – Strenuous",
        icon: "activity",
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        badge: "Arrival",
        altitude: "1,400m",
        sections: [
          {
            label: "Arrival",
            content: "Arrive in Kathmandu. Team briefing and gear check.",
          },
          {
            label: "Permits",
            content: "Permit processing and final equipment review.",
          },
          { label: "Evening", content: "Welcome dinner with the team." },
        ],
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        badge: "Transfer",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs",
        sections: [
          {
            label: "Departure",
            content:
              "Drive to the trailhead at Syabrubesi through scenic hill country.",
          },
          {
            label: "Overnight",
            content: "Arrive and settle in for the night ahead of the trek.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        badge: "Trek",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Trek into Langtang National Park along the river gorge trail.",
          },
          { label: "Evening", content: "First night at Lama Hotel teahouse." },
        ],
      },
      {
        day: "Day 4",
        title: "Trek to Kyanjin Gompa",
        badge: "Trek",
        altitude: "3,870m",
        distance: "~20 km",
        duration: "7–8 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Push through Langtang Village and continue directly to Kyanjin Gompa in one strong day.",
          },
          {
            label: "Afternoon",
            content:
              "Arrive at Kyanjin. Visit the monastery and yak cheese factory.",
          },
          {
            label: "Evening",
            content: "Rest well — a big day of altitude gain behind you.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Acclimatization Day",
        badge: "Rest",
        altitude: "3,870m",
        sections: [
          {
            label: "Morning",
            content: "Rest and acclimatize at Kyanjin. No rushing today.",
          },
          {
            label: "Activity",
            content:
              "Optional short hike to a nearby viewpoint to aid adaptation.",
          },
          {
            label: "Evening",
            content: "Prepare all equipment for the summit push.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Trek to Scout Peak Base Camp",
        badge: "Trek",
        altitude: "4,800m",
        distance: "~7 km",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content: "Move off the main trail toward the Scout Peak approach.",
          },
          {
            label: "Terrain",
            content:
              "The landscape becomes remote and rugged above the treeline.",
          },
          {
            label: "Camp",
            content:
              "Set up base camp at 4,800m. Rest and prepare for summit day.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Summit Day — Scout Peak",
        badge: "Summit",
        altitude: "5,600m",
        duration: "7–9 hrs",
        sections: [
          {
            label: "Start",
            content:
              "Early morning ascent to the summit. Steep and demanding at altitude.",
          },
          {
            label: "The Climb",
            content:
              "Non-technical but relentless gradient. Pace yourself carefully.",
          },
          {
            label: "Summit",
            content:
              "Panoramic views of the Langtang Lirung glacier face up close — raw and immediate.",
          },
          { label: "Descent", content: "Return to base camp by afternoon." },
        ],
      },
      {
        day: "Day 8",
        title: "Descend to Langtang Village",
        badge: "Trek",
        altitude: "3,430m",
        duration: "5–6 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Descend from base camp back through Kyanjin and down the valley.",
          },
          {
            label: "Evening",
            content: "Arrive at Langtang Village. Warm teahouse dinner.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Trek to Syabrubesi",
        badge: "Trek",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
        sections: [
          {
            label: "Morning",
            content:
              "Long final day of trekking through forest back to Syabrubesi.",
          },
          {
            label: "Evening",
            content: "Arrive in Syabrubesi. End of Trail celebration dinner.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Drive to Kathmandu — Departure",
        badge: "Departure",
        altitude: "1,400m",
        duration: "6–8 hrs",
        sections: [
          { label: "Morning", content: "Drive back to Kathmandu." },
          {
            label: "Evening",
            content: "Farewell dinner and transfer to airport. Safe travels.",
          },
        ],
      },
    ],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((e) => e.slug === slug);
}

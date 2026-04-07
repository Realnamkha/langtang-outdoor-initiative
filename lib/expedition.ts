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
    description: `Rising to 5,500 meters in the breathtaking Langtang Valley, Yala Peak is one of the best beginner-friendly peaks in the Himalayas. It offers an exciting mix of trekking and climbing, taking you through alpine landscapes, glaciers, and serene high-altitude terrain all without extreme technical difficulty.From the summit, you’re rewarded with spectacular panoramic views, including the majestic Shishapangma (8,027 m) rising across the Tibetan border.With its accessible route, stunning scenery, and real mountaineering feel, Yala Peak is the perfect gateway into Himalayan adventure`,
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
        title: "Kathmandu",
        badge: "Arrival",
        altitude: "1300M",
        stay: "Hotel",
        sections: [
          {
            label: "Details",
            content:
              "Upon your arrival at Tribhuvan International Airport, our team will warmly welcome you and transfer you to your hotel in Kathmandu. After check-in and some time to relax, you will meet your expedition team for a detailed briefing about the Yala Peak climb. A thorough gear check will be conducted, followed by an opportunity to shop for any missing equipment in the local stores. In the evening, enjoy a welcome dinner with the team, get to know your guides and fellow climbers, and prepare for the adventure ahead",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Kathmandu to Shyabru-Besi",
        badge: "Drive",
        altitude: "1550M",
        distance: "122KM",
        duration: "6-7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After an early breakfast at 6:30 AM, depart Kathmandu by jeep. Drive along the Trishuli River and through Dhunche, enjoying the winding roads and scenic hillsides.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch and refreshments at Trishuli while taking in the spectacular views of terraced hills, forests, and local villages.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check in at your lodge, relax, and enjoy a short walk to explore the local village and its lifestyle.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Shyabru-Besi to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "11KM",
        duration: "7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, followed by breakfast at 7:00 AM. At 7:30 AM, enjoy a short stretching session on the trail before starting the hike at 8:00 AM. The trek passes through lush subtropical and alpine forests, following the scenic Langtang River.",
          },
          {
            label: "Noon",
            content:
              "Stop at Bamboo for lunch and rest. Continue the hike along a steep but rewarding trail, taking in panoramic views of the river valleys and surrounding forests.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel and check into your tea house accommodation. After settling in, participate in a 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect on the following day",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Lama Hotel to Langtang",
        badge: "Trek",
        altitude: "3450M",
        distance: "12KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, enjoy breakfast at 7:00 AM, and a stretching session at 7:45 AM. Begin trekking by 8:00 AM through beautiful alpine forests with the Langtang River flowing alongside.",
          },
          {
            label: "Noon",
            content:
              "Stop at Ghoda Tabela for lunch. Here, the landscape begins to open up, transitioning from dense forest gorges to wider valleys with lighter vegetation, offering expansive views of the surrounding mountains.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Langtang Village and check into tea house. Participate in the usual 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect for the next day.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Langtang to Kyanjin",
        badge: "Trek",
        altitude: "3855M",
        distance: "6.5KM",
        duration: "2-3hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "As the distance is shorter but the elevation increases, the day starts slowly. Wake up at 7:00 AM, enjoy breakfast at 7:30 AM, and begin the trek by 8:00 AM. Take a scenic detour through Mundu Village, the only village in Langtang Valley where traditional architecture is still preserved. This route offers a unique glimpse into the authentic lifestyle and rich culture of the Langtangpa people",
          },
          {
            label: "Noon",
            content:
              "Continue to Kyanjin Gompa and have lunch. In the afternoon, a short hike to the nearby glacier lake helps with acclimatization.",
          },
          {
            label: "Evening",
            content:
              "Settle at the tea house and join the 45-minute team session to review the day and prepare for the next.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Kyanjin",
        badge: "Acclimatization",
        altitude: "3855M",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and breakfast as usual. Begin expedition preparation with hands-on gear familiarization, learning how to properly use climbing equipment under the guidance of a professional mountain guide.",
          },
          {
            label: "Noon",
            content:
              "Short local hikes around Kyanjin Gompa for acclimatization, while practicing technical skills learned during the morning session.",
          },
          {
            label: "Evening",
            content:
              "Return to the tea house and participate in the 45-minute team session to review training progress, discuss experiences, and prepare for the Base camp.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Kyanjin to Yala Base Camp",
        badge: "Trek",
        altitude: "4880M",
        distance: "6.9KM",
        duration: "6hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast at 7:30 AM, then start the trek by 8:00 AM. Hike toward the base of Tserko Ri, ascending a steep trail with breathtaking Himalayan views in every direction.",
          },
          {
            label: "Noon",
            content:
              "Stop for a packed lunch midway through the hike while enjoying the surrounding scenery.",
          },
          {
            label: "Evening",
            content:
              "Set up camp in tents at the base camp. Participate in the usual 45-minute team session, then rest early to prepare for an early summit attempt the next day",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Yala Base Camp to summit to kyanjin Gompa",
        badge: "Summit",
        altitude: "3855M",
        distance: "18.1KM",
        duration: "8-9hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 4:00 AM, have an early breakfast at 4:30 AM, and begin the summit push by 5:00 AM. Trek in the dark using headlamps, ascending toward Yala Peak.",
          },
          {
            label: "Noon",
            content:
              "Mid-hike packed lunch as you continue toward the summit. Reach the top in approximately 4–5 hours from base camp, rewarded with spectacular sunrise views and a sense of achievement.",
          },
          {
            label: "Evening",
            content:
              "Descend directly to Kyanjin Gompa instead of base camp. Join the usual 45-minute team session to review the summit experience and check on everyone’s condition",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Kyanjinn Gompa to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "18km",
        duration: "7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast as usual, then begin the trek following the same scenic valley trail, retracing your steps while enjoying the landscapes you’ve grown familiar with.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch along the way, taking in the rivers, forests, and mountain views, reflecting on the journey so far.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel, check into your tea house, and join the 45-minute team session to share experiences, memories, and highlights of the trek.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Lama Hotel to Shyabru-Besi",
        badge: "Trek",
        altitude: "1550M",
        distance: "11km",
        duration: "6hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast, then begin the final trekking leg through the forested trails of Langtang Valley, retracing the path toward Syabrubesi.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch en route and enjoy the river views and village life along the way.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check into lodge, and join the usual 45-minute team session to reflect on the journey and share final memories before the drive back to Kathmandu.",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Shyabru-Besi to Kathmandu",
        badge: "Drive",
        altitude: "1300M",
        distance: "122KM",
        duration: "6-7hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After breakfast, depart Syabrubesi by jeep and enjoy the scenic drive back to Kathmandu, passing rivers, terraced hills, and local villages along the way.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch at a local restaurant en route, soaking in the last views of the Langtang Valley.",
          },
          {
            label: "Evening",
            content:
              "Arrive in Kathmandu, check into hotel, and join a farewell program with a group dinner to celebrate the expedition and share memories with team and guides.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Kathmandu",
        badge: "Departure",
        altitude: "1300M",
        sections: [
          {
            label: "Details",
            content:
              "After breakfast, enjoy your final moments in Kathmandu before being transferred from the hotel to Tribhuvan International Airport. Depart with unforgettable memories of your Yala Peak expedition, carrying the joy of the journey and the hope of returning for future adventures",
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
    duration: "15 Days",
    altitude: "4,984 M",
    region: "Langtang, Nepal",
    price: "$1,000",
    description: `Tserko Peak is a beautiful mountain in the Langtang region, standing at 5,719 meters among the Langtang Himalayan range, just to the left of Yala Peak. This peak combines rocky terrain, glacier fields, and sharp ridges, making it ideal for climbers who want to improve their mountaineering skills. With its challenging routes and breathtaking Himalayan views, Tserko Peak offers an unforgettable adventure for those seeking both skill-building and the thrill of high-altitude climbing`,
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
        title: "Kathmandu",
        badge: "Arrival",
        altitude: "1300M",
        stay: "Hotel",
        sections: [
          {
            label: "Details",
            content:
              "Upon your arrival at Tribhuvan International Airport, our team will warmly welcome you and transfer you to your hotel in Kathmandu. After check-in and some time to relax, you will meet your expedition team for a detailed briefing about the Scout Peak climb. A thorough gear check will be conducted, followed by an opportunity to shop for any missing equipment in the local stores. In the evening, enjoy a welcome dinner with the team, get to know your guides and fellow climbers, and prepare for the adventure ahead",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Kathmandu to Shyabru-Besi",
        badge: "Drive",
        altitude: "1550M",
        distance: "122KM",
        duration: "6-7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After an early breakfast at 6:30 AM, depart Kathmandu by jeep. Drive along the Trishuli River and through Dhunche, enjoying the winding roads and scenic hillsides.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch and refreshments at Trishuli while taking in the spectacular views of terraced hills, forests, and local villages.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check in at your lodge, relax, and enjoy a short walk to explore the local village and its lifestyle.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Shyabru-Besi to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "11KM",
        duration: "7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, followed by breakfast at 7:00 AM. At 7:30 AM, enjoy a short stretching session on the trail before starting the hike at 8:00 AM. The trek passes through lush subtropical and alpine forests, following the scenic Langtang River.",
          },
          {
            label: "Noon",
            content:
              "Stop at Bamboo for lunch and rest. Continue the hike along a steep but rewarding trail, taking in panoramic views of the river valleys and surrounding forests.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel and check into your tea house accommodation. After settling in, participate in a 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect on the following day",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Lama Hotel to Langtang",
        badge: "Trek",
        altitude: "3450M",
        distance: "12KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, enjoy breakfast at 7:00 AM, and a stretching session at 7:45 AM. Begin trekking by 8:00 AM through beautiful alpine forests with the Langtang River flowing alongside.",
          },
          {
            label: "Noon",
            content:
              "Stop at Ghoda Tabela for lunch. Here, the landscape begins to open up, transitioning from dense forest gorges to wider valleys with lighter vegetation, offering expansive views of the surrounding mountains.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Langtang Village and check into tea house. Participate in the usual 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect for the next day.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Langtang to Kyanjin",
        badge: "Trek",
        altitude: "3855M",
        distance: "6.5KM",
        duration: "2-3hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "As the distance is shorter but the elevation increases, the day starts slowly. Wake up at 7:00 AM, enjoy breakfast at 7:30 AM, and begin the trek by 8:00 AM. Take a scenic detour through Mundu Village, the only village in Langtang Valley where traditional architecture is still preserved. This route offers a unique glimpse into the authentic lifestyle and rich culture of the Langtangpa people",
          },
          {
            label: "Noon",
            content:
              "Continue to Kyanjin Gompa and have lunch. In the afternoon, a short hike to the nearby glacier lake helps with acclimatization.",
          },
          {
            label: "Evening",
            content:
              "Settle at the tea house and join the 45-minute team session to review the day and prepare for the next.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Kyanjin",
        badge: "Acclimatization",
        altitude: "3855M",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and breakfast as usual. Begin expedition preparation with hands-on gear familiarization, learning how to properly use climbing equipment under the guidance of a professional mountain guide.",
          },
          {
            label: "Noon",
            content:
              "Short local hikes around Kyanjin Gompa for acclimatization, while practicing technical skills learned during the morning session.",
          },
          {
            label: "Evening",
            content:
              "Return to the tea house and participate in the 45-minute team session to review training progress, discuss experiences, and prepare for the Base camp.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Kyanjin-Gompa to Scout Base Camp",
        badge: "Trek",
        altitude: "4620M",
        distance: "5.2KM",
        duration: "6-7hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "With increasing elevation, we move slowly and steadily. Wake up at 7:00 AM, followed by breakfast, packing, and a short stretching session. Begin the trek around 9:00 AM, heading toward the less-traveled side of Kyanjin.",
          },
          {
            label: "Noon",
            content:
              "Cross an iron bridge and continue through alpine forests, gradually ascending toward base camp. Packed lunch will be taken along the trail while enjoying the changing landscapes.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Scout Peak Base Camp, set up tents, and settle in. Participate in the usual team briefing to review the day, check on everyone’s condition, and prepare for the next stage of the expedition",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Scout Base Camp to Scout High Camp",
        badge: "Trek",
        altitude: "4995M",
        distance: "3.4KM",
        duration: "3-4hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "With the gain in elevation, the day starts slowly to allow proper acclimatization. Wake up at 7:00 AM, have breakfast, and begin trekking by 9:00 AM through rocky terrain, maintaining a steady pace.",
          },
          {
            label: "Noon",
            content:
              "Reach High Camp in approximately 3–4 hours. The rest of the day is kept light with stretching and rest to help the body adapt to the altitude.",
          },
          {
            label: "Evening",
            content:
              "Settle into camp and join the usual team briefing to check everyone’s condition, share experiences, and prepare for the next day",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Scout High Camp",
        badge: "Training",
        altitude: "4995M",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 7:00 AM and have breakfast at 7:30 AM. Be ready by 8:00 AM and head to the nearby training area. Under the guidance of professional mountaineers, learn essential skills such as rope handling, use of climbing equipment, and basic safety techniques.",
          },
          {
            label: "Noon",
            content:
              "Practical glacier and snow training led by professional mountaineering guides. Skills include using crampons, ice-axe techniques, self-arrest, rope handling, and walking safely on snow and glacier terrain. This hands-on session is conducted in real alpine conditions to build confidence and mountaineering competence.",
          },
          {
            label: "Evening",
            content:
              "With an early finish, the rest of the day is dedicated to rest and recovery to prepare for the summit push. Join the usual team briefing to review the day, check team condition, and plan for the next day.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Summit Day",
        badge: "Summit",
        altitude: "5721M",
        distance: "7.6KM",
        duration: "8-9hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Start early with wake-up around 3:00 AM, followed by a quick breakfast. Begin the summit push by 4:30 AM, moving steadily in the early light with headlamps.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch during the climb. The ascent takes approximately 6–7 hours through a mix of rocky terrain, snow, ice, and glacier sections, including steep ridges, with mesmerizing Himalayan views throughout.",
          },
          {
            label: "Evening",
            content:
              "Descend back to High Camp. Enjoy warm food and hot drinks to recover, followed by the usual team session to share experiences and check on the team’s condition",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Scout High Camp to Kyanjin-Gompa",
        badge: "Descent",
        altitude: "3855M",
        distance: "8.6KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Start the day with breakfast and begin the descent from High Camp, moving carefully through rocky and alpine terrain. With decreasing elevation, the body starts to feel more comfortable.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch along the trail while retracing the route back toward Kyanjin Gompa, enjoying the open views of the valley and surrounding peaks.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Kyanjin Gompa, check into the lodge, and join the usual team session to share experiences, reflect on the summit, and relax after the expedition.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Kyanjinn Gompa to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "18KM",
        duration: "7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast as usual, then begin the trek following the same scenic valley trail, retracing your steps while enjoying the landscapes you’ve grown familiar with.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch along the way, taking in the rivers, forests, and mountain views, reflecting on the journey so far.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel, check into your tea house, and join the 45-minute team session to share experiences, memories, and highlights of the trek.",
          },
        ],
      },
      {
        day: "Day 13",
        title: "Lama Hotel to Shyabru-Besi",
        badge: "Trek",
        altitude: "1550M",
        distance: "11KM",
        duration: "6hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast, then begin the final trekking leg through the forested trails of Langtang Valley, retracing the path toward Syabrubesi.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch en route and enjoy the river views and village life along the way.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check into lodge, and join the usual 45-minute team session to reflect on the journey and share final memories before the drive back to Kathmandu.",
          },
        ],
      },
      {
        day: "Day 14",
        title: "Shyabru-Besi to Kathmandu",
        badge: "Drive",
        altitude: "1300M",
        distance: "122KM",
        duration: "6-7hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After breakfast, depart Syabrubesi by jeep and enjoy the scenic drive back to Kathmandu, passing rivers, terraced hills, and local villages along the way.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch at a local restaurant en route, soaking in the last views of the Langtang Valley.",
          },
          {
            label: "Evening",
            content:
              "Arrive in Kathmandu, check into hotel, and join a farewell program with a group dinner to celebrate the expedition and share memories with team and guides.",
          },
        ],
      },
      {
        day: "Day 15",
        title: "Kathmandu",
        badge: "Departure",
        altitude: "1300M",
        sections: [
          {
            label: "Details",
            content:
              "After breakfast, enjoy your final moments in Kathmandu before being transferred from the hotel to Tribhuvan International Airport. Depart with unforgettable memories of your Yala Peak expedition, carrying the joy of the journey and the hope of returning for future adventures",
          },
        ],
      },
    ],
  },

  // ── Naya Kanga ───────────────────────────────────────────────────────────────

  {
    title: "Naya Kanga",
    slug: "naya-kanga",
    imageSrc: "/pic4.JPG",
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
        title: "Kathmandu",
        badge: "Arrival",
        altitude: "1300M",
        stay: "Hotel",
        sections: [
          {
            label: "Details",
            content:
              "Upon your arrival at Tribhuvan International Airport, our team will warmly welcome you and transfer you to your hotel in Kathmandu. After check-in and some time to relax, you will meet your expedition team for a detailed briefing about the Naya-ganga climb. A thorough gear check will be conducted, followed by an opportunity to shop for any missing equipment in the local stores. In the evening, enjoy a welcome dinner with the team, get to know your guides and fellow climbers, and prepare for the adventure ahead",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Kathmandu to Shyabru-Besi",
        badge: "Drive",
        altitude: "1550M",
        distance: "122KM",
        duration: "6-7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After an early breakfast at 6:30 AM, depart Kathmandu by jeep. Drive along the Trishuli River and through Dhunche, enjoying the winding roads and scenic hillsides.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch and refreshments at Trishuli while taking in the spectacular views of terraced hills, forests, and local villages.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check in at your lodge, relax, and enjoy a short walk to explore the local village and its lifestyle.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Shyabru-Besi to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "11KM",
        duration: "7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, followed by breakfast at 7:00 AM. At 7:30 AM, enjoy a short stretching session on the trail before starting the hike at 8:00 AM. The trek passes through lush subtropical and alpine forests, following the scenic Langtang River.",
          },
          {
            label: "Noon",
            content:
              "Stop at Bamboo for lunch and rest. Continue the hike along a steep but rewarding trail, taking in panoramic views of the river valleys and surrounding forests.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel and check into your tea house accommodation. After settling in, participate in a 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect on the following day",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Lama Hotel to Langtang",
        badge: "Trek",
        altitude: "3450M",
        distance: "12KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, enjoy breakfast at 7:00 AM, and a stretching session at 7:45 AM. Begin trekking by 8:00 AM through beautiful alpine forests with the Langtang River flowing alongside.",
          },
          {
            label: "Noon",
            content:
              "Stop at Ghoda Tabela for lunch. Here, the landscape begins to open up, transitioning from dense forest gorges to wider valleys with lighter vegetation, offering expansive views of the surrounding mountains.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Langtang Village and check into tea house. Participate in the usual 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect for the next day.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Langtang to Kyanjin",
        badge: "Trek",
        altitude: "3855M",
        distance: "6.5KM",
        duration: "2-3hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "As the distance is shorter but the elevation increases, the day starts slowly. Wake up at 7:00 AM, enjoy breakfast at 7:30 AM, and begin the trek by 8:00 AM. Take a scenic detour through Mundu Village, the only village in Langtang Valley where traditional architecture is still preserved. This route offers a unique glimpse into the authentic lifestyle and rich culture of the Langtangpa people",
          },
          {
            label: "Noon",
            content:
              "Continue to Kyanjin Gompa and have lunch. In the afternoon, a short hike to the nearby glacier lake helps with acclimatization.",
          },
          {
            label: "Evening",
            content:
              "Settle at the tea house and join the 45-minute team session to review the day and prepare for the next.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Kyanjin",
        badge: "Acclimatization",
        altitude: "3855M",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and breakfast as usual. Begin expedition preparation with hands-on gear familiarization, learning how to properly use climbing equipment under the guidance of a professional mountain guide.",
          },
          {
            label: "Noon",
            content:
              "Short local hikes around Kyanjin Gompa for acclimatization, while practicing technical skills learned during the morning session.",
          },
          {
            label: "Evening",
            content:
              "Return to the tea house and participate in the 45-minute team session to review training progress, discuss experiences, and prepare for the Base camp.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Kyanjin- Gompa to Naya-Ganga Lower Base Camp",
        badge: "Trek",
        altitude: "4325M",
        distance: "3.9KM",
        duration: "4-5 hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "With increasing elevation, the day is kept shorter for proper acclimatization. After breakfast and a short stretching session, begin the trek by crossing the iron bridge toward the other side of the valley.",
          },
          {
            label: "Noon",
            content:
              "Continue through light alpine forest for about an hour, followed by hilly and rocky terrain. Packed lunch will be taken along the trail while enjoying the changing landscapes.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lower Base Camp, set up tents, and settle in. Join the usual team briefing to review the day, check on everyone’s condition, and prepare for the next stage of the climb.",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Naya-Ganga Lower Base Camp to Base Camp",
        badge: "Trek",
        altitude: "5515M",
        distance: "2.6KM",
        duration: "5 hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Following the usual morning routine, begin the trek by climbing the steep hill just above the camp. Move steadily as the trail gains elevation quickly.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch along the trail. The route varies depending on the season and can be slightly technical, so extra caution is required. Follow the mountain guide’s instructions and remain alert in exposed sections.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Base Camp, set up tents, and settle in. Participate in the usual team briefing to review the day, check conditions, and prepare for the next stage of the expedition.",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Base Camp to High Camp",
        badge: "Trek",
        altitude: "5230M",
        distance: "1.2KM",
        duration: "2 hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Start with the usual morning routine and breakfast. Begin the short but steep hike toward High Camp, moving carefully through rocky terrain. Some fragile sections may have potential rockfall, so stay alert and follow mountain guide instructions.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch on the trail. Half of the day will be dedicated to rest, stretching, and recovery to prepare the body for the training and summit push.",
          },
          {
            label: "Evening",
            content:
              "Participate in the usual evening briefing to review the day, check team condition, and plan for the summit.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "High Camp",
        badge: "Training",
        altitude: "5230M",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up, have breakfast as usual, then stretch and prepare for the day.",
          },
          {
            label: "Noon",
            content:
              "Practical glacier and snow training led by professional mountaineering guides. Skills include using crampons, ice-axe techniques, self-arrest, rope handling, and walking safely on snow and glacier terrain. This hands-on session is conducted in real alpine conditions to build confidence and mountaineering competence.",
          },
          {
            label: "Evening",
            content:
              "Return to camp, and join the usual evening session to review team conditions, experiences, and plan for the summit preparations.",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Summit Day",
        badge: "Summit",
        altitude: "5864M",
        distance: "5.2KM",
        duration: "8-9 hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up early at 3:00 AM, followed by a quick breakfast. Begin the summit climb by 4:00 AM, moving steadily and carefully through rocky, icy, and glacier sections.",
          },
          {
            label: "Noon",
            content:
              "The climb will take approximately 5–6 hours. Packed lunch will be taken along the trail. Enjoy breathtaking views of the Langtang Himalayan range and the valley below while applying all the skills learned during training.",
          },
          {
            label: "Evening",
            content:
              "Descend back to High Camp. Warm food and drinks will be served to recover from the climb.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "High Camp to Kyanjin Gompa",
        badge: "Descent",
        altitude: "3855M",
        distance: "7.7KM",
        duration: "6-7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Start the day with the usual morning routine and breakfast. Begin the descent from High Camp, moving carefully through rocky and alpine terrain. The descent is gradual, allowing the body to recover after the summit push.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch on the trail while enjoying the alpine views and surrounding peaks. The hike is longer but less strenuous due to the decreasing elevation.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Kyanjin Gompa, check into the lodge, and join the usual evening session to review the expedition, share experiences, and relax after the climb.",
          },
        ],
      },
      {
        day: "Day 13",
        title: "Kyanjin Gompa to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "18KM",
        duration: "7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast as usual, then begin the trek following the same scenic valley trail, retracing your steps while enjoying the landscapes you’ve grown familiar with.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch along the way, taking in the rivers, forests, and mountain views, reflecting on the journey so far.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel, check into your tea house, and join the 45-minute team session to share experiences, memories, and highlights of the trek.",
          },
        ],
      },
      {
        day: "Day 14",
        title: "Lama Hotel to Shyabru-Besi",
        badge: "Trek",
        altitude: "1550M",
        distance: "11KM",
        duration: "6 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast, then begin the final trekking leg through the forested trails of Langtang Valley, retracing the path toward Syabrubesi.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch en route and enjoy the river views and village life along the way.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check into lodge, and join the usual 45-minute team session to reflect on the journey and share final memories before the drive back to Kathmandu.",
          },
        ],
      },
      {
        day: "Day 15",
        title: "Shyabru-Besi to Kathmandu",
        badge: "Drive",
        altitude: "1300M",
        distance: "122KM",
        duration: "6-7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After breakfast, depart Syabrubesi by jeep and enjoy the scenic drive back to Kathmandu, passing rivers, terraced hills, and local villages along the way.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch at a local restaurant en route, soaking in the last views of the Langtang Valley.",
          },
          {
            label: "Evening",
            content:
              "Arrive in Kathmandu, check into hotel, and join a farewell program with a group dinner to celebrate the expedition and share memories with team and guides.",
          },
        ],
      },
      {
        day: "Day 16",
        title: "Kathmandu",
        badge: "Departure",
        altitude: "1300M",
        stay: "-",
        sections: [
          {
            label: "Details",
            content:
              "After breakfast, enjoy your final moments in Kathmandu before being transferred from the hotel to Tribhuvan International Airport. Depart with unforgettable memories of your Yala Peak expedition, carrying the joy of the journey and the hope of returning for future adventures",
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
    duration: "15 Days",
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
        title: "Kathmandu",
        badge: "Arrival",
        altitude: "1300M",
        stay: "Hotel",
        sections: [
          {
            label: "Details",
            content:
              "Upon your arrival at Tribhuvan International Airport, our team will warmly welcome you and transfer you to your hotel in Kathmandu. After check-in and some time to relax, you will meet your expedition team for a detailed briefing about the Scout Peak climb. A thorough gear check will be conducted, followed by an opportunity to shop for any missing equipment in the local stores. In the evening, enjoy a welcome dinner with the team, get to know your guides and fellow climbers, and prepare for the adventure ahead",
          },
        ],
      },
      {
        day: "Day 2",
        title: "Kathmandu to Shyabru-Besi",
        badge: "Drive",
        altitude: "1550M",
        distance: "122KM",
        duration: "6-7 hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After an early breakfast at 6:30 AM, depart Kathmandu by jeep. Drive along the Trishuli River and through Dhunche, enjoying the winding roads and scenic hillsides.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch and refreshments at Trishuli while taking in the spectacular views of terraced hills, forests, and local villages.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check in at your lodge, relax, and enjoy a short walk to explore the local village and its lifestyle.",
          },
        ],
      },
      {
        day: "Day 3",
        title: "Shyabru-Besi to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "11KM",
        duration: "7 hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, followed by breakfast at 7:00 AM. At 7:30 AM, enjoy a short stretching session on the trail before starting the hike at 8:00 AM. The trek passes through lush subtropical and alpine forests, following the scenic Langtang River.",
          },
          {
            label: "Noon",
            content:
              "Stop at Bamboo for lunch and rest. Continue the hike along a steep but rewarding trail, taking in panoramic views of the river valleys and surrounding forests.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel and check into your tea house accommodation. After settling in, participate in a 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect on the following day",
          },
        ],
      },
      {
        day: "Day 4",
        title: "Lama Hotel to Langtang",
        badge: "Trek",
        altitude: "3450M",
        distance: "12KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 6:30 AM, enjoy breakfast at 7:00 AM, and a stretching session at 7:45 AM. Begin trekking by 8:00 AM through beautiful alpine forests with the Langtang River flowing alongside.",
          },
          {
            label: "Noon",
            content:
              "Stop at Ghoda Tabela for lunch. Here, the landscape begins to open up, transitioning from dense forest gorges to wider valleys with lighter vegetation, offering expansive views of the surrounding mountains.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Langtang Village and check into tea house. Participate in the usual 45-minute team session to discuss the day’s experiences, check on everyone’s condition, and preview what to expect for the next day.",
          },
        ],
      },
      {
        day: "Day 5",
        title: "Langtang to Kyanjin",
        badge: "Trek",
        altitude: "3855M",
        distance: "6.5KM",
        duration: "2-3hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "As the distance is shorter but the elevation increases, the day starts slowly. Wake up at 7:00 AM, enjoy breakfast at 7:30 AM, and begin the trek by 8:00 AM. Take a scenic detour through Mundu Village, the only village in Langtang Valley where traditional architecture is still preserved. This route offers a unique glimpse into the authentic lifestyle and rich culture of the Langtangpa people",
          },
          {
            label: "Noon",
            content:
              "Continue to Kyanjin Gompa and have lunch. In the afternoon, a short hike to the nearby glacier lake helps with acclimatization.",
          },
          {
            label: "Evening",
            content:
              "Settle at the tea house and join the 45-minute team session to review the day and prepare for the next.",
          },
        ],
      },
      {
        day: "Day 6",
        title: "Kyanjin",
        badge: "Acclimatization",
        altitude: "3855M",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and breakfast as usual. Begin expedition preparation with hands-on gear familiarization, learning how to properly use climbing equipment under the guidance of a professional mountain guide.",
          },
          {
            label: "Noon",
            content:
              "Short local hikes around Kyanjin Gompa for acclimatization, while practicing technical skills learned during the morning session.",
          },
          {
            label: "Evening",
            content:
              "Return to the tea house and participate in the 45-minute team session to review training progress, discuss experiences, and prepare for the Base camp.",
          },
        ],
      },
      {
        day: "Day 7",
        title: "Kyanjin-Gompa to Scout Base Camp",
        badge: "Trek",
        altitude: "4620M",
        distance: "5.2KM",
        duration: "6-7hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "With increasing elevation, we move slowly and steadily. Wake up at 7:00 AM, followed by breakfast, packing, and a short stretching session. Begin the trek around 9:00 AM, heading toward the less-traveled side of Kyanjin.",
          },
          {
            label: "Noon",
            content:
              "Cross an iron bridge and continue through alpine forests, gradually ascending toward base camp. Packed lunch will be taken along the trail while enjoying the changing landscapes.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Scout Peak Base Camp, set up tents, and settle in. Participate in the usual team briefing to review the day, check on everyone’s condition, and prepare for the next stage of the expedition",
          },
        ],
      },
      {
        day: "Day 8",
        title: "Scout Base Camp to Scout High Camp",
        badge: "Trek",
        altitude: "4995M",
        distance: "3.4KM",
        duration: "3-4hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "With the gain in elevation, the day starts slowly to allow proper acclimatization. Wake up at 7:00 AM, have breakfast, and begin trekking by 9:00 AM through rocky terrain, maintaining a steady pace.",
          },
          {
            label: "Noon",
            content:
              "Reach High Camp in approximately 3–4 hours. The rest of the day is kept light with stretching and rest to help the body adapt to the altitude.",
          },
          {
            label: "Evening",
            content:
              "Settle into camp and join the usual team briefing to check everyone’s condition, share experiences, and prepare for the next day",
          },
        ],
      },
      {
        day: "Day 9",
        title: "Scout High Camp",
        badge: "Training",
        altitude: "4995M",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up at 7:00 AM and have breakfast at 7:30 AM. Be ready by 8:00 AM and head to the nearby training area. Under the guidance of professional mountaineers, learn essential skills such as rope handling, use of climbing equipment, and basic safety techniques.",
          },
          {
            label: "Noon",
            content:
              "Practical glacier and snow training led by professional mountaineering guides. Skills include using crampons, ice-axe techniques, self-arrest, rope handling, and walking safely on snow and glacier terrain. This hands-on session is conducted in real alpine conditions to build confidence and mountaineering competence.",
          },
          {
            label: "Evening",
            content:
              "With an early finish, the rest of the day is dedicated to rest and recovery to prepare for the summit push. Join the usual team briefing to review the day, check team condition, and plan for the next day.",
          },
        ],
      },
      {
        day: "Day 10",
        title: "Summit Day",
        badge: "Summit",
        altitude: "5721M",
        distance: "7.6KM",
        duration: "8-9hrs",
        stay: "Tent",
        sections: [
          {
            label: "Morning",
            content:
              "Start early with wake-up around 3:00 AM, followed by a quick breakfast. Begin the summit push by 4:30 AM, moving steadily in the early light with headlamps.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch during the climb. The ascent takes approximately 6–7 hours through a mix of rocky terrain, snow, ice, and glacier sections, including steep ridges, with mesmerizing Himalayan views throughout.",
          },
          {
            label: "Evening",
            content:
              "Descend back to High Camp. Enjoy warm food and hot drinks to recover, followed by the usual team session to share experiences and check on the team’s condition",
          },
        ],
      },
      {
        day: "Day 11",
        title: "Scout High Camp to Kyanjin-Gompa",
        badge: "Descent",
        altitude: "3855M",
        distance: "8.6KM",
        duration: "6-7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Start the day with breakfast and begin the descent from High Camp, moving carefully through rocky and alpine terrain. With decreasing elevation, the body starts to feel more comfortable.",
          },
          {
            label: "Noon",
            content:
              "Packed lunch along the trail while retracing the route back toward Kyanjin Gompa, enjoying the open views of the valley and surrounding peaks.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Kyanjin Gompa, check into the lodge, and join the usual team session to share experiences, reflect on the summit, and relax after the expedition.",
          },
        ],
      },
      {
        day: "Day 12",
        title: "Kyanjinn Gompa to Lama Hotel",
        badge: "Trek",
        altitude: "2470M",
        distance: "18KM",
        duration: "7hrs",
        stay: "Tea-House",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast as usual, then begin the trek following the same scenic valley trail, retracing your steps while enjoying the landscapes you’ve grown familiar with.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch along the way, taking in the rivers, forests, and mountain views, reflecting on the journey so far.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Lama Hotel, check into your tea house, and join the 45-minute team session to share experiences, memories, and highlights of the trek.",
          },
        ],
      },
      {
        day: "Day 13",
        title: "Lama Hotel to Shyabru-Besi",
        badge: "Trek",
        altitude: "1550M",
        distance: "11KM",
        duration: "6hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "Wake up and have breakfast, then begin the final trekking leg through the forested trails of Langtang Valley, retracing the path toward Syabrubesi.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch en route and enjoy the river views and village life along the way.",
          },
          {
            label: "Evening",
            content:
              "Arrive at Syabrubesi, check into lodge, and join the usual 45-minute team session to reflect on the journey and share final memories before the drive back to Kathmandu.",
          },
        ],
      },
      {
        day: "Day 14",
        title: "Shyabru-Besi to Kathmandu",
        badge: "Drive",
        altitude: "1300M",
        distance: "122KM",
        duration: "6-7hrs",
        stay: "Hotel",
        sections: [
          {
            label: "Morning",
            content:
              "After breakfast, depart Syabrubesi by jeep and enjoy the scenic drive back to Kathmandu, passing rivers, terraced hills, and local villages along the way.",
          },
          {
            label: "Noon",
            content:
              "Stop for lunch at a local restaurant en route, soaking in the last views of the Langtang Valley.",
          },
          {
            label: "Evening",
            content:
              "Arrive in Kathmandu, check into hotel, and join a farewell program with a group dinner to celebrate the expedition and share memories with team and guides.",
          },
        ],
      },
      {
        day: "Day 15",
        title: "Kathmandu",
        badge: "Departure",
        altitude: "1300M",
        stay: "Hotel",
        sections: [
          {
            label: "Details",
            content:
              "After breakfast, enjoy your final moments in Kathmandu before being transferred from the hotel to Tribhuvan International Airport. Depart with unforgettable memories of your Yala Peak expedition, carrying the joy of the journey and the hope of returning for future adventures",
          },
        ],
      },
    ],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((e) => e.slug === slug);
}

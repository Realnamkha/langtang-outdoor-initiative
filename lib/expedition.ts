export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
  altitude?: string;
  distance?: string;
  duration?: string;
};

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

export const expeditions: Expedition[] = [
  {
    title: "Yala Peak 2026",
    slug: "yala-peak-2026",
    imageSrc: "/pic2.jpeg",
    duration: "12 Days",
    altitude: "5,520 M",
    region: "Langtang, Nepal",
    price: "$1,200",
    description: `Yala Peak (5,520m) is one of the most accessible trekking peaks in Nepal, located in the heart of the Langtang Valley. Ideal for climbers stepping into high-altitude mountaineering for the first time, Yala offers a genuine summit experience without extreme technical difficulty. The ascent follows a straightforward northeast ridge route with crampons and ice axe, rewarding climbers with sweeping panoramas of Shishapangma, Dorje Lakpa, Langtang Lirung, and the Tibetan plateau. Combined with the rich cultural trail through Tamang villages and the iconic Kyanjin Gompa monastery, this expedition is as spiritually enriching as it is physically demanding.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description:
          "Arrive at Tribhuvan International Airport. Meet your guide, transfer to hotel, and attend a detailed team briefing covering gear check, permits, and expedition overview.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        description:
          "Scenic drive northwest through winding mountain roads, passing terraced fields and traditional Tamang villages. Road conditions can vary — expect 6–8 hours travel time.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        description:
          "Enter Langtang National Park and descend into the Langtang Khola gorge. The trail winds through dense rhododendron and bamboo forest. Watch for red pandas and langur monkeys.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        description:
          "The valley opens up dramatically as you gain altitude. Pass through Ghoda Tabela and yak pastures. First clear views of Langtang Lirung (7,227m).",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        description:
          "Short but rewarding day through open alpine meadows. Visit the famous Kyanjin Gompa monastery and the local yak cheese factory. Stunning views of Tserko Ri and Langtang Lirung.",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 6",
        title: "Acclimatization at Kyanjin Gompa",
        description:
          "Critical rest and acclimatization day. Optional hike to Kyanjin Ri (4,773m) for panoramic views of the Langtang range, Ganesh Himal, and the Tibetan plateau.",
        altitude: "3,870m – 4,773m",
        duration: "4–5 hrs hike",
      },
      {
        day: "Day 7",
        title: "Trek to Yala Peak Base Camp",
        description:
          "Leave the teahouse trail behind. Trek across high-altitude yak grazing meadows at Yala Kharka. Set up base camp, review summit plans, and gear check.",
        altitude: "5,000m",
        distance: "~6 km",
        duration: "4–5 hrs",
      },
      {
        day: "Day 8",
        title: "Summit Day — Yala Peak",
        description:
          "Pre-dawn alpine start (2–3am). Ascend via the northeast ridge using crampons and ice axe. Non-technical but physically demanding. Summit rewards with views of Shishapangma, Dorje Lakpa, and the entire Langtang range.",
        altitude: "5,520m",
        duration: "8–10 hrs",
      },
      {
        day: "Day 9",
        title: "Buffer Day",
        description:
          "Reserved for a second summit attempt if weather prevented it on Day 8, or used as a rest and recovery day before the long descent.",
        altitude: "5,000m",
      },
      {
        day: "Day 10",
        title: "Trek Back to Langtang Village",
        description:
          "Descend from base camp back through Kyanjin Gompa, continuing down the valley to Langtang Village. Take your time on the rocky descent.",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 11",
        title: "Trek to Syabrubesi",
        description:
          "Long descent through forest and river crossings back to Syabrubesi. A satisfying final day of trekking with the hard work behind you.",
        altitude: "1,550m",
        distance: "~22 km",
        duration: "6–7 hrs",
      },
      {
        day: "Day 12",
        title: "Drive to Kathmandu — Farewell Dinner",
        description:
          "Morning drive back to Kathmandu. Check in to hotel, freshen up, and enjoy a farewell dinner with your team at a traditional Nepali restaurant.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
    ],
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
  },
  {
    title: "Tserko Peak",
    slug: "tserko-peak",
    imageSrc: "/people_03.jpg",
    duration: "14 Days",
    altitude: "4,984 M",
    region: "Langtang, Nepal",
    price: "$1,000",
    description: `Tserko Ri (4,984m) rises dramatically above Kyanjin Gompa and is one of the most rewarding viewpoints in the entire Langtang region. While technically a trekking viewpoint rather than a technical climbing peak, the ascent is steep, strenuous, and deeply satisfying. From the summit, climbers are treated to an unobstructed 360-degree panorama of Langtang Lirung (7,227m), Ganesh Himal, Dorje Lakpa, and the vast Tibetan plateau to the north. The expedition pairs beautifully with the cultural richness of Kyanjin Gompa monastery and authentic teahouse trekking through the heart of Langtang Valley.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description:
          "Arrive at Tribhuvan International Airport, meet your guide, and attend a team briefing covering permits, gear, and the expedition plan.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        description:
          "Early morning drive through winding hill roads northwest of Kathmandu. Pass through Tamang villages and terraced farmland en route.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        description:
          "Enter Langtang National Park and follow the Langtang Khola river through dense subtropical forest. Good chance of spotting wildlife.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        description:
          "Ascend through forest into open valley. First sweeping views of Langtang Lirung and surrounding peaks. Pass yak herders and prayer flags.",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        description:
          "Short walk through alpine meadows to the iconic Kyanjin Gompa monastery. Visit the yak cheese factory and explore the gompa.",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 6",
        title: "Acclimatization at Kyanjin",
        description:
          "Rest day for acclimatization. Optional hike to nearby viewpoints. Your body adjusts to the altitude before the high camp push.",
        altitude: "3,870m",
        duration: "Rest day",
      },
      {
        day: "Day 7",
        title: "Trek to Tserko Ri Base Camp",
        description:
          "Ascend steeply from Kyanjin Gompa toward the base of Tserko Ri. The terrain becomes more rugged with dramatic ridge views.",
        altitude: "4,200m",
        distance: "~5 km",
        duration: "3–4 hrs",
      },
      {
        day: "Day 8",
        title: "Summit Day — Tserko Ri",
        description:
          "Early morning summit push to the top of Tserko Ri. Incredible 360° views of Langtang Lirung, Ganesh Himal, and the Tibetan plateau. Descend to Kyanjin Gompa.",
        altitude: "4,984m",
        duration: "7–9 hrs",
      },
      {
        day: "Day 9",
        title: "Rest at Kyanjin Monastery",
        description:
          "Recovery day. Explore Kyanjin Monastery, chat with local monks, and enjoy the peaceful high-altitude setting.",
        altitude: "3,870m",
      },
      {
        day: "Day 10",
        title: "Trek Back to Langtang Village",
        description:
          "Begin the descent back down the valley, retracing the route through yak pastures and forest to Langtang Village.",
        altitude: "3,430m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 11",
        title: "Trek to Lama Hotel",
        description:
          "Continue descending through the valley, back into the denser forest zone. Legs will feel the downhill but spirits are high.",
        altitude: "2,380m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 12",
        title: "Trek to Syabrubesi",
        description:
          "Final day of trekking. Descend to Syabrubesi through river valleys and forest. Celebrate the end of the trek with a hot meal.",
        altitude: "1,550m",
        distance: "~11 km",
        duration: "4–5 hrs",
      },
      {
        day: "Day 13",
        title: "Drive to Kathmandu",
        description:
          "Early morning drive back to Kathmandu. Relax, shower, and enjoy the city after days on the trail.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 14",
        title: "Departure Day",
        description:
          "Transfer to Tribhuvan International Airport for your onward flight. Safe travels and congratulations on your summit!",
        altitude: "1,400m",
      },
    ],
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
  },
  {
    title: "Naya Kanga",
    slug: "naya-kanga",
    imageSrc: "/pic4.jpg",
    duration: "16 Days",
    altitude: "5,846 M",
    region: "Langtang, Nepal",
    price: "$1,500",
    description: `Naya Kanga (5,846m), also known as Ganja La Chuli, is one of the finest technical trekking peaks in the Langtang region. Sitting above the high Ganja La pass (5,130m), this peak demands solid mountaineering skills — climbers navigate crevassed glaciers, steep snow slopes, and exposed ridgelines to reach the summit. The reward is extraordinary: a sweeping high-altitude panorama of the entire Langtang massif, Jugal Himal, and across into Tibet. This is a serious mountaineering objective that suits climbers with prior glacier travel experience and a hunger for a genuine alpine challenge.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu, meet the team, and attend a full expedition briefing covering technical gear, permits, and acclimatization strategy.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        description:
          "Early morning drive northwest to Syabrubesi, the gateway to Langtang Valley.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        description:
          "Enter Langtang National Park through the river gorge. Dense forest, waterfalls, and first views of the high peaks ahead.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        description:
          "Valley opens into wide alpine meadows. Pass yak pastures and traditional stone villages with views of Langtang Lirung dominating the skyline.",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        description:
          "Arrive at Kyanjin Gompa — the expedition hub. Visit the monastery and yak cheese factory. Rest and prepare for higher altitude days.",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 6",
        title: "Acclimatization — Kyanjin Ri Hike",
        description:
          "Acclimatization hike to Kyanjin Ri (4,773m). Vital for altitude adjustment before the glacier approach. Rest and hydrate well.",
        altitude: "4,773m",
        duration: "4–5 hrs hike",
      },
      {
        day: "Day 7",
        title: "Trek Toward Ganja La Base",
        description:
          "Leave the main Langtang trail and head north toward the Ganja La approach. Terrain becomes wilder and more remote.",
        altitude: "4,400m",
        distance: "~8 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 8",
        title: "Cross Ganja La Pass",
        description:
          "Cross the Ganja La (5,130m) — a high, snow-covered pass with dramatic views. Descend to camp on the far side near the Naya Kanga glacier approach.",
        altitude: "5,130m",
        duration: "7–8 hrs",
      },
      {
        day: "Day 9",
        title: "Establish High Camp",
        description:
          "Trek up onto the glacier and establish high camp below the final summit slopes. Rope up, review systems, and rest for summit day.",
        altitude: "5,400m",
        distance: "~4 km",
        duration: "4–5 hrs",
      },
      {
        day: "Day 10",
        title: "Summit Day — Naya Kanga",
        description:
          "Pre-dawn start. Climb steep snow and mixed terrain to the summit ridge. The final push is exposed and demands focus. Summit views span the entire Langtang-Jugal-Tibet panorama.",
        altitude: "5,846m",
        duration: "8–10 hrs",
      },
      {
        day: "Day 11",
        title: "Buffer Day",
        description:
          "Weather or condition reserve day. Used for a second summit attempt or rest before descent.",
        altitude: "5,400m",
      },
      {
        day: "Day 12",
        title: "Descend to Kyanjin Gompa",
        description:
          "Retrace the glacier and pass route back to Kyanjin Gompa. A long but satisfying descent.",
        altitude: "3,870m",
        duration: "6–7 hrs",
      },
      {
        day: "Day 13",
        title: "Trek to Langtang Village",
        description:
          "Easy descent through the valley back to Langtang Village. Reflect on the climb over a warm teahouse meal.",
        altitude: "3,430m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 14",
        title: "Trek to Syabrubesi",
        description:
          "Long descent back through forest and river crossings to Syabrubesi. Final night on the trail.",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
      },
      {
        day: "Day 15",
        title: "Drive to Kathmandu",
        description:
          "Return drive to Kathmandu. Hot shower, city comforts, and a well-earned rest.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 16",
        title: "Farewell & Departure",
        description:
          "Farewell breakfast with the team. Transfer to airport for onward travel. Certificate of summit presented.",
        altitude: "1,400m",
      },
    ],
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
  },
  {
    title: "Scout Peak",
    slug: "scout-peak",
    imageSrc: "/people_03.jpg",
    duration: "10 Days",
    altitude: "5,600 M",
    region: "Langtang, Nepal",
    price: "$950",
    description: `Scout Peak (5,600m) is a lesser-known but spectacular trekking objective in the upper Langtang Valley, often used as an acclimatization and scouting summit before larger objectives like Naya Kanga. The ascent is non-technical on its standard route but gains altitude quickly, demanding good fitness and careful acclimatization. The summit offers intimate, close-up views of the Langtang Lirung glacier face and surrounding peaks that feel far more raw and immediate than more popular viewpoints. For adventurous trekkers seeking to go beyond the standard trail, Scout Peak delivers a genuine off-the-beaten-path experience.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu. Team briefing, gear check, and permit processing.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        description:
          "Drive to the trailhead at Syabrubesi through scenic hill country.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        description:
          "Trek into Langtang National Park along the river gorge trail.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 4",
        title: "Trek to Kyanjin Gompa",
        description:
          "Push through Langtang Village and continue directly to Kyanjin Gompa in one strong day.",
        altitude: "3,870m",
        distance: "~20 km",
        duration: "7–8 hrs",
      },
      {
        day: "Day 5",
        title: "Acclimatization Day",
        description:
          "Rest and acclimatize at Kyanjin. Optional short hike. Prepare equipment for the summit push.",
        altitude: "3,870m",
        duration: "Rest day",
      },
      {
        day: "Day 6",
        title: "Trek to Scout Peak Base Camp",
        description:
          "Move off the main trail toward the Scout Peak approach. Terrain becomes remote and rugged above the treeline.",
        altitude: "4,800m",
        distance: "~7 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 7",
        title: "Summit Day — Scout Peak",
        description:
          "Early morning ascent to the summit of Scout Peak. Steep and demanding at altitude but non-technical. Panoramic views of Langtang Lirung's glacier walls up close.",
        altitude: "5,600m",
        duration: "7–9 hrs",
      },
      {
        day: "Day 8",
        title: "Descend to Langtang Village",
        description:
          "Descend from base camp back through Kyanjin and down the valley to Langtang Village.",
        altitude: "3,430m",
        duration: "5–6 hrs",
      },
      {
        day: "Day 9",
        title: "Trek to Syabrubesi",
        description:
          "Long final day of trekking through forest back to Syabrubesi.",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
      },
      {
        day: "Day 10",
        title: "Drive to Kathmandu — Departure",
        description:
          "Drive back to Kathmandu. Farewell dinner and transfer to airport.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
    ],
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
  },
  {
    title: "Yubra Peak",
    slug: "yubra-peak",
    imageSrc: "/pic2.jpeg",
    duration: "13 Days",
    altitude: "5,660 M",
    region: "Langtang, Nepal",
    price: "$1,100",
    description: `Yubra Peak (5,660m) is a hidden gem of the Langtang region — rarely climbed, strikingly beautiful, and offering an exceptional sense of solitude at altitude. The peak sits above the upper Langtang Valley with technical sections involving fixed ropes on the upper ridge. Climbers are rewarded with an uncrowded summit and intimate views of the Langtang Lirung massif, Dorje Lakpa, and the glaciated peaks along the Tibetan border. Yubra is ideal for experienced trekkers looking to step up to a more committing summit without the full logistics of a major expedition.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description: "Arrive in Kathmandu. Team briefing and gear check.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi",
        description: "Drive to Syabrubesi, the Langtang trailhead.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel",
        description: "Trek into the national park through subtropical forest.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village",
        description:
          "Ascend through open valley with panoramic Himalayan views.",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 5",
        title: "Trek to Kyanjin Gompa",
        description:
          "Arrive at Kyanjin Gompa. Visit the monastery and prepare for the high camp approach.",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 6",
        title: "Acclimatization Day",
        description:
          "Rest and acclimatize. Optional hike toward the upper valley to scout the Yubra approach.",
        altitude: "3,870m",
        duration: "Rest day",
      },
      {
        day: "Day 7",
        title: "Trek to Yubra Base Camp",
        description:
          "Move into the remote upper valley toward the Yubra Peak base camp. Spectacular and rarely visited terrain.",
        altitude: "4,900m",
        distance: "~8 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 8",
        title: "Establish High Camp",
        description:
          "Carry loads and establish high camp on the lower ridge. Rest and prepare systems for summit day.",
        altitude: "5,200m",
        distance: "~3 km",
        duration: "3–4 hrs",
      },
      {
        day: "Day 9",
        title: "Summit Day — Yubra Peak",
        description:
          "Early alpine start. Ascend the upper ridge with fixed rope sections. Summit at 5,660m with outstanding views of the Langtang massif and Tibet.",
        altitude: "5,660m",
        duration: "8–10 hrs",
      },
      {
        day: "Day 10",
        title: "Buffer Day",
        description: "Reserve day for weather or a second summit attempt.",
        altitude: "5,200m",
      },
      {
        day: "Day 11",
        title: "Descend to Kyanjin Gompa",
        description: "Full descent back to Kyanjin Gompa.",
        altitude: "3,870m",
        duration: "5–6 hrs",
      },
      {
        day: "Day 12",
        title: "Trek to Syabrubesi",
        description: "Long descent back through the valley to Syabrubesi.",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
      },
      {
        day: "Day 13",
        title: "Drive to Kathmandu — Farewell",
        description:
          "Return to Kathmandu. Farewell dinner and certificate presentation.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
    ],
    gallery: ["/pic2.jpeg", "/people_03.jpg", "/pic4.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Alpine + Fixed Rope", icon: "tent" },
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
  },
  {
    title: "Gangchempo Peak",
    slug: "gangchempo-peak",
    imageSrc: "/pic4.jpg",
    duration: "18 Days",
    altitude: "6,388 M",
    region: "Langtang, Nepal",
    price: "$2,200",
    description: `Gangchempo (6,388m), also known as Fluted Peak, is the most serious and committing mountaineering objective in the Langtang region. A true 6,000m peak requiring full expedition-style logistics, technical glacier travel, mixed climbing, and high-altitude endurance. The mountain's distinctive fluted ice ridges make it one of the most visually striking peaks in Nepal. Reserved for experienced mountaineers with prior 6,000m+ experience, Gangchempo delivers one of the most remote, challenging, and awe-inspiring summit experiences available in the Langtang Himalaya.`,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description:
          "Arrive in Kathmandu. Full expedition briefing, permit processing, and equipment check.",
        altitude: "1,400m",
      },
      {
        day: "Day 2",
        title: "Kathmandu Preparation Day",
        description:
          "Final gear procurement, team dinner, and permit finalization. Rest before the approach.",
        altitude: "1,400m",
      },
      {
        day: "Day 3",
        title: "Drive to Syabrubesi",
        description: "Drive to the Langtang trailhead.",
        altitude: "1,550m",
        distance: "~120 km",
        duration: "6–8 hrs drive",
      },
      {
        day: "Day 4",
        title: "Trek to Lama Hotel",
        description:
          "Enter Langtang National Park. Trek through gorge and dense forest.",
        altitude: "2,380m",
        distance: "~11 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 5",
        title: "Trek to Langtang Village",
        description:
          "Valley opens to sweeping views. Pass Ghoda Tabela and yak pastures.",
        altitude: "3,430m",
        distance: "~14 km",
        duration: "5–6 hrs",
      },
      {
        day: "Day 6",
        title: "Trek to Kyanjin Gompa",
        description:
          "Arrive at Kyanjin Gompa — expedition base for the next phase.",
        altitude: "3,870m",
        distance: "~6 km",
        duration: "2–3 hrs",
      },
      {
        day: "Day 7",
        title: "Acclimatization — Kyanjin Ri",
        description:
          "Hike to Kyanjin Ri (4,773m) for acclimatization. Essential before high camp.",
        altitude: "4,773m",
        duration: "4–5 hrs",
      },
      {
        day: "Day 8",
        title: "Trek to Gangchempo Base Camp",
        description:
          "Leave the main trail and head toward the remote Gangchempo base camp. Glacier views begin.",
        altitude: "4,800m",
        distance: "~9 km",
        duration: "6–7 hrs",
      },
      {
        day: "Day 9",
        title: "Base Camp Rest & Recon",
        description:
          "Rest at base camp. Guide team scouts the glacier approach and fixes initial ropes.",
        altitude: "4,800m",
      },
      {
        day: "Day 10",
        title: "Establish Camp 1",
        description:
          "Move up onto the glacier and establish Camp 1. Return to base camp to sleep.",
        altitude: "5,300m",
        duration: "5–6 hrs",
      },
      {
        day: "Day 11",
        title: "Rest & Acclimatization",
        description:
          "Rest day at base camp. Bodies adjust to altitude before the high camp push.",
        altitude: "4,800m",
      },
      {
        day: "Day 12",
        title: "Establish Camp 2 — High Camp",
        description:
          "Move through Camp 1 and push to high camp on the upper ridge. Technical mixed terrain.",
        altitude: "5,700m",
        duration: "6–8 hrs",
      },
      {
        day: "Day 13",
        title: "Summit Day — Gangchempo",
        description:
          "Pre-dawn summit push on the fluted ridgeline. Technical ice and mixed climbing to the summit at 6,388m. Extraordinary views across the entire Langtang and Jugal Himalaya.",
        altitude: "6,388m",
        duration: "10–12 hrs",
      },
      {
        day: "Day 14",
        title: "Buffer Day",
        description: "Reserve day for weather or second summit attempt.",
        altitude: "5,700m",
      },
      {
        day: "Day 15",
        title: "Full Descent to Base Camp",
        description:
          "Descend all camps back to base camp. Celebrate with the team.",
        altitude: "4,800m",
        duration: "6–7 hrs",
      },
      {
        day: "Day 16",
        title: "Trek Back to Kyanjin Gompa",
        description: "Return trek to Kyanjin Gompa through the upper valley.",
        altitude: "3,870m",
        duration: "4–5 hrs",
      },
      {
        day: "Day 17",
        title: "Trek to Syabrubesi",
        description: "Long descent through the valley back to Syabrubesi.",
        altitude: "1,550m",
        distance: "~25 km",
        duration: "7–8 hrs",
      },
      {
        day: "Day 18",
        title: "Drive to Kathmandu — Farewell",
        description:
          "Final drive to Kathmandu. Summit certificate and farewell dinner.",
        altitude: "1,400m",
        duration: "6–8 hrs drive",
      },
    ],
    gallery: ["/pic4.jpg", "/pic2.jpeg", "/people_03.jpg"],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Trek Style", val: "Full Expedition", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      {
        label: "Permits",
        val: "TIMS + Langtang NP + Climbing",
        icon: "fileText",
      },
      { label: "Physical Level", val: "Expert — Technical", icon: "activity" },
    ],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((e) => e.slug === slug);
}

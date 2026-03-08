export type Expedition = {
  title: string;
  slug: string;
  imageSrc: string;
  duration: string;
  altitude: string;
  region?: string;
  price?: string;
  description: string;
  itinerary: { day: string; description: string }[];
  gallery: string[];
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
    description: `Yala peak climbing is the practical climbing peak in the Langtang region, the north of Kathmandu. It is combined with wonderful Langtang Valley trekking. Yala Peak Climbing is a picturesque and superb trip. It provides wonderful views of the Himalayan ranges of the Manaslu range, Langtang Lirung, Dorje Lakpa, Naya Kang, Ganesh Himal range, Shishapangma, and Gangchempo (6388m). Yala peak is situated closer to the Tibetan border following the ridge of high mountains. Before starting expedition sports, climbers prefer to go to Kyanjin Monastery (3900m), a popular Buddhist pilgrimage spot to adapt to the high climate. The hike around the surrounding geography into the high part of Langtang is fruitful to acclimatize at the high altitude. The camp lies on the Yak grazing meadow at Yala Kharka (4600m). The Yala peak climbing guide informs all about the technical and challenging aspects of the climbing along with the use of climbing gears.`,
    itinerary: [
      {
        day: "Day 1",
        description: "Arrive Kathmandu, team briefing and gear check",
      },
      {
        day: "Day 2",
        description: "Drive from Kathmandu to Syabrubesi (1,550m)",
      },
      {
        day: "Day 3",
        description: "Trek from Syabrubesi to Lama Hotel (2,380m)",
      },
      { day: "Day 4", description: "Trek to Langtang Village (3,430m)" },
      { day: "Day 5", description: "Trek to Kyanjin Gompa (3,870m)" },
      {
        day: "Day 6",
        description: "Acclimatization day at Kyanjin Gompa, hike to Kyanjin Ri",
      },
      { day: "Day 7", description: "Trek to Yala Peak Base Camp (5,000m)" },
      {
        day: "Day 8",
        description: "Summit Yala Peak (5,520m) and return to base camp",
      },
      { day: "Day 9", description: "Buffer day for weather or rest" },
      { day: "Day 10", description: "Trek back to Langtang Village" },
      { day: "Day 11", description: "Trek to Syabrubesi" },
      {
        day: "Day 12",
        description: "Drive back to Kathmandu, farewell dinner",
      },
    ],
    gallery: ["/pic2.jpeg", "/people_03.jpg", "/pic4.jpg"],
  },
  {
    title: "Tserko Peak",
    slug: "tserko-peak",
    imageSrc: "/people_03.jpg",
    duration: "14 Days",
    altitude: "4,984 M",
    region: "Langtang, Nepal",
    price: "$1,000",
    description:
      "Tserko Ri is a stunning viewpoint and trekking peak rising above Kyanjin Gompa in the Langtang Valley. The ascent rewards climbers with breathtaking 360-degree views of the Langtang Lirung, Ganesh Himal, and Tibetan plateau.",
    itinerary: [
      { day: "Day 1", description: "Arrive Kathmandu, team briefing" },
      { day: "Day 2", description: "Drive to Syabrubesi (1,550m)" },
      { day: "Day 3", description: "Trek to Lama Hotel (2,380m)" },
      { day: "Day 4", description: "Trek to Langtang Village (3,430m)" },
      { day: "Day 5", description: "Trek to Kyanjin Gompa (3,870m)" },
      {
        day: "Day 6",
        description: "Acclimatization hike around Kyanjin Gompa",
      },
      { day: "Day 7", description: "Trek to Tserko Ri Base Camp (4,200m)" },
      {
        day: "Day 8",
        description: "Summit Tserko Ri (4,984m) and descend to Kyanjin",
      },
      { day: "Day 9", description: "Rest and explore Kyanjin Monastery" },
      { day: "Day 10", description: "Trek back to Langtang Village" },
      { day: "Day 11", description: "Trek to Lama Hotel" },
      { day: "Day 12", description: "Trek to Syabrubesi" },
      { day: "Day 13", description: "Drive to Kathmandu" },
      { day: "Day 14", description: "Departure day" },
    ],
    gallery: ["/people_03.jpg", "/pic2.jpeg", "/people_04.jpg"],
  },
  {
    title: "Naya Kanga",
    slug: "naya-kanga",
    imageSrc: "/people_04.jpg",
    duration: "16 Days",
    altitude: "5,846 M",
    region: "Langtang, Nepal",
    price: "$1,800",
    description:
      "Naya Kanga, also known as Ganja La Chuli, is a challenging trekking peak in the Langtang region. It demands basic mountaineering skills and rewards climbers with spectacular views of the Langtang range and the Tibetan plateau beyond.",
    itinerary: [
      { day: "Day 1", description: "Arrive Kathmandu, briefing and permits" },
      { day: "Day 2", description: "Drive to Syabrubesi" },
      { day: "Day 3", description: "Trek to Lama Hotel" },
      { day: "Day 4", description: "Trek to Langtang Village" },
      { day: "Day 5", description: "Trek to Kyanjin Gompa" },
      { day: "Day 6", description: "Acclimatization day, hike to Kyanjin Ri" },
      {
        day: "Day 7",
        description: "Trek toward Naya Kanga Base Camp (4,900m)",
      },
      { day: "Day 8", description: "Establish high camp (5,400m)" },
      {
        day: "Day 9",
        description: "Summit Naya Kanga (5,846m) and return to base camp",
      },
      { day: "Day 10", description: "Buffer day for weather" },
      { day: "Day 11", description: "Descend to Kyanjin Gompa" },
      { day: "Day 12", description: "Trek to Langtang Village" },
      { day: "Day 13", description: "Trek to Lama Hotel" },
      { day: "Day 14", description: "Trek to Syabrubesi" },
      { day: "Day 15", description: "Drive to Kathmandu" },
      { day: "Day 16", description: "Departure day" },
    ],
    gallery: ["/people_04.jpg", "/pic2.jpeg", "/pic4.jpg"],
  },
  {
    title: "Scout Peak",
    slug: "scout-peak",
    imageSrc: "/people_01.jpg",
    duration: "10 Days",
    altitude: "5,650 M",
    region: "Langtang, Nepal",
    price: "$1,400",
    description:
      "Scout Peak is a lesser-known gem in the Langtang region, offering a raw and adventurous climbing experience away from the crowds. The peak provides incredible views of the surrounding Himalayan giants and a true sense of exploration.",
    itinerary: [
      { day: "Day 1", description: "Arrive Kathmandu, team briefing" },
      { day: "Day 2", description: "Drive to Syabrubesi" },
      { day: "Day 3", description: "Trek to Lama Hotel" },
      { day: "Day 4", description: "Trek to Langtang Village" },
      { day: "Day 5", description: "Trek to Scout Peak Base Camp (4,800m)" },
      { day: "Day 6", description: "Acclimatization and route preparation" },
      {
        day: "Day 7",
        description: "Summit Scout Peak (5,650m) and return to base camp",
      },
      {
        day: "Day 8",
        description: "Buffer day or descend to Langtang Village",
      },
      { day: "Day 9", description: "Trek to Syabrubesi" },
      { day: "Day 10", description: "Drive to Kathmandu, departure" },
    ],
    gallery: ["/people_01.jpg", "/people_03.jpg", "/pic2.jpeg"],
  },
  {
    title: "Gangchempo Peak",
    slug: "gangchempo-peak",
    imageSrc: "/pic4.jpg",
    duration: "18 Days",
    altitude: "6,387 M",
    region: "Langtang, Nepal",
    price: "$2,500",
    description:
      "Gangchempo, also known as Crystal Mountain, is the most technically demanding peak in the Langtang region. Standing at 6,387m, it requires solid mountaineering experience and offers one of the most rewarding summit experiences in Nepal.",
    itinerary: [
      { day: "Day 1", description: "Arrive Kathmandu, permits and briefing" },
      { day: "Day 2", description: "Drive to Syabrubesi" },
      { day: "Day 3", description: "Trek to Lama Hotel" },
      { day: "Day 4", description: "Trek to Langtang Village" },
      { day: "Day 5", description: "Trek to Kyanjin Gompa" },
      { day: "Day 6", description: "Acclimatization day" },
      { day: "Day 7", description: "Trek to Gangchempo Base Camp (5,000m)" },
      { day: "Day 8", description: "Establish Camp 1 (5,500m)" },
      { day: "Day 9", description: "Establish Camp 2 (5,900m)" },
      { day: "Day 10", description: "Summit push — Gangchempo (6,387m)" },
      { day: "Day 11", description: "Buffer day for weather" },
      { day: "Day 12", description: "Descend to base camp" },
      { day: "Day 13", description: "Trek to Kyanjin Gompa" },
      { day: "Day 14", description: "Trek to Langtang Village" },
      { day: "Day 15", description: "Trek to Lama Hotel" },
      { day: "Day 16", description: "Trek to Syabrubesi" },
      { day: "Day 17", description: "Drive to Kathmandu" },
      { day: "Day 18", description: "Departure day" },
    ],
    gallery: ["/pic4.jpg", "/people_01.jpg", "/people_04.jpg"],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((e) => e.slug === slug);
}

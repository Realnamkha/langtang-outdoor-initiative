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
    duration: "60 days",
    altitude: "6000 M",
    price: "$1200",
    description: "A stunning introductory peak in the Langtang region...",
    itinerary: [
      { day: "Day 1", description: "Arrive Kathmandu, team briefing" },
      { day: "Day 2", description: "Drive to Syabrubesi" },
      // ...
    ],
    gallery: ["/pic2.jpeg", "/people_03.jpg", "/pic4.jpg"],
  },
];

export function getExpeditionBySlug(slug: string) {
  return expeditions.find((e) => e.slug === slug);
}

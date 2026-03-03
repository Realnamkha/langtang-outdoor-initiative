import { ExpeditionCard } from "@/components/ui/Expediation_Card";

type Expedition = {
  title: string;
  imageSrc: string;
  date?: string;
  duration: string;
  altitude: string;
  activity?: string;
  region?: string;
  link: string;
};
const expeditions: Expedition[] = [
  {
    title: "Yala Peak 2026",
    imageSrc: "/pic2.jpeg",
    duration: "60 days",
    altitude: "6000 M",
    link: "https://14peaksexpedition.com/packages/mt-k2-expedition",
  },
  {
    title: "Mt. K2 Expedition Summer 2026",
    imageSrc: "/people_03.jpg",
    duration: "60 days",
    altitude: "8611 M",
    link: "https://14peaksexpedition.com/packages/mt-k2-expedition",
  },
  {
    title: "Mt. K2 Expedition Summer 2026",
    imageSrc: "/people_04.jpg",
    duration: "60 days",
    altitude: "8611 M",
    link: "https://14peaksexpedition.com/packages/mt-k2-expedition",
  },
  {
    title: "Mt. K2 Expedition Summer 2026",
    imageSrc: "/people_01.jpg",
    duration: "60 days",
    altitude: "8611 M",
    link: "https://14peaksexpedition.com/packages/mt-k2-expedition",
  },
  {
    title: "Mt. K2 Expedition Summer 2026",
    imageSrc: "/pic4.jpg",
    duration: "60 days",
    altitude: "8611 M",
    link: "https://14peaksexpedition.com/packages/mt-k2-expedition",
  },
];

// Main component
export default function Expediations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Expediations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {expeditions.map((expedition, index) => (
          <ExpeditionCard key={index} {...expedition} />
        ))}
      </div>
    </div>
  );
}

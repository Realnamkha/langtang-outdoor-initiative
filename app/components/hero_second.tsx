"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExpeditionCard } from "@/components/ui/Expediation_Card";

type Expedition = {
  title?: string;
  imageSrc: string;
  date?: string;
  duration?: string;
  altitude?: string;
  activity?: string;
  region?: string;
  link: string;
};

const expeditions: Expedition[] = [
  {
    imageSrc: "/pic2.jpeg",
    link: "Trekking",
  },
  {
    imageSrc: "/people_03.jpg",
    link: "Bouldering",
  },
  {
    imageSrc: "/people_04.jpg",
    link: "Expediation",
  },
  {
    imageSrc: "/people_01.jpg",
    link: "Adventure",
  },
  {
    imageSrc: "/pic4.jpg",
    link: "Cultural Tour",
  },
];

export default function Hero_Second() {
  return (
    <section className="relative min-h-screen mt-4 w-full flex flex-col justify-center px-8 md:px-16">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-center text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Popular Activities at Langtang Outdoor Initiative
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Explore the breathtaking landscapes of Langtang. Enjoy hiking,
          camping, and wildlife spotting in one of Nepal’s most beautiful
          regions.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full flex justify-center mt-10 p-4">
        <div className="w-full max-w-7xl relative">
          <Carousel>
            <CarouselContent className="flex overflow-visible">
              {expeditions.map((expedition, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 shrink-0"
                >
                  <ExpeditionCard {...expedition} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-md z-20">
              &#8592;
            </CarouselPrevious>
            <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-md z-20">
              &#8594;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

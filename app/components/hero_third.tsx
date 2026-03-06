"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SimpleCard } from "@/components/ui/Activity_Card";

type Activity = {
  title: string;
  imageSrc: string;
  link: string;
};

const activities: Activity[] = [
  { title: "Trekking", imageSrc: "/pic2.jpeg", link: "/activities/trekking" },
  {
    title: "Bouldering",
    imageSrc: "/people_03.jpg",
    link: "/activities/bouldering",
  },
  {
    title: "Expedition",
    imageSrc: "/people_04.jpg",
    link: "/activities/expedition",
  },
  {
    title: "Adventure",
    imageSrc: "/people_01.jpg",
    link: "/activities/adventure",
  },
  {
    title: "Cultural Tour",
    imageSrc: "/pic4.jpg",
    link: "/activities/cultural-tour",
  },
];

export default function Hero_Third() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="relative w-full flex flex-col items-center bg-white px-6 md:px-16 py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#01baf0] opacity-[0.05] blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.05] blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="w-full max-w-7xl relative z-10 flex flex-col items-center gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-5 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight leading-[1.1]">
            Popular Activities at{" "}
            <span className="text-[#01baf0]">Langtang Outdoor</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-5">
              {activities.map((activity, index) => (
                <CarouselItem
                  key={index}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <SimpleCard
                      title={activity.title}
                      imageSrc={activity.imageSrc}
                      link={activity.link}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-[#01baf0] text-[#01baf0] hover:text-white border border-[#01baf0]/25 shadow-[0_4px_20px_rgba(1,186,240,0.12)] hover:shadow-[0_4px_24px_rgba(1,186,240,0.35)] rounded-full z-20 transition-all duration-200" />
            <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white hover:bg-[#01baf0] text-[#01baf0] hover:text-white border border-[#01baf0]/25 shadow-[0_4px_20px_rgba(1,186,240,0.12)] hover:shadow-[0_4px_24px_rgba(1,186,240,0.35)] rounded-full z-20 transition-all duration-200" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

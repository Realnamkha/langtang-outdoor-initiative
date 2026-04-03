"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SimpleCard } from "@/components/ui/Activity_Card";

type Activity = {
  title: string;
  imageSrc: string;
  link: string;
};

const activities: Activity[] = [
  {
    title: "Cultural Tours",
    imageSrc: "/buddhist_03.jpg",
    link: "/cultural-tours",
  },
  {
    title: "Bouldering",
    imageSrc: "/bouldering_06.jpg",
    link: "/adventures/boulder-trek",
  },
  {
    title: "Expedition",
    imageSrc: "/expe_03.jpg",
    link: "/expeditions",
  },
];

export default function Hero_Third() {
  return (
    <section className="relative w-full flex flex-col items-center bg-white px-6 md:px-16 overflow-hidden">
      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center gap-14 py-12">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="font-extrabold text-[#0D1B2A] tracking-tight leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-widest mb-2">
              Unique Activities at{" "}
            </span>
            <span className="block text-4xl md:text-5xl">
              <span className="text-primary"> Langtang</span> Outdoor Initiative
            </span>
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
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
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { MyCard } from "@/components/ui/My_Card";
import { expeditions } from "@/lib/expedition";
import { motion } from "framer-motion";

export default function Expeditions() {
  return (
    <section className="relative w-full bg-[#F8FBFF] px-6 md:px-16 py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#01baf0]" />
            <span className="text-[#01baf0] text-xs font-semibold uppercase tracking-[0.15em]">
              Explore With Us
            </span>
            <div className="h-px w-8 bg-[#01baf0]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight leading-[1.1] max-w-2xl">
            Our <span className="text-[#01baf0]">Expeditions</span>
          </h2>

          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Hand-crafted journeys into the heart of the Himalayas — from glacial
            valleys to towering summits.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expeditions.map((expedition, index) => (
            <motion.div
              key={expedition.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <MyCard
                {...expedition}
                link={`/expeditions/${expedition.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

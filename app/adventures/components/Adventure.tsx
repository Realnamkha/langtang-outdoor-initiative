"use client";
import { MyCard } from "@/components/ui/My_Card";
import { adventures } from "@/lib/adventure";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Adventures() {
  return (
    <section className="relative w-full bg-[#F8FBFF] px-6 md:px-16 py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2] tracking-tight leading-[1.1] max-w-2xl">
              Our <span className="text-[#01baf0]">Adventures</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl leading-relaxed">
              Hand-crafted journeys into the heart of the Himalayas — from
              glacial valleys to towering summits.
            </p>
          </motion.div>
          <Image
            src="/2.png"
            alt="Lotus"
            priority
            height={150}
            width={100}
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <MyCard {...adventure} link={`/adventures/${adventure.slug}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

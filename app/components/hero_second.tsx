"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero_Second() {
  return (
    <section className="relative w-full flex flex-col justify-center px-6 md:px-16 mt-12 mb-12 pt-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          className="w-full md:w-[48%] shrink-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(1,186,240,0.12)]">
            <Image
              src="/pic3.jpeg"
              alt="Langtang Mountain"
              fill
              priority
              className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-[#01baf0] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
              Langtang
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-[52%] flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#01baf0] text-xs font-semibold uppercase tracking-[0.15em]">
              Expedition & Trekking Company
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-[#0D1B2A] tracking-tight">
            Langtang <span className="text-[#01baf0]">Outdoor</span> Initiative
          </h2>
          <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.85]">
            We are a Nepal-based expedition and trekking company dedicated to
            taking you beyond the ordinary. From the glacial valleys of Langtang
            to the summit ridges of the Himalayas, we craft journeys that
            connect you with ancient cultures, raw wilderness, and your own
            inner strength.
          </p>

          <Button
            variant="outline"
            className="self-start rounded-full px-7 py-5 text-sm font-semibold border-2 border-[#01baf0]/60 text-[#01baf0] hover:bg-[#01baf0]/8 hover:text-[#01baf0] hover:-translate-y-0.5 transition-all"
          >
            About Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

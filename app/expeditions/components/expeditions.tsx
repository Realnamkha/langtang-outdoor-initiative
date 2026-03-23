"use client";

import { MyCard } from "@/components/ui/My_Card";
import { expeditions } from "@/lib/expedition";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Expeditions() {
  return (
    <section className="relative w-full bg-[#F8FBFF] px-6 md:px-16 py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-14">
          {/* Title */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight leading-[1.1] max-w-2xl">
              Our <span className="text-[#01baf0]">Expeditions</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl leading-relaxed">
              Hand-crafted journeys into the heart of the Himalayas — from
              glacial valleys to towering summits.
            </p>
          </motion.div>

          {/* Symbol pushed to end */}
          <Image
            src="/1.png"
            alt="Lotus"
            priority
            height={150}
            width={100}
            className="object-contain"
          />
        </div>
        {/* Header */}

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
      {/* CTA Banner */}
      <div className="mt-14 md:mt-20">
        <motion.div
          className="max-w-8xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mountain image clearly visible */}
          <div className="absolute inset-0">
            <Image
              src="/footer.jpg"
              alt=""
              fill
              className="object-cover object-[center_50%]"
              aria-hidden="true"
            />
            {/* Light tint — mountain shows through */}
            <div className="absolute inset-0 bg-[#01baf0]/30" />
          </div>

          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 py-14 md:py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                For Further Expedition
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Whether you are a first-time trekker or a seasoned mountaineer,
                we have an experience crafted for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full border-2 border-[#01baf0]/60 text-white font-semibold text-sm tracking-wide hover:bg-white/15 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

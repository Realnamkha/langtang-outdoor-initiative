"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import EventCardImage from "./Glass_Card";
import { culturalTours } from "@/lib/culture";

export default function Cultural() {
  return (
    <>
      <section className="relative w-full px-6 md:px-16 py-24 overflow-hidden">
        {/* ── Full-bleed background photo ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/trekking_01.jpg')" }}
        />
        {/* Dark overlay so glass cards pop */}
        <div className="absolute inset-0 bg-[#050f1e]/72" />
        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />
        {/* Primary color atmosphere glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.07] blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.06] blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ── Header ── */}
          <div className="flex justify-between items-end mb-14">
            {/* Left */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-4xl md:text-[52px] font-extrabold text-white tracking-tight leading-[1.08]">
                Cultural{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#01baf0]">Tours</span>
                </span>
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed">
                Immersive journeys into the living traditions, sacred
                landscapes, and ancient ways of life across the Himalayas.
              </p>
            </motion.div>

            <Image
              src="/6.png"
              alt="Lotus"
              priority
              height={150}
              width={100}
              className="object-contain"
            />
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7">
            {culturalTours.map((tour, index) => (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.12 }}
              >
                <EventCardImage
                  title={tour.title}
                  imageSrc={tour.imageSrc}
                  duration={tour.duration}
                  region={tour.region}
                  link={`/cultural-tours/${tour.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

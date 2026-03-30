"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EventCardImage from "./Glass_Card";
import { culturalTours } from "@/lib/culture";

const stats = [
  { value: "15+", label: "Cultural Routes" },
  { value: "3,800m", label: "Avg. Altitude" },
  { value: "100%", label: "Local Guides" },
  { value: "10 yrs", label: "Experience" },
];

export default function Cultural() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MAIN SECTION — dark photo background
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 md:px-16 py-24 overflow-hidden">
        {/* ── Full-bleed background photo ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/landscape_02.jpg')" }}
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            {/* Left */}
            <motion.div
              className="flex flex-col gap-3 max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-8 h-[2.5px] rounded-full bg-[#01baf0]" />
                <span className="text-[11px] font-bold tracking-[3.5px] uppercase text-[#01baf0]">
                  Explore Nepal
                </span>
              </div>

              <h2 className="text-4xl md:text-[52px] font-extrabold text-white tracking-tight leading-[1.08]">
                Cultural{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#01baf0]">Tours</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[7px] bg-[#01baf0]/20 rounded-full" />
                </span>
              </h2>

              <p className="text-white/55 text-[15px] leading-relaxed">
                Immersive journeys into the living traditions, sacred
                landscapes, and ancient ways of life across the Himalayas.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              className="flex items-center gap-5 shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/2.png"
                alt="Lotus"
                priority
                height={110}
                width={75}
                className="object-contain opacity-80 select-none drop-shadow-lg"
              />
              <Link
                href="/cultural-tours"
                className="group hidden md:flex items-center gap-2.5 bg-white/10 hover:bg-[#01baf0] border border-white/20 hover:border-[#01baf0] backdrop-blur-sm text-white text-[13px] font-semibold px-5 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                View all tours
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.4}
                />
              </Link>
            </motion.div>
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

          {/* ── Mobile CTA ── */}
          <motion.div
            className="flex md:hidden justify-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/cultural-tours"
              className="group flex items-center gap-2.5 bg-white/10 hover:bg-[#01baf0] border border-white/20 backdrop-blur-sm text-white text-[13.5px] font-semibold px-6 py-3.5 rounded-full transition-all duration-300"
            >
              View all tours
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                strokeWidth={2.2}
              />
            </Link>
          </motion.div>

          {/* ── Stats strip — glass panel over the same photo ── */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 text-center px-6 py-8 bg-white/[0.05] hover:bg-white/[0.09] transition-colors duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="text-[40px] font-extrabold text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#01baf0]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

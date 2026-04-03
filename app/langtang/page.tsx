"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";
import Hero from "./components/Hero";

const features = [
  {
    img: "/guide_02.JPG",
    title: "Culture",
    desc: "Sacred Himalayan valley where ancient Tibetan traditions still live—rare, authentic, and fading.",
  },
  {
    img: "/guide_03.jpg",
    title: "Landscape",
    desc: "Untouched Himalayan beauty—glaciers, forests, and peaks in one breathtaking valley.",
  },
  {
    img: "/guides.jpg",
    title: "Adventure",
    desc: "From trekking to climbing and bouldering, Langtang is Nepal’s rising adventure playground.",
  },
];

export default function LangtangIntro() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* ── Intro Section ── */}

      {/* ── Highlights Section ── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3">
              Why <span className="bg-clip-text text-primary">Langtang?</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              A trek unlike any other — raw nature, living culture, and
              Himalayan silence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                imgClass={index === 2 ? "object-[center_70%]" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <div className="mt-14 md:m-20">
        <motion.div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mountain image clearly visible */}
          <div className="absolute inset-0">
            <Image
              src="/langtang.jpg"
              alt=""
              fill
              className="object-cover object-[center_50%]"
              aria-hidden="true"
            />
            {/* Light tint — mountain shows through */}
            <div className="absolute inset-0 bg-black/40" />
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

          <div className="relative z-10 py-24 md:py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Whether you are a first-time trekker or a seasoned mountaineer,
                we have an experience crafted for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/expeditions"
                className="px-7 py-3.5 rounded-full bg-white text-[#0191c8] font-bold text-sm tracking-wide hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg whitespace-nowrap"
              >
                View Expeditions
              </Link>
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
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";
import Hero from "./components/Hero";

const features = [
  {
    img: "/guide_02.jpg",
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
      <div className="px-4 sm:px-6 md:px-10 my-10 md:my-16">
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/langtang.jpg"
              alt=""
              fill
              className="object-cover object-center md:object-[center_50%] scale-110 md:scale-105"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#060d14]/80 via-[#060d14]/40 to-[#060d14]/70" />
          </div>

          {/* Subtle dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] md:opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-10 sm:py-12 md:py-16 px-5 sm:px-8 md:px-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10 text-center md:text-left">
            {/* Text */}
            <div className="flex flex-col gap-3 md:gap-4 max-w-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug md:leading-tight">
                Ready to Start{" "}
                <span className="text-primary drop-shadow-[0_0_8px_rgba(1,186,240,0.5)]">
                  Your Journey
                </span>
              </h2>

              <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                Whether you're a first-time trekker or a seasoned mountaineer,
                we craft unforgettable experiences in the Himalayas.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/adventures/langtang-trek"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm tracking-wide 
          active:scale-[0.98] hover:bg-primary/90 md:hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(1,186,240,0.4)]"
              >
                View Langtang Trek
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-primary/50 text-primary font-semibold text-sm tracking-wide 
          active:scale-[0.98] hover:bg-primary/10 md:hover:-translate-y-0.5 transition-all"
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

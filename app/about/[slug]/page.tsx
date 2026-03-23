// app/team/thupten-lama/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";

const BRAND = "linear-gradient(90deg, #01baf0, #0191c8)";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function ThuptenLamaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar transparent={false} />

      <section className="flex-1 flex items-center py-16 px-6">
        <motion.div
          className="max-w-5xl mx-auto w-full"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* ── Back ── */}
          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#01baf0] transition-colors mb-12 group"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7H3M3 7L7 3M3 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="uppercase tracking-widest font-semibold">
                Back to Team
              </span>
            </Link>
          </motion.div>

          {/* ── Hero Row: Avatar + Name + Role ── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-end gap-6 mb-10 pb-10 border-b border-gray-100"
          >
            {/* Avatar */}
            <div className="relative shrink-0 w-40 h-40 rounded-2xl overflow-hidden ring-2 ring-[#01baf0]/20">
              <Image
                src="/pic3.jpeg"
                alt="Thupten Lama"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name block */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                  style={{ background: BRAND }}
                >
                  Founder
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tight leading-none">
                Thupten{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: BRAND }}
                >
                  Lama
                </span>
              </h1>
              <p className="text-gray-400 text-sm font-medium mt-2">
                Head Guide · Langtang Outdoor Initiative · Kathmandu, Nepal
              </p>
            </div>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Left col: Bio ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* About */}
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Born in the Langtang Valley, Thupten grew up navigating high
                  passes and rhododendron forests long before he became a
                  professional guide. His connection to these mountains is not a
                  career — it is a calling rooted in culture, community, and two
                  decades of expeditions across Nepal's most sacred terrain.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mt-4">
                  After training with the Nepal Mountaineering Association, he
                  founded Langtang Outdoor Initiative with one purpose — to
                  offer experiences as authentic as the mountains themselves,
                  while giving back to the communities that call them home.
                </p>
              </div>

              {/* Specialties */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "High Altitude Trekking",
                    "Cultural Immersion",
                    "Wilderness First Aid",
                    "Langtang Region",
                    "Expedition Planning",
                    "Local Languages",
                    "Community Tourism",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f0fbff] text-[#0191c8] border border-[#01baf0]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
                  style={{ background: BRAND }}
                >
                  Trek with Thupten
                </Link>
              </div>
            </motion.div>

            {/* ── Right col: Details sidebar ── */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              {/* Languages */}
              <div className="bg-[#f8f7f4] rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Languages
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { lang: "Nepali", level: "Native" },
                    { lang: "English", level: "Fluent" },
                    { lang: "French", level: "Conversational" },
                  ].map((l) => (
                    <div
                      key={l.lang}
                      className="flex items-center justify-between"
                    >
                      <p className="text-sm text-[#0a0a0a] font-medium">
                        {l.lang}
                      </p>
                      <p className="text-xs text-gray-400 font-medium">
                        {l.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-[#f8f7f4] rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Certifications
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    "NMA Certified Guide",
                    "Wilderness First Aid",
                    "High Altitude Safety",
                    "Leave No Trace",
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: BRAND }}
                      />
                      <p className="text-sm text-[#0a0a0a] font-medium">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Based in */}
              <div className="bg-[#f8f7f4] rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                  Based In
                </p>
                <p className="text-sm text-[#0a0a0a] font-medium">
                  Kathmandu, Nepal
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Originally from Langtang Valley
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

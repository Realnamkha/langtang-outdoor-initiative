"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";
import LogoStrip from "@/components/ui/LogoStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const BRAND = "linear-gradient(135deg, #01baf0, #0191c8)";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar transparent={false} />

      {/* ── Our Story ── */}
      <section className="relative pt-24 px-6 mt-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.05] blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#01baf0]/10 -z-10" />
            <div className="relative w-full h-[480px] sm:h-[560px] rounded-3xl overflow-hidden">
              <Image
                src="/bouldering_03.jpeg"
                alt="Our Story"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#01baf0] rounded-full" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Our Story
              </span>
            </div>

            <p className="text-gray-500 text-[15px] leading-[1.9]">
              Langtang Outdoor Initiative was founded by a group of passionate
              local guides and trekkers who grew up in the shadow of the
              Himalayas. After years of leading expeditions across Nepal, we
              came together with one shared vision — to offer authentic,
              responsible, and life-changing mountain experiences.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9]">
              Rooted in the Langtang region, we carry deep respect for the land,
              the people, and the traditions that have shaped this landscape for
              centuries. Every trek we organise gives back to local communities
              and supports sustainable mountain tourism.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.9]">
              Rooted in the Langtang region, we carry deep respect for the land,
              the people, and the traditions that have shaped this landscape for
              centuries. Every trek we organise gives back to local communities
              and supports sustainable mountain tourism.
            </p>
          </motion.div>
        </div>
        <div className="mt-4">
          <LogoStrip />
        </div>
      </section>
      <section className="relative bg-[#f8f7f4] py-28 px-6 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#01baf0] opacity-[0.04] blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight mb-4">
                What we{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: BRAND }}
                >
                  Stand For
                </span>
              </h2>
              <p className="text-gray-400 text-[15px] max-w-sm leading-relaxed">
                Local experts, seasoned guides, and mountain lovers — united by
                a passion for the Himalayas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "/nature_01.jpg",
                title: "Sustainability",
                desc: "We operate with a minimal footprint, following Leave No Trace principles and partnering with local conservation efforts in every region we trek.",
              },
              {
                img: "/people_02.jpg",
                title: "Community First",
                desc: "A portion of every booking directly supports Tamang village schools, trail maintenance, and post-earthquake reconstruction in the Langtang region.",
              },
              {
                img: "/expe_04.jpg",
                title: "Safety Always",
                desc: "All our guides are certified in wilderness first aid. We carry emergency equipment on every trek and maintain strict altitude sickness protocols.",
              },
            ].map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className=" py-6 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight mb-4">
              Meet the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: BRAND }}
              >
                Team
              </span>
            </h2>
            <p className="text-gray-400 text-[15px] max-w-sm leading-relaxed">
              Local experts, seasoned guides, and mountain lovers — united by a
              passion for the Himalayas.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                name: "Thupten Lama",
                role: "Founder",
                img: "/pic3.jpeg",
                founder: true,
                slug: "thupten-lama",
              },
              {
                name: "Mr X",
                role: "Senior Trek Leader",
                img: "/pic3.jpeg",
                slug: "mr-x",
              },
              {
                name: "Mr Z",
                role: "Logistics Coordinator",
                img: "/pic3.jpeg",
                slug: "mr-z",
              },
            ].map((member) => (
              <Link
                key={member.name}
                href={`/about/${member.slug}`}
                className="group relative rounded-3xl overflow-hidden cursor-pointer block"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover border ring */}
                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-[#01baf0]/40 transition-all duration-300" />

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {member.founder && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-[#01baf0] px-2.5 py-1 rounded-full mb-2.5">
                      Founder
                    </span>
                  )}
                  <p className="font-black text-white text-base tracking-tight leading-tight">
                    {member.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[11px] text-[#01baf0] font-semibold uppercase tracking-widest">
                      {member.role}
                    </p>
                    <span className="text-[11px] text-white/40 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="mt-14 p-10 md:mt-20">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative">
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
        </div>
      </div>
    </main>
  );
}

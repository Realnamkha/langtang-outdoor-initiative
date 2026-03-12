"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar transparent={false} />
      {/* ── Our Story ── */}
      <section className="py-24 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Image
              src="/pic3.jpeg"
              alt="Our Story"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#01baf0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight">
              Born from the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Mountains
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Langtang Outdoor Initiative was founded by a group of passionate
              local guides and trekkers who grew up in the shadow of the
              Himalayas. After years of leading expeditions across Nepal, we
              came together with one shared vision — to offer authentic,
              responsible, and life-changing mountain experiences.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Rooted in the Langtang region, we carry deep respect for the land,
              the people, and the traditions that have shaped this landscape for
              centuries. Every trek we organise gives back to local communities
              and supports sustainable mountain tourism.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Happy Trekkers" },
                { value: "20+", label: "Routes Covered" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-2xl font-black text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #01baf0, #0191c8)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#f8f7f4] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3">
              What We{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Stand For
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Our values guide every decision we make — from route planning to
              how we treat the communities we pass through.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                custom={i}
              >
                <FeatureCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3">
              Meet the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Team
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Local experts, seasoned guides, and mountain lovers — all united
              by a passion for the Himalayas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Head Guide & Founder",
                img: "/pic3.jpeg",
              },
              {
                name: "John Doe",
                role: "Senior Trek Leader",
                img: "/pic3.jpeg",
              },
              {
                name: "John Doe",
                role: "Cultural Guide",
                img: "/pic3.jpeg",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                className="bg-[#f8f7f4] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-bold text-[#0a0a0a] text-base">
                    {member.name}
                  </p>
                  <p className="text-xs text-[#01baf0] font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f8f7f4] py-24 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center flex flex-col gap-6"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
            Ready to Start Your{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Journey?
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Whether you are a first-time trekker or a seasoned mountaineer, we
            have an experience crafted for you.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link
              href="/expeditions"
              className="px-7 py-3 rounded-lg text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg, #01baf0, #0191c8)" }}
            >
              View Expeditions
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0191c8] hover:text-[#01baf0] underline underline-offset-4 transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

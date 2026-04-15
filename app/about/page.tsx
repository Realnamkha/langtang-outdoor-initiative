"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";

const BRAND = "linear-gradient(135deg, #01baf0, #0191c8)";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar transparent={false} />

      {/* ── Our Story ── */}
      {/* ── Our Story ── */}
      <section className="relative pt-20 pb-20 px-6 mt-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.05] blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
          {/* Image */}
          <div className="relative w-full rounded-3xl overflow-hidden h-[260px] sm:h-[380px] lg:h-[520px]">
            <Image
              src="/logo_final.jpg"
              alt="Our Story"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#01baf0] rounded-full" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Our Story
              </span>
            </div>

            <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.85]">
              Established in 2022 by the local youth of the region, Langtang
              Outdoor Initiative (LOI) is more than an adventure company, it is
              a movement. We were founded on a singular, powerful vision: to
              bridge the gap between world-class adventure tourism and the
              profound, quiet beauty of our ancestral home. We believe that true
              exploration should never come at the cost of heritage. As the
              guardians of this valley, we stand for sustainable development
              that moves hand-in-hand with our local culture, traditions, and
              environment.
            </p>
            <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.85]">
              At LOI, our work goes beyond guiding expeditions. We are deeply
              committed to preserving the identity of Langtang—its stories, its
              people, and its way of life. Through community-driven initiatives,
              youth engagement, and responsible tourism practices, we aim to
              create opportunities for locals while offering visitors an
              authentic and meaningful experience. Every trail we walk, every
              climb we organize, and every experience we curate is rooted in
              respect—for nature, for culture, and for the generations that call
              Langtang home. LOI is not just about reaching destinations; it is
              about building connections, empowering communities, and ensuring
              that the spirit of Langtang continues to thrive for years to come.
            </p>
          </div>
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
                img: "/buddhist_04.jpg",
                title: "Reviving the Vanishing",
                desc: "We integrate the fading traditions and unique cultural identity of Langtang into every adventure, ensuring our history survives alongside our trails.",
              },
              {
                img: "/trekking_01.jpg",
                title: "Radical Authenticity",
                desc: "While others look across the map, we look deeper into our own backyard. By focusing exclusively on the Langtang region, we provide a level of intimate, expert knowledge that only a local can offer.",
              },
              {
                img: "/expe_04.jpg",
                title: "Purposeful Adventure",
                desc: "We don't just guide; we create experiences that respect the land and empower the community that calls it home",
              },
            ].map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              Meet the{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: BRAND }}
              >
                Team
              </span>
            </h2>

            <p className="mt-4 text-gray-500 text-[15px] max-w-md leading-relaxed">
              Local experts, seasoned guides, and mountain lovers — united by a
              passion for the Himalayas.
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Thupten Lama",
                  role: "Trek Guide",
                  img: "/thupten.jpeg",
                  founder: true,
                  slug: "thupten-lama",
                },
                {
                  name: "Ngawang Namgyal",
                  role: "Trek Guide",
                  img: "/ngawang.jpg",
                  slug: "ngawang",
                },
              ].map((member) => (
                <Link
                  key={member.slug}
                  href={`/about/${member.slug}`}
                  className="group relative block rounded-3xl overflow-hidden bg-black w-full max-w-sm"
                >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={member.founder || false}
                    />
                  </div>

                  {/* overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-[#01baf0]/40 transition-all duration-300" />

                  {/* arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {member.founder && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-[#01baf0] px-3 py-1 rounded-full mb-2">
                        Founder
                      </span>
                    )}

                    <p className="font-black text-white text-base leading-tight">
                      {member.name}
                    </p>

                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[11px] text-[#01baf0] font-semibold uppercase tracking-widest">
                        {member.role}
                      </p>

                      <span className="text-[11px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              src="/footer.jpg"
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
                href="/expeditions"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm tracking-wide 
          active:scale-[0.98] hover:bg-primary/90 md:hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(1,186,240,0.4)]"
              >
                View Expeditions
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

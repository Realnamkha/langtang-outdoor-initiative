"use client";
import { MyCard } from "@/components/ui/My_Card";
import { adventures } from "@/lib/adventure";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Adventures() {
  return (
    <section className="relative w-full bg-[#F8FBFF] px-6 md:px-16 py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2] tracking-tight leading-[1.1] max-w-2xl">
              Our <span className="text-[#01baf0]">Adventures</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl leading-relaxed">
              Hand-crafted journeys into the heart of the Himalayas — from
              glacial valleys to towering summits.
            </p>
          </motion.div>
          <Image
            src="/2.png"
            alt="Lotus"
            priority
            height={150}
            width={100}
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <MyCard {...adventure} link={`/adventures/${adventure.slug}`} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-14 md:mt-20">
        <motion.div
          className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/footer.jpg"
              alt=""
              fill
              className="object-cover object-[center_50%]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0a1628]/72" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#01baf0]/10 via-transparent to-transparent" />
          </div>

          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(1,186,240,0.12),transparent_70%)] blur-[60px]" />

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#01baf0] to-transparent" />

          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 px-8 pt-12 pb-10 md:px-14 md:pt-14 md:pb-12">
            {/* ── Top section ── */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="inline-flex items-center gap-2.5 w-fit">
                  <span className="h-px w-5 bg-[#01baf0]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#01baf0]">
                    Further Expedition
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-serif">
                  Go Deeper into{" "}
                  <span className="italic text-[#01baf0]">Langtang Valley</span>
                </h2>
                <p className="text-white/55 text-[14px] leading-relaxed">
                  Beyond the standard trek lies a world of high passes, glacial
                  peaks, and sacred lakes — all within one valley. Talk to us
                  directly and we'll craft the right expedition for you.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center gap-2 rounded-xl bg-[#01baf0] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#01baf0]/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[#01baf0]/45 hover:shadow-xl whitespace-nowrap"
                >
                  <span className="pointer-events-none absolute inset-0  group-hover:translate-x-full" />
                  <span className="relative">Contact Us Directly</span>
                  <span className="relative text-white/70">→</span>
                </Link>
                <p className="text-[11px] text-white/30 md:text-right">
                  Custom routes · Small groups · Local experts
                </p>
              </div>
            </div>

            {/* ── Expedition chips ── */}
            <div className="border-t border-white/[0.08] pt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
                Expeditions &amp; Routes in Langtang
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "Timlan Pass", alt: "5,000m+" },
                  { label: "Ganja La Pass", alt: "5,106m" },
                  { label: "Yala Peak Climb", alt: "5,500m" },
                  { label: "Gosainkunda Lake", alt: "4,380m" },
                  { label: "Langtang Lirung BC", alt: "7,246m" },
                  { label: "Tamang Heritage Trail", alt: "6 days" },
                  { label: "Laurebina La", alt: "4,610m" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-sm transition-all duration-200 hover:border-[#01baf0]/40 hover:bg-[#01baf0]/8 cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#01baf0]/60 group-hover:bg-[#01baf0] transition-colors" />
                    <span className="text-[12px] font-semibold text-white/70 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-white/30 group-hover:text-[#01baf0]/70 transition-colors">
                      {item.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

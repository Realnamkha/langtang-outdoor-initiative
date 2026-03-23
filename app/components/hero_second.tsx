"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero_Second() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 mt-12 mb-12 pt-8 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          className="w-full md:w-[48%] shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(1,186,240,0.14)]">
            <Image
              src="/langtang.jpg"
              alt="Langtang Mountain"
              fill
              priority
              className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#01baf0] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Langtang
            </div>

            <div className="absolute bottom-4 left-5">
              <p className="text-white/80 text-xs font-medium tracking-wide drop-shadow">
                Langtang National Park · Nepal Himalayas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-[52%] flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-6 h-px bg-[#01baf0]" />
            <span className="text-[#01baf0] text-xs font-semibold uppercase tracking-[0.18em]">
              Expedition &amp; Trekking Company
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.08] text-[#0D1B2A] tracking-tight">
            Langtang <span className="text-[#01baf0]">Outdoor Initiative</span>
          </h2>

          <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.9]">
            We are a Nepal-based expedition and trekking company dedicated to
            taking you beyond the ordinary. From the glacial valleys of Langtang
            to the summit ridges of the Himalayas, we craft journeys that
            connect you with ancient cultures, raw wilderness, and your own
            inner strength.
          </p>

          <Button
            variant="outline"
            className="self-start rounded-full px-7 py-5 text-sm font-semibold border-2 border-[#01baf0]/60 text-[#01baf0] hover:bg-[#01baf0]/10 hover:-translate-y-0.5 transition-all"
            asChild
          >
            <Link href="/about">About Us</Link>
          </Button>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <div className="mt-14 md:mt-20">
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
        </motion.div>
      </div>
    </section>
  );
}

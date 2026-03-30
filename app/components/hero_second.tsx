"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero_Second() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 mt-12 pt-8 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          className="w-full md:w-[45%] shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(1,186,240,0.14)]">
            <Image
              src="/logo_final.jpg"
              alt="Langtang Mountain"
              fill
              priority
              className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-[55%] flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-4xl font-extrabold text-primary tracking-tight">
            Langtang <span className="text-[#0D1B2A]">Outdoor Initiative</span>
          </h2>

          <p className="text-gray-500 text-base md:text-[1.05rem] leading-[1.9]">
            Established in 2022 by the local youth of the region, Langtang
            Outdoor Initiative (LOI) is more than an adventure company, it is a
            movement. We were founded on a singular, powerful vision: to bridge
            the gap between world-class adventure tourism and the profound,
            quiet beauty of our ancestral home. We believe that true exploration
            should never come at the cost of heritage. As the guardians of this
            valley, we stand for Sustainable Development that moves hand-in-hand
            with our local culture.
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

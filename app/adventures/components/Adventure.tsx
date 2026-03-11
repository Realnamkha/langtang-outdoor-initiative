"use client";
import { MyCard } from "@/components/ui/My_Card";
import { adventures } from "@/lib/adventure";
import { motion } from "framer-motion";

export default function Adventures() {
  return (
    <section className="relative w-full bg-[#F8FBFF] px-6 md:px-16 py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[#01baf0] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-10 bg-linear-to-r from-[#01baf0] to-[#0191c8]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0191c8]">
              What we offer
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Choose your Adventure
          </h2>
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
    </section>
  );
}

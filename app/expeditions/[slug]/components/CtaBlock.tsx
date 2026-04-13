import type { Expedition } from "@/lib/expedition";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaBlock({ expedition }: { expedition: Expedition }) {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 px-8 py-16 md:px-16">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Brand accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#01baf0]" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Left */}
            <div className="flex flex-col gap-4 max-w-lg">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Reserve Your Spot
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-serif">
                Ready for {expedition.title}?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Small groups, experienced local guides, and authentic Himalayan
                experiences. Every detail handled — all you have to do is show
                up.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start md:items-end gap-5 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  href="/booking"
                  className="px-7 py-3.5 rounded-xl bg-[#01baf0] text-white text-sm font-semibold hover:bg-[#0191c8] active:scale-[0.98] transition-all duration-150 shadow-lg shadow-[#01baf0]/20 text-center"
                >
                  Book This Adventure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Sparkles } from "lucide-react";
import { activityAddOns } from "@/lib/addons";

type Props = {
  activityId: string;
};

export default function BoulderAddOns({ activityId }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  // Get the 3 add-ons for this specific activity
  const addons =
    activityAddOns.find((a) => a.activityId === activityId)?.addons ?? [];

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (addons.length === 0) return null;

  return (
    <section className="relative bg-[#F8FBFF] py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#01baf0] opacity-[0.05] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#01baf0] opacity-[0.04] blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight leading-[1.08] mb-4">
            Add-On{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#01baf0]">Experiences</span>
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            Pair your adventure with these hand-picked experiences for an
            unforgettable Langtang package.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-6 sm:grid-cols-3 mb-10">
          {addons.map((opt, index) => {
            const isSelected = selected.includes(opt.id);
            return (
              <div
                key={opt.id}
                onClick={() => toggleSelect(opt.id)}
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  border transition-all duration-400 shadow-sm
                  hover:-translate-y-1.5 hover:shadow-xl
                  ${
                    isSelected
                      ? "border-[#01baf0]/50 shadow-[0_8px_32px_rgba(1,186,240,0.18)] scale-[1.01]"
                      : "border-gray-100 hover:border-[#01baf0]/30 bg-white"
                  }
                `}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={opt.image}
                    alt={opt.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Selected badge */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-[#01baf0] text-white text-[11px] font-bold tracking-wide px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Added
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`p-5 transition-colors duration-300 bg-red-800 ${
                    isSelected ? "bg-[#f0fbff]" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-[17px] font-bold mb-2 transition-colors duration-200 ${
                      isSelected ? "text-[#01baf0]" : "text-[#0D1B2A]"
                    }`}
                  >
                    <Link
                      href={opt.link}
                      onClick={(e) => e.stopPropagation()} // ← prevents card toggle on title click
                      className="hover:text-[#01baf0] hover:underline underline-offset-2 transition-colors duration-200"
                    >
                      {opt.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5">
                    {opt.description}
                  </p>

                  {/* Action row */}
                  <div
                    className={`flex items-center gap-3 pt-4 border-t ${
                      isSelected ? "border-[#01baf0]/15" : "border-gray-100"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                      ${
                        isSelected
                          ? "bg-primary text-white" // Selected state
                          : "bg-[#01baf0]/10 text-[#01baf0] hover:bg-[#01baf0] hover:text-white" // Not selected
                      }`}
                    >
                      {isSelected ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                    <span
                      className={`text-[13px] font-semibold transition-colors ${
                        isSelected
                          ? "text-[#01baf0]"
                          : "text-gray-600 group-hover:text-[#01baf0]"
                      }`}
                    >
                      {isSelected ? "Remove from package" : "Add to package"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Summary bar ── */}
        {selected.length > 0 && (
          <div className="sticky bottom-5 z-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-[0_8px_40px_rgba(1,186,240,0.18)] border border-[#01baf0]/20 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-gray-400">
                    {selected.length} add-on{selected.length > 1 ? "s" : ""}{" "}
                    selected
                  </span>
                  {selected.map((id) => {
                    const opt = addons.find((o) => o.id === id);
                    return (
                      <span
                        key={id}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSelect(id);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#01baf0]/10 text-[#01baf0] text-[12px] font-semibold rounded-full border border-[#01baf0]/20 cursor-pointer hover:bg-[#01baf0]/20 transition-colors"
                      >
                        {opt?.title}
                        <Minus className="w-3 h-3" />
                      </span>
                    );
                  })}
                </div>

                {/* Right: CTA */}
                <Link
                  href={`/booking?activity=${activityId}&addons=${selected.join(
                    ","
                  )}`}
                  className="shrink-0 flex items-center gap-2 bg-[#01baf0] hover:bg-[#0199cc] text-white text-[13.5px] font-bold px-6 py-3 rounded-full shadow-lg shadow-[#01baf0]/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book with Add-ons
                  <span className="text-white/70 font-normal">→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

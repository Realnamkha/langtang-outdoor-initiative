"use client";
import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Plus, Minus } from "lucide-react";
import Link from "next/link";

type BoulderOption = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
};

const options: BoulderOption[] = [
  {
    id: "via-ferrata",
    title: "Via Ferrata",
    description: "Experience the 1.9km iron path safely with thrill.",
    image: "/via_01.jpg",
    duration: "6 Hours",
    price: "$150",
  },
  {
    id: "highlining",
    title: "Highlining",
    description: "Walk the line above the valley with expert guides.",
    image: "/via_02.jpg",
    duration: "4 Hours",
    price: "$200",
  },
  {
    id: "langtang-trek",
    title: "Langtang Trekking",
    description: "Explore the hidden valley with local guides.",
    image: "/langtang.jpg",
    duration: "Full Day",
    price: "$120",
  },
];

export default function BoulderAddOns() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 font-serif">
            Customize Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Add premium boulder experiences to create your perfect Langtang
            package.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid gap-8 sm:grid-cols-3 mb-16">
          {options.map((opt) => {
            const isSelected = selected.includes(opt.id);
            return (
              <div
                key={opt.id}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isSelected
                    ? "ring-4 ring-[#01baf0]/30 bg-blue-50/60 shadow-[#01baf0]/25 scale-[1.02]"
                    : "hover:ring-2 hover:ring-gray-200/50"
                }`}
                onClick={() => toggleSelect(opt.id)}
              >
                {/* Image */}
                <div className="relative mb-6 h-48 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={opt.image}
                    alt={opt.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#01baf0] transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {opt.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#01baf0] text-white shadow-lg shadow-[#01baf0]/25"
                          : "bg-white border-2 border-gray-200 group-hover:border-[#01baf0] group-hover:bg-[#01baf0]/5 text-gray-700"
                      }`}
                    >
                      {isSelected ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`font-semibold text-lg transition-colors ${
                        isSelected
                          ? "text-[#01baf0]"
                          : "text-gray-700 group-hover:text-[#01baf0]"
                      }`}
                    >
                      {isSelected ? "Added!" : "Add to Package"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Bar */}
        {selected.length > 0 && (
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 sticky bottom-4 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Selected Add-ons ({selected.length})
                </p>
                {selected.map((id) => {
                  const option = options.find((opt) => opt.id === id);
                  return (
                    <span
                      key={id}
                      className="px-4 py-2 bg-gradient-to-r from-[#01baf0]/10 to-blue-500/10 text-[#01baf0] text-sm font-bold rounded-2xl border border-[#01baf0]/20 shadow-sm"
                    >
                      {option?.title}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/booking?addons=${selected.join(",")}`}
                  className="px-8 py-4 bg-gradient-to-r bg-primary text-white font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:from-[#0191c8] hover:to-[#017aa8]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

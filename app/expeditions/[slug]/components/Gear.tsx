"use client";

import { useState, useMemo } from "react";
import { gearItems, gearCategories } from "@/lib/gears";
import * as Icons from "lucide-react";

export default function GearPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? gearItems
        : gearItems.filter((i) => i.category === activeCategory),
    [activeCategory]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: gearItems.length };
    for (const item of gearItems) {
      counts[item.category] = (counts[item.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[2.15rem] font-semibold text-gray-900 tracking-tight leading-none mb-3">
            Recommended Gear List
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>
              <span className="text-gray-700 font-medium">
                {gearItems.length}
              </span>{" "}
              items
            </span>
            <span className="w-px h-3 bg-gray-200 inline-block" />
            <span>
              <span className="text-gray-700 font-medium">
                {gearCategories.length - 1}
              </span>{" "}
              categories
            </span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {gearCategories.map((cat) => {
            const count = categoryCounts[cat.id] ?? 0;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1.5 rounded-full border font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#01baf0] text-white border-[#01baf0] shadow-sm shadow-[#01baf0]/20"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#01baf0]/50 hover:text-[#01baf0]"
                }`}
              >
                {cat.label}
                <span
                  className={`text-[9px] tabular-nums px-1.5 py-0.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results label */}
        <p className="text-[10px] text-gray-300 uppercase tracking-[0.18em] mb-4">
          {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
        </p>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {filteredItems.map((item) => {
              const Icon = (
                Icons as unknown as Record<string, React.ComponentType<any>>
              )[item.icon];

              return (
                <div
                  key={item.id}
                  className="group flex gap-3 items-start p-4 rounded-2xl border border-gray-100 bg-white hover:border-[#01baf0]/25 hover:shadow-md hover:shadow-[#01baf0]/5 transition-all duration-200"
                >
                  {/* Icon */}
                  <div className="shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-[#f0fbfe] flex items-center justify-center text-[#01baf0] group-hover:bg-[#e0f7fd] transition-colors duration-200">
                    {Icon ? <Icon size={14} strokeWidth={1.75} /> : null}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-gray-800 leading-snug">
                      {item.name}
                    </p>
                    <p className="text-[11.5px] text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    {item.quantity && item.quantity !== "—" && (
                      <span className="inline-flex items-center mt-2 text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-md px-2 py-0.5 tracking-wide">
                        {item.quantity}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center py-20 text-center">
            <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
              <Icons.PackageOpen
                size={18}
                strokeWidth={1.5}
                className="text-gray-300"
              />
            </div>
            <p className="text-sm font-medium text-gray-300">
              No items in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

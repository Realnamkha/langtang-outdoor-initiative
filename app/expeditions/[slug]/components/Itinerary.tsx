"use client";

import { useState } from "react";
import type { Expedition } from "@/lib/expedition";
import SectionHeading from "./SectionHeading";
import {
  Mountain,
  Clock,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PREVIEW_COUNT = 4;

export default function Itinerary({ expedition }: { expedition: Expedition }) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll
    ? expedition.itinerary
    : expedition.itinerary.slice(0, PREVIEW_COUNT);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16">
      <SectionHeading>
        Day-by-Day <em className="text-[#01baf0]">Itinerary</em>
      </SectionHeading>

      <p className="font-mono-dm text-gray-400 text-[9px] text-center tracking-[0.18em] uppercase mb-10">
        {expedition.itinerary.length} days · full itinerary below
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {visible.map(
          ({ day, title, description, altitude, distance, duration }, i) => (
            <div
              key={i}
              className="group relative flex gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-gray-100 hover:border-[#01baf0]/25 hover:bg-[#f0fbff]/50 transition-all duration-200"
            >
              {/* day number column */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#01baf0] shadow-sm shadow-[#01baf0]/30 flex items-center justify-center">
                  <span className="font-mono-dm text-white text-[10px] font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* connector dot */}
                {i < visible.length - 1 && (
                  <div className="w-px flex-1 min-h-4 bg-gray-200 group-last:hidden" />
                )}
              </div>

              {/* content */}
              <div className="flex-1 min-w-0 pt-1">
                <span className="font-mono-dm text-[#01baf0] text-[8px] tracking-[0.18em] uppercase block mb-1">
                  {day}
                </span>

                <p
                  className="font-display text-gray-900 text-[17px] sm:text-[20px] leading-snug mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {title}
                </p>

                <p className="text-gray-500 text-[13px] sm:text-[14px] leading-[1.8] mb-3">
                  {description}
                </p>

                {/* meta chips */}
                {(altitude || distance || duration) && (
                  <div className="flex flex-wrap gap-2">
                    {altitude && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-mono-dm text-[8px] tracking-[0.1em] uppercase shadow-sm">
                        <Mountain
                          size={9}
                          strokeWidth={2}
                          className="text-[#01baf0]"
                        />
                        {altitude}
                      </span>
                    )}
                    {distance && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-mono-dm text-[8px] tracking-[0.1em] uppercase shadow-sm">
                        <Navigation
                          size={9}
                          strokeWidth={2}
                          className="text-[#01baf0]"
                        />
                        {distance}
                      </span>
                    )}
                    {duration && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-mono-dm text-[8px] tracking-[0.1em] uppercase shadow-sm">
                        <Clock
                          size={9}
                          strokeWidth={2}
                          className="text-[#01baf0]"
                        />
                        {duration}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* right accent */}
              <div className="hidden sm:block w-1 self-stretch rounded-full bg-gray-100 group-hover:bg-[#01baf0]/30 transition-colors duration-200 shrink-0" />
            </div>
          )
        )}
      </div>

      {/* show all / collapse */}
      {!showAll ? (
        <div className="max-w-3xl mx-auto relative mt-2">
          <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          <button
            onClick={() => setShowAll(true)}
            className="relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#01baf0] border border-gray-200 text-gray-600 hover:bg-[#01baf0]/90 transition-all duration-200 font-mono-dm text-[10px] tracking-[0.16em] uppercase shadow-sm"
          >
            <ChevronDown size={14} strokeWidth={2} />
            Show All {expedition.itinerary.length} Days
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto mt-3">
          <button
            onClick={() => setShowAll(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#01baf0] border border-gray-200 text-gray-600 hover:bg-[#01baf0]/90 transition-all duration-200 font-mono-dm text-[10px] tracking-[0.16em] uppercase shadow-sm"
          >
            <ChevronUp size={14} strokeWidth={2} />
            Collapse Itinerary
          </button>
        </div>
      )}
    </section>
  );
}

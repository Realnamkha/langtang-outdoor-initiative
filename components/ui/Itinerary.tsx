"use client";

import { useState } from "react";
import {
  Mountain,
  Clock,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  altitude?: string;
  distance?: string;
  duration?: string;
}

interface ItineraryProps {
  itinerary: ItineraryDay[];
}

const PREVIEW_COUNT = 4;

export default function Itinerary({ itinerary }: ItineraryProps) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? itinerary : itinerary.slice(0, PREVIEW_COUNT);
  const hasMore = itinerary.length > PREVIEW_COUNT;

  return (
    <section className="bg-[#f8f7f4] py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#01baf0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
              Full Schedule
            </span>
            <div className="h-px w-8 bg-[#01baf0]" />
          </div>

          <h2
            className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Day-by-Day{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Itinerary
            </span>
          </h2>

          <p className="text-gray-400 text-sm">
            {itinerary.length} days · teahouse accommodation throughout
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[21px] sm:left-[25px] top-2 bottom-2 w-px bg-gradient-to-b from-[#01baf0]/40 via-[#01baf0]/20 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-2">
            {visible.map(
              (
                { day, title, description, altitude, distance, duration },
                i
              ) => (
                <div key={i} className="group relative flex gap-5 sm:gap-7">
                  {/* Day bubble */}
                  <div className="shrink-0 z-10">
                    <div
                      className="w-[43px] h-[43px] sm:w-[51px] sm:h-[51px] rounded-2xl flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #01baf0, #0191c8)",
                      }}
                    >
                      <span
                        className="text-white text-[10px] font-bold tracking-wider"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 mb-3 bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#01baf0]/20 transition-all duration-300 group-hover:-translate-y-0.5">
                    {/* Day label */}
                    <span className="text-[#01baf0] text-[9px] tracking-[0.22em] uppercase font-semibold block mb-1.5">
                      {day}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-[#0a0a0a] text-base sm:text-[1.1rem] font-bold leading-snug mb-3"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-[1.8]">
                      {description}
                    </p>

                    {/* Meta chips */}
                    {(altitude || distance || duration) && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {altitude && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0fbff] border border-[#01baf0]/15 text-gray-600 text-[9px] tracking-[0.1em] uppercase font-medium">
                            <Mountain
                              size={9}
                              strokeWidth={2}
                              className="text-[#01baf0]"
                            />
                            {altitude}
                          </span>
                        )}
                        {distance && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0fbff] border border-[#01baf0]/15 text-gray-600 text-[9px] tracking-[0.1em] uppercase font-medium">
                            <Navigation
                              size={9}
                              strokeWidth={2}
                              className="text-[#01baf0]"
                            />
                            {distance}
                          </span>
                        )}
                        {duration && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0fbff] border border-[#01baf0]/15 text-gray-600 text-[9px] tracking-[0.1em] uppercase font-medium">
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
                </div>
              )
            )}
          </div>
        </div>

        {/* Show all / collapse */}
        {hasMore && (
          <div className="relative mt-1">
            {!showAll && (
              <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f7f4] to-transparent pointer-events-none z-10" />
            )}
            <button
              onClick={() => setShowAll((v) => !v)}
              className="relative z-20 w-full flex items-center justify-center gap-2.5 py-4 px-6 mt-2 rounded-2xl border border-gray-200 bg-white text-[#0191c8] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-[#f0fbff] hover:border-[#01baf0]/30 active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp size={14} strokeWidth={2.5} />
                  Collapse Itinerary
                </>
              ) : (
                <>
                  <ChevronDown size={14} strokeWidth={2.5} />
                  Show All {itinerary.length} Days
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

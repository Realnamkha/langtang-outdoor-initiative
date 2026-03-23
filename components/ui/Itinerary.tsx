"use client";

import { useState } from "react";
import {
  Mountain,
  Clock,
  Navigation,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DaySection {
  label: string;
  content: string;
}

export interface ItineraryDay {
  day: string;
  title: string;
  badge?: string;
  sections?: DaySection[];
  description?: string;
  altitude?: string;
  distance?: string;
  duration?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PREVIEW_COUNT = 4;

// ─── Chip ─────────────────────────────────────────────────────────────────────

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[11px] font-medium tracking-wide">
      {icon}
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Itinerary({
  itinerary,
}: {
  itinerary: ItineraryDay[];
}) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? itinerary : itinerary.slice(0, PREVIEW_COUNT);
  const hasMore = itinerary.length > PREVIEW_COUNT;

  const totalKm = itinerary.reduce((sum, d) => {
    const n = parseInt((d.distance ?? "").replace(/[^0-9]/g, ""), 10);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  const maxAlt = Math.max(
    ...itinerary.map(
      (d) => parseInt((d.altitude ?? "0").replace(/[^0-9]/g, ""), 10) || 0
    )
  );

  return (
    <section className="bg-gray-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01baf0]" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#01baf0]">
              Full Schedule
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#01baf0]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4 font-serif">
            Day-by-Day <span className="text-[#01baf0]">Itinerary</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200 pointer-events-none" />

          <div className="flex flex-col gap-3">
            {visible.map((item, i) => (
              <div key={i} className="group flex gap-4 items-start">
                {/* ── Dot ── */}
                <div className="relative z-10 shrink-0 pt-4">
                  <div className="w-[38px] h-[38px] rounded-xl bg-[#01baf0] flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
                    <span className="text-white text-[11px] font-bold tracking-wide font-serif">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* ── Card ── */}
                <div className="flex-1 min-w-0 mb-1 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:border-gray-200">
                  {/* Top row: day label + badge */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#01baf0]">
                      {item.day}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] uppercase tracking-[0.1em] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-4 font-serif">
                    {item.title}
                  </h3>

                  {/* ── Sections ── */}
                  {item.sections && item.sections.length > 0 ? (
                    <div className="flex flex-col gap-2.5">
                      {item.sections.map((sec, si) => (
                        <div key={si} className="flex gap-3">
                          {/* Fixed-width label column — all content starts at same x */}
                          <span className="shrink-0 w-[88px] text-[10px] uppercase tracking-[0.1em] font-semibold text-gray-400 pt-[3px] leading-relaxed">
                            {sec.label}
                          </span>
                          <p className="flex-1 text-[13px] text-gray-600 leading-[1.7]">
                            {sec.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[13px] text-gray-600 leading-[1.7]">
                      {item.description}
                    </p>
                  )}

                  {/* ── Meta chips ── */}
                  {(item.altitude || item.distance || item.duration) && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {item.altitude && (
                        <Chip
                          icon={
                            <Mountain
                              size={10}
                              strokeWidth={2}
                              className="text-[#01baf0]"
                            />
                          }
                          label={item.altitude}
                        />
                      )}
                      {item.distance && (
                        <Chip
                          icon={
                            <Navigation
                              size={10}
                              strokeWidth={2}
                              className="text-[#01baf0]"
                            />
                          }
                          label={item.distance}
                        />
                      )}
                      {item.duration && (
                        <Chip
                          icon={
                            <Clock
                              size={10}
                              strokeWidth={2}
                              className="text-[#01baf0]"
                            />
                          }
                          label={item.duration}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Show more / collapse ── */}
        {hasMore && (
          <div className="relative mt-1">
            {!showAll && (
              <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10" />
            )}
            <button
              onClick={() => setShowAll((v) => !v)}
              className="relative z-20 w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-2xl border border-gray-200 bg-white text-[#01baf0] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-gray-50 hover:border-gray-300 active:scale-[0.99] transition-all duration-150 shadow-sm"
            >
              {showAll ? (
                <>
                  <ChevronUp size={13} strokeWidth={2.5} />
                  Collapse itinerary
                </>
              ) : (
                <>
                  <ChevronDown size={13} strokeWidth={2.5} />
                  Show all {itinerary.length} days
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

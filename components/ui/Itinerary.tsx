"use client";

import { useState } from "react";
import {
  Mountain,
  Navigation,
  ChevronDown,
  ChevronUp,
  House,
  Footprints,
  Car,
} from "lucide-react";

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
  stay?: string;
  distance?: string;
  duration?: string;
}

const PREVIEW_COUNT = 4;

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 text-[11px] font-medium">
      {icon}
      {label}
    </span>
  );
}

function getBadgeStyle(badge?: string) {
  switch (badge?.toLowerCase()) {
    case "trek":
      return { icon: Footprints, label: "Trek" }; // component, not JSX
    case "drive":
      return { icon: Car, label: "Drive" }; // component, not JSX
    case "summit":
      return { icon: Mountain, label: "Summit" }; // component, not JSX
    default:
      return null;
  }
}

export default function Itinerary({
  itinerary,
}: {
  itinerary: ItineraryDay[];
}) {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? itinerary : itinerary.slice(0, PREVIEW_COUNT);
  const hasMore = itinerary.length > PREVIEW_COUNT;

  return (
    <section className="bg-white px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#01baf0] mb-3">
            Full Schedule
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
            Day-by-day itinerary
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            {itinerary.length} days · Langtang Valley Expedition
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-100 pointer-events-none" />

          <div className="flex flex-col gap-4">
            {visible.map((item, i) => {
              const badgeInfo = getBadgeStyle(item.badge);
              return (
                <div key={i} className="flex gap-5 items-start group">
                  {/* Dot */}
                  <div className="relative z-10 shrink-0 flex flex-col items-center pt-4">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#01baf0] flex items-center justify-center">
                      <span className="text-white text-[10px] font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#01baf0]/20 hover:shadow-sm transition-all duration-200">
                    {/* Day + badge */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#01baf0]">
                        {item.day}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-4">
                      {item.title}
                    </h3>

                    {/* Sections or description */}
                    {item.sections && item.sections.length > 0 ? (
                      <div className="flex flex-col gap-3">
                        {item.sections.map((sec, si) => (
                          <div key={si} className="flex gap-3">
                            <span className="shrink-0 w-20 text-[10px] uppercase tracking-[0.1em] font-semibold text-gray-300 pt-[3px]">
                              {sec.label}
                            </span>
                            <p className="flex-1 text-[13px] text-gray-500 leading-relaxed">
                              {sec.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {/* Meta chips */}
                    {(item.altitude ||
                      item.distance ||
                      item.duration ||
                      item.stay) && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
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
                        {item.duration && badgeInfo && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full text-gray-500 ">
                            <badgeInfo.icon
                              size={10}
                              strokeWidth={2}
                              className="text-primary"
                            />
                            {item.duration} {badgeInfo.label}
                          </span>
                        )}
                        {item.stay && (
                          <Chip
                            icon={
                              <House
                                size={10}
                                strokeWidth={2}
                                className="text-[#01baf0]"
                              />
                            }
                            label={item.stay}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Show more / collapse */}
        {hasMore && (
          <div className="relative mt-2">
            {!showAll && (
              <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            )}
            <button
              onClick={() => setShowAll((v) => !v)}
              className="relative z-20 w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-2xl border border-gray-100 text-[#01baf0] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#01baf0]/5 hover:border-[#01baf0]/30 active:scale-[0.99] transition-all duration-150"
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

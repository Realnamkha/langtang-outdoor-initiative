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
      return { icon: Footprints, label: "Trek" };
    case "drive":
      return { icon: Car, label: "Drive" };
    case "summit":
      return { icon: Mountain, label: "Summit" };
    default:
      return null;
  }
}

// Detects "Option 1/2/3", "Logistics", "Overnight", "Flexible" type labels
function isOptionSection(label: string) {
  return (
    /^option\s*\d+/i.test(label) ||
    /^logistics/i.test(label) ||
    /^flexible/i.test(label)
  );
}

function getOptionShortLabel(label: string) {
  // "Option 1: The Langtang Via Ferrata Experience" → "Option 1 — Via Ferrata"
  const match = label.match(/^(option\s*\d+)[:\s–-]*/i);
  if (match) {
    const rest = label.slice(match[0].length).trim();
    // Shorten long subtitles
    const short = rest.length > 30 ? rest.slice(0, 28) + "…" : rest;
    return `${match[1]} ${short ? "— " + short : ""}`;
  }
  if (/^logistics/i.test(label)) return "Logistics & coordination";
  if (/^flexible/i.test(label)) return "Flexible activities";
  return label;
}

function SectionList({ sections }: { sections: DaySection[] }) {
  return (
    <div className="flex flex-col gap-0">
      {sections.map((sec, i) => {
        if (isOptionSection(sec.label)) {
          return (
            <div
              key={i}
              className="border-l-2 border-[#01baf0] bg-sky-50/60 rounded-r-xl pl-3 pr-2 py-2.5 mb-2"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-600 mb-1">
                {getOptionShortLabel(sec.label)}
              </p>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {sec.content}
              </p>
            </div>
          );
        }

        // Regular time-based row
        return (
          <div key={i} className="flex gap-3 mb-2.5 items-start">
            <span className="shrink-0 w-[52px] text-[10px] uppercase tracking-[0.08em] font-semibold text-gray-300 pt-[3px] leading-tight">
              {sec.label}
            </span>
            <p className="flex-1 text-[13px] text-gray-500 leading-relaxed">
              {sec.content}
            </p>
          </div>
        );
      })}
    </div>
  );
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

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-100 pointer-events-none" />

          <div className="flex flex-col gap-4">
            {visible.map((item, i) => {
              const badgeInfo = getBadgeStyle(item.badge);
              return (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="relative z-10 shrink-0 flex flex-col items-center pt-4">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#01baf0] flex items-center justify-center">
                      <span className="text-white text-[10px] font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#01baf0]/20 hover:shadow-sm transition-all duration-200">
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#01baf0]">
                        {item.day}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-4">
                      {item.title}
                    </h3>

                    {item.sections && item.sections.length > 0 ? (
                      <SectionList sections={item.sections} />
                    ) : (
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    )}

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
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full text-gray-500">
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

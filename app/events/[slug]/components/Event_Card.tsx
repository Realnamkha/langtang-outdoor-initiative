"use client";

import { useState } from "react";
import Link from "next/link";
import type { FestivalEvent } from "@/lib/events";

export default function EventCard({ event }: { event: FestivalEvent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer ${
        hovered ? "border-white/20 bg-white/8 -translate-y-1 shadow-2xl" : ""
      }`}
    >
      <div className="p-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl">{event.icon}</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {event.season}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl font-black text-white leading-none tracking-tight mb-4">
          {event.title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5 text-white/40 text-sm">
          <span className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-medium">{event.date}</span>
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="font-medium">{event.location}</span>
          </span>
        </div>

        <div className="h-px bg-white/5 mb-5" />

        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {event.description}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href={`/events/${event.slug}`}
            className={`flex-1 py-3 px-5 rounded-xl text-sm font-bold tracking-wide text-white text-center shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 bg-gradient-to-r ${event.accentFrom} ${event.accentTo}`}
          >
            Reserve a Spot →
          </Link>
          <Link
            href={`/events/${event.slug}`}
            className="py-3 px-5 rounded-xl text-sm font-bold tracking-wide text-white/50 bg-white/5 border border-white/10 transition-all duration-200 hover:text-white/80 hover:bg-white/10 hover:border-white/20 whitespace-nowrap"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

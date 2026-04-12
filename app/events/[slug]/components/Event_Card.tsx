"use client";

import { useState } from "react";
import Link from "next/link";
import type { FestivalEvent } from "@/lib/events";

export default function EventCard({ event }: { event: FestivalEvent }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={event.comingSoon ? () => setShowModal(true) : undefined}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer ${
        hovered ? "border-white/20 bg-white/8 -translate-y-1 shadow-2xl" : ""
      }`}
    >
      {/* Coming soon overlay */}
      {event.comingSoon && (
        <div className="absolute inset-0 z-20 bg-black/25 backdrop-blur-[1px] rounded-3xl" />
      )}

      <div className="p-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl">{event.icon}</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {event.season}
            </span>
          </div>
          {event.comingSoon && (
            <span
              className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: event.accentHex,
                borderColor: `${event.accentHex}50`,
                background: `${event.accentHex}15`,
              }}
            >
              Coming Soon
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl font-black text-primary leading-none tracking-tight mb-4">
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
        {event.comingSoon ? (
          <div className="flex items-center gap-3">
            <button
              className="flex-1 py-3 px-5 rounded-xl text-sm font-bold tracking-wide text-white/40 text-center border border-white/10 bg-white/5 cursor-not-allowed"
              disabled
            >
              Registration Opening Soon
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScONp3QRIcE9QGfcpkwJmmqz3GavnzIkKM96njNxcVrI8l78w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-5 rounded-xl text-sm font-bold tracking-wide text-white text-center shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 bg-primary"
            >
              Reserve a Spot →
            </a>
            <Link
              href={`/events/${event.slug}`}
              className="py-3 px-5 rounded-xl text-sm font-bold tracking-wide text-white/50 bg-white/5 border border-white/10 transition-all duration-200 hover:text-white/80 hover:bg-white/10 hover:border-white/20 whitespace-nowrap"
            >
              Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {event.comingSoon ? <div>{card}</div> : card}

      {/* Coming soon modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "modalIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl"
              style={{ background: `${event.accentHex}18` }}
            >
              {event.icon}
            </div>

            <p
              className="text-[10px] font-black tracking-[0.25em] uppercase mb-2"
              style={{ color: event.accentHex }}
            >
              Coming Soon
            </p>

            <h2 className="font-display font-black text-gray-900 text-2xl leading-tight tracking-tight mb-3">
              {event.title}
            </h2>

            <p className="text-gray-400 text-sm mb-1">{event.date}</p>
            <p className="text-gray-400 text-sm mb-6">{event.description}</p>

            <div
              className="w-8 h-[2px] rounded-full mx-auto mb-6"
              style={{ background: event.accentHex }}
            />

            <p className="text-gray-400 text-[13px] leading-relaxed mb-7">
              Details for this event are still being finalized. Check back soon.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: event.accentHex }}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}

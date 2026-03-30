"use client";

import { useState } from "react";

const events = [
  {
    id: 1,
    season: "Summer",
    title: "Langtang Boulder Hunt",
    date: "June 1 – June 15, 2026",
    location: "Langtang Valley",
    description:
      "Three days of live music, open-air cinema, local food vendors, and sunset gatherings along the riverside.",
    icon: "☀️",
    tag: "Almost Full",
    tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    accentFrom: "from-green-400",
    accentTo: "to-green-500",
    glowColor: "shadow-amber-500/20",
  },
  {
    id: 2,
    season: "Winter",
    title: "Langtang Winter Fest",
    date: "Stay Tuned",
    location: "Langtang Valley,Nepal",
    description:
      "An intimate winter evening with lantern walks, acoustic performances, warm drinks, and stargazing sessions.",
    spots: 180,
    spotsLeft: 12,
    icon: "❄️",
    tag: "Selling Fast",
    tagColor: "text-sky-300 bg-sky-400/10 border-sky-400/20",
    accentFrom: "from-sky-400",
    accentTo: "to-blue-600",
    glowColor: "shadow-sky-500/20",
  },
];

function EventCard({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative rounded-3xl overflow-hidden
        border border-white/10
        bg-white/5 backdrop-blur-xl
        transition-all duration-500 ease-out
        ${
          hovered
            ? `shadow-2xl ${event.glowColor} -translate-y-2`
            : "shadow-lg shadow-black/20 translate-y-0"
        }
      `}
      style={{ animationDelay: `${index * 0.18}s` }}
    >
      <div className="p-8 relative z-10">
        {/* Top row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl">{event.icon}</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {event.season}
            </span>
            <span
              className={`text-xs font-bold tracking-wide uppercase border px-3 py-1 rounded-full flex items-center gap-1.5 ${event.tagColor}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
              {event.tag}
            </span>
          </div>
          <span className="text-xs text-white/30 font-medium tabular-nums">
            {event.spotsLeft} left
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl font-black text-white leading-none tracking-tight mb-4">
          {event.title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-2 text-white/40 text-sm">
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
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
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
          </div>
          <div className="fixed inset-0 z-0 bg-black/0" />
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-5" />

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className={`
              flex-1 py-3 px-5 rounded-xl text-sm font-bold tracking-wide
              bg-gradient-to-r ${event.accentFrom} ${event.accentTo}
              text-white shadow-lg transition-all duration-200
              hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl
              active:translate-y-0
            `}
          >
            Reserve a Spot →
          </button>
          <button
            className="
              py-3 px-5 rounded-xl text-sm font-bold tracking-wide
              text-white/40 bg-white/5 border border-white/10
              transition-all duration-200
              hover:text-white/70 hover:bg-white/10 hover:border-white/20
              whitespace-nowrap
            "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <style>{`

        .card-reveal {
          animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hero-sub  { animation: fadeUp 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hero-eyebrow { animation: fadeUp 0.7s 0.05s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <div className="min-h-screen relative overflow-x-hidden">
        {/* Background */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/landscape_02.jpg')`,
          }}
        />
        <div className="fixed inset-0 z-0 bg-black/70" />

        {/* Noise texture */}
        <div
          className="fixed inset-0 z-0 opacity-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-screen px-4 py-30 md:px-6 md:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h1 className="hero-text text-center font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4 tracking-wide">
              <span className="bg-clip-text text-primary">Langtang </span>
              Outdoor Festival
            </h1>

            {/* Subheading */}
            <p className="text-center hero-sub text-white/50 text-sm sm:text-base leading-relaxed mb-12 md:mb-14 max-w-sm mx-auto">
              Curated experiences for every season. Reserve your place before
              spots run out.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {events.map((event, i) => (
                <div
                  key={event.id}
                  className="card-reveal"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <EventCard event={event} index={i} />
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="text-center text-white/15 text-xs mt-14 tracking-[0.2em] uppercase">
              All events · Langtang Valley
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

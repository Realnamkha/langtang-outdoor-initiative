import { Playfair_Display, DM_Sans } from "next/font/google";
import { events } from "@/lib/events";
import EventCard from "./[slug]/components/Event_Card";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Events — Langtang Outdoor Festival",
  description:
    "Curated seasonal experiences in the Langtang Valley. Reserve your spot before they sell out.",
};

export default function EventsPage() {
  return (
    <main
      className={`${playfair.variable} ${dmSans.variable} font-body min-h-screen relative overflow-x-hidden`}
    >
      {/* Fixed background — no bg-fixed here, the div itself is fixed */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/event_01.jpeg')` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="fixed inset-0 z-0 bg-black/60 md:bg-black/70"
        aria-hidden="true"
      />

      {/* Page content */}
      <div className="relative z-10 min-h-screen px-4 pt-16 pb-20 sm:px-6 md:px-6 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero heading — tighter on mobile, generous on desktop */}
          <div
            className="text-center mb-10 md:mb-14"
            style={{
              animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Eyebrow label — adds context on small screens */}
            <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mb-3 md:hidden">
              Langtang Valley · Nepal
            </p>

            <h1 className="font-display text-[2.4rem] leading-[1.1] sm:text-6xl md:text-7xl text-white tracking-tight mb-3 md:mb-4">
              <span className="text-primary">Langtang </span>
              <br className="sm:hidden" />
              Outdoor Festival
            </h1>

            <p className="text-white/50 text-sm leading-relaxed max-w-[260px] sm:max-w-sm mx-auto">
              Curated experiences for every season. Reserve your place before
              spots run out.
            </p>
          </div>

          {/* Event cards — single column on mobile, 2-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {events.map((event, i) => (
              <div
                key={event.id}
                style={{
                  animation: `fadeUp 0.6s ${
                    0.15 + i * 0.1
                  }s cubic-bezier(0.22,1,0.36,1) both`,
                }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <p className="text-center text-white/15 text-[10px] mt-12 tracking-[0.2em] uppercase">
            All events · Langtang Valley
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

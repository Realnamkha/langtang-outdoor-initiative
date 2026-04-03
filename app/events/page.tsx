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
      {/* Fixed background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/landscape_02.jpg')` }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-0 bg-black/70" aria-hidden="true" />

      {/* Page content */}
      <div className="relative z-10 min-h-screen px-4 py-24 md:px-6 md:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero heading */}
          <div
            className="text-center mb-14"
            style={{
              animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight tracking-tight mb-4">
              <span className="text-primary">Langtang </span>Outdoor Festival
            </h1>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
              Curated experiences for every season. Reserve your place before
              spots run out.
            </p>
          </div>

          {/* Event cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <div
                key={event.id}
                style={{
                  animation: `fadeUp 0.6s ${
                    0.2 + i * 0.15
                  }s cubic-bezier(0.22,1,0.36,1) both`,
                }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <p className="text-center text-white/15 text-xs mt-14 tracking-[0.2em] uppercase">
            All events · Langtang Valley
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

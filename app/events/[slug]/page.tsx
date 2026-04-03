import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import { getEventBySlug, events } from "@/lib/events";
import EventDetailTabs from "./components/Eventstabsdetail";

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

// ── Static params for SSG ────────────────────────────────────────────────────
export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

// ── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} — Langtang Outdoor Festival`,
    description: event.description,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <main
      className={`${playfair.variable} ${dmSans.variable} font-body min-h-screen flex flex-col`}
      style={{ animation: "pageIn 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[70vh] min-h-[480px] flex flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={event.bgImage}
            alt={event.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/60 to-transparent" />
        </div>
        {/* Hero content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-8 md:px-14 pb-12">
          <div
            className="max-w-2xl"
            style={{
              animation: "heroIn 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Season tag */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span className="text-2xl">{event.icon}</span>
              <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/40 bg-white/8 border border-white/12 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {event.season}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-white leading-[0.92] tracking-tight mb-6 text-3xl md:text-4xl lg:text-5xl">
              {event.title}
            </h1>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: "📅", text: event.date },
                { icon: "📍", text: event.location },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-2 text-sm text-white/60 bg-black/30 border border-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full"
                >
                  <span className="text-xs">{m.icon}</span>
                  {m.text}
                </span>
              ))}
            </div>

            <p className="text-white/50 text-base leading-relaxed max-w-lg">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="bg-white flex-1">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
          <div className="flex flex-col gap-14">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Duration", val: event.details.duration },
                { label: "Difficulty", val: event.details.difficulty },
                { label: "Max Altitude", val: event.details.maxAltitude },
                { label: "Group Size", val: event.details.groupSize },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border border-gray-100 bg-gray-50 text-center"
                >
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
                    {s.label}
                  </p>
                  <p className="text-sm font-bold text-gray-800">{s.val}</p>
                </div>
              ))}
            </div>

            {/* About */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {event.details.about}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {event.details.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:border-gray-200 transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: event.accentHex }}
                    />
                    <p className="text-sm text-gray-600">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs — client component */}
            <EventDetailTabs event={event} />
          </div>
        </div>

        <p className="text-center text-gray-300 text-xs pb-10 tracking-widest uppercase">
          Langtang Outdoor Festival · All Rights Reserved
        </p>
      </div>

      <style>{`
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

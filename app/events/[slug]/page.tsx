import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import { getEventBySlug, events } from "@/lib/events";
import EventDetailTabs from "./components/Eventstabsdetail";
import { AdventureStatsBar } from "@/app/adventures/[slug]/component/AdventureStatsbar";
import { EventStatsBar } from "./components/Event_Stats";

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
            className="object-cover object-[50%_70%]"
            sizes="100vw"
          />
          {/* Richer gradient layering */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Hero content — bottom-left anchored */}
        <div className="relative z-20 flex-1 flex items-end px-8 md:px-14 pb-14">
          <div
            className="max-w-2xl w-full"
            style={{
              animation: "heroIn 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Season tag */}
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.25em] uppercase text-white/50 mb-5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: event.accentHex }}
              />
              {event.season}
            </span>

            {/* Title */}
            <h1 className="font-display font-black text-white leading-[0.92] tracking-tight mb-4 text-3xl md:text-4xl lg:text-5xl">
              {event.title}
            </h1>

            {/* Accent rule */}
            <div
              className="w-10 h-[3px] rounded-full mb-5"
              style={{ background: event.accentHex }}
            />

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  text: event.date,
                },
                {
                  icon: (
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  text: event.location,
                },
              ].map((m) => (
                <span
                  key={m.text}
                  className="flex items-center gap-2 text-[12px] font-medium text-white/55 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  {m.icon}
                  {m.text}
                </span>
              ))}
            </div>

            {/* Description — styled as a pull quote */}
            <div
              className="border-l-2 pl-4"
              style={{ borderColor: event.accentHex }}
            >
              <p className="text-white/90 text-[15px] leading-[1.75] font-light max-w-lg">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="bg-white flex-1">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
          <div className="flex flex-col gap-14">
            {/* Quick stats using AdventureStatsBar */}
            <div className="flex flex-col gap-14">
              <EventStatsBar event={event} />
            </div>

            {/* About */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {event.details.about}
              </p>
            </div>
            {/* Highlights */}
            {/* Highlights */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                  Highlights
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.details.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200 overflow-hidden"
                  >
                    {/* Title */}
                    <h3 className="font-display font-bold text-gray-900 text-[15px] leading-snug tracking-tight">
                      {h.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className="w-6 h-px"
                      style={{ background: `${event.accentHex}60` }}
                    />

                    {/* Description */}
                    <p className="text-[13px] text-gray-500 leading-relaxed font-light flex-1">
                      {h.description}
                    </p>
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

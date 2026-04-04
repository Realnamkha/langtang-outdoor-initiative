import { getCulturalTourBySlug } from "@/lib/culture";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Activity, Clock } from "lucide-react";
import Navbar from "@/app/components/navbar";
import Itinerary from "@/components/ui/Itinerary";
import TripOverview from "./components/TripOverview";

export default async function CulturalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getCulturalTourBySlug(slug);
  if (!tour) notFound();

  return (
    <>
      <div
        className="min-h-screen bg-[#f8f7f4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Navbar transparent={false} />

        {/* ── HERO ── */}
        <section className="relative w-full flex items-center overflow-hidden bg-[#f4f9fd] pt-24 pb-16 md:pt-28 md:pb-24 min-h-[auto] md:min-h-[90vh]">
          {/* Glows */}
          <div className="absolute top-0 left-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-[#01baf0] opacity-[0.07] blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-60 h-60 md:w-[400px] md:h-[400px] rounded-full bg-[#0191c8] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* ── Image — stacks on top on mobile ── */}
            <div className="w-full md:w-[48%] flex justify-center">
              <div className="relative group">
                {/* Decorative offset frames — hidden on mobile to avoid overflow */}
                <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#01baf0]/20 z-0" />
                <div className="hidden md:block absolute -bottom-8 -right-8 w-[85%] h-[85%] rounded-3xl bg-[#01baf0]/8 z-0" />

                {/* Main image — shorter on mobile */}
                <div className="relative w-full max-w-[320px] h-[260px] sm:h-[340px] md:w-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(1,186,240,0.18),0_8px_24px_rgba(0,0,0,0.12)] z-10 mx-auto">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a]/60 via-transparent to-transparent" />
                </div>

                {/* Duration badge */}
                <div className="absolute -top-3 right-2 md:-top-4 md:-right-4 z-20 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#e8f3f9] px-3 py-2 md:px-4 md:py-2.5 flex items-center gap-2">
                  <Clock size={12} className="text-[#01baf0]" />
                  <span className="text-[11px] md:text-[12px] font-semibold text-[#0D1B2A]">
                    {tour.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Text ── */}
            <div className="w-full md:w-[52%] flex flex-col gap-5 md:gap-6 text-center md:text-left items-center md:items-start">
              <p className="text-[10px] md:text-[11px] font-semibold tracking-[2.5px] uppercase text-[#01baf0]">
                {tour.region}
              </p>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-black leading-[1.0] md:leading-[0.92] tracking-tight text-[#0D1B2A]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {tour.title}
              </h1>

              <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#01baf0] to-[#0191c8]" />

              <p className="text-[14px] md:text-[20px] text-[#4a6070] leading-[1.85] max-w-lg">
                {tour.punchline}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                {[
                  { icon: <Clock size={12} />, val: tour.duration },
                  { icon: <Activity size={12} />, val: tour.difficulty },
                  { icon: <MapPin size={12} />, val: tour.region },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-[11px] md:text-[12px] font-medium text-[#0D1B2A] bg-white border border-[#e0f0f9] rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-sm"
                  >
                    <span className="text-[#01baf0]">{item.icon}</span>
                    {item.val}
                  </span>
                ))}
              </div>

              {/* CTAs — full width on mobile */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full md:w-auto">
                <button className="w-full sm:w-auto bg-[#01baf0] hover:bg-[#0191c8] text-white font-semibold text-[14px] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(1,186,240,0.4)] hover:-translate-y-0.5">
                  Book This Tour
                </button>
                <button className="w-full sm:w-auto border border-[#cce8f4] text-[#0191c8] font-semibold text-[13px] px-6 py-4 rounded-full hover:bg-[#e8f6fd] transition-colors duration-200">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <TripOverview tour={tour} />

        {/* ── ITINERARY ── */}
        {/* ── COMING SOON ── */}
        <section className="relative w-full py-24 md:py-36 overflow-hidden bg-[#050f1a]">
          {/* Ambient glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#01baf0] opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#0191c8] opacity-[0.05] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#01baf0] opacity-[0.05] blur-3xl pointer-events-none" />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#01baf0 1px, transparent 1px), linear-gradient(90deg, #01baf0 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              More Details <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01baf0] to-[#0191c8]">
                Coming Soon
              </span>
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] text-[#7a99ad] leading-relaxed max-w-xl">
              We're crafting the full itinerary, day-by-day highlights,
              accommodation details, and everything else you need to plan your
              perfect journey. Stay tuned — it's going to be worth the wait.
            </p>

            {/* Animated dots / pulse */}
            <div className="flex items-center gap-2 py-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#01baf0] animate-bounce"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

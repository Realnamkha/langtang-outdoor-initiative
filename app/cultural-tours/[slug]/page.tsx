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
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-[#f8f7f4]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Navbar transparent={false} />

        {/* ── HERO ── */}
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#f4f9fd]">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#01baf0] opacity-[0.07] blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0191c8] opacity-[0.06] blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20 py-24 flex flex-col md:flex-row items-center gap-16">
            {/* Left — Image */}
            <div className="w-full md:w-[48%] flex justify-center">
              <div className="relative group">
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#01baf0]/20 z-0" />
                <div className="absolute -bottom-8 -right-8 w-[85%] h-[85%] rounded-3xl bg-[#01baf0]/8 z-0" />

                <div className="relative w-72 h-[430px] md:w-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(1,186,240,0.18),0_8px_24px_rgba(0,0,0,0.12)] z-10">
                  <Image
                    src={tour.imageSrc}
                    alt={tour.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-[10px] tracking-widest uppercase mb-0.5">
                        From
                      </p>
                      <p
                        className="text-white text-3xl font-black leading-none"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {tour.price}
                      </p>
                      <p className="text-white/50 text-[11px]">per person</p>
                    </div>
                    <span className="bg-[#01baf0] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                      {tour.difficulty}
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#e8f3f9] px-4 py-2.5 flex items-center gap-2">
                  <Clock size={13} className="text-[#01baf0]" />
                  <span className="text-[12px] font-semibold text-[#0D1B2A]">
                    {tour.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Text */}
            <div className="w-full md:w-[52%] flex flex-col gap-6">
              <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#01baf0]">
                {tour.region}
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[0.92] tracking-tight text-[#0D1B2A]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {tour.title}
              </h1>

              <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#01baf0] to-[#0191c8]" />

              <p className="text-[15px] text-[#4a6070] leading-[1.85] max-w-lg">
                {tour.description.slice(0, 220)}…
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Clock size={13} />, val: tour.duration },
                  { icon: <Activity size={13} />, val: tour.difficulty },
                  { icon: <MapPin size={13} />, val: tour.region },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-[12px] font-medium text-[#0D1B2A] bg-white border border-[#e0f0f9] rounded-full px-4 py-2 shadow-sm"
                  >
                    <span className="text-[#01baf0]">{item.icon}</span>
                    {item.val}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button className="bg-[#01baf0] hover:bg-[#0191c8] text-white font-semibold text-[14px] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(1,186,240,0.4)] hover:-translate-y-0.5">
                  Book This Tour
                </button>
                <button className="border border-[#cce8f4] text-[#0191c8] font-semibold text-[13px] px-6 py-4 rounded-full hover:bg-[#e8f6fd] transition-colors duration-200">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <TripOverview tour={tour} />

        {/* ── ITINERARY ── */}
        <Itinerary itinerary={tour.itinerary} />
      </div>
    </>
  );
}

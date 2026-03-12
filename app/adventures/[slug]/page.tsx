import Navbar from "@/app/components/navbar";
import { adventures, getAdventureBySlug } from "@/lib/adventure";
import { AdventureStatsBar } from "./component/AdventureStatsbar";
import Itinerary from "@/components/ui/Itinerary";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Star } from "lucide-react";

export function generateStaticParams() {
  return adventures.map((a) => ({ slug: a.slug }));
}

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const adventure = getAdventureBySlug(slug);
  if (!adventure) notFound();

  return (
    <main className="bg-[#f8f7f4] text-black overflow-x-hidden">
      <Navbar transparent={false} />

      {/* ── Hero Intro ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#01baf0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                {adventure.title}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What to{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Expect
              </span>
            </h1>

            <div
              className="w-10 h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, #01baf0, #0191c8)" }}
            />

            <p
              className="text-[#3a3530] text-[1.05rem] leading-[1.85]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {adventure.description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[440px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={adventure.imageSrc}
              alt={adventure.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <span className="text-xs font-bold text-[#0a0a0a] uppercase tracking-wide">
                {adventure.difficulty}
              </span>
              <span className="w-px h-3 bg-gray-300" />
              <span className="text-xs text-gray-500">
                {adventure.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <AdventureStatsBar adventure={adventure} />

      {/* ── Highlights & Included ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Highlights */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#01baf0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Highlights
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {adventure.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-[9px] font-bold"
                    style={{
                      background: "linear-gradient(135deg, #01baf0, #0191c8)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{h}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#01baf0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                What&apos;s Included
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {adventure.whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#01baf0] mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Itinerary ── */}
      <section className="bg-white">
        <Itinerary itinerary={adventure.itinerary} />
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-3xl px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10"
            style={{
              background: "linear-gradient(135deg, #01baf0 0%, #0171a8 100%)",
            }}
          >
            {/* Left */}
            <div className="flex flex-col gap-4 text-white max-w-xl">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-white/70" fill="currentColor" />
                <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold">
                  Book Your Spot
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Ready for {adventure.title}?
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Small groups, experienced local guides, and authentic Himalayan
                experiences. Every detail handled — all you have to do is show
                up.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              {adventure.price && (
                <p className="text-white/70 text-sm">
                  From{" "}
                  <span className="text-white text-2xl font-black">
                    {adventure.price}
                  </span>{" "}
                  <span className="text-white/60 text-xs">per person</span>
                </p>
              )}
              <button className="w-full px-8 py-3.5 rounded-xl bg-white text-[#0191c8] font-bold text-sm tracking-wide hover:bg-white/90 active:scale-95 transition-all duration-150 shadow-lg">
                Book This Adventure
              </button>
              <Link
                href="/contact"
                className="text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
              >
                Ask a Question →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

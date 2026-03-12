"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import FeatureCard from "@/components/ui/Feature_Card";

const features = [
  {
    img: "/landscape_01.jpg",
    title: "Dramatic Landscapes",
    desc: "Trek through dense rhododendron forests, glacial moraines, and open yak pastures with towering peaks on every horizon.",
  },
  {
    img: "/expe_04.jpg",
    title: "Buddhist Culture",
    desc: "Pass ancient gompas, mani walls, and monasteries. The Tamang people welcome trekkers with warmth rooted in centuries of tradition.",
  },
  {
    img: "/nature_01.jpg",
    title: "Untouched Nature",
    desc: "The Langtang National Park shelters red pandas, Himalayan tahr, and snow leopards within some of Asia's most pristine wilderness.",
  },
];

export default function LangtangIntro() {
  return (
    <main className="overflow-x-hidden">
      <Navbar transparent={false} />

      {/* ── Intro Section ── */}
      <section className="bg-[#f8f7f4] min-h-screen py-24 px-6 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Langtang Valley
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-5">
              <p
                className="text-[#3a3530] text-[1.05rem] leading-[1.85]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                The Langtang Valley has been home to the Tamang people for
                centuries — a community with deep Tibetan roots whose ancestors
                are believed to have crossed the Himalayas from Tibet long ago,
                settling along the valley&apos;s fertile river banks and
                establishing a culture rich in Buddhist devotion.
              </p>

              <p className="text-[#7a756e] text-base leading-[1.85]">
                Ancient trade routes once threaded through this corridor,
                linking Nepal&apos;s lowlands with the Tibetan plateau. Traders,
                monks, and pilgrims passed beneath the glacier-draped flanks of
                Langtang Lirung (7,234m), leaving behind a trail of monasteries,
                mani walls, and prayer flags that still mark the landscape
                today.
              </p>

              <p className="text-[#7a756e] text-base leading-[1.85]">
                In 1976, the valley was designated Nepal&apos;s first Himalayan
                national park, protecting not only its extraordinary
                biodiversity — red pandas, snow leopards, and Himalayan tahr —
                but also the living heritage of the communities who have called
                it home for generations. A devastating earthquake in 2015
                brought immense loss, yet the valley has since been
                painstakingly rebuilt, its spirit and traditions as enduring as
                the mountains above.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[440px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/expe_05.jpg"
              alt="Langtang Valley"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
            {/* Depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3">
              Why{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Langtang?
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              A trek unlike any other — raw nature, living culture, and
              Himalayan silence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          {/* Label */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#01baf0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
              Get Started
            </span>
            <div className="h-px w-8 bg-[#01baf0]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
            Ready to Trek{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Langtang?
            </span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed">
            Our experienced local guides will take you safely through every step
            of the journey. Small groups, personalised itineraries, authentic
            experiences.
          </p>

          <div className="flex items-center justify-center gap-5 pt-2">
            <Link
              href="/expeditions/langtang-valley"
              className="px-7 py-3 rounded-lg text-white font-semibold text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all duration-150"
              style={{ background: "linear-gradient(90deg, #01baf0, #0191c8)" }}
            >
              Book This Trek
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0191c8] hover:text-[#01baf0] underline underline-offset-4 transition-colors"
            >
              Ask a Question →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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
    img: "/expe_01.jpg",
    title: "Untouched Nature",
    desc: "The Langtang National Park shelters red pandas, Himalayan tahr, and snow leopards within some of Asia's most pristine wilderness.",
  },
];

export default function LangtangIntro() {
  return (
    <main>
      <Navbar transparent={false} />
      {/* ── Intro Section ── */}
      <section className="bg-[#f8f7f4] py-24 px-6 min-h-screen flex justify-center items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Heading */}
          <h2
            className="text-5xl font-black text-center tracking-tight leading-[0.95] text-[#0a0a0a] mb-16"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Langtang{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Valley
            </span>
          </h2>

          {/* Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/langtang.jpg"
                alt="Langtang Valley"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6 mt-2">
              <p
                className="text-[#3a3530] text-lg leading-relaxed"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Nestled beneath the towering Langtang Lirung, the Langtang
                Valley is one of Nepal&apos;s most breathtaking trekking
                destinations — a place where snow-capped peaks, ancient Buddhist
                monasteries, and vast alpine meadows come together in quiet,
                sacred harmony.
              </p>

              <div
                className="w-12 h-px"
                style={{
                  background: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              />

              <p className="text-[#7a756e] text-base leading-relaxed">
                Home to the warm Tamang people, the valley breathes with
                centuries of Tibetan Buddhist culture — spinning prayer wheels,
                stone mani walls, and colourful prayer flags dancing across
                mountain winds.
              </p>

              <p className="text-[#7a756e] text-base leading-relaxed">
                Home to the warm Tamang people, the valley breathes with
                centuries of Tibetan Buddhist culture — spinning prayer wheels,
                stone mani walls, and colourful prayer flags dancing across
                mountain winds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3">
              Why{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Langtang?
              </span>
            </h3>
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

      {/* ── Trek Info Section ── */}
      <section className="bg-[#f8f7f4] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-[#01baf0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
                Trek Overview
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight">
              What to{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
                }}
              >
                Expect
              </span>
            </h3>

            <p className="text-gray-500 text-base leading-relaxed">
              The Langtang Valley trek is suitable for moderately experienced
              trekkers. Starting from Syabrubesi, the trail winds through
              subtropical forests, traditional Tamang villages, and high alpine
              terrain before reaching the stunning Kyanjin Gompa at 3,870m.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Acclimatisation days at Kyanjin allow you to hike to Tsergo Ri
              (4,984m) for panoramic views of Langtang Lirung, Ganesh Himal, and
              beyond — one of the most rewarding viewpoints in all of Nepal.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-2">
              {[
                { label: "Difficulty", value: "Moderate" },
                { label: "Start Point", value: "Syabrubesi" },
                { label: "Highest Point", value: "Tsergo Ri 4,984m" },
                { label: "Trek Style", value: "Tea House" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#0a0a0a]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/expe_05.jpg"
              alt="Kyanjin Gompa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h3 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
            Ready to Trek{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Langtang?
            </span>
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Our experienced local guides will take you safely through every step
            of the journey. Small groups, personalised itineraries, authentic
            experiences.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link
              href="/expeditions/langtang-valley"
              className="px-7 py-3 rounded-lg text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
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

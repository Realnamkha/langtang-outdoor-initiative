"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

const CulturalHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#f0f7fc]">
      {/* Navbar */}
      <Navbar transparent={false} />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-24 md:py-32 min-h-[calc(100vh-72px)]">
        {/* Left — Image */}
        <div className="w-full md:w-[55%] flex justify-center">
          <div className="relative group">
            {/* Image card */}
            <div className="relative w-72 h-[360px] sm:h-[420px] md:w-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(1,186,240,0.15),0_4px_16px_rgba(0,0,0,0.1)] z-10">
              <Image
                src="/buddhist_03.jpg"
                alt="Buddhist culture"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div className="w-full md:w-[45%] flex flex-col gap-4 md:gap-6 mt-8 md:mt-0">
          {/* Eyebrow */}
          <p className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#01baf0]">
            Sacred Langtang Valley
          </p>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] md:leading-[0.95] tracking-tight text-[#0D1B2A]"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Culture &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Tradition
            </span>
          </h1>

          {/* Description */}
          <p className="text-[15px] sm:text-[15px] text-[#4a6070] leading-relaxed max-w-md">
            Cultural Tours in Langtang are created with a purpose to revive the
            vanishing traditions of the valley by respectfully weaving local
            life into travel. Here, culture is not a display; it is identity,
            shaped by daily practices, beliefs, and generations of lived
            experience. This is more than a visit, it’s a responsibility. Travel
            not as a stranger passing through, but as someone who contributes to
            preserving a living heritage. Be part of Langtang’s story, and help
            keep its culture alive through your journey.
          </p>
        </div>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default CulturalHero;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.8) {
  //       setVisible(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/lirung_01.jpg"
        alt="Langtang Mountain panorama"
        fill
        priority
        className="object-cover scale-105 object-[20%_center] sm:object-center"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-[30vh] sm:justify-center sm:pt-0 text-center text-white px-6">
        <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
          Langtang
          <br className="sm:hidden" />{" "}
          <span className="text-white">Outdoor Initiative</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm sm:text-base text-white md:text-lg leading-relaxed">
          We don't just show you the mountain, we invite you into heartbeat of
          the Langtang Valley
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/langtang"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Discover Langtang
          </Link>
        </div>
      </div>

      {/* ── Focus Toast ── */}
      {visible && (
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 text-white text-xs font-medium"
            style={{
              background: "rgba(6,13,20,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(1,186,240,0.3)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#01baf0] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#01baf0]" />
            </span>
            Focused only on{" "}
            <span className="text-[#01baf0] font-semibold">
              Langtang Valley
            </span>
            <button
              onClick={() => setVisible(false)}
              className="ml-1 opacity-40 hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

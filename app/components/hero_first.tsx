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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-6">
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
        <div className="fixed bottom-8 right-6 z-50 max-w-[280px]">
          <div
            className="relative rounded-2xl border border-white/20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,13,20,0.92) 0%, rgba(6,13,20,0.85) 100%)",
              backdropFilter: "blur(24px) saturate(1.6)",
              WebkitBackdropFilter: "blur(24px) saturate(1.6)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(1,186,240,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="px-5 py-4 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#01baf0] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#01baf0]" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#01baf0]">
                  Our Focus
                </span>
              </div>

              <p className="text-[15px] font-semibold text-white leading-snug">
                We are focused only on{" "}
                <span className="text-[#01baf0]">Langtang Valley</span>
              </p>

              <p className="mt-1.5 text-[11px] text-white/45 leading-relaxed">
                Deep local knowledge. One valley. Done right.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

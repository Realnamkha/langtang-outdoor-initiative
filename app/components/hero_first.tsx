"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 6000);

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* CTA */}
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
        <div
          className={`
            fixed bottom-8 right-6 z-50 max-w-[280px]
            transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${
              show
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-16 translate-y-16 opacity-0"
            }
          `}
        >
          {/* Card */}
          <div
            className="relative rounded-2xl border border-white/20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)",
              backdropFilter: "blur(24px) saturate(1.6)",
              WebkitBackdropFilter: "blur(24px) saturate(1.6)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.10), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Animated left accent bar */}

            <div className="px-5 py-4 pl-6">
              {/* Eyebrow */}
              <div
                className={`
                  flex items-center gap-2 mb-2
                  transition-all duration-500 delay-300
                  ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                `}
              >
                {/* Ping dot */}
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#01baf0] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#01baf0]" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#01baf0]">
                  Our Focus
                </span>
              </div>

              {/* Main text */}
              <p
                className={`
                  text-[15px] font-semibold text-white leading-snug
                  transition-all duration-600 delay-[400ms]
                  ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}
              >
                We are focused only on{" "}
                <span className="text-[#01baf0]">Langtang Valley</span>
              </p>

              {/* Sub text */}
              <p
                className={`
                  mt-1.5 text-[11px] text-white/45 leading-relaxed
                  transition-all duration-600 delay-500
                  ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}
              >
                Deep local knowledge. One valley. Done right.
              </p>

              {/* Dismiss */}
              <button
                onClick={() => setVisible(false)}
                className={`
                  mt-3 text-[10px] font-medium text-white/30 hover:text-white/60
                  transition-all duration-300 delay-700
                  ${show ? "opacity-100" : "opacity-0"}
                `}
              >
                Dismiss ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

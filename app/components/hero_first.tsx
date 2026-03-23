import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/lirung_01.jpg"
        alt="Langtang Mountain panorama"
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />

      {/* Gradient Overlay — richer than flat black */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle vignette */}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight whitespace-nowrap">
          Langtang{" "}
          <span className="text-primary italic font-light">
            Outdoor Initiative
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg leading-relaxed">
          Experience breathtaking Himalayan adventures with Langtang Outdoor
          Initiative — where the mountains meet your spirit.
        </p>

        {/* CTA group */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/langtang"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Discover Langtang
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/50 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="h-4 w-4 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/pic3.jpeg"
        alt="Langtang Mountain"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay — stronger at bottom for silhouette blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold mb-5">
          Langtang · Nepal
        </p>

        <h1
          className="text-5xl md:text-7xl font-black leading-[1.0] tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Langtang{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #01baf0, #38d9ff)",
            }}
          >
            Expeditions
          </span>
        </h1>

        <div
          className="w-12 h-[2px] rounded-full my-6 mx-auto"
          style={{ background: "linear-gradient(90deg, #01baf0, #38d9ff)" }}
        />

        <p className="max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
          Experience breathtaking Himalayan adventures with Langtang Outdoor
          Initiative.
        </p>
      </div>

      {/* ── Langtang Lirung Mountain Silhouette ── */}
      {/*
        Langtang Lirung (7,234m) has a distinctive asymmetric profile:
        - A broad western shoulder rising gradually
        - A sharp main summit pyramid slightly right of centre
        - A secondary northeast peak
        - Jagged ridgelines dropping to both sides
        The silhouette fills the bottom of the hero and transitions into
        the page background (#f8f7f4).
      */}

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-24"
        >
          <path
            d="
              M0,80 L0,65
              L60,58 L100,62 L140,50 L170,55
              L210,42 L240,48
              L280,30 L310,38
              L350,18 L370,28
              L400,8 L420,20
              L445,4 L460,14
              L478,0 L492,12
              L510,6 L525,18
              L545,10 L565,25
              L595,14 L625,30
              L660,20 L695,38
              L730,28 L760,42
              L800,32 L835,48
              L870,38 L905,52
              L940,44 L975,56
              L1010,46 L1050,58
              L1100,50 L1150,60
              L1200,54 L1260,62
              L1320,56 L1380,64
              L1440,58 L1440,80 Z
            "
            fill="#F8FBFF"
          />
        </svg>
      </div>
    </section>
  );
}

import Image from "next/image";

const AdventuresHero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/expe_04.jpg"
        alt="Langtang Adventures"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-gradient-to-r from-[#01baf0] to-[#0191c8]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Langtang Outdoor Initiative
          </span>
          <span className="block h-px w-8 bg-gradient-to-r from-[#0191c8] to-[#01baf0]" />
        </div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Langtang{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
            }}
          >
            Adventures
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
          Boulder, trek, climb, and soar — five ways to experience the raw heart
          of the Langtang Himalayas.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
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
};

export default AdventuresHero;

import Image from "next/image";

const AdventuresHero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/landscape_01.jpg"
        alt="Langtang Adventures"
        fill
        priority
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pb-16">
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
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="
      M 0 120
      L 0 90
      L 30 85
      L 60 72
      L 90 58
      L 110 42
      L 128 28
      L 140 18
      L 152 24
      L 162 32
      L 175 22
      L 185 12
      L 196 20
      L 208 30
      L 220 38
      L 235 44
      L 252 50
      L 268 56
      L 285 52
      L 300 48
      L 318 44
      L 335 50
      L 352 55
      L 368 48
      L 382 42
      L 396 38
      L 410 34
      L 422 30
      L 434 36
      L 448 42
      L 462 50
      L 478 55
      L 495 52
      L 512 48
      L 528 44
      L 542 40
      L 556 36
      L 568 32
      L 578 28
      L 588 24
      L 598 30
      L 610 38
      L 624 44
      L 640 50
      L 658 54
      L 675 58
      L 692 62
      L 710 60
      L 728 56
      L 745 52
      L 760 48
      L 774 44
      L 786 40
      L 798 38
      L 812 42
      L 828 46
      L 845 50
      L 862 52
      L 878 48
      L 892 42
      L 904 36
      L 916 30
      L 926 24
      L 936 18
      L 946 14
      L 956 20
      L 966 28
      L 978 36
      L 992 44
      L 1008 50
      L 1024 46
      L 1038 40
      L 1050 34
      L 1062 28
      L 1072 22
      L 1082 18
      L 1092 24
      L 1104 32
      L 1118 40
      L 1134 48
      L 1150 52
      L 1166 48
      L 1180 44
      L 1194 40
      L 1208 44
      L 1222 50
      L 1238 55
      L 1256 60
      L 1275 65
      L 1295 68
      L 1320 70
      L 1350 72
      L 1390 75
      L 1440 78
      L 1440 120
      Z
    "
            fill="#F8FBFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default AdventuresHero;

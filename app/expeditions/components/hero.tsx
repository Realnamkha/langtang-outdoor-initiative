import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full flex justify-center">
      {/* Background Image */}
      <Image
        src="/expe_04.jpg"
        alt="Langtang Mountain"
        fill
        priority
        className="object-cover object-[center_90%]"
      />

      {/* Dark Overlay — stronger at bottom for silhouette blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
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
            Expeditions
          </span>
        </h1>

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
          className="w-full h-12 md:h-24"
        >
          <path
            d="
M -29 395 L -30 301 L -1 312 L 18 299 L 49 284 L 64 267 L 95 261 L 128 228 L 153 221 L 165 220 L 180 198 L 191 194 L 215 194 L 238 208 L 266 213 L 304 215 L 335 216 L 357 215 L 395 188 L 400 186 L 406 181 L 420 181 L 379 199 L 393 186 L 411 181 L 428 178 L 430 177 L 444 177 L 463 173 L 491 164 L 520 165 L 533 151 L 552 149 L 575 152 L 596 151 L 619 146 L 640 149 L 661 139 L 682 130 L 693 122 L 702 114 L 714 104 L 728 95 L 736 98 L 771 113 L 806 132 L 832 143 L 849 165 L 860 176 L 881 192 L 925 203 L 899 199 L 967 208 L 985 209 L 1005 209 L 1034 212 L 1061 199 L 1087 183 L 1107 167 L 1125 152 L 1161 171 L 1275 199 L 720 347 Z
            "
            fill="#F8FBFF"
          />
        </svg>
      </div>
    </section>
  );
}

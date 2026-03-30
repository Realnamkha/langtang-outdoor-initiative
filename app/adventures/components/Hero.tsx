import Image from "next/image";

export default function AdventureHero() {
  return (
    <section className="relative h-[70vh] w-full flex justify-center">
      {/* Background Image */}
      <Image
        src="/landscape_01.jpg"
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
            Adventures
          </span>
        </h1>

        <p className="mt-4 max-w-lg text-sm md:text-base text-white/60 leading-relaxed">
          Boulder, trek, climb, and soar — five ways to experience the raw heart
          of the Langtang Himalayas.
        </p>
      </div>
    </section>
  );
}

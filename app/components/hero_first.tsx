import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/pic2.jpeg"
        alt="Langtang Mountain"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover <span className="text-primary">Langtang</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Experience breathtaking Himalayan adventures with Langtang Outdoor
          Initiative.
        </p>

        <button className="mt-6 px-6 py-3 rounded-lg bg-primary hover:opacity-90 transition">
          Explore Treks
        </button>
      </div>
    </section>
  );
}

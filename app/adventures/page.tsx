import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Navbar */}

      {/* Background Image */}
      <Image
        src="/people_03.jpg"
        alt="Langtang Mountain"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span>Langtang Expediations</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
          Experience breathtaking Himalayan adventures with Langtang Outdoor
          Initiative.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <span className="block w-3 h-3 rounded-full bg-white mb-2"></span>
          <span className="block w-3 h-3 rounded-full bg-white/70 mb-2"></span>
          <span className="block w-3 h-3 rounded-full bg-white/40"></span>
        </div>
      </div>
    </section>
  );
}

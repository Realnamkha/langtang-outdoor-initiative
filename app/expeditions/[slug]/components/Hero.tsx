// _components/Hero.tsx

import Image from "next/image";
import type { Expedition } from "@/lib/expedition";

export default function Hero({ expedition }: { expedition: Expedition }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "55vh", minHeight: 580 }}
    >
      <Image
        src={expedition.imageSrc}
        alt={expedition.title}
        fill
        priority
        className="object-cover"
      />

      {/* bottom fade */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#080c12]" />
      {/* left vignette */}
      <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

      {/* breadcrumb */}
      <div className="absolute top-8 left-10 z-10">
        <span className="font-mono-dm text-[10px] tracking-[0.2em] uppercase text-white/50">
          Expeditions / {expedition.title}
        </span>
      </div>

      {/* title block */}
      <div className="absolute inset-0 flex flex-col justify-end px-10 pb-20">
        <h1
          className="font-display text-white leading-[0.92]"
          style={{ fontSize: "clamp(3.2rem, 8vw, 6.5rem)", fontWeight: 300 }}
        >
          {expedition.title}
        </h1>
      </div>
    </section>
  );
}

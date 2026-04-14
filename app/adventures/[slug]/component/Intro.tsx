// _components/Hero.tsx

import Image from "next/image";
import { Adventure } from "@/lib/adventure";

export default function Hero({ adventure }: { adventure: Adventure }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "55vh", minHeight: 580 }}
    >
      <Image
        src={
          adventure.title === "HighLine-SlackLin"
            ? adventure.imageSrc2!
            : adventure.imageSrc
        }
        alt={adventure.title}
        fill
        priority
        className="object-cover object-[center_55%]"
      />

      {/* bottom fade */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#080c12]" />
      {/* left vignette */}
      <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

      {/* title block */}
      <div className="absolute inset-0 flex flex-col justify-end px-10 pb-20">
        <h1
          className="font-display text-white leading-[0.92]"
          style={{ fontSize: "clamp(3.2rem, 8vw, 4.5rem)", fontWeight: 300 }}
        >
          {adventure.title}
        </h1>
      </div>
    </section>
  );
}

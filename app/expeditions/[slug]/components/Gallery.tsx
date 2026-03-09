import Image from "next/image";
import type { Expedition } from "@/lib/expedition";
import SectionHeading from "./SectionHeading";

export default function Gallery({ expedition }: { expedition: Expedition }) {
  if (expedition.gallery.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 pb-16">
      <SectionHeading>
        Photo <em className="text-[#01baf0]">Gallery</em>
      </SectionHeading>

      <div className="grid grid-cols-3 gap-3">
        {expedition.gallery.map((src, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: i === 0 ? "4/3" : "1/1",
              gridColumn: i === 0 ? "span 2" : "span 1",
            }}
          >
            <Image
              src={src}
              alt={`${expedition.title} photo ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

const logos = ["/1.png", "/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

export default function LogoStrip() {
  return (
    <section className="w-full py-12 border-y border-gray-100 overflow-hidden group">
      <div className="flex w-max animate-marquee gap-20 group-hover:paused">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="relative h-10 w-28 shrink-0">
            <Image src={src} alt="" fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

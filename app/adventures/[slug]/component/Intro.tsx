import Image from "next/image";

interface IntroProps {
  img: string;
  title: string;
  desc: string;
}

const Intro = ({ title, desc, img }: IntroProps) => {
  return (
    <section className="bg-[#f8f7f4] py-24 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-[#01baf0]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#01baf0] font-semibold">
              {title} Overview
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight leading-tight">
            What to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #01baf0, #0191c8)",
              }}
            >
              Expect
            </span>
          </h3>

          <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
        </div>

        {/* Image */}
        <div className="relative w-full h-96 lg:h-120 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={img}
            alt="Kyanjin Gompa"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;

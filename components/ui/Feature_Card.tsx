import Image from "next/image";

interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ img, title, desc }: FeatureCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Subtle bottom fade for blending into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Accent line + title */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 shrink-0">
            <Image src="/2.png" alt="" fill className="object-contain" />
          </div>
          <h4
            className="text-base font-black text-[#0a0a0a] tracking-tight text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {title}
          </h4>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed pl-10">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

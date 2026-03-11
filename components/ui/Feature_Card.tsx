import Image from "next/image";

interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ img, title, desc }: FeatureCardProps) => {
  return (
    <div className="bg-[#f8f7f4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
      <div className="relative w-full h-48">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold text-[#0a0a0a] mb-2">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type SimpleCardProps = {
  title: string;
  imageSrc: string;
  link: string;
};

export const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  imageSrc,
  link,
}) => {
  return (
    <Link
      href={link}
      className="group relative block w-full aspect-6/7 rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] hover:shadow-[0_12px_32px_rgba(1,186,240,0.2)] transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
        priority
      />

      {/* Gradient — deepens on hover for better contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-500" />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex items-center justify-center px-5 py-4 bg-white/20 border-t border-white/10">
          <span
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            className="text-white text-2xl font-bold tracking-wide leading-tight"
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

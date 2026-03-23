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
      className="group relative block w-full aspect-square rounded-3xl overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`Explore ${title}`}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

      {/* Top-right arrow — appears on hover */}
      <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-10 flex flex-col gap-2">
        {/* Title + arrow row */}
        <div className="flex items-end justify-between gap-3">
          <span className="text-white text-xl font-bold tracking-wide leading-tight">
            {title}
          </span>
          <span className="text-primary text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
};

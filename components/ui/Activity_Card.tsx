"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type SimpleCardProps = {
  title: string;
  imageSrc: string;
  link: string;
  tag?: string;
};

export const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  imageSrc,
  link,
  tag,
}) => {
  return (
    <Link
      href={link}
      className="group relative flex flex-col w-full rounded-3xl overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`Explore ${title}`}
    >
      {/* Image container — taller, not square */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover scale-100 group-hover:scale-108 transition-transform duration-700 ease-in-out"
          style={{ transform: "scale(1)" }}
        />

        {/* Multi-stop gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent group-hover:from-black/85 transition-all duration-500" />

        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Tag — top left */}
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white bg-white/15 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              {tag}
            </span>
          </div>
        )}

        {/* Top-right arrow icon */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <svg
            className="w-4 h-4 text-white"
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
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-12">
          {/* Title */}
          <h3 className="text-white text-2xl font-bold tracking-tight leading-snug mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
            {title}
          </h3>

          {/* Animated CTA bar */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="h-[1.5px] w-0 group-hover:w-8 bg-primary transition-all duration-500 ease-out rounded-full" />
            <span className="text-white/70 group-hover:text-primary text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 ease-out whitespace-nowrap">
              Explore
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

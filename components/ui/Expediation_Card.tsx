"use client";

import ClockIcon from "@/public/assets/clock";
import MountainIcon from "@/public/assets/mountain";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ExpeditionCardProps = {
  title?: string;
  imageSrc: string;
  date?: string;
  duration?: string;
  altitude?: string;
  activity?: string;
  region?: string;
  link: string;
};

export const ExpeditionCard: React.FC<ExpeditionCardProps> = ({
  title,
  imageSrc,
  date,
  duration,
  altitude,
  activity,
  region,
  link,
}) => {
  const cardTitle = title || link;

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden flex flex-col shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(1,186,240,0.18)] transition-all duration-500 hover:-translate-y-2">
      {/* Image container */}
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={imageSrc}
          alt={cardTitle}
          className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />

        {/* Deep cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top badges row */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
          {activity && (
            <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {activity}
            </span>
          )}
          {date && (
            <span className="ml-auto bg-[#01baf0] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              {date}
            </span>
          )}
        </div>

        {/* Title overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <h3 className="font-extrabold text-white text-lg leading-snug tracking-tight drop-shadow-sm line-clamp-2">
            {cardTitle}
          </h3>
          {region && (
            <p className="text-white/70 text-xs font-medium mt-1 tracking-wide uppercase">
              {region}
            </p>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Meta pills */}
        {(duration || altitude) && (
          <div className="flex items-center gap-3">
            {duration && (
              <div className="flex items-center gap-2 bg-[#F0FAFE] border border-[#01baf0]/15 rounded-full px-3.5 py-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-[#01baf0]" />
                <span className="text-xs font-semibold text-[#0D1B2A]">
                  {duration}
                </span>
              </div>
            )}
            {altitude && (
              <div className="flex items-center gap-2 bg-[#F0FAFE] border border-[#01baf0]/15 rounded-full px-3.5 py-1.5">
                <MountainIcon className="w-3.5 h-3.5 text-[#01baf0]" />
                <span className="text-xs font-semibold text-[#0D1B2A]">
                  {altitude}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Thin divider */}
        <div className="h-px w-full bg-linear-to-r from-[#01baf0]/20 via-gray-100 to-transparent" />

        {/* CTA */}
        <Link
          href={link}
          rel="noopener noreferrer"
          className="group/btn relative flex items-center justify-between w-full rounded-2xl bg-[#01baf0] hover:bg-[#01a8d9] px-5 py-3.5 text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(1,186,240,0.25)] hover:shadow-[0_4px_24px_rgba(1,186,240,0.45)] overflow-hidden"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <span className="relative z-10">
            {title ? "View Details" : "Explore"}
          </span>
          <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover/btn:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
};

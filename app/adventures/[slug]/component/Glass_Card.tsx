"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Clock, Mountain, ArrowRight } from "lucide-react";

type MyCardProps = {
  title: string;
  subHeadline?: string;
  hook?: string;
  imageSrc: string;
  date?: string;
  duration?: string;
  altitude?: string;
  activity?: string;
  region?: string;
  link: string;
};

export default function EventCardImage({
  title,
  subHeadline,
  hook,
  imageSrc,
  date,
  duration,
  altitude,
  activity,
  region,
  link,
}: MyCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-black transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      {/* Image */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        {/* Pills */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
          <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-[#01baf0]/90 text-white uppercase">
            {activity}
          </span>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
        {/* Title + SubHeadline + Hook */}
        <div className="mb-4">
          <h2 className="text-[22px] font-bold text-white leading-snug mb-1 tracking-tight">
            {title}
          </h2>
          {subHeadline && (
            <p className="text-sm text-white/60 mb-1">{subHeadline}</p>
          )}
          {hook && <p className="text-xs text-white/60 mb-3">{hook}</p>}
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-white/65 text-[13px]">
          {date && (
            <div className="flex items-center gap-1.5">
              <Calendar
                className="w-3.5 h-3.5 text-[#01baf0]"
                strokeWidth={1.8}
              />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#01baf0]" strokeWidth={1.8} />
              <span>{duration}</span>
            </div>
          )}
          {altitude && (
            <div className="flex items-center gap-1.5">
              <Mountain
                className="w-3.5 h-3.5 text-[#01baf0]"
                strokeWidth={1.8}
              />
              <span>{altitude}</span>
            </div>
          )}
          {region && (
            <div className="flex items-center gap-1.5">
              <MapPin
                className="w-3.5 h-3.5 text-[#01baf0]"
                strokeWidth={1.8}
              />
              <span>{region}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-4" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 w-full">
          <span className="text-[13px] text-white/40 font-medium mb-2 sm:mb-0">
            Langtang Outdoor Initiative
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // <-- prevent the card Link click
              window.open(
                "https://wa.me/+9779761662049?text=Hi%20I%20am%20interested%20in%20this%20event",
                "_blank"
              );
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#01baf0] hover:bg-[#0199cc] text-white text-[14px] font-semibold px-5 py-3 rounded-full transition-all duration-200 sm:group-hover:gap-3"
          >
            <span>Check Availability</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 sm:group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[#01baf0]/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

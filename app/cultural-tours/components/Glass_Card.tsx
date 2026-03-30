import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Clock, Mountain, ArrowRight } from "lucide-react";

type MyCardProps = {
  title?: string;
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
  imageSrc,
  date,
  duration,
  altitude,
  activity,
  region,
  link,
}: MyCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="relative rounded-2xl overflow-hidden bg-black transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        {/* ── Image ── */}
        <div className="relative h-[420px] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title || "event image"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Multi-stop gradient for strong readability at bottom */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 40%, transparent 70%)",
            }}
          />

          {/* ── Activity + Region pills — top left ── */}
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
            {activity && (
              <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-[#01baf0]/90 text-white uppercase">
                {activity}
              </span>
            )}
            {region && (
              <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-black/40 text-white/80 border border-white/15 backdrop-blur-sm">
                {region}
              </span>
            )}
          </div>

          {/* ── Shimmer line on hover ── */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#01baf0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* ── Content overlay ── */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
          {/* Title */}
          {title && (
            <h2 className="text-[22px] font-bold text-white leading-snug mb-3 tracking-tight">
              {title}
            </h2>
          )}

          {/* Meta pills row */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            {date && (
              <div className="flex items-center gap-1.5 text-white/65 text-[13px]">
                <Calendar
                  className="w-3.5 h-3.5 text-[#01baf0]"
                  strokeWidth={1.8}
                />
                <span>{date}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1.5 text-white/65 text-[13px]">
                <Clock
                  className="w-3.5 h-3.5 text-[#01baf0]"
                  strokeWidth={1.8}
                />
                <span>{duration}</span>
              </div>
            )}
            {altitude && (
              <div className="flex items-center gap-1.5 text-white/65 text-[13px]">
                <Mountain
                  className="w-3.5 h-3.5 text-[#01baf0]"
                  strokeWidth={1.8}
                />
                <span>{altitude}</span>
              </div>
            )}
            {region && (
              <div className="flex items-center gap-1.5 text-white/65 text-[13px]">
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

          {/* CTA row */}
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-white/40 font-medium">
              Langtang Outdoor Initiative
            </span>
            <div className="flex items-center gap-2 bg-[#01baf0] hover:bg-[#0199cc] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200 group-hover:gap-3">
              <span>Explore</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>

        {/* ── Subtle border that brightens on hover ── */}
        <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[#01baf0]/30 transition-colors duration-500 pointer-events-none" />
      </div>
    </Link>
  );
}

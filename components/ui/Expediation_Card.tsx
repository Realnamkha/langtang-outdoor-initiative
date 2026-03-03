"use client";

import ClockIcon from "@/public/assets/clock";
import MountainIcon from "@/public/assets/mountain";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type ExpeditionCardProps = {
  title?: string;
  imageSrc: string;
  date?: string;
  duration?: string;
  altitude?: string;
  activity?: string; // optional
  region?: string; // optional
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
  return (
    <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 relative">
      {/* Date badge */}
      {date && (
        <span className="absolute top-3 right-3 z-10 bg-yellow-400 px-3 py-1 rounded-md text-xs font-bold uppercase">
          {date}
        </span>
      )}

      {/* Image */}
      <div className="relative w-full h-72 md:h-80">
        <Image
          src={imageSrc}
          alt={title || "Expedition Image"}
          className="object-cover rounded-t-xl"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
        />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Meta info: duration & altitude */}
        <div className="flex justify-between items-center text-gray-700 text-sm font-medium">
          {duration && (
            <div className="flex items-center gap-1.5">
              <ClockIcon className="w-5 h-5" />
              <span>{duration}</span>
            </div>
          )}
          {altitude && (
            <div className="flex items-center gap-1.5">
              <MountainIcon className="w-5 h-5" />
              <span>{altitude}</span>
            </div>
          )}
        </div>

        {/* Activity & Region badges */}
        <div className="flex flex-wrap gap-2 mt-1">
          {activity && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {activity}
            </span>
          )}
          {region && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {region}
            </span>
          )}
        </div>

        {/* Title */}
        {title && (
          <h3 className="font-serif text-lg font-semibold mt-2">{title}</h3>
        )}

        {/* Button */}
        <div className="mt-2">
          <Button className="w-full text-center">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              {title ? "View Details" : link}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

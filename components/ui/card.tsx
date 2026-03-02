import ClockIcon from "@/public/assets/clock";
import MountainIcon from "@/public/assets/mountain";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

type ExpeditionCardProps = {
  title: string;
  imageSrc: string;
  date?: string;
  duration: string;
  altitude: string;
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
    <article className="card bg-gray-200 relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Date badge */}
      {date && (
        <span className="absolute top-3 right-3 z-10 bg-warning px-3 py-2 rounded-md text-uppercase font-bold text-sm">
          {date}
        </span>
      )}

      {/* Image */}
      <div className="relative w-full h-80">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Meta info: duration & altitude */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-6 h-6 text-gray-700" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MountainIcon className="w-6 h-6 text-gray-700" />
            <span className="text-sm font-medium">{altitude}</span>
          </div>
        </div>

        {/* Activity & Region (conditionally rendered) */}
        {(activity || region) && (
          <ul className="flex gap-3 text-primary list-none p-0 m-0 text-sm">
            {activity && <li>{activity}</li>}
            {region && <li>{region}</li>}
          </ul>
        )}

        {/* Title */}
        <h3 className="font-serif text-lg my-2 min-h-12">{title}</h3>

        {/* Button */}
        <Button>
          <a href={link}>View Details</a>
        </Button>
      </div>
    </article>
  );
};

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Activity {
  image: string;
  title: string;
  link: string;
}

const activities: Activity[] = [
  {
    image: "/people_01.jpg",
    title: "14 Peaks Exclusive",
    link: "#",
  },
  {
    image: "/people_02.jpg",
    title: "Langtang Trekking",
    link: "#",
  },
  {
    image: "/people_03.jpg",
    title: "Everest Base Camp",
    link: "#",
  },
  {
    image: "/people_01.jpg",
    title: "14 Peaks Exclusive",
    link: "#",
  },
  {
    image: "/people_02.jpg",
    title: "Langtang Trekking",
    link: "#",
  },
  {
    image: "/people_03.jpg",
    title: "Everest Base Camp",
    link: "#",
  },
];

export default function RotatingCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center py-8">
      <div className="flex gap-4 perspective-1000">
        {activities.map((activity, index) => {
          // Determine position relative to current
          let scale = 0.8;
          let opacity = 0.5;
          let zIndex = 0;

          if (index === current) {
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (
            index === (current - 1 + activities.length) % activities.length ||
            index === (current + 1) % activities.length
          ) {
            scale = 0.85;
            opacity = 0.6;
            zIndex = 5;
          }

          return (
            <div
              key={index}
              className="relative transition-all duration-500 ease-in-out rounded-xl shadow-lg cursor-pointer"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
              onClick={() => setCurrent(index)}
            >
              <div className="overflow-hidden rounded-xl w-64 h-80">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={256}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center mt-2 font-bold uppercase">
                {activity.title}
              </div>
              <a href={activity.link} className="absolute inset-0"></a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

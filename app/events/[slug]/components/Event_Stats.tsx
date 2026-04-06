"use client";
import { Clock, Activity, MapPin, Users, ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";
import { FestivalEvent } from "@/lib/events";

export function EventStatsBar({ event }: { event: FestivalEvent }) {
  const router = useRouter();

  const stats: StatItem[] = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      label: "Duration",
      val: event.details.duration,
    },
    {
      icon: <Activity size={16} strokeWidth={1.5} />,
      label: "Difficulty",
      val: event.details.difficulty,
    },
    {
      icon: <MapPin size={16} strokeWidth={1.5} />,
      label: "Location",
      val: event.location,
    },
    {
      icon: <ArrowUp size={16} strokeWidth={1.5} />,
      label: "Max Altitude",
      val: event.details.maxAltitude,
    },
  ];

  return <StatsBar stats={stats} />;
}

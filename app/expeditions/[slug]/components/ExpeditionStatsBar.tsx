import type { Expedition } from "@/lib/expedition";
import { Clock, Mountain, MapPin, Users } from "lucide-react";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";
export function ExpeditionStatsBar({ expedition }: { expedition: Expedition }) {
  const stats: StatItem[] = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      label: "Duration",
      val: expedition.duration,
    },
    {
      icon: <Mountain size={16} strokeWidth={1.5} />,
      label: "Max Altitude",
      val: expedition.altitude,
    },
    {
      icon: <MapPin size={16} strokeWidth={1.5} />,
      label: "Region",
      val: expedition.region ?? "Nepal",
    },
    {
      icon: <Users size={16} strokeWidth={1.5} />,
      val: "Book Now",
      type: "cta",
    },
  ];

  return <StatsBar stats={stats} />;
}

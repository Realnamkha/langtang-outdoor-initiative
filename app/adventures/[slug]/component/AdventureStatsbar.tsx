import { Clock, Activity, MapPin, Users } from "lucide-react";
import StatsBar, { type StatItem } from "@/components/ui/StatsBar";
import { Adventure } from "@/lib/adventure";

export function AdventureStatsBar({ adventure }: { adventure: Adventure }) {
  const stats: StatItem[] = [
    {
      icon: <Clock size={16} strokeWidth={1.5} />,
      label: "Duration",
      val: adventure.duration,
    },
    {
      icon: <Activity size={16} strokeWidth={1.5} />,
      label: "Difficulty",
      val: adventure.difficulty,
    },
    {
      icon: <MapPin size={16} strokeWidth={1.5} />,
      label: "Region",
      val: adventure.region ?? "Nepal",
    },
    {
      icon: <Users size={16} strokeWidth={1.5} />,
      val: "Book Now",
      type: "cta",
    },
  ];

  return <StatsBar stats={stats} />;
}

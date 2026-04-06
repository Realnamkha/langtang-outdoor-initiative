import SectionHeading from "@/components/ui/SectionHeading";
import { CulturalTour } from "@/lib/culture";
import {
  MapPin,
  Activity,
  FileText,
  User,
  Star,
  Mountain,
  Tent,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  mapPin: <MapPin size={14} />,
  calendar: <Calendar size={14} />,
  activity: <Activity size={14} />,
  fileText: <FileText size={14} />,
  user: <User size={14} />,
  star: <Star size={14} />,
  mountain: <Mountain size={14} />,
  tent: <Tent size={14} />,
};

export default function TripOverview({ tour }: { tour: CulturalTour }) {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-8">
      <SectionHeading>
        Trip <em className="text-[#01baf0]">Overview</em>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 mt-8">
        {/* Left — description */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 text-[15px] leading-[1.9] font-light">
            {tour.description}
          </p>
        </div>

        {/* Right — Quick Facts card */}
        <div className="w-full">
          <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
            {/* Card header */}
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#01baf0]" />
              <p className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-400">
                Quick Facts
              </p>
            </div>

            {/* Facts list */}
            <div className="divide-y divide-gray-50">
              {tour.quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-gray-50/60 transition-colors group"
                >
                  <span className="text-[#01baf0] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {ICON_MAP[fact.icon] ?? <Activity size={14} />}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-0.5">
                      {fact.label}
                    </span>
                    <span className="text-[13px] font-semibold text-gray-800 truncate">
                      {fact.val}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

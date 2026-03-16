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
  mapPin: <MapPin size={15} />,
  calendar: <Calendar size={15} />,
  activity: <Activity size={15} />,
  fileText: <FileText size={15} />,
  user: <User size={15} />,
  star: <Star size={15} />,
  mountain: <Mountain size={15} />,
  tent: <Tent size={15} />,
};

export default function TripOverview({ tour }: { tour: CulturalTour }) {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-8">
      <SectionHeading>
        Trip <em className="text-[#01baf0]">Overview</em>
      </SectionHeading>

      <div
        className="flex flex-col lg:grid lg:gap-12 gap-10"
        style={{ gridTemplateColumns: "2fr 1px 1fr" }}
      >
        {/* description */}
        <p className="text-gray-600 text-[15px] leading-[1.9]">
          {tour.description}
        </p>

        {/* divider — hidden on mobile, visible on desktop */}
        <div className="hidden lg:block self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

        {/* quick facts */}
        <div className="flex flex-col">
          <div className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(1,186,240,0.1)] border border-[#e8f3f9] overflow-hidden">
            <div className="bg-gradient-to-r from-[#01baf0] to-[#0191c8] px-6 py-4">
              <p className="text-white font-bold text-[13px] tracking-widest uppercase">
                Quick Facts
              </p>
            </div>
            <div className="px-6 py-5 divide-y divide-[#f0f7fc]">
              {tour.quickFacts.map((fact, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <span className="text-[#01baf0] shrink-0">
                    {ICON_MAP[fact.icon] ?? <Activity size={15} />}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9ab4c4]">
                      {fact.label}
                    </span>
                    <span className="text-[13.5px] font-semibold text-[#0D1B2A]">
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

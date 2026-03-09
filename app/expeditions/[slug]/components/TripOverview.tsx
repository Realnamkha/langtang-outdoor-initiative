import type { Expedition } from "@/lib/expedition";
import SectionHeading from "./SectionHeading";
import { MapPin, Tent, Calendar, FileText, Activity } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  mapPin: <MapPin size={14} strokeWidth={1.5} />,
  tent: <Tent size={14} strokeWidth={1.5} />,
  calendar: <Calendar size={14} strokeWidth={1.5} />,
  fileText: <FileText size={14} strokeWidth={1.5} />,
  activity: <Activity size={14} strokeWidth={1.5} />,
};

export default function TripOverview({
  expedition,
}: {
  expedition: Expedition;
}) {
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
          {expedition.description}
        </p>

        {/* divider — hidden on mobile, visible on desktop */}
        <div className="hidden lg:block self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

        {/* quick facts */}
        <div className="flex flex-col gap-2">
          <p className="font-mono-dm text-[8.5px] tracking-[0.2em] uppercase text-gray-400 mb-1">
            Quick Facts
          </p>

          {(expedition.quickFacts ?? []).map(({ label, val, icon }) => (
            <div
              key={label}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 hover:border-[#01baf0]/30 hover:bg-[#f0fbff] transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-lg bg-[#01baf0]/10 flex items-center justify-center shrink-0 text-[#01baf0] group-hover:bg-[#01baf0]/20 transition-colors duration-200">
                {ICON_MAP[icon] ?? <MapPin size={14} strokeWidth={1.5} />}
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-mono-dm uppercase text-gray-400 text-[7.5px] tracking-[0.16em] leading-none mb-0.5">
                  {label}
                </span>
                <span className="text-gray-900 text-[12.5px] font-semibold leading-tight">
                  {val}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#01baf0]/40 group-hover:bg-[#01baf0] transition-colors duration-200 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

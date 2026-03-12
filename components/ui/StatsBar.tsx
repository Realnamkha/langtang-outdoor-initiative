import type { ReactNode } from "react";

export interface StatItem {
  icon: ReactNode;
  label?: string;
  val: string;
  type?: "stat" | "cta";
  onClick?: () => void;
}

export default function StatsBar({ stats }: { stats: StatItem[] }) {
  return (
    <section className="px-4 sm:px-6 mt-1">
      <div className="max-w-4xl mx-auto -mt-px">
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          {stats.map(({ icon, label, val, type = "stat", onClick }, i) => {
            if (type === "cta") {
              return (
                <button
                  key={i}
                  onClick={onClick}
                  className={`
                    flex flex-col items-center justify-center gap-2 py-5 px-4 cursor-pointer
                    bg-[#01baf0] hover:bg-[#0191c8] transition-colors duration-200
                    ${i % 2 !== 0 ? "border-l border-[#01baf0]" : ""}
                    ${i >= 2 ? "border-t border-[#01baf0] sm:border-t-0" : ""}
                    sm:border-l sm:border-[#0191c8]
                    group
                  `}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors duration-200">
                    {icon}
                  </div>
                  {label && (
                    <span className="text-white/70 text-[8px] tracking-[0.18em] uppercase text-center">
                      {label}
                    </span>
                  )}
                  <span className="text-white font-bold text-[13px] text-center leading-tight tracking-wide">
                    {val} →
                  </span>
                </button>
              );
            }

            return (
              <div
                key={i}
                className={`
                  flex flex-col items-center gap-2 py-5 px-4
                  ${i % 2 !== 0 ? "border-l border-gray-100" : ""}
                  ${i >= 2 ? "border-t border-gray-100 sm:border-t-0" : ""}
                  ${i >= 1 ? "sm:border-l sm:border-gray-100" : ""}
                  group hover:bg-[#f0fbff] transition-colors duration-200
                `}
              >
                <div className="w-9 h-9 rounded-xl bg-[#01baf0]/10 flex items-center justify-center text-[#01baf0] group-hover:bg-[#01baf0]/20 transition-colors duration-200">
                  {icon}
                </div>
                {label && (
                  <span className="text-gray-400 text-[8px] tracking-[0.18em] uppercase text-center">
                    {label}
                  </span>
                )}
                <span className="text-gray-900 font-semibold text-[13px] text-center leading-tight">
                  {val}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

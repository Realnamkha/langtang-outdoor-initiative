"use client";

import { useState } from "react";
import {
  Plane,
  Home,
  Utensils,
  Compass,
  Backpack,
  ClipboardList,
  Bus,
  Hotel,
  Stethoscope,
  Satellite,
  Sunrise,
  FileText,
  LucideIcon,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type TabKey = "inc" | "exc";

// ─── Data ─────────────────────────────────────────────────────────────────────

const includes: Item[] = [
  {
    icon: Plane,
    title: "Domestic flights",
    desc: "Kathmandu ↔ Lukla round-trip airfare included",
  },
  {
    icon: Home,
    title: "Teahouse accommodation",
    desc: "Twin-sharing rooms throughout the trail",
  },
  {
    icon: Utensils,
    title: "All meals on trek",
    desc: "Breakfast, lunch & dinner at teahouses",
  },
  {
    icon: Compass,
    title: "Licensed trekking guide",
    desc: "English-speaking, certified mountain guide",
  },
  {
    icon: Backpack,
    title: "Porter service",
    desc: "One porter per two trekkers (up to 15 kg)",
  },
  {
    icon: ClipboardList,
    title: "Permits & fees",
    desc: "TIMS card, Sagarmatha National Park entry",
  },
  {
    icon: Bus,
    title: "Airport transfers",
    desc: "Hotel ↔ Tribhuvan International Airport",
  },
  {
    icon: Hotel,
    title: "Kathmandu hotel",
    desc: "2 nights 3-star hotel on arrival & departure",
  },
  {
    icon: Stethoscope,
    title: "First aid kit",
    desc: "Emergency oxygen cylinder carried by guide",
  },
  {
    icon: Satellite,
    title: "Satellite communication",
    desc: "Emergency contact device on all high routes",
  },
  {
    icon: Sunrise,
    title: "Acclimatization days",
    desc: "Scheduled rest days at Namche & Dingboche",
  },
  {
    icon: FileText,
    title: "Trip documentation",
    desc: "Detailed trail map, itinerary & travel notes",
  },
];

const excludes: Item[] = [
  {
    icon: Plane,
    title: "International flights",
    desc: "Flights to/from Kathmandu not included",
  },
  {
    icon: Stethoscope,
    title: "Travel insurance",
    desc: "Medical & evacuation insurance is mandatory",
  },
  {
    icon: Hotel,
    title: "Medical expenses",
    desc: "Personal medication and treatment costs",
  },
  {
    icon: Utensils,
    title: "Extra beverages",
    desc: "Hot drinks, soft drinks, bottled water on trail",
  },
  {
    icon: Satellite,
    title: "WiFi & charging",
    desc: "Teahouse internet & device charging fees",
  },
  {
    icon: Home,
    title: "Hot showers",
    desc: "Charged separately at most teahouses (≈ $2–5)",
  },
  {
    icon: Backpack,
    title: "Tips & gratuities",
    desc: "For guides, porters — voluntary but appreciated",
  },
  {
    icon: Bus,
    title: "Personal shopping",
    desc: "Souvenirs, gear purchases, laundry service",
  },
  {
    icon: Compass,
    title: "Emergency evacuation",
    desc: "Helicopter rescue (covered by your insurance)",
  },
];

// ─── ItemCard ─────────────────────────────────────────────────────────────────

function ItemCard({ item, type }: { item: Item; type: "inc" | "exc" }) {
  const isInc = type === "inc";
  const Icon = item.icon;

  return (
    <div
      className={`
        flex items-start gap-3 rounded-xl border bg-white p-4
        transition-all duration-150 hover:-translate-y-0.5
        ${
          isInc
            ? "border-stone-200 hover:border-emerald-400"
            : "border-stone-200 hover:border-orange-400"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
          ${isInc ? "bg-emerald-50" : "bg-orange-50"}
        `}
      >
        <Icon
          size={18}
          strokeWidth={1.5}
          className={isInc ? "text-emerald-700" : "text-orange-700"}
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-stone-800 leading-snug">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs text-stone-500 leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Check / Cross */}
      <div
        className={`
          mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full
          text-[10px] font-semibold
          ${
            isInc
              ? "bg-emerald-50 text-emerald-700"
              : "bg-orange-50 text-orange-700"
          }
        `}
      >
        {isInc ? "✓" : "✕"}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InclusionsExclusions() {
  const [tab, setTab] = useState<TabKey>("inc");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "inc", label: "What's included" },
    { key: "exc", label: "What's excluded" },
  ];

  const tabActiveClass = (key: TabKey) => {
    if (key !== tab)
      return "text-stone-400 border-b-2 border-transparent hover:text-stone-700";
    if (key === "inc") return "text-emerald-700 border-b-2 border-emerald-600";
    return "text-orange-700 border-b-2 border-orange-600";
  };

  const activeItems = tab === "inc" ? includes : excludes;
  const sectionLabel =
    tab === "inc" ? "Covered in your package" : "Not covered — plan ahead";

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      {/* Summary pills */}
      <div className="mb-6 flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          {includes.length} items included
        </span>
        <span className="flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-800">
          <span className="h-2 w-2 rounded-full bg-orange-600" />
          {excludes.length} items excluded
        </span>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex border-b border-stone-200">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2.5 text-sm font-medium transition-colors duration-150 -mb-px ${tabActiveClass(
              key
            )}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Section label */}
      <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-stone-400">
        {sectionLabel}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {activeItems.map((item) => (
          <ItemCard key={item.title} item={item} type={tab} />
        ))}
      </div>

      {/* Note — shown only on included tab */}
      {tab === "inc" && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 leading-relaxed">
          <span className="font-medium">Good to know:</span> All inclusions are
          confirmed at time of booking. Flight schedules and teahouse
          accommodation are subject to seasonal availability — your trip
          coordinator will notify you of any changes at least 72 hours in
          advance.
        </div>
      )}
    </section>
  );
}

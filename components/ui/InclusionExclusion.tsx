"use client";

import { useState } from "react";
import {
  Car,
  UtensilsCrossed,
  Users,
  ShieldCheck,
  Package,
  FileCheck,
  PartyPopper,
  Plane,
  Fingerprint,
  AlertTriangle,
  Receipt,
  HandCoins,
  Hotel,
  Video,
  Shield,
  BookOpen,
  Heart,
  Droplets,
  Footprints,
  Wrench,
  Truck,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  includes as defaultIncludes,
  excludes as defaultExcludes,
  type Item,
  type TabKey,
} from "@/lib/include_exclude";

const iconMap: Record<string, LucideIcon> = {
  Car,
  UtensilsCrossed,
  Users,
  ShieldCheck,
  Package,
  FileCheck,
  PartyPopper,
  Plane,
  Fingerprint,
  AlertTriangle,
  Receipt,
  HandCoins,
  Hotel,
  Video,
  Shield,
  BookOpen,
  Heart,
  Droplets,
  Footprints,
  Wrench,
  Truck,
  ShieldAlert,
};

interface InclusionsExclusionsProps {
  includes?: Item[];
  excludes?: Item[];
}

function ItemCard({ item, type }: { item: Item; type: TabKey }) {
  const isInc = type === "inc";
  const Icon = iconMap[item.icon];

  if (!Icon) return null;

  return (
    <div
      className={`group flex items-start gap-3 rounded-2xl border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        isInc
          ? "border-gray-100 hover:border-emerald-200"
          : "border-gray-100 hover:border-red-200"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
          isInc
            ? "bg-emerald-50 group-hover:bg-emerald-100"
            : "bg-red-50 group-hover:bg-red-100"
        }`}
      >
        <Icon
          size={16}
          strokeWidth={1.6}
          className={isInc ? "text-emerald-600" : "text-red-500"}
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
          {item.desc}
        </p>
      </div>

      <span
        className={`mt-0.5 shrink-0 text-[10px] font-bold ${
          isInc ? "text-emerald-500" : "text-red-400"
        }`}
      >
        {isInc ? "✓" : "✕"}
      </span>
    </div>
  );
}

export default function InclusionsExclusions({
  includes: includesProp,
  excludes: excludesProp,
}: InclusionsExclusionsProps = {}) {
  const [tab, setTab] = useState<TabKey>("inc");

  const activeItems =
    tab === "inc"
      ? includesProp ?? defaultIncludes
      : excludesProp ?? defaultExcludes;

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01baf0]" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#01baf0]">
              Package Details
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#01baf0]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif leading-tight">
            What&apos;s <span className="text-[#01baf0]">Covered</span>
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-1 gap-1">
            {(["inc", "exc"] as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  tab === key
                    ? key === "inc"
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "bg-red-400 text-white shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {key === "inc" ? "Included" : "Excluded"}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-5">
          {tab === "inc"
            ? "Covered in your package"
            : "Not covered — plan ahead"}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {activeItems.map((item) => (
            <ItemCard key={item.title} item={item} type={tab} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed max-w-lg mx-auto">
          {tab === "inc"
            ? "All inclusions confirmed at booking. Schedules and accommodation are subject to seasonal availability — your coordinator will notify you of any changes at least 72 hours in advance."
            : "We recommend budgeting an additional $20–40 per day for personal expenses, tips, and incidentals on the trail."}
        </p>
      </div>
    </section>
  );
}

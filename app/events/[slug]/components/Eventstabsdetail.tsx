"use client";

import { useState } from "react";
import type { FestivalEvent } from "@/lib/events";

export default function EventDetailTabs({ event }: { event: FestivalEvent }) {
  const [activeTab, setActiveTab] = useState<"schedule" | "includes" | "faq">(
    "schedule"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Tab nav */}
      <div className="flex gap-2 mb-8 border-b border-gray-100">
        {(["schedule", "includes", "faq"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors duration-200 ${
              activeTab === tab
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab === "includes" ? "Included" : tab}
          </button>
        ))}
      </div>

      {/* Schedule */}
      {activeTab === "schedule" && (
        <div className="space-y-3">
          {event.details.schedule.map((s, i) => (
            <div
              key={i}
              className="group p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border border-transparent hover:border-gray-200"
            >
              <p
                className="text-xs font-black uppercase tracking-widest mb-1"
                style={{ color: event.accentHex }}
              >
                {s.day}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Includes */}
      {activeTab === "includes" && (
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
              ✓ Included
            </p>
            <ul className="space-y-2.5">
              {event.details.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: event.accentHex }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-xs font-black uppercase tracking-widest text-gray-300 mb-4">
              ✗ Not Included
            </p>
            <ul className="space-y-2.5">
              {event.details.notIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* FAQ */}
      {activeTab === "faq" && (
        <div className="space-y-3">
          {event.details.faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left gap-4"
                aria-expanded={openFaq === i}
              >
                <span className="text-gray-800 font-medium text-sm">
                  {faq.q}
                </span>
                <span
                  className={`text-gray-400 text-xl leading-none shrink-0 transition-transform duration-200 ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

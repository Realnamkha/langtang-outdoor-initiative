"use client";

import { useState } from "react";
import { type FestivalEvent } from "@/lib/events";
import Itinerary from "@/components/ui/Itinerary";

export default function EventDetailTabs({ event }: { event: FestivalEvent }) {
  const [activeTab, setActiveTab] = useState<"schedule" | "faq">("schedule");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { key: "schedule", label: "Schedule" },
    { key: "faq", label: "FAQ" },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="flex gap-2 mb-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-semibold capitalize border-b-2 -mb-px transition-colors duration-200 ${
              activeTab === tab.key
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Schedule Tab */}
      {activeTab === "schedule" && (
        <div className="space-y-6">
          <Itinerary itinerary={event.details.itinerary} />
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <div className="space-y-4">
          {event.details.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left gap-4 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-gray-800 font-medium text-sm">
                    {faq.q}
                  </span>
                  <span
                    className={`text-gray-400 text-xl leading-none shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

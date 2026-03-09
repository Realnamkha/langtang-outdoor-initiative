import type { Expedition } from "@/lib/expedition";

export default function CtaBlock({ expedition }: { expedition: Expedition }) {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-28">
      <div className="rounded-2xl p-10 sm:p-14 flex flex-col items-center gap-8 text-center bg-white border border-gray-100 shadow-sm">
        {/* top label */}

        {/* heading */}
        <div>
          <h2
            className="font-display text-gray-900"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300 }}
          >
            Join the <em className="text-[#01baf0]">{expedition.title}</em>{" "}
            Expedition
          </h2>
        </div>

        {/* buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <button className="font-mono-dm text-[11px] tracking-[0.12em] uppercase font-semibold text-white px-10 py-4 rounded-xl bg-[#01baf0] hover:bg-[#0191c8] shadow-md shadow-[#01baf0]/20 hover:shadow-lg hover:shadow-[#01baf0]/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
            Book This Expedition →
          </button>
          <button className="font-mono-dm text-[11px] tracking-[0.12em] uppercase text-gray-600 px-10 py-4 rounded-xl border border-gray-200 bg-white hover:border-[#01baf0]/40 hover:text-[#01baf0] transition-all duration-300 cursor-pointer">
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
}

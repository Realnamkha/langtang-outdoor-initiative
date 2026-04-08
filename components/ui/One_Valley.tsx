const PRAYER_FLAGS = [
  { color: "#D4537E" }, // pink
  { color: "#01baf0" }, // blue
  { color: "rgba(255,255,255,0.2)" }, // white
  { color: "#EF9F27" }, // yellow
  { color: "#3B6D11" }, // green
];

export function HeroFocusBadge() {
  return (
    <div
      className="relative flex items-center gap-6 overflow-hidden px-7 py-5"
      style={{
        background: "rgba(6,13,20,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* mountain watermark */}
      <svg
        className="absolute right-0 top-0 pointer-events-none opacity-[0.04]"
        width="260"
        height="90"
        viewBox="0 0 260 90"
      >
        <polygon points="130,0 260,90 0,90" fill="#01baf0" />
        <polygon points="50,30 100,90 0,90" fill="#01baf0" />
        <polygon points="210,20 260,90 155,90" fill="#01baf0" />
      </svg>

      {/* Dharma wheel */}
      <svg
        className="animate-spin shrink-0"
        style={{ animationDuration: "12s" }}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <circle
          cx="22"
          cy="22"
          r="20"
          stroke="#01baf0"
          strokeWidth="1.2"
          strokeOpacity=".3"
        />
        <circle
          cx="22"
          cy="22"
          r="14"
          stroke="#01baf0"
          strokeWidth="1"
          strokeOpacity=".5"
        />
        <circle cx="22" cy="22" r="3" fill="#01baf0" />
        <line
          x1="22"
          y1="8"
          x2="22"
          y2="36"
          stroke="#01baf0"
          strokeWidth="1"
          strokeOpacity=".7"
        />
        <line
          x1="8"
          y1="22"
          x2="36"
          y2="22"
          stroke="#01baf0"
          strokeWidth="1"
          strokeOpacity=".7"
        />
        <line
          x1="12"
          y1="12"
          x2="32"
          y2="32"
          stroke="#01baf0"
          strokeWidth="1"
          strokeOpacity=".7"
        />
        <line
          x1="32"
          y1="12"
          x2="12"
          y2="32"
          stroke="#01baf0"
          strokeWidth="1"
          strokeOpacity=".7"
        />
        {[
          { cx: 22, cy: 8 },
          { cx: 22, cy: 36 },
          { cx: 8, cy: 22 },
          { cx: 36, cy: 22 },
          { cx: 12, cy: 12 },
          { cx: 32, cy: 32 },
          { cx: 32, cy: 12 },
          { cx: 12, cy: 32 },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="2"
            fill="#01baf0"
            fillOpacity=".6"
          />
        ))}
      </svg>

      {/* Text content */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        {/* Prayer flags row */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-end gap-4">
            {PRAYER_FLAGS.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  animation: `drift 3s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                <div
                  className="w-3 h-2.5 rounded-[1px]"
                  style={{ background: f.color }}
                />
                <div className="w-px h-1" style={{ background: f.color }} />
              </div>
            ))}
          </div>
          <span
            className="text-[9px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Om Mani Padme Hum
          </span>
        </div>

        <p className="m-0 text-[16px] font-extrabold text-white tracking-tight leading-tight">
          One valley. One devotion.
        </p>
        <p
          className="m-0 text-[11px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          Like the monasteries carved into Langtang's ridges — we go nowhere
          else.{" "}
          <span style={{ color: "#01baf0" }} className="font-semibold">
            Exclusively Langtang Valley
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>
            , because depth beats breadth.
          </span>
        </p>
      </div>

      {/* Right divider + infinity */}
      <div
        className="flex flex-col items-center gap-1 shrink-0 pl-3"
        style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span
          className="text-[22px] font-black leading-none"
          style={{ color: "#01baf0" }}
        >
          ∞
        </span>
        <span
          className="text-[8px] font-bold tracking-[0.18em] uppercase text-center leading-snug"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          Local
          <br />
          wisdom
        </span>
      </div>
    </div>
  );
}

export function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-5 h-px" style={{ background: color }} />
      <p
        className="text-[10px] uppercase tracking-[0.22em] font-black"
        style={{ color }}
      >
        {text}
      </p>
    </div>
  );
}

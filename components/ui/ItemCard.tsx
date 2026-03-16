import { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
};
export default function ItemCard({
  item,
  type,
}: {
  item: Item;
  type: "inc" | "exc";
}) {
  const isInc = type === "inc";
  const Icon = item.icon;

  return (
    <div
      className={`
          group flex items-start gap-3 rounded-xl border bg-white p-4
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
            flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-base
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
            mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-semibold
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

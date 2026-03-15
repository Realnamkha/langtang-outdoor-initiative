interface FieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Field({ label, children, className = "" }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#01baf0]">
        {label}
      </label>
      {children}
    </div>
  );
}

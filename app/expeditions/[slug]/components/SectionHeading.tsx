export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-5 mb-10">
      <h2
        className="font-display text-black whitespace-nowrap"
        style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300 }}
      >
        {children}
      </h2>
    </div>
  );
}

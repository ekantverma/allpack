interface Props {
  items: string[];
  reverse?: boolean;
  className?: string;
}
export function Marquee({ items, reverse, className = "" }: Props) {
  const arr = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex gap-12 w-max"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 50s linear infinite` }}
      >
        {arr.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display font-bold text-5xl md:text-7xl lg:text-8xl whitespace-nowrap text-gradient-brand">
              {t}
            </span>
            <span className="h-3 w-3 rounded-full bg-accent shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

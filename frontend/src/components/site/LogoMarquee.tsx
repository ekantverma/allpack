interface LogoItem {
  src: string;
  alt?: string;
}
interface Props {
  logos: Array<string | LogoItem>;
  reverse?: boolean;
}
export function LogoMarquee({ logos, reverse }: Props) {
  const arr = [...logos, ...logos];
  return (
    <div className="overflow-hidden group">
      <div
        className="flex gap-5 w-max py-2 group-hover:[animation-play-state:paused]"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 45s linear infinite` }}
      >
        {arr.map((item, i) => (
          <div
            key={i}
            className="shrink-0 min-w-[180px] h-24 px-8 rounded-2xl bg-card border border-border flex items-center justify-center shadow-soft transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
          >
            {typeof item === "string" ? (
              <span className="font-display font-bold text-xl text-foreground/40 grayscale transition-all duration-500 hover:grayscale-0 hover:text-primary tracking-tight whitespace-nowrap">
                {item}
              </span>
            ) : (
              <img
                src={item.src}
                alt={item.alt ?? "Client logo"}
                className="max-h-16 max-w-full object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

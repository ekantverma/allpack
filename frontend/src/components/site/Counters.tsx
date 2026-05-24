import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

interface Stat {
  end: number;
  suffix?: string;
  label: string;
}

export function Counters({ items }: { items: Stat[] }) {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && setStart(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
      {items.map((s, i) => (
        <div
          key={i}
          className="reveal glass rounded-2xl p-6 lg:p-8 hover-lift"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="font-display font-bold text-4xl lg:text-5xl text-gradient-brand">
            {start ? <CountUp end={s.end} duration={2.4} separator="," /> : 0}
            {s.suffix}
          </div>
          <div className="mt-3 text-sm text-muted-foreground leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

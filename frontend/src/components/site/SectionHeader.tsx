interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center", className = "" }: Props) {
  return (
    <div
      className={`reveal ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-primary mb-5">
          {/* <span className="h-px w-8 bg-primary/60" /> */}
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

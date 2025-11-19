interface HighlightPillsProps {
  items: string[];
}

export function HighlightPills({ items }: HighlightPillsProps) {
  return (
    <ul className="grid gap-3 text-sm text-muted/80 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-border bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(217,138,163,0.12)]"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

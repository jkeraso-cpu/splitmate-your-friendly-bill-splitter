import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="SplitMate">
      <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-primary text-primary-foreground shadow-brand">
        <ArrowDownLeft className="absolute left-1.5 top-1.5 size-4" strokeWidth={2.5} />
        <ArrowUpRight className="absolute bottom-1.5 right-1.5 size-4" strokeWidth={2.5} />
      </span>
      {!compact && <span className="text-lg font-extrabold text-foreground">SplitMate</span>}
    </span>
  );
}

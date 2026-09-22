import { Check, Copy, Receipt, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SplitResult } from "@/types/calculator";
import { formatCurrency } from "@/utils/currency";

interface ResultCardProps {
  result: SplitResult | null;
  people: number;
  copied: boolean;
  onCopy: () => void;
  onShare: () => void;
}

export function ResultCard({ result, people, copied, onCopy, onShare }: ResultCardProps) {
  if (!result) {
    return (
      <aside className="result-panel grid min-h-96 place-items-center text-center">
        <div className="max-w-xs">
          <span className="mx-auto mb-5 grid size-14 place-items-center rounded-xl bg-primary/12 text-primary"><Receipt className="size-7" /></span>
          <h2 className="text-xl font-extrabold text-foreground">Ready when you are.</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Enter a bill amount and we’ll work out everyone’s share.</p>
        </div>
      </aside>
    );
  }

  const rows = [
    ["Original bill", formatCurrency(result.bill)],
    [`Tip (${result.tipPercentage.toLocaleString()}%)`, formatCurrency(result.tipAmount)],
    ["Total", formatCurrency(result.total)],
    ["People", String(people)],
  ];

  return (
    <aside className="result-panel" aria-live="polite">
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><Sparkles className="size-4" /> Your split</div>
      <p className="mt-7 text-sm font-semibold text-muted-foreground">Each person pays</p>
      <output key={`${result.perPerson}-${result.isRounded}`} className="result-amount mt-1 block text-4xl font-black text-foreground sm:text-5xl">{formatCurrency(result.perPerson, result.isRounded)}</output>
      {result.isRounded && (
        <p className="mt-3 inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">Rounded up from {formatCurrency(result.exactPerPerson)}</p>
      )}
      <div className="my-7 h-px bg-border/80" />
      <dl className="space-y-3.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 text-sm">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-bold text-foreground">{value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 border-t border-border/80 pt-3.5 text-sm">
          <dt className="font-semibold text-foreground">Each person</dt>
          <dd className="font-extrabold text-primary">{formatCurrency(result.perPerson, result.isRounded)}</dd>
        </div>
      </dl>
      <div className="mt-7 grid grid-cols-2 gap-2.5">
        <Button onClick={onCopy} className="h-11">{copied ? <Check /> : <Copy />}{copied ? "Copied!" : "Copy split"}</Button>
        <Button variant="outline" onClick={onShare} className="h-11"><Share2 /> Share</Button>
      </div>
    </aside>
  );
}
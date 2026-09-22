import { Percent } from "lucide-react";
import type { TipOption } from "@/types/calculator";

const tipOptions: Array<{ label: string; value: TipOption }> = [
  { label: "No tip", value: 0 }, { label: "5%", value: 5 }, { label: "10%", value: 10 },
  { label: "15%", value: 15 }, { label: "20%", value: 20 }, { label: "Custom", value: "custom" },
];

interface TipSelectorProps {
  selected: TipOption;
  customTip: string;
  customError: string;
  onSelect: (option: TipOption) => void;
  onCustomChange: (value: string) => void;
}

export function TipSelector({ selected, customTip, customError, onSelect, onCustomChange }: TipSelectorProps) {
  return (
    <section className="space-y-3" aria-labelledby="tip-label">
      <div id="tip-label" className="section-label"><Percent className="size-4 text-primary" /> Tip</div>
      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Tip percentage">
        {tipOptions.map((option) => (
          <button key={option.label} type="button" onClick={() => onSelect(option.value)} aria-pressed={selected === option.value} className="tip-option">
            {option.label}
          </button>
        ))}
      </div>
      {selected === "custom" && (
        <div className="animate-reveal">
          <label htmlFor="custom-tip" className="sr-only">Custom tip percentage</label>
          <div className={`custom-tip-field ${customError ? "currency-field-error" : ""}`}>
            <input id="custom-tip" type="number" min="0" max="100" step="0.1" inputMode="decimal" value={customTip} onChange={(event) => onCustomChange(event.target.value)} placeholder="12" aria-invalid={Boolean(customError)} />
            <span>%</span>
          </div>
          {customError && <p className="mt-2 text-xs font-medium text-destructive">{customError}</p>}
        </div>
      )}
    </section>
  );
}
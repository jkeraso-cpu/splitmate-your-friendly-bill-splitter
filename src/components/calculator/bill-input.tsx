import { ReceiptText } from "lucide-react";
import { formatBillInput } from "@/utils/currency";

interface BillInputProps {
  value: string;
  error: string;
  onChange: (value: string) => void;
}

export function BillInput({ value, error, onChange }: BillInputProps) {
  const handleChange = (nextValue: string) => {
    const unformatted = nextValue.replaceAll(",", "").replace(/\s/g, "");
    if (unformatted === "" || /^\d*(\.\d{0,2})?$/.test(unformatted)) onChange(unformatted);
  };

  return (
    <section className="space-y-3" aria-labelledby="bill-label">
      <div className="flex items-center justify-between">
        <label id="bill-label" htmlFor="bill-amount" className="section-label">
          <ReceiptText className="size-4 text-primary" /> Bill amount
        </label>
        <span className="text-xs font-medium text-muted-foreground">KES</span>
      </div>
      <div className={`currency-field ${error ? "currency-field-error" : ""}`}>
        <span className="text-base font-bold text-muted-foreground">KSh</span>
        <input
          id="bill-amount"
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={formatBillInput(value)}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="0.00"
          aria-describedby={error ? "bill-error" : "bill-help"}
          aria-invalid={Boolean(error)}
          className="min-w-0 flex-1 bg-transparent text-2xl font-extrabold text-foreground outline-none placeholder:text-muted-foreground/50 sm:text-3xl"
        />
      </div>
      {error ? (
        <p id="bill-error" className="text-xs font-medium text-destructive">{error}</p>
      ) : (
        <p id="bill-help" className="helper-text">Enter the total before splitting.</p>
      )}
    </section>
  );
}
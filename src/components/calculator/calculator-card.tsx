import { useMemo, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { BillInput } from "@/components/calculator/bill-input";
import { PeopleSelector } from "@/components/calculator/people-selector";
import { ResultCard } from "@/components/calculator/result-card";
import { TipSelector } from "@/components/calculator/tip-selector";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { TipOption } from "@/types/calculator";
import { calculateSplit } from "@/utils/calculations";
import { formatCurrency, parseBillInput } from "@/utils/currency";

export function CalculatorCard() {
  const [billInput, setBillInput] = useState("");
  const [people, setPeople] = useState(2);
  const [tipOption, setTipOption] = useState<TipOption>(0);
  const [customTip, setCustomTip] = useState("");
  const [roundUp, setRoundUp] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bill = parseBillInput(billInput);
  const billError = billInput && bill <= 0 ? "Enter a bill greater than KSh 0." : "";
  const customTipNumber = customTip === "" ? 0 : Number(customTip);
  const customError =
    tipOption === "custom" &&
    (customTip === "" ||
      customTipNumber < 0 ||
      customTipNumber > 100 ||
      !Number.isFinite(customTipNumber))
      ? "Enter a tip between 0% and 100%."
      : "";
  const tipPercentage = tipOption === "custom" ? customTipNumber : tipOption;

  const result = useMemo(() => {
    if (bill <= 0 || billError || customError) return null;
    return calculateSplit(bill, tipPercentage, people, roundUp);
  }, [bill, billError, customError, people, roundUp, tipPercentage]);

  const summary = result
    ? `SplitMate Summary\n\nBill: ${formatCurrency(result.bill)}\nTip: ${formatCurrency(result.tipAmount)}\nTotal: ${formatCurrency(result.total)}\nPeople: ${people}\nEach person pays: ${formatCurrency(result.perPerson, result.isRounded)}${result.isRounded ? ` (rounded up from ${formatCurrency(result.exactPerPerson)})` : ""}`
    : "";

  const copySummary = async () => {
    if (!summary) return;
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1800);
  };

  const shareSummary = async () => {
    if (!summary) return;
    if (navigator.share) {
      try {
        await navigator.share({ title: "SplitMate Summary", text: summary });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copySummary();
  };

  const reset = () => {
    setBillInput("");
    setPeople(2);
    setTipOption(0);
    setCustomTip("");
    setRoundUp(false);
    setCopied(false);
  };

  return (
    <div className="calculator-shell">
      <div className="calculator-inputs">
        <div className="mb-7 flex items-center justify-between border-b border-border pb-5">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Equal split</p>
            <h2 className="mt-1 text-xl font-extrabold text-foreground">Set up your bill</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={reset}>
            <RotateCcw /> Reset
          </Button>
        </div>
        <div className="space-y-7">
          <BillInput value={billInput} error={billError} onChange={setBillInput} />
          <PeopleSelector people={people} onChange={setPeople} />
          <TipSelector
            selected={tipOption}
            customTip={customTip}
            customError={customError}
            onSelect={setTipOption}
            onCustomChange={setCustomTip}
          />
          <div className="flex items-center justify-between gap-5 rounded-lg border border-border bg-secondary/45 p-4">
            <div>
              <label htmlFor="round-up" className="text-sm font-bold text-foreground">
                Round up each share
              </label>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Next whole shilling. We’ll show the exact amount too.
              </p>
            </div>
            <Switch
              id="round-up"
              checked={roundUp}
              onCheckedChange={setRoundUp}
              aria-label="Round each person's payment up"
            />
          </div>
        </div>
      </div>
      <ResultCard
        result={result}
        people={people}
        copied={copied}
        onCopy={copySummary}
        onShare={shareSummary}
      />
    </div>
  );
}

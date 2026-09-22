export type TipOption = 0 | 5 | 10 | 15 | 20 | "custom";

export interface SplitResult {
  bill: number;
  tipPercentage: number;
  tipAmount: number;
  total: number;
  exactPerPerson: number;
  perPerson: number;
  isRounded: boolean;
}

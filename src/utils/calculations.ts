import type { SplitResult } from "@/types/calculator";

function toCents(value: number): number {
  return Math.round((value + Number.EPSILON) * 100);
}

export function calculateTip(bill: number, percentage: number): number {
  return toCents((toCents(bill) * percentage) / 10000) / 100;
}

export function calculateTotal(bill: number, tipAmount: number): number {
  return (toCents(bill) + toCents(tipAmount)) / 100;
}

export function calculatePerPerson(total: number, people: number): number {
  return Math.round((total / people + Number.EPSILON) * 100) / 100;
}

export function roundPerPerson(amount: number): number {
  return Math.ceil(amount);
}

export function calculateSplit(
  bill: number,
  tipPercentage: number,
  people: number,
  roundUp: boolean,
): SplitResult {
  const tipAmount = calculateTip(bill, tipPercentage);
  const total = calculateTotal(bill, tipAmount);
  const exactPerPerson = calculatePerPerson(total, people);
  return {
    bill,
    tipPercentage,
    tipAmount,
    total,
    exactPerPerson,
    perPerson: roundUp ? roundPerPerson(exactPerPerson) : exactPerPerson,
    isRounded: roundUp,
  };
}
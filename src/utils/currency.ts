const kesFormatter = new Intl.NumberFormat("en-KE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number, whole = false): string {
  if (!Number.isFinite(value)) return "KSh 0.00";
  if (whole) return `KSh ${Math.round(value).toLocaleString("en-KE")}`;
  return `KSh ${kesFormatter.format(value)}`;
}

export function formatBillInput(value: string): string {
  if (!value) return "";
  const [integer = "", decimal] = value.replaceAll(",", "").split(".");
  const formattedInteger = integer ? Number(integer).toLocaleString("en-KE") : "";
  return decimal === undefined ? formattedInteger : `${formattedInteger}.${decimal}`;
}

export function parseBillInput(value: string): number {
  const parsed = Number(value.replaceAll(",", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

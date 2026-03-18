export function formatCurrencyInput(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) return "";

  const number = Number(digits) / 100;

  return number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function parseCurrencyInput(value: string) {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  return Number(normalized);
}

export function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

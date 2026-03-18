export const PRODUCT_CATEGORIES = [
  "Ração",
  "Higiene",
  "Brinquedos",
  "Acessórios",
  "Medicamentos",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

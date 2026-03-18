export type ProductOwner = {
  id: string;
  username: string;
  email?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string | null;
  category: string;
  stock: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner: ProductOwner;
};

export type GetProductsParams = {
  search?: string;
  category?: string;
};

export type CreateProductParams = {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: string;
  stock: number;
};

export type ProductCategoryOption = {
  label: string;
  value: string;
};

export type UpdateProductParams = CreateProductParams;

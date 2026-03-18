import { api } from "../../api";
import {
  CreateProductParams,
  GetProductsParams,
  Product,
  ProductCategoryOption,
  UpdateProductParams,
} from "./products-types";

async function getProducts(params?: GetProductsParams): Promise<Product[]> {
  const requestParams: Record<string, string> = {};

  if (params?.search?.trim()) {
    requestParams.search = params.search.trim();
  }

  if (params?.category && params.category !== "Todos") {
    requestParams.category = params.category;
  }

  const { data } = await api.get<Product[]>("/products", {
    params: requestParams,
  });

  return data;
}

async function getProductById(productId: string): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${productId}`);
  return data;
}

async function createProduct(params: CreateProductParams): Promise<Product> {
  const { data } = await api.post<Product>("/products", params);
  return data;
}

async function getCategories(): Promise<ProductCategoryOption[]> {
  const { data } = await api.get<ProductCategoryOption[]>(
    "/products/categories",
  );
  return data;
}

async function updateProduct(
  productId: string,
  params: UpdateProductParams,
): Promise<Product> {
  const { data } = await api.put<Product>(`/products/${productId}`, params);
  return data;
}

async function deleteProduct(productId: string): Promise<void> {
  await api.delete(`/products/${productId}`);
}

export const productsApi = {
  getProducts,
  getProductById,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct,
};

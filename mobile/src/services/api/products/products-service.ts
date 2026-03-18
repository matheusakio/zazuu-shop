import { productsApi } from "./products-api";
import {
  CreateProductParams,
  GetProductsParams,
  Product,
  ProductCategoryOption,
  UpdateProductParams,
} from "./products-types";

async function getProducts(params?: GetProductsParams): Promise<Product[]> {
  return productsApi.getProducts(params);
}

async function getProductById(productId: string): Promise<Product> {
  return productsApi.getProductById(productId);
}

async function getCategories(): Promise<ProductCategoryOption[]> {
  return productsApi.getCategories();
}

async function createProduct(params: CreateProductParams): Promise<Product> {
  return productsApi.createProduct(params);
}

async function updateProduct(
  productId: string,
  params: UpdateProductParams,
): Promise<Product> {
  return productsApi.updateProduct(productId, params);
}

async function deleteProduct(productId: string): Promise<void> {
  return productsApi.deleteProduct(productId);
}

export const productsService = {
  getProducts,
  getCategories,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  listCategoriesController,
  listProductsController,
  updateProductController,
} from "../controllers/products.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const productsRoutes = Router();

productsRoutes.get("/", listProductsController);
productsRoutes.get("/categories", listCategoriesController);
productsRoutes.get("/:id", getProductByIdController);

productsRoutes.post("/", authMiddleware, createProductController);
productsRoutes.put("/:id", authMiddleware, updateProductController);
productsRoutes.delete("/:id", authMiddleware, deleteProductController);

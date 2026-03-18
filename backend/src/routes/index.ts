import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { productsRoutes } from "./products.routes";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productsRoutes);

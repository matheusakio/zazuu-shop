import { Router } from "express";
import {
  getMeController,
  loginController,
  registerController,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const authRoutes = Router();

authRoutes.post("/register", registerController);
authRoutes.post("/login", loginController);
authRoutes.get("/me", authMiddleware, getMeController);

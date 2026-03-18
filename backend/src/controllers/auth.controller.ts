import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const registerSchema = z.object({
  username: z.string().min(2, "Nome de usuário muito curto"),
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const loginSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export async function registerController(req: Request, res: Response) {
  try {
    const body = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return res.status(409).json({ message: "E-mail já está em uso" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({}, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: "7d",
    });

    return res.status(201).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Erro de validação",
        errors: error.issues,
      });
    }

    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function loginController(req: Request, res: Response) {
  try {
    const body = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({}, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: "7d",
    });

    return res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Erro de validação",
        errors: error.issues,
      });
    }

    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getMeController(req: Request, res: Response) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

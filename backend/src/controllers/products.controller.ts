import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { PRODUCT_CATEGORIES } from "../constants/product-categories";

const productSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  description: z.string().min(3, "Descrição é obrigatória"),
  price: z.number().positive("O preço deve ser maior que zero"),
  imageUrl: z.string().optional().or(z.literal("")),
  category: z.enum(PRODUCT_CATEGORIES, {
    message: "Categoria inválida",
  }),
  stock: z.number().int().min(0, "O estoque não pode ser negativo"),
});

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export async function createProductController(req: Request, res: Response) {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const body = productSchema.parse(req.body);

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        imageUrl: body.imageUrl || null,
        category: body.category,
        stock: body.stock,
        ownerId: userId,
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return res.status(201).json(product);
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

export async function listProductsController(req: Request, res: Response) {
  try {
    const rawSearch = Array.isArray(req.query.search)
      ? req.query.search[0]
      : req.query.search;
    const rawCategory = Array.isArray(req.query.category)
      ? req.query.category[0]
      : req.query.category;
    const rawMinPrice = Array.isArray(req.query.minPrice)
      ? req.query.minPrice[0]
      : req.query.minPrice;
    const rawMaxPrice = Array.isArray(req.query.maxPrice)
      ? req.query.maxPrice[0]
      : req.query.maxPrice;

    const search = rawSearch ? String(rawSearch).trim() : "";
    const category = rawCategory ? String(rawCategory).trim() : "";
    const minPrice = rawMinPrice ? Number(rawMinPrice) : undefined;
    const maxPrice = rawMaxPrice ? Number(rawMaxPrice) : undefined;

    const products = await prisma.product.findMany({
      include: {
        owner: {
          select: {
            id: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const normalizedSearch = normalizeText(search);
    const normalizedCategory = normalizeText(category);

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        normalizeText(product.name).includes(normalizedSearch) ||
        normalizeText(product.description).includes(normalizedSearch);

      const matchesCategory =
        !normalizedCategory ||
        normalizeText(product.category).includes(normalizedCategory);

      const matchesMinPrice =
        minPrice === undefined || product.price >= minPrice;

      const matchesMaxPrice =
        maxPrice === undefined || product.price <= maxPrice;

      return (
        matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice
      );
    });

    return res.json(filteredProducts);
  } catch {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getProductByIdController(req: Request, res: Response) {
  try {
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    if (!id) {
      return res.status(400).json({ message: "ID do produto não informado" });
    }

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    return res.json(product);
  } catch {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updateProductController(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    if (!id) {
      return res.status(400).json({ message: "ID do produto não informado" });
    }

    if (!userId) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const body = productSchema.parse(req.body);

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    if (existingProduct.ownerId !== userId) {
      return res
        .status(403)
        .json({ message: "Você só pode editar os seus próprios produtos" });
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        imageUrl: body.imageUrl || null,
        category: body.category,
        stock: body.stock,
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    return res.json(product);
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

export async function deleteProductController(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const rawId = req.params.id;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;

    if (!id) {
      return res.status(400).json({ message: "ID do produto não informado" });
    }

    if (!userId) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    if (existingProduct.ownerId !== userId) {
      return res
        .status(403)
        .json({ message: "Você só pode excluir os seus próprios produtos" });
    }

    await prisma.product.delete({
      where: { id },
    });

    return res.status(204).send();
  } catch {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function listCategoriesController(_req: Request, res: Response) {
  return res.json(
    PRODUCT_CATEGORIES.map((category) => ({
      label: category,
      value: category,
    })),
  );
}

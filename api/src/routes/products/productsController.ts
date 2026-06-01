import { Request, Response } from "express";
import { db } from "../../db";
import { ProductsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(ProductsTable);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function getProductsById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [product] = await db
      .select()
      .from(ProductsTable)
      .where(eq(ProductsTable.id, Number(id)));

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function createProducts(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(ProductsTable)
      .values(req.body)
      .returning();

    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function updateProducts(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [updatedProduct] = await db
      .update(ProductsTable)
      .set(req.body)
      .where(eq(ProductsTable.id, Number(id)))
      .returning();

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function deleteProducts(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [deletedProduct] = await db
      .delete(ProductsTable)
      .where(eq(ProductsTable.id, Number(id)))
      .returning();

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (e) {
    res.status(500).send(e);
  }
}
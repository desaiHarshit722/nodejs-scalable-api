import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("this is the products list");
}

export function getProductsById(req: Request, res: Response) {
  res.send("get the products by id");
}

export function createProducts(req: Request, res: Response) {
  console.log(req.body);
  res.send("create the products");
}

export function updateProducts(req: Request, res: Response) {
  res.send("update the products");
}

export function deleteProducts(req: Request, res: Response) {
  res.send("delete the products");
}

import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
  res.send("this is the products list");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A list of the products list by id");
});

router.post("/", (req, res) => {
  res.send("New Product created.");
});


export default router;

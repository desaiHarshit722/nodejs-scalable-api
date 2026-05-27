import express, { Router } from "express";
import router from "./routes/products";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/products', router)

app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});

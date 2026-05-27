import express, { json, urlencoded } from "express";
import router from "./routes/products";
const app = express();
const port = 3000;

app.use(urlencoded({extended:false}))
app.use(json())

app.use('/products', router)

app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});

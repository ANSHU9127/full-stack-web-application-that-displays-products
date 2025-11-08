
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import EmiPlan from "./models/EmiPlan.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/api/products/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  const plans = await EmiPlan.find({ product: product._id });
  res.json({ product, plans });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running → http://localhost:${process.env.PORT}`)
);

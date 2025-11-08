
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import EmiPlan from "./models/EmiPlan.js";

dotenv.config();
await mongoose.connect(process.env.MONGODB_URI);

await Product.deleteMany({});
await EmiPlan.deleteMany({});

const product = await Product.create({
  name: "iPhone 17 Pro",
  slug: "iphone-17-pro",
  image: "",
  basePrice: 130000,
  variants: [
    { key: "256GB", attributes: { storage: "256GB" }, price: 130000 },
    { key: "512GB", attributes: { storage: "512GB" }, price: 155000 }
  ]
});

await EmiPlan.insertMany([
  { product: product._id, variantKey: "256GB", monthlyAmount: 10000, tenureMonths: 12, interest: 10.5 },
  { product: product._id, variantKey: "512GB", monthlyAmount: 12000, tenureMonths: 12, interest: 10.5 }
]);

console.log("Seeded!");
process.exit();

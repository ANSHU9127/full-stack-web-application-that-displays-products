
import mongoose from "mongoose";

const VariantSchema = new mongoose.Schema({
  key: String,
  attributes: Object,
  mrp: Number,
  price: Number,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  image: String,
  basePrice: Number,
  variants: [VariantSchema],
});

export default mongoose.model("Product", ProductSchema);

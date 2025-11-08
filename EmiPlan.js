
import mongoose from "mongoose";

const EmiPlanSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  variantKey: String,
  monthlyAmount: Number,
  tenureMonths: Number,
  interest: Number,
  cashback: Number,
});

export default mongoose.model("EmiPlan", EmiPlanSchema);

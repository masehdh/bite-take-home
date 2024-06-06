import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Discount requires an id"],
  },
  name: {
    type: String,
    required: [true, "Discount requires a name"],
  },
  amount: {
    type: Number,
    min: [1, "Discount amount must be at least 1 cent"],
  },
  rate: {
    type: Number,
    min: [0.01, "Discount rate must be greater than 0"],
    max: [0.99, "Discount rate must be less than 100%"],
  },
  couponCode: {
    type: String,
  },
});

const Discount = mongoose.model("Discount", discountSchema);

export default Discount;

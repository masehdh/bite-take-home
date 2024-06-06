import mongoose from "mongoose";

const orderTypeSchema = new mongoose.Schema({
  _id: { type: String, required: [true, "OrderType requires an id"] },
  name: {
    type: String,
    required: [true, "OrderType requires a name"],
  },
});

const OrderType = mongoose.model("OrderType", orderTypeSchema);

export default OrderType;

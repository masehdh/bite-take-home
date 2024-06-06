import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  _id: { type: String, required: [true, "Item requires an id"] },
  name: {
    type: String,
    required: [true, "Item requires a name"],
  },
  price: {
    type: Number,
    required: [true, "Item requires a price"],
  },
  modGroupIds: [String],
  magicCopyKey: String,
  imageUrl: String,
});

const Item = mongoose.model("Item", itemSchema);

export default Item;

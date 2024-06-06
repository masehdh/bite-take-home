import mongoose from "mongoose";

const modSchema = new mongoose.Schema({
  _id: { type: String, required: [true, "Mod requires an id"] },
  name: {
    type: String,
    required: [true, "Mod requires a name"],
  },
  modGroupIds: [String],
  price: { type: Number, required: [true, "Mod requires a price"] },
});

const Mod = mongoose.model("Mod", modSchema);

export default Mod;

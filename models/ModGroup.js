import mongoose from "mongoose";

const modGroupSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "ModGroup requires an id"],
  },
  name: {
    type: String,
    required: [true, "ModGroup requires a name"],
  },
  modIds: [String],
  maxMods: Number,
  minMods: Number,
});

const ModGroup = mongoose.model("ModGroup", modGroupSchema);

export default ModGroup;

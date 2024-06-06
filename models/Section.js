import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Section requires an id"],
  },
  name: {
    type: String,
    required: [true, "Section requires a name"],
  },
  itemIds: [String],
  magicCopyKey: String,
  imageUrl: String,
});

const Section = mongoose.model("Section", sectionSchema);

export default Section;

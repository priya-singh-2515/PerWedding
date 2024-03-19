import mongoose from "mongoose";

const CatSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CatSchema);

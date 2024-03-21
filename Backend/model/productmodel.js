import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
    photo: [
      {
        data: Buffer,
        contentType: String,
      },
    ],

    paragrapgh: {
      type: String,
      require: true,
    },
    venue: {
      type: String,
    },
    hairandmakeup: {
      type: String,
    },
    floriestCompany: {
      type: String,
    },
    catering: {
      type: String,
    },
    desert: {
      type: String,
    },
    hotel1: {
      type: String,
    },
    hotel2: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("product", ProductSchema);

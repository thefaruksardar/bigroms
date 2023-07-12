const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      required: false,
      type: String,
    },
    image: {
      required: false,
      type: String,
    },
    file: {
      required: false,
      type: String,
    },
    permalink: {
      required: false,
      type: String,
    },
    name: {
      required: false,
      type: String,
    },
    size: {
      required: false,
      type: String,
    },
    language: {
      required: false,
      type: String,
    },
    rating: {
      required: false,
      type: Number,
    },
    category: {
      required: false,
      type: String,
    },
    rom: {
      required: false,
      type: String,
    },
    isdraft: {
      default: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

const postModel =
  mongoose.model.postSchema || mongoose.model("Posts", postSchema);

module.exports = postModel;

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    owner_id: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 1000,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);

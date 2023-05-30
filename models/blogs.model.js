const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    category: { type: String },
    description: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogsSchema);
module.exports = Blogs;

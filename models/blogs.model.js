const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    authorImg: { type: String },
    category: { type: String },
    description: { type: String },
    img: { type: String },
    date: { type: Number },
    month: { type: Number },
    year: { type: Number },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogsSchema);
module.exports = Blogs;

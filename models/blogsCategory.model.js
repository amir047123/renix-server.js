const mongoose = require("mongoose");

const BlogsCategorySchema = mongoose.Schema({
  name: { type: String, required: [true, "Please provide category"] },
});

const BlogsCategory = mongoose.model("BlogsCategory", BlogsCategorySchema);
module.exports = BlogsCategory;

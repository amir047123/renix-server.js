const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide category"],
  },
  // meta seo
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  metaImage: {
    type: String,
  },
  canonicalUrl: {
    type: String,
  },
  slug: {
    type: String,
    required: [true, "Please provide category"],
    unique: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;

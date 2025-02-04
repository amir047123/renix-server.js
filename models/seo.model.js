const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema({
  page: {
    type: String,
    required: [true, "Page is required"],
    unique: true,
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
  },
});

const Seo = mongoose.model("Seo", seoSchema);

module.exports = Seo;

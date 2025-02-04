const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsAndMediaSchema = new Schema({
  newsTitle: {
    type: String,
  },
  newsCategory: {
    type: String,
  },
  newsImage: {
    type: String,
  },
  newsDescription: {
    type: String,
  },
  youtubeLink: {
    type: String,
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

const NewsAndMedia = mongoose.model("NewsAndMedia", newsAndMediaSchema);

module.exports = NewsAndMedia;

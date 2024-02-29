const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: { type: String },
  discount: { type: Number },
  genericName: { type: String },
  supplierName: { type: String },
  medicineCategory: { type: String },
  medicineStatus: { type: String },
  medicineType: { type: String },
  securityCode: { type: String },
  stock: { type: String },
  price: { type: Number },
  date: { type: Number },
  month: { type: Number },
  year: { type: Number },
  strength: { type: String },
  category: { type: String },
  description: { type: String },
  img: { type: String },
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

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;

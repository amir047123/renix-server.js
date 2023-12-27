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
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;

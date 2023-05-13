const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: { type: String },
  genericName: { type: String },
  supplierName: { type: String },
  price: { type: Number },
  strength: { type: String },
  category: { type: String },
  medicineInfo: { type: String },
  img: { type: String },
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;

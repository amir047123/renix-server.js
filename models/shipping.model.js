const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  insideDhaka: {
    type: Number,
  },
  outsideDhaka: {
    type: Number,
  },
  tax: {
    type: Number,
  },

});

const Shipping = mongoose.model("Shipping", shippingSchema);

module.exports = Shipping;

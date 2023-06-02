const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    order: { type: Object },
    customerDetails: { type: Object },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

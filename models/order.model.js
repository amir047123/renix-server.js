const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    order: { type: Object },
    customerDetails: { type: Object },
    orderStatus: { type: String, default: "pending" },
    customerId: { type: String },
    subTotal: { type: Number },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

const Order = require("../models/order.model");

exports.createOrderService = async (data) => {
  const result = await Order.create(data);
  return result;
};

exports.getOrderService = async (page, size) => {
  let result = await Order.find({})
    .skip(page * size)
    .limit(size);
  const total = await Order.countDocuments({});
  return { result, total };
};

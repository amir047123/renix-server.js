const Order = require("../models/order.model");

exports.createOrderService = async (data) => {
  try {
    const createdOrder = await Order.create(data);
    return createdOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

exports.deleteOrderService = async (id) => {
  try {
    const deletedOrder = await Order.deleteOne({ _id: id });
    return deletedOrder;
  } catch (error) {
    throw new Error(`Error deleting order: ${error.message}`);
  }
};

exports.updateOrderService = async (id, data) => {
  try {
    const updatedOrder = await Order.updateOne({ _id: id }, data);
    return updatedOrder;
  } catch (error) {
    throw new Error(`Error updating order: ${error.message}`);
  }
};

exports.getOrderByIdService = async (id) => {
  try {
    const orderById = await Order.findOne({ _id: id });
    return orderById;
  } catch (error) {
    throw new Error(`Error getting order by ID: ${error.message}`);
  }
};

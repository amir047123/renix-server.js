const Shipping = require("../models/shipping.model");

exports.createShippingService = async (data) => {
  const createdShipping = await Shipping.create(data);
  return createdShipping;
};

exports.deleteShippingService = async (id) => {
  const deletedShipping = await Shipping.deleteOne({ _id: id });
  return deletedShipping;
};

exports.updateShippingService = async (id, data) => {
  const updatedShipping = await Shipping.updateOne({ _id: id }, data);
  return updatedShipping;
};

exports.getShippingByIdService = async (id) => {
  const ShippingById = await Shipping.findOne({ _id: id });
  return ShippingById;
};

const Order = require("../models/order.model");
const {
  createOrderService,
  deleteOrderService,
  updateOrderService,
  getOrderByIdService,
  getOrdersService,
} = require("../services/order.service");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await createOrderService(req.body);
    res.status(200).json({
      status: "success",
      message: "Order created successfully!",
      data: newOrder,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Orders
exports.getOrders = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const orders = await Order.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Order.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: orders,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await deleteOrderService(id);

    res.status(200).json({
      status: "success",
      data: deletedOrder,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Update Order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await updateOrderService(id, req.body);

    if (updatedOrder.n === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Couldn't update. Order not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Order updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Order by ID
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const orderById = await getOrderByIdService(id);

    res.status(200).json({
      status: "success",
      data: orderById,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

exports.getSpecificOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 10;
    const filter = req.query.filter;

    const query = {};

    if (filter) {
      query.$or = [
        { orderStatus: { $regex: filter, $options: "i" } },
        { customerId: { $regex: filter, $options: "i" } },
        { "customerDetails.firstName": { $regex: filter, $options: "i" } },
        { "customerDetails.lastName": { $regex: filter, $options: "i" } },
      ];
    }

    ["fieldName1", "fieldName2", "fieldName3"].forEach((field, index) => {
      const fieldValue = req.query[`fieldValue${index + 1}`];
      if (req.query[field] && fieldValue) {
        query[req.query[field]] = fieldValue;
      }
    });

    const Orders = await Order.find(query)
      .skip(page * size)
      .limit(size);

    const total = await Order.countDocuments(query);

    res.status(200).json({
      status: "success",
      data: Orders,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

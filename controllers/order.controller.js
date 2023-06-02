const Order = require("../models/order.model");
const {
  createOrderService,
  getOrderService,
} = require("../services/order.service");

// for property post
exports.createOrder = async (req, res) => {
  try {
    const newBlog = await createOrderService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

//Get all Property
exports.getOrder = async (req, res) => {
  try {
    const page = +req.query?.page;
    const size = +req.query?.size;
    const data = await getOrderService(page, size);

    res.status(200).json({
      status: "success",
      data: data.result,
      total: data.total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

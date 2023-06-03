const Order = require("../models/order.model");
const {
  createOrderService,
  getOrderService,
  getOrderByIdService,
  updateOrderStatusService,
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

//Get order by id
exports.getOrderById = async (req, res) => {
  const id = req?.params.id;
  try {
    const data = await getOrderByIdService(id);
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

// get Specific order
exports.getSpecificOrder = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;

  try {
    let properties = await Order.find({ [fieldName]: { $eq: fieldValue } })
      .skip(page * size)
      .limit(size);
    const total = await Order.countDocuments({
      [fieldName]: { $eq: fieldValue },
    });
    res.status(200).json({
      status: "success",
      data: properties,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// update order status
exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await updateOrderStatusService(id, req.body);

    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "order updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update user ",
      error: error.message,
    });
  }
};

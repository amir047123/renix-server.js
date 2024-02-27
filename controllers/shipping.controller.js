const Shipping = require("../models/shipping.model");
const {
  createShippingService,
  deleteShippingService,
  updateShippingService,
  getShippingByIdService,
} = require("../services/shipping.service");

// Create Shipping
exports.createShipping = async (req, res) => {
  try {
    const newShipping = await createShippingService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: newShipping,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Shippings
exports.getShippings = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const Shippings = await Shipping.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Shipping.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: Shippings,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Delete Shipping
exports.deleteShipping = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedShipping = await deleteShippingService(id);

    res.status(200).json({
      status: "success",
      data: deletedShipping,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Update Shipping
exports.updateShipping = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedShipping = await updateShippingService(id, req.body);

    if (updatedShipping.nModified === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't update. Shipping not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Shipping updated successfully",
      data: updatedShipping,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Shipping by ID
exports.getShippingById = async (req, res) => {
  const { id } = req.params;
  try {
    const ShippingById = await getShippingByIdService(id);

    res.status(200).json({
      status: "success",
      data: ShippingById,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Specific Shippings
exports.getSpecificShippings = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const Shippings = await Shipping.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Shipping.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: Shippings,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

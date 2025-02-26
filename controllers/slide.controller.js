const Slide = require("../models/slide.model");

const {
  createSlideService,
  deleteSlideService,
  updateSlideService,
  getSlideByIdService,
} = require("../services/slide.service");

// Create News and Media
exports.createSlide = async (req, res) => {
  try {
    const newSlide = await createSlideService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: newSlide,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get News and Media
exports.getSlide = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 10;
    const filter = req.query.filter;

    const query = {};

    if (filter) {
      query.$or = [
        { title: { $regex: filter, $options: "i" } },
        { subtitle: { $regex: filter, $options: "i" } },
        { buttonText: { $regex: filter, $options: "i" } },
        { link: { $regex: filter, $options: "i" } },
        { description: { $regex: filter, $options: "i" } },
      ];
    }

    ["fieldName", "fieldName2", "fieldName3"].forEach((field, index) => {
      const fieldValue = req.query[`fieldValue${index + 1}`];
      if (req.query[field] && fieldValue) {
        query[req.query[field]] = fieldValue;
      }
    });

    const slide = await Slide.find(query)
      .skip(page * size)
      .limit(size);

    const total = await Slide.countDocuments(query);

    res.status(200).json({
      status: "success",
      data: slide,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Delete News and Media
exports.deleteSlide = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedSlide = await deleteSlideService(id);

    res.status(200).json({
      status: "success",
      data: deletedSlide,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Update News and Media
exports.updateSlide = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSlide = await updateSlideService(id, req.body);

    if (updatedSlide.nModified === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't update. News and Media not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "News and Media updated successfully",
      data: updatedSlide,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get News and Media by ID
exports.getSlideById = async (req, res) => {
  const { id } = req.params;
  try {
    const slideById = await getSlideByIdService(id);

    res.status(200).json({
      status: "success",
      data: slideById,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Specific News and Media
exports.getSpecificSlide = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const slide = await Slide.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Slide.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: slide,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

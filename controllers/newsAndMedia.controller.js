const NewsAndMedia = require("../models/newsAndMedia.model");

const {
  createNewsAndMediaService,
  deleteNewsAndMediaService,
  updateNewsAndMediaService,
  getNewsAndMediaByIdService,
} = require("../services/newsAndMedia.service");

// Create News and Media
exports.createNewsAndMedia = async (req, res) => {
  try {
    const newNewsAndMedia = await createNewsAndMediaService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: newNewsAndMedia,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get News and Media
exports.getNewsAndMedia = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 10;
    const filter = req.query.filter;

    const query = {};

    if (filter) {
      query.$or = [
        { newsTitle: { $regex: filter, $options: "i" } },
        { newsCategory: { $regex: filter, $options: "i" } },
        { newsDescription: { $regex: filter, $options: "i" } },
        { youtubeLink: { $regex: filter, $options: "i" } },
        { metaTitle: { $regex: filter, $options: "i" } },
        { metaDescription: { $regex: filter, $options: "i" } },
        { slug: { $regex: filter, $options: "i" } },
        { canonicalUrl: { $regex: filter, $options: "i" } },
      ];
    }

    ["fieldName1", "fieldName2", "fieldName3"].forEach((field, index) => {
      const fieldValue = req.query[`fieldValue${index + 1}`];
      if (req.query[field] && fieldValue) {
        query[req.query[field]] = fieldValue;
      }
    });

    const newsAndMedia = await NewsAndMedia.find(query)
      .skip(page * size)
      .limit(size);

    const total = await NewsAndMedia.countDocuments(query);

    res.status(200).json({
      status: "success",
      data: newsAndMedia,
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
exports.deleteNewsAndMedia = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNewsAndMedia = await deleteNewsAndMediaService(id);

    res.status(200).json({
      status: "success",
      data: deletedNewsAndMedia,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Update News and Media
exports.updateNewsAndMedia = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNewsAndMedia = await updateNewsAndMediaService(id, req.body);

    if (updatedNewsAndMedia.nModified === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't update. News and Media not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "News and Media updated successfully",
      data: updatedNewsAndMedia,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get News and Media by ID
exports.getNewsAndMediaById = async (req, res) => {
  const { id } = req.params;
  try {
    const newsAndMediaById = await getNewsAndMediaByIdService(id);

    res.status(200).json({
      status: "success",
      data: newsAndMediaById,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Specific News and Media
exports.getSpecificNewsAndMedia = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 10;
    const filter = req.query.filter;

    const query = {};

    if (filter) {
      query.$or = [
        { newsTitle: { $regex: filter, $options: "i" } },
        { newsCategory: { $regex: filter, $options: "i" } },
        { newsDescription: { $regex: filter, $options: "i" } },
        { youtubeLink: { $regex: filter, $options: "i" } },
        { metaTitle: { $regex: filter, $options: "i" } },
        { metaDescription: { $regex: filter, $options: "i" } },
        { slug: { $regex: filter, $options: "i" } },
        { canonicalUrl: { $regex: filter, $options: "i" } },
      ];
    }

    ["fieldName1", "fieldName2", "fieldName3"].forEach((field, index) => {
      const fieldValue = req.query[`fieldValue${index + 1}`];
      if (req.query[field] && fieldValue) {
        query[req.query[field]] = fieldValue;
      }
    });

    const newsAndMedia = await NewsAndMedia.find(query)
      .skip(page * size)
      .limit(size);

    const total = await NewsAndMedia.countDocuments(query);

    res.status(200).json({
      status: "success",
      data: newsAndMedia,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

NewsAndMedia = require("../models/newsAndMedia.model")

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
    const page = +req.query?.page;
    const size = +req.query?.size;
    const fieldName = req.query?.fieldName;
    const fieldValue = req.query?.fieldValue;
    const fieldName2 = req.query?.fieldName2;
    const fieldValue2 = req.query?.fieldValue2;
    const fieldName3 = req.query?.fieldName3;
    const fieldValue3 = req.query?.fieldValue3;
  
    try {
      const newsAndMedia = await NewsAndMedia.find({
        $and: [
          { [fieldName]: { $eq: fieldValue } },
          { [fieldName2]: { $eq: fieldValue2 } },
          { [fieldName3]: { $eq: fieldValue3 } },
        ],
      })
        .skip(page * size)
        .limit(size);
  
      const total = await NewsAndMedia.countDocuments({
        $and: [
          { [fieldName]: { $eq: fieldValue } },
          { [fieldName2]: { $eq: fieldValue2 } },
          { [fieldName3]: { $eq: fieldValue3 } },
        ],
      });
  
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
    const page = +req.query?.page;
    const size = +req.query?.size;
    const fieldName = req.query?.fieldName;
    const fieldValue = req.query?.fieldValue;
    const fieldName2 = req.query?.fieldName2;
    const fieldValue2 = req.query?.fieldValue2;
    const fieldName3 = req.query?.fieldName3;
    const fieldValue3 = req.query?.fieldValue3;
  
    try {
      const newsAndMedia = await NewsAndMedia.find({
        $and: [
          { [fieldName]: { $eq: fieldValue } },
          { [fieldName2]: { $eq: fieldValue2 } },
          { [fieldName3]: { $eq: fieldValue3 } },
        ],
      })
        .skip(page * size)
        .limit(size);
  
      const total = await NewsAndMedia.countDocuments({
        $and: [
          { [fieldName]: { $eq: fieldValue } },
          { [fieldName2]: { $eq: fieldValue2 } },
          { [fieldName3]: { $eq: fieldValue3 } },
        ],
      });
  
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
  
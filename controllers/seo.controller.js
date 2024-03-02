const Seo = require("../models/seo.model");
const {
  createSeoService,
  getAllSeoService,
  deleteSeoService,
  getSeoServiceById,
  updateSeoServiceById,
} = require("../services/seo.service");

exports.createSeo = async (req, res) => {
  try {
    const seoData = req.body;
    const newSeo = await createSeoService(seoData);
    // console.log(newSeo);
    if (newSeo.error) {
      return res.json({
        status: "error",
        message: newSeo.error,
        //  data: newSeo,
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: newSeo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
exports.getAllSeo = async (req, res) => {
  try {
    const allSeo = await getAllSeoService();
    return res.status(200).json({
      status: "success",
      message: "All seo data get successfully",
      data: allSeo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
exports.deleteSeo = async (req, res) => {
  try {
    const id = req.params.id;
    const allSeo = await deleteSeoService(id);
    return res.status(200).json({
      status: "success",
      message: "Seo deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
exports.getSeoById = async (req, res) => {
  try {
    const id = req.params.id;
    const seo = await getSeoServiceById(id);
    return res.status(200).json({
      status: "success",
      message: "Single seo get successfull",
      data: seo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
exports.updateSeoById = async (req, res) => {
  try {
    const id = req.params.id;
    const seo = await updateSeoServiceById(id, req.body);

    return res.status(200).json({
      status: "success",
      message: "Seo updated successfull",
      data: seo,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
// Get Specific Reviews
exports.getSpecificSeo = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const Seos = await Seo.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Seo.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: Seos,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

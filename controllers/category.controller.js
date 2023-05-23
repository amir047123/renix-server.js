const {
  createCategoryService,
  getCategoryService,
} = require("../services/category.service");

// for property post
exports.createCategory = async (req, res) => {
  try {
    const newCategory = await createCategoryService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newCategory,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

//Get all category
exports.getCategory = async (req, res) => {
  try {
    const data = await getCategoryService();
    res.status(200).json({
      status: "success",
      data: data.result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

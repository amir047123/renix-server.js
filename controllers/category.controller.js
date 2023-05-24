const {
  createCategoryService,
  getCategoryService,
  deleteCategoryService,
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

// delete category
exports.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await deleteCategoryService(id);
    res.status(200).json({
      status: "success",
      data: Category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

const {
  createCategoryService,
  getCategoryService,
  deleteCategoryService,
  getCategoryByIdService,
  updateCategoryByIdService,
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
// get  category by id
exports.getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await getCategoryByIdService(id);
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
// get  category by id
exports.updateCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await updateCategoryByIdService(id, req.body);
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

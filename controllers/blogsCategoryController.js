const {
  createBlogsCategoryService,
  getBlogsCategoryService,
  deleteBlogsCategoryService,
  updateBlogsCategoryService,
  getBlogCategoryByService,
} = require("../services/blogsCategory.service");

// for property post
exports.createBlogsCategory = async (req, res) => {
  try {
    const newCategory = await createBlogsCategoryService(req.body);
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
exports.getBlogsCategory = async (req, res) => {
  try {
    const data = await getBlogsCategoryService();
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
exports.deleteBlogsCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await deleteBlogsCategoryService(id);
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

// update category by id
exports.updateBlogsCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await updateBlogsCategoryService(id, req.body);
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
// get category by id
exports.getBlogCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const Category = await getBlogCategoryByService(id);
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
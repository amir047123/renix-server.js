const Blogs = require("../models/medicine.model");
const {
  createBlogsService,
  getBlogsService,
  getBlogsByIdService,
  deleteBlogsService,
} = require("../services/blogs.service");

// for property post
exports.createBlog = async (req, res) => {
  try {
    const newBlog = await createBlogsService(req.body);
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
exports.getBlog = async (req, res) => {
  try {
    const page = +req.query?.page;
    const size = +req.query?.size;
    const data = await getBlogsService(page, size);

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

// get blog by id
exports.getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const Blog = await getBlogsByIdService(id);
    res.status(200).json({
      status: "success",
      data: Blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const Blog = await deleteBlogsService(id);
    res.status(200).json({
      status: "success",
      data: Blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

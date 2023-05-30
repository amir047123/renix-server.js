const Blogs = require("../models/blogs.model");

exports.createBlogsCategoryService = async (data) => {
  const result = await Blogs.create(data);
  return result;
};

exports.getBlogsCategoryService = async () => {
  let result = await Blogs.find({});
  return result;
};

exports.deleteBlogsCategoryService = async (id) => {
  const result = await Blogs.deleteOne({ _id: id });
  return result;
};

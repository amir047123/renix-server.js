const BlogsCategory = require("../models/blogsCategory.model");

exports.createBlogsCategoryService = async (data) => {
  const result = await BlogsCategory.create(data);
  return result;
};

exports.getBlogsCategoryService = async () => {
  let result = await BlogsCategory.find({});
  return result;
};

exports.deleteBlogsCategoryService = async (id) => {
  const result = await BlogsCategory.deleteOne({ _id: id });
  return result;
};

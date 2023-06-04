const Blogs = require("../models/blogs.model");

exports.createBlogsService = async (data) => {
  const result = await Blogs.create(data);
  return result;
};

exports.getBlogsService = async (page, size) => {
  let result = await Blogs.find({})
    .skip(page * size)
    .limit(size);
  const total = await Blogs.countDocuments({});
  return { result, total };
};
exports.getBlogsByIdService = async (id) => {
  const result = await Blogs.findById(id);
  return result;
};

exports.deleteBlogsService = async (id) => {
  const result = await Blogs.deleteOne({ _id: id });
  return result;
};

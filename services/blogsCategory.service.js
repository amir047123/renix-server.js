const BlogsCategory = require("../models/blogsCategory.model");

exports.createBlogsCategoryService = async (data) => {
  const result = await BlogsCategory.create(data);
  return result;
};

exports.getBlogsCategoryService = async (page = 0, size = 10, filter) => {
  const query = {};

  if (filter) {
    query.$or = [
      { name: { $regex: filter, $options: "i" } },
      { metaTitle: { $regex: filter, $options: "i" } },
      { metaDescription: { $regex: filter, $options: "i" } },
      { canonicalUrl: { $regex: filter, $options: "i" } },
      { slug: { $regex: filter, $options: "i" } },
    ];
  }

  const result = await BlogsCategory.find(query)
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await BlogsCategory.countDocuments(query);
  return { result, total };
};

exports.deleteBlogsCategoryService = async (id) => {
  const result = await BlogsCategory.deleteOne({ _id: id });
  return result;
};
exports.updateBlogsCategoryService = async (id, data) => {
  const result = await BlogsCategory.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};
exports.getBlogCategoryByService = async (id) => {
  const result = await BlogsCategory.findOne({ _id: id });

  return result;
};

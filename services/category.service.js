const Category = require("../models/category.model");

exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

exports.getCategoryService = async (page = 1, size = 10, filter) => {
  const query = {};

  if (filter) {
    query.$or = [
      { name: { $regex: filter, $options: "i" } },
      { metaTitle: { $regex: filter, $options: "i" } },
      { metaDescription: { $regex: filter, $options: "i" } },
      { slug: { $regex: filter, $options: "i" } },
    ];
  }

  const result = await Category.find(query)
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await Category.countDocuments(query);

  return { result, total };
};

exports.deleteCategoryService = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};
exports.getCategoryByIdService = async (id) => {
  const result = await Category.findOne({ _id: id });
  return result;
};
exports.updateCategoryByIdService = async (id, data) => {
  const result = await Category.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

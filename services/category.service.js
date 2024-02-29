const Category = require("../models/category.model");

exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

exports.getCategoryService = async () => {
  let result = await Category.find({});
  return result;
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


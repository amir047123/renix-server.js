const Category = require("../models/category.model");

exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

exports.getCategoryService = async () => {
  let result = await Category.find({});
  return result;
};

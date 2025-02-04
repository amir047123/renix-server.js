const NewsAndMedia = require("../models/newsAndMedia.model");

exports.createNewsAndMediaService = async (data) => {
  return await NewsAndMedia.create(data);
};

exports.deleteNewsAndMediaService = async (id) => {
  return await NewsAndMedia.deleteOne({ _id: id });
};

exports.updateNewsAndMediaService = async (id, data) => {
  return await NewsAndMedia.updateOne({ _id: id }, data);
};

exports.getNewsAndMediaByIdService = async (id) => {
  return await NewsAndMedia.findOne({ _id: id });
};

const Slide = require("../models/slide.model");

exports.createSlideService = async (data) => {
  return await Slide.create(data);
};

exports.deleteSlideService = async (id) => {
  return await Slide.deleteOne({ _id: id });
};

exports.updateSlideService = async (id, data) => {
  return await Slide.updateOne({ _id: id }, data);
};

exports.getSlideByIdService = async (id) => {
  return await Slide.findOne({ _id: id });
};

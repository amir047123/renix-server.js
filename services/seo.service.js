const Seo = require("../models/seo.model");

exports.createSeoService = async (data) => {
  const existsPage = await Seo.findOne({
    $or: [{ page: data.page }, { slug: data.slug }],
  });
  if (existsPage) {
    return { error: `This pages or slug already exists can not add again` };
  }
  const seo = new Seo(data).save();
  return seo;
};
exports.getAllSeoService = async () => {
  const seo = await Seo.find({});
  return seo;
};
exports.deleteSeoService = async (id) => {
  const seo = await Seo.findOneAndDelete({ _id: id });
  return seo;
};
exports.getSeoServiceById = async (id) => {
  const seo = await Seo.findOne({ _id: id });
  return seo;
};
exports.updateSeoServiceById = async (id, data) => {
  const seo = await Seo.findOneAndUpdate({ _id: id }, data, { new: true });
  return seo;
};

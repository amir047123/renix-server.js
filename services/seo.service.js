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
exports.getAllSeoService = async (page, size, filter) => {
  const query = {};

  if (filter) {
    query.$or = [
      { page: { $regex: filter, $options: "i" } },
      { metaTitle: { $regex: filter, $options: "i" } },
      { metaDescription: { $regex: filter, $options: "i" } },
      { canonicalUrl: { $regex: filter, $options: "i" } },
      { slug: { $regex: filter, $options: "i" } },
    ];
  }

  const seo = await Seo.find(query)
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await Seo.countDocuments(query);
  return { seo, total };
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

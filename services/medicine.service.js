const Medicine = require("../models/medicine.model");

exports.createMedicineService = async (data) => {
  const result = await Medicine.create(data);
  return result;
};

exports.getMedicineService = async (page = 0, size = 10, filter, isSpecial) => {
  const query = {};

  if (filter) {
    query.$or = [
      { name: { $regex: filter, $options: "i" } },
      { genericName: { $regex: filter, $options: "i" } },
      { supplierName: { $regex: filter, $options: "i" } },
      { medicineCategory: { $regex: filter, $options: "i" } },
      { medicineStatus: { $regex: filter, $options: "i" } },
      { medicineType: { $regex: filter, $options: "i" } },
      { securityCode: { $regex: filter, $options: "i" } },
      { stock: { $regex: filter, $options: "i" } },
      { strength: { $regex: filter, $options: "i" } },
      { category: { $regex: filter, $options: "i" } },
      { description: { $regex: filter, $options: "i" } },
      { metaTitle: { $regex: filter, $options: "i" } },
      { metaDescription: { $regex: filter, $options: "i" } },
      { slug: { $regex: filter, $options: "i" } },
      { canonicalUrl: { $regex: filter, $options: "i" } },
    ];
  }

  if (isSpecial) {
    query.isSpecial = isSpecial === "yes" ? true : false;
  }

  const result = await Medicine.find(query)
    .select("-fullDescription") // ✅ Corrected `.select()` placement
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await Medicine.countDocuments(query);

  return { result, total };
};

exports.getMedicineByIdService = async (id) => {
  const result = await Medicine.findById(id);
  return result;
};

exports.updateMedicineService = async (id, data) => {
  const result = await Medicine.findByIdAndUpdate(id, data, { new: true });
  return result;
};

exports.deleteMedicineService = async (id) => {
  const result = await Medicine.deleteOne({ _id: id });
  return result;
};

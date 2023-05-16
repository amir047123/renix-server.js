const Medicine = require("../models/medicine.model");

exports.createMedicineService = async (data) => {
  console.log(data);
  const result = await Medicine.create(data);
  return result;
};

exports.getMedicineService = async (page, size) => {
  let result = await Medicine.find({})
    .skip(page * size)
    .limit(size);
  const total = await Medicine.countDocuments({});
  return { result, total };
};

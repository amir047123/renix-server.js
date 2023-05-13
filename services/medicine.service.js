const Medicine = require("../models/medicine.model");

exports.createMedicineService = async (data) => {
  const result = await Medicine.create(data);
  return result;
};

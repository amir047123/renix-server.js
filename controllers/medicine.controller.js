const Medicine = require("../models/medicine.model");
const { createMedicineService } = require("../services/medicine.service");

// for property post
exports.createMedicine = async (req, res) => {
  try {
    const newMedicine = await createMedicineService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newMedicine,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

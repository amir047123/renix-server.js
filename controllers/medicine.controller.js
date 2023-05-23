const Medicine = require("../models/medicine.model");
const {
  createMedicineService,
  getMedicineService,
  getMedicineByIdService,
  deleteMedicineService,
} = require("../services/medicine.service");

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

//Get all Property
exports.getMedicine = async (req, res) => {
  try {
    const page = +req.query?.page;
    const size = +req.query?.size;
    const data = await getMedicineService(page, size);

    res.status(200).json({
      status: "success",
      data: data.result,
      total: data.total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

// get Medicine by id
exports.getMedicineById = async (req, res) => {
  try {
    const id = req.params.id;
    const Medicine = await getMedicineByIdService(id);
    res.status(200).json({
      status: "success",
      data: Medicine,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// delete medicine
exports.deleteMedicine = async (req, res) => {
  try {
    const id = req.params.id;
    const Medicine = await deleteMedicineService(id);
    res.status(200).json({
      status: "success",
      data: Medicine,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

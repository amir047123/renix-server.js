const Medicine = require("../models/medicine.model");
const {
  createMedicineService,
  getMedicineService,
  getMedicineByIdService,
  deleteMedicineService,
  updateMedicineService,
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

// Get all Property
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

// Get Medicine by id
exports.getMedicineById = async (req, res) => {
  try {
    const id = req.params.id;
    const medicine = await getMedicineByIdService(id);
    res.status(200).json({
      status: "success",
      data: medicine,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Update medicine
exports.updateMedicine = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedMedicine = await Medicine.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMedicine) {
      return res.status(404).json({
        status: "fail",
        message: "Medicine not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedMedicine,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Delete medicine
exports.deleteMedicine = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMedicine = await deleteMedicineService(id);

    if (!deletedMedicine) {
      return res.status(404).json({
        status: "fail",
        message: "Medicine not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: deletedMedicine,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// Get specific Medicines
exports.getSpecificMedicines = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const Medicines = await Medicine.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Medicine.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: Medicines,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

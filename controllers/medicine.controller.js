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
    const filter = req.query?.filter;
    const isSpecial = req.query?.isSpecial;
    const data = await getMedicineService(page, size, filter, isSpecial);

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
    const updatedMedicine = await Medicine.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

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
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 10;
    const filter = req.query.filter;
    const isSpecial = req.query.isSpecial;

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

    ["fieldName1", "fieldName2", "fieldName3"].forEach((field, index) => {
      const fieldValue = req.query[`fieldValue${index + 1}`];
      if (req.query[field] && fieldValue) {
        query[req.query[field]] = fieldValue;
      }
    });

    const Medicines = await Medicine.find(query)
      // .select("-fullDescription")
      .skip(page * size)
      .limit(size);

    const total = await Medicine.countDocuments(query);

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

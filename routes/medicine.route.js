const express = require("express");
const {
  createMedicine,
  getMedicine,
  getMedicineById,
  deleteMedicine,
} = require("../controllers/medicine.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").get(getMedicine);
router.route("/postMedicine").post(createMedicine);
router.route("/deleteMedicine/:id").delete(deleteMedicine);
router.route("/medicineDetails/:id").get(getMedicineById);

module.exports = router;

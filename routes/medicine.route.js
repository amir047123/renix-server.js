// medicine.route.js

const express = require("express");
const {
  createMedicine,
  getMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
  getSpecificMedicines,
  getMedicineFullDescription,
} = require("../controllers/medicine.controller");

const router = express.Router();

router.route("/").get(getMedicine);
router.route("/postMedicine").post(createMedicine);
router.route("/updateMedicine/:id").patch(updateMedicine);
router.route("/deleteMedicine/:id").delete(deleteMedicine);
router.route("/medicineDetails/:id").get(getMedicineById);
router.route("/specific").get(getSpecificMedicines);
router.route("/medicineFullDescription/:id").get(getMedicineFullDescription);

module.exports = router;

// medicine.route.js

const express = require("express");
const {
  createMedicine,
  getMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
} = require("../controllers/medicine.controller");

const router = express.Router();

router.route("/").get(getMedicine);
router.route("/postMedicine").post(createMedicine);
router.route("/updateMedicine/:id").patch(updateMedicine);  
router.route("/deleteMedicine/:id").delete(deleteMedicine);
router.route("/medicineDetails/:id").get(getMedicineById);

module.exports = router;

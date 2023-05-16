const express = require("express");
const {
  createMedicine,
  getMedicine,
} = require("../controllers/medicine.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").get(getMedicine);
router.route("/postMedicine").post(createMedicine);

module.exports = router;

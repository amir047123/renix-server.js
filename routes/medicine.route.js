const express = require("express");
const { createMedicine } = require("../controllers/medicine.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createMedicine);

module.exports = router;

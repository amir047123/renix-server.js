const express = require("express");
const { createCategory } = require("../controllers/category.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createCategory).get(getCategory);

module.exports = router;

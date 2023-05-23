const express = require("express");
const {
  createCategory,
  getCategory,
} = require("../controllers/category.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createCategory).get(getCategory);
// router.route("/deleteCategory").delete(createCategory)

module.exports = router;

const express = require("express");
const {
  createCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createCategory).get(getCategory);
router.route("/deleteCategory/:id").delete(deleteCategory);

module.exports = router;

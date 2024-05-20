const express = require("express");
const {
  createCategory,
  getCategory,
  deleteCategory,
  getCategoryById,
  updateCategoryById,
} = require("../controllers/category.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createCategory).get(getCategory);
router.route("/deleteCategory/:id").delete(deleteCategory);
router.route("/getCategoryById/:id").get(getCategoryById);
router.route("/updateCategoryById/:id").patch(updateCategoryById);

module.exports = router;

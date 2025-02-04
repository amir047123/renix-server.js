const express = require("express");
const {
  createBlogsCategory,
  getBlogsCategory,
  deleteBlogsCategory,
  updateBlogsCategory,
  getBlogCategoryById,
} = require("../controllers/blogsCategoryController");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createBlogsCategory).get(getBlogsCategory);
router.route("/deleteBlogsCategory/:id").delete(deleteBlogsCategory);
router.route("/updateBlogsCategory/:id").patch(updateBlogsCategory);
router.route("/getBlogCategoryById/:id").get(getBlogCategoryById);

module.exports = router;

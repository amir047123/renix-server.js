const express = require("express");
const {
  createBlogsCategory,
  getBlogsCategory,
  deleteBlogsCategory,
} = require("../controllers/blogsCategoryController");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").post(createBlogsCategory).get(getBlogsCategory);
router.route("/deleteBlogsCategory/:id").delete(deleteBlogsCategory);

module.exports = router;

const express = require("express");
const {
  createBlog,
  getBlog,
  getBlogById,
  deleteBlog,
} = require("../controllers/blogs.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").get(getBlog);
router.route("/postBlog").post(createBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);
router.route("/blogDetails/:id").get(getBlogById);

module.exports = router;

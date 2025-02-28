const express = require("express");
const {
  createBlog,
  getBlog,
  getBlogById,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogs.controller");

const router = express.Router();

// router.route("/").get(getProperty).post(createProperty);
router.route("/").get(getBlog);
router.route("/postBlog").post(createBlog);
router.route("/deleteBlog/:id").delete(deleteBlog);
router.route("/blogDetails/:id").get(getBlogById);
router.route("/updateBlog/:id").patch(updateBlog);

module.exports = router;

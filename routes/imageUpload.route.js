const express = require("express");
const router = express.Router();
const uploader = require(".././middlewares/uploader");
const imageUploadController = require("../controllers/imageUpload.controller");

router.post(
  "/single-image-upload",
  uploader.single("image"),
  imageUploadController.fileUpload
);

module.exports = router;

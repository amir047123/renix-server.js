const express = require("express");
const router = express.Router();
const uploader = require("./multerConfig");
const imageUploadController = require("./imageUploadController");

router.post(
  "/single-image-upload",
  uploader.single("image"),
  imageUploadController.fileUpload
);

module.exports = router;

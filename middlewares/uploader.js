const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const uploader = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const supportedImageTypes = /jpeg|jpg|png|gif|bmp|tiff|svg|ico|avif|webp/;
    const extension = path.extname(file.originalname).toLowerCase();
    if (supportedImageTypes.test(extension.substring(1))) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only image files (jpg, png, gif, bmp, tiff, svg, ico, avif, webp) are allowed"
        )
      );
    }
  },
  limits: {
    fileSize: 5000000, // 5MB limit (adjust as needed)
  },
});

module.exports = uploader;

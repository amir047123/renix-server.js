const express = require("express");
const {
  createNewsAndMedia,
  getNewsAndMedia,
  deleteNewsAndMedia,
  updateNewsAndMedia,
  getNewsAndMediaById,
  getSpecificNewsAndMedia,
} = require("../controllers/newsAndMedia.controller");

const router = express.Router();

router.post("/addNewsAndMedia", createNewsAndMedia);
router.get("/getNewsAndMedia", getNewsAndMedia);
router.get("/getNewsAndMediaById/:id", getNewsAndMediaById);
router.delete("/deleteNewsAndMedia/:id", deleteNewsAndMedia);
router.patch("/updateNewsAndMedia/:id", updateNewsAndMedia);
router.get("/specific", getSpecificNewsAndMedia);

module.exports = router;

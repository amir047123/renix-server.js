const express = require("express");
const {
  createSlide,
  getSlide,
  deleteSlide,
  updateSlide,
  getSlideById,
  getSpecificSlide,
} = require("../controllers/slide.controller");

const router = express.Router();

router.post("/addSlide", createSlide);
router.get("/getSlide", getSlide);
router.get("/getSlideById/:id", getSlideById);
router.delete("/deleteSlide/:id", deleteSlide);
router.patch("/updateSlide/:id", updateSlide);
router.get("/specific", getSpecificSlide);

module.exports = router;

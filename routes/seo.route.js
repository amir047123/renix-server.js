const express = require("express");
const {
  createSeo,
  getAllSeo,
  deleteSeo,
  getSeoById,
  updateSeoById,
  getSpecificSeo,
} = require("../controllers/seo.controller");

const router = express.Router();

router.get("/getAllSeo", getAllSeo);
router.post("/createSeo", createSeo);
router.get("/getSeoById/:id", getSeoById);
router.delete("/deleteSeo/:id", deleteSeo);
router.patch("/updateSeo/:id", updateSeoById);
router.get("/specific", getSpecificSeo);

module.exports = router;

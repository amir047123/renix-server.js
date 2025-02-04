const express = require("express");
const {
  createContactRenix,
  getContactRenixes,
  deleteContactRenix,
  updateContactRenix,
  getContactRenixById,
} = require("../controllers/contactRenix.controller");

const router = express.Router();

router.post("/addContactRenix", createContactRenix);
router.get("/getContactRenixes", getContactRenixes);
router.get("/getContactRenixById/:id", getContactRenixById);
router.delete("/deleteContactRenix/:id", deleteContactRenix);
router.patch("/updateContactRenix/:id", updateContactRenix);

module.exports = router;

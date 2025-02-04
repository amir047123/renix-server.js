const express = require("express");
const {
  createCollectEmail,
  getCollectEmails,
  deleteCollectEmail,
  updateCollectEmail,
  getCollectEmailById,
} = require("../controllers/collectEmail.controller");

const router = express.Router();

router.post("/addCollectEmail", createCollectEmail);
router.get("/getCollectEmails", getCollectEmails);
router.get("/getCollectEmailById/:id", getCollectEmailById);
router.delete("/deleteCollectEmail/:id", deleteCollectEmail);
router.patch("/updateCollectEmail/:id", updateCollectEmail);

module.exports = router;

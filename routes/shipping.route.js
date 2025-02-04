const express = require("express");
const {
  createShipping,
  getShippings,  
  deleteShipping,
  updateShipping,
  getShippingById,
  getSpecificShippings,  
} = require("../controllers/shipping.controller");
const router = express.Router();

router.post("/addShippings", createShipping); 
router.get("/getShippings", getShippings); 
router.get("/getShippingsById/:id", getShippingById);  
router.delete("/deleteShippings/:id", deleteShipping);  
router.patch("/updateShippings/:id", updateShipping);  
router.get("/specific", getSpecificShippings);  

module.exports = router;

const express = require("express");
const {
  getOrder,
  createOrder,
  getOrderById,
  getSpecificOrder,
} = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(getOrder);
router.route("/postOrder").post(createOrder);
router.route("/getOrder/:id").get(getOrderById);
router.route("/specific").get(getSpecificOrder);

module.exports = router;

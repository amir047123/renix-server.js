const express = require("express");
const { getOrder, createOrder } = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(getOrder);
router.route("/postOrder").post(createOrder);

module.exports = router;

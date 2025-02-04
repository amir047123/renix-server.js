const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Create Order
router.post('/addOrder', orderController.createOrder);

// Get Orders
router.get('/getOrders', orderController.getOrders);

// Delete Order
router.delete('/deleteOrderById/:id', orderController.deleteOrder);

// Update Order
router.patch('/updateOrderById/:id', orderController.updateOrder);

// Get Order by ID
router.get('/getOrderById/:id', orderController.getOrderById);
router.get("/specific", orderController.getSpecificOrders);  


module.exports = router;

const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders, getAllOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/',  createOrder);
router.get('/myorders', protect, getMyOrders);
router.get('/', protect, getAllOrders);

module.exports = router;
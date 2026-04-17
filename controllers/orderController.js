const Order = require('../models/orderModel');

// Order banao
const createOrder = async (req, res) => {
  try {
    const { products, totalPrice, address } = req.body;
const order = await Order.create({
    user: req.user._id,
    products,
    totalPrice,
    address
});

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Apne sare orders dekho
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Sare orders dekho (Admin ke liye)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getMyOrders, getAllOrders };
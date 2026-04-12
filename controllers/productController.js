const Product = require('../models/productModel');

// Sab products lao
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ek product add karo
const addProduct = async (req, res) => {
  try {
    const { name, price, description, image, category, stock } = req.body;
    const product = await Product.create({
      name, price, description, image, category, stock
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Product delete karo
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product nahi mila!' });
    }
    res.json({ message: 'Product delete ho gaya!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, addProduct, deleteProduct };
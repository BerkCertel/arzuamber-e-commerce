const Product = require("../models/product");

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.postProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.putProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(updatedProduct);   
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
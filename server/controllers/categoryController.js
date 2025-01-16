const Category = require('../models/category');

module.exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        console.log(categories);
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.postCategory = async (req, res) => {
    try {
        const createdCategory = await Category.create(req.body);
        res.status(201).json(createdCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.putCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports.getAllProducts = async (req, res) => {
    res.json({ message: "Get all products" });
}

module.exports.getProduct = async (req, res) => {
    res.json({ message: "Get a product" });
}

module.exports.postProduct = async (req, res) => {
    res.json({ message: "Create a product" });
}

module.exports.putProduct = async (req, res) => {
    res.json({ message: "Update a product" });
}

module.exports.deleteProduct = async (req, res) => {
    res.json({ message: "Delete a product" });
}
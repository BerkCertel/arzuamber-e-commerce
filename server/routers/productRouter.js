const { Router } = require("express");
const productController = require("../controllers/productController");

const productRouter = Router();


productRouter.get("/", productController.getAllProducts);

productRouter.get("/:id", productController.getProduct);

productRouter.post("/", productController.postProduct);

productRouter.put("/:id", productController.putProduct);

productRouter.delete("/:id", productController.deleteProduct);


module.exports = productRouter;
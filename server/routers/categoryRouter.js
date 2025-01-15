const { Router } = require("express");
const categoryController = require("../controllers/categoryController");


const categoryRouter = Router();


categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/:id", categoryController.getCategory);
categoryRouter.post("/", categoryController.postCategory);
categoryRouter.put("/:id", categoryController.putCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);


module.exports = categoryRouter;
const express = require("express");
const routes = express.Router();

const ProductController = require("../controller/product.controller");

routes.get("/products", ProductController.list);
routes.post("/products", ProductController.create);
routes.delete("/products/:productId", ProductController.delete);
routes.put("/products/:productId", ProductController.update);

module.exports = routes; 

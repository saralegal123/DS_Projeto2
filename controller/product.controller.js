const req = require("express/lib/request");
const ProductService = require("../services/product.service");

class ProductController {
    list (request, response){
        const products = ProductService.listAll();
        response.json(products);
    }

    create (request, response) {
        const newProduct = ProductService.create(request.body);

        response.status(201).json(newProduct);
    }
}

module.exports = new ProductController();
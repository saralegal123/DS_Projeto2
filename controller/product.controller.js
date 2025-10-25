const req = require("express/lib/request");
const ProductService = require("../services/product.service");

class ProductController {
    list (request, response){
        const products = ProductService.listAll();
        response.json(products);
    }

    delete (request, response){
        try {
            const productId = request.params.productId
            ProductService.delete(productId)

            response.status(200).json ({message: "Produto removido com sucesso! :D"})
        } catch (error) {
            const errorMessage = {
                error: error.message,
            };

            response.status(400).json(errorMessage);
        }
    }

    create (request, response) {
        try {
            const newProduct = ProductService.create(request.body)

            response.status(201).json(newProduct)
        }
        catch (error) {
            const errorMessage = {
                error: error.message,
            };

            response.status(400).json(errorMessage);
        }
    }
}

module.exports = new ProductController();
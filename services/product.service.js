const Product = require("../entities/product.entities");
const productRepository = require("../repositories/product.repository");

class productService {
    listAll() {
        productRepository.findAll();
    }

    create(newProduct) {
        const existingProduct = productRepository.findByName
        (newProduct.name);
        
        if (existingProduct) {
            throw new Error ("Produto já cadastrado! >:(")
        }

        const productEntity = new Product(newProduct);

        return productRepository.create(productEntity);
    }

    delete(id) {
        const existingProduct = productRepository.findById(id);

        if (!existingProduct) {
            throw new Error ("Produto não existente no sistema! :o")
        }

        productRepository.delete(id);

        return;
    }
}

module.exports = new productService();
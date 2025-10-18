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

        return productRepository.create(newProduct);
    }
}

module.exports = new productService();
const productRepository = require("../repositories/product.repository");

class productService {
    listAll() {
        productRepository.findAll();
    }

    create(newProduct) {
        return productRepository.create(newProduct);
    }
}

module.exports = new productService();
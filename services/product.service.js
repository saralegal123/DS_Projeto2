const Product = require("../entities/product.entities");
const productRepository = require("../repositories/product.repository");

class ProductServices{
    listAll(){
        return productRepository.findAll()
    }

    create (newProduct){
        const existingProduct = productRepository.findByName(newProduct.name);

        if(existingProduct){
            throw new Error("Produto ja Cadastrado")
        }

        const productEntity = new Product(newProduct);

        return productRepository.create(productEntity);
    }
    delete(id)
    {
        this.findById(id);
        
    }

    findById(id){
        const existingProduct = productRepository.findById(id);

          if(!existingProduct){
            throw new Error("Produto não existe");
        }

        return existingProduct;
    }

    update(id, newData) {
    const existingProduct = this.findById(id);

    // atualiza so os campos permitidos
    const updatedProduct = {
        ...existingProduct,
        name: newData.name ?? existingProduct.name,
        price: newData.price ?? existingProduct.price,
        quantity: newData.quantity ?? existingProduct.quantity,
    };

    return productRepository.update(id, updatedProduct);
}

}

module.exports = new ProductServices();
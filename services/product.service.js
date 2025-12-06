const Product = require("../entities/product.entities");
const productRepository = require("../repositories/product.repository");

class ProductService{
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

     update(id, values) {
    const existingProduct = this.findById(id);

    if (values.name && values.name !== existingProduct.name) {
      const conflict = this.productRepository.findByName(values.name);
      if (conflict) {
        throw new ProductExistsError();
      }
    }
    const updatedProduct = this.productRepository.update(id, values);

    return updatedProduct;
  }

}


module.exports = ProductService;
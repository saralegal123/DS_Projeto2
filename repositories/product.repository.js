let productsList = [
    {
        id: 1,
        name: "moranguinho",
        price: 10.00,
        quantity: 4

    },
];

class ProductRepository {
    findAll(){
        return productsList;
    }

    findById(id) {
        return productsList.find((product) => product.id === Number(id));
    }

    findByName(name) {
        const product = productsList.find(
            product => product.name.toLowerCase() === name.newLoweCase
        );
    }

    create(newProduct){
        const newId = productsList.length + 1

        newProduct.id = newId
        productsList.push(newProduct)

        return newProduct
    }

    delete(id) {
        const productIndex = productsList.findByIndex((product) => product.id === Number(id));

        if(productIndex === -1) {
            return false
        }

        productsList.splice()   
    }
}

module.exports = new ProductRepository();
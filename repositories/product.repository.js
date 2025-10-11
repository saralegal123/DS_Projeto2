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
        return productsList
    }

    create(newProduct){
        const newId = productsList.length + 1

        newProduct.id = newId
        productsList.push(newProduct)

        return newProduct
    }
}

module.exports = new ProductRepository();
class Product {
   constructor({ id, name, price, quantity, createAt}) {
        if (!name || !price || !quantity){
                throw new Error ("Nome, preço e quantidade são obrigatórios!")
        }

        this.id = id ? Number(id) : null;
        this.name =  String(name);
        this.price = Number(price);
        this.quantity =  Number(quantity);

        this.createAt = createAt ? new Date(createAt) : new Date();
   }
}

module.exports = Product;
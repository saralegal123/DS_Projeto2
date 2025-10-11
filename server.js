const express = require("express");

const server = express();
server.use(express.json);
const port = 3000;

server.get("/products", (request, response) => {
    response.json(productsList);
});

server.post("/products", (request, response) => {
    const newProduct = request.body;
    const newId = productsList.length + 1;

    newProduct.id = newId;
    productsList.push(newProduct);

    response.status(201).json(newProduct)

});

//rota da api
server.get("/", (request, response) => {
    response.send("Oi Sara linda!")
});

server.listen(port, () => {
    console.log("Projeto rodando na porta" + port);
});
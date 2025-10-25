const express = require("express");
const productController = require("./controller/product.controller");

const server = express();
server.use(express.json);
const port = 3000;

server.get("/products", productController.list);
server.post("/products", productController.create);
server.delete("/products/:id", productController.delete);



//rota da api
server.get("/", (request, response) => {
    response.send("Oi, Sara linda!")
});

server.listen(port, () => {
    console.log("Projeto rodando na porta" + port);
});
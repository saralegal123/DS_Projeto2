const express = require("express"); 
const routes = require("./routes/route");

const server = express();
server.use(express.json()); 
const port = 3000; 

server.use(routes); 

server.get("/", (request, response) => {
    response.send("Oi, Sara linda!");
});

server.listen(port, () => {
    console.log("Projeto rodando na porta " + port);
});

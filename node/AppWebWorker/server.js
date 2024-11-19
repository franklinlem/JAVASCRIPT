//Servidor express
const express = require("express");
const app = express();

//Ativos estáticos:
app.use(express.static("root"));
let page = require("fs").readFileSync("root/index.html", "utf-8");

//Ponto de extremidade:
app.get("/", (req, res) => {
    res.send(page);
});

//Escuta da porta:
app.listen(3000);
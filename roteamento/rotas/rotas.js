const { join } = require("path");
const roteador = require("express").Router();
const { data } = require("../data/data");


// Middleware:
roteador.use((req, res, next) => {
//    console.log("Isso é chamado antes!")
    next(); // As requisições são tratadas aqui)
});

// Endpoint de retorno de chamada a ser executado após cada solicitação:
roteador.get("/callback", (req, res) => {
    res.end(data.callback());
});

// Endpoint de busca de usuario
roteador.get("/buscar", (req, res) => {
    res.end(data.obterUsuario());
//    res.end("pronto!");
});

// Endpoint de alteração de usuario
roteador.put("/alterar", (req, res) => {
    res.end(data.alterarUsuario());
});

// Endpoint de criação de usuario
roteador.post("/criar", (req, res) => {
    res.end(data.criarUsuario());
});

// Endpoint de exclusão de usuario
roteador.delete("/excluir", (req, res) => {
    res.end(data.excluirUsuario());
});

// Endpoint de página inválida
roteador.all("*", (req, res) => {
    res.status(500).end(data.erro());
});

/* roteador.get("/pedidos/:item", (req, res) => {
    console.log(req.params.item);
});
 */

/* roteador.get("/consulta/", (req, res) => {
    console.log(req.query.id);
    console.log(req.query.nome);
}); */

module.exports.roteador = roteador;
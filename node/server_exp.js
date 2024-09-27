const express = require('express'); //importa o modulo Express
const app = express(); //chama o método p/ criar app principal

//primeiro ponto de extremidade recebe solicitações GET
app.get('/', (req, res) => {
    res.send('Bem vindo ao Express!'); //se recebe a solicitação envia resposta
});

//porta onde será a comunicação no host local
app.listen(3000);

/* para enviar uma pagina inteira html faça:
res.send(require("fs").readFileSync("index.html", "utf-8"));
ou
res.sendFile(`${__dirname}/index.html`);
*/
const express = require('express');
const app = express();
app.use(express.static("wwwroot"));
app.get('/', (req, res)  => {
    res.sendFile(`${__dirname}/index.html`);    
});
app.all("*", (req, res) => {
    res.status(404).send(require("fs").readFileSync("./wwwroot/erro.html", "utf-8"));
});
app.listen(3000, console.log("Servidor ativo em: http://localhost:3000/"));
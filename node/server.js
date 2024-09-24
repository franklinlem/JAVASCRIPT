const http = require("http");
const servidor = http.createServer((req, res) => {
res.end("<style> body{background:red; text-align:center; color:white}</style> <h1>Seja bem vindo!</h1> <p>Estou testando NodeJS.</p> <br> <p>lorem ipsum dolor sit amet, consectetur adip</p>");
});
servidor.listen(3000);

let m = require("./meumodulo");
m.minhaFuncao();
console.log(m.minhaVar);

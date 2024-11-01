const express = require("express");
const app = express();

const { roteador } = require("./rotas/rotas");
app.use("/", roteador);
app.use(express.json()); //text(): para texto; application(): para dados binários

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
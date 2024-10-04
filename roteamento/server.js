const express = require("express");
const app = express();

const { roteador } = require("./rotas/rotas");
app.use("/", roteador);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
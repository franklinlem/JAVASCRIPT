const express = require("express");
const app = express();

//app.get('/', (req, res)  => {
//    res.sendFile(`${__dirname}/index.html`);    
//});

app.get("/criararquivo/", (req, res) => {
/*    try{
        criarArquivo();
        res.sendStatus(200);
    } catch (error){
        res.sendStatus(500);
        console.log(error)
    }*/
   res.sendStatus(criarArquivo());
});
function criarArquivo(){
    if (require("fs").existsSync("exemplo.txt")){
        require("fs").writeFileSync("exemplo.txt", "insere esse texto no arquivo", "UTF-8");
        return 200;
    } else{
        return 404;
    }
}

app.listen(3000, console.log("Servidor ativo em: http://localhost:3000/"));
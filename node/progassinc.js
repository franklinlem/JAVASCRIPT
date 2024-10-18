async function minhaFuncao() {
    let txt = await require("fs").readFile("./protocolosinternet.txt");
    return txt;
}

let msg = "Texto original";

function mudaTexto(){
    setTimeout(() => { msg = "Texto alterado!" }, 3000);
}
mudaTexto();
console.log(msg);
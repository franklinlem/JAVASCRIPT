const frm = document.querySelector("form") //obtem elementos da pagina
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //impede o envio do formulario
    const numero = Number(frm.inNumero.value) //obtem numero informado
    let resposta = "" //variavel string concatena a resposta
    //cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i<=10; i++){
        //a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        //resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    //o conteudo da tag pre é alterado para exibir a tabuada do numero
    resp.innerText = resposta
})

//Programa para contar o número de parênteses abertos e fechados em uma fórmula
//e verificar se estão balanceados

const prompt = require("prompt-sync")() //pacote para entrada de dados
const formula = prompt("Digita a fórmula: ") //obtem a fórmula do usuário
let abre = 0
let fecha = 0
for (const simbolo of formula){
    if (simbolo == "("){
        abre++ //conta o número de parênteses abertos
    } else if (simbolo == ")"){
        fecha++ //conta o número de parênteses fechados
    }
    if (fecha > abre){
        break //se houver mais parênteses fechados que abertos, sai do loop
    }
}
if (abre == fecha){
    console.log("Ok! Fómula balanceada (em relação aos parênteses).")
} else{
    console.log("Erro! Fómula não balanceada (em relação aos parênteses).")
}
//programa pagamento de pesque e pague
const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Número de pessoas: "))
const peixes = Number(prompt("Número de peixes: "))
let pagar = 0
if (peixes <= pessoas){
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20)+ ((peixes - pessoas) * 12)
}
console.log(`Pagar R$ ${pagar.toFixed(2)}`)

//Programa para inverter centena
const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (centena): "))
if (numero < 100 || numero >= 1000){
    console.log("ERRO! Numero deve ser uma centena entre 100 e 999!")
    return
}
const num1 = Math.floor(numero /100)
const sobra = numero % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10
console.log(`O número ${numero}, invertido é ${num3}${num2}${num1}!`)
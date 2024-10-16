const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const salario = Number(prompt("Salário = R$ ")) //entrada de dados (salario)
const tempo = Number(prompt("Tempo (anos) = ")) //entrada de dados (tempo)
const quadrienio = Math.floor(tempo/4) //calcular quantidade de quadrienios
const acrescimo = salario * quadrienio / 100 //calcula adicional de quadrienio
console.log(`Quadriênios = ${quadrienio}`)
console.log(`Salário total = R$ ${(salario+acrescimo).toFixed(2)}`)
const prompt = require("prompt-sync")()

console.log("Informe o valor do saque ou digite 0 para sair.")

const saques = []

do {
    const valor = Number(prompt("Valor do Saque: R$ "))
    if (valor == 0) {
        break
    }
    saques.push(valor)
    if (valor % 10 == 0) {
        console.log("Saque realizado com sucesso!")
    } else { 
        console.log("Valor de Saque Invalido. Deve ser Múltiplo de 10.")
    }
} while (true)

console.log("\nSaques válidos:\n" + "-".repeat(40))

const saquesValidos = saques.filter (saque => saque % 10 == 0)

for (const saque of saquesValidos){
    console.log(saque.toFixed(2))
}

console.log("-".repeat(40))

const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)

console.log(`Total Sacado: R$ ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length

console.log(`Tentativas de Saque(s) Inválido(s): ${saquesInvalidos}`)
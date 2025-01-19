const prompt = require("prompt-sync")()
console.log("Insira o nome do cliente por ordem de chegada ou digite 'Fim' no nome para sair do programa!")
const clientes = []

do {
    const nome = prompt("Nome: ")
    if (nome == "Fim") {
        break
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome, idade})
    console.log(`OK! ${nome} inserido na fila com sucesso!`)
} while (true)

console.log("\nFila Preferencial\n" + "-".repeat(40))

const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})
console.log("\nFila Normal\n" + "-".repeat(40))
const filaNormal = clientes.filter(cliente => cliente.idade<60)
filaNormal.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})
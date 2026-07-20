//Programa para exibir uma árvore de estrelas

const prompt = require("prompt-sync")() // Importa o módulo prompt-sync para ler entradas do usuário
const altura = Number(prompt("Digite a altura da árvore: ")) // Lê a altura da árvore do usuário
console.log() // Imprime uma linha em branco para melhor formatação
for (let i=1; i<=altura; i++){ // Loop para cada nível da árvore
    const espacos = 30 + (altura - i) // Calcula o número de espaços antes das estrelas
    console.log(" ".repeat(espacos) + "*".repeat(i*2)) // Imprime os espaços seguidos pelas estrelas
}
const tronco = altura/2 // Calcula a altura do tronco
for (let i=1; i<=tronco; i++){ // Loop para imprimir o tronco
    const linha = "*****" // Define a linha do tronco
    console.log(" ".repeat(30 + altura/1.3) + linha) // Imprime os espaços seguidos pela linha do tronco
}

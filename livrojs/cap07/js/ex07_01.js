const frase = prompt("Frase: ")    //lê a frase a ser contada
let numPalavras = 0   //inicializa um contador para palavras
const tam = frase.length   //verifica o tamanho do vetor com as letras da frase
//for (let i=0; i<tam; i++){   //percorre os caracteres do vetor de letras da frase
//    if (frase.charAt(i) == " "){
//outra opção do uso do for:
for (const letra of frase) {
    if (letra ==" "){
        numPalavras++
    }
}
//exibe a frase e nº de palavras (que é o nº de espaços + 1)
alert(`Frase: ${frase}\nNº de palavras: ${(numPalavras + 1)}`)
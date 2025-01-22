const palavra = prompt("Digite uma palavra: ")
const tam = palavra.length
const resp = document.querySelector("pre")

let inverso = palavra.charAt(tam - 1).toUpperCase()

for (let i = tam - 2; i>= 0; i--) {
    inverso += palavra.charAt(i).toLowerCase()
}
alert(`Palavra: ${palavra}\nInvertida: ${inverso}`)

resp.innerText = `Palavra: ${palavra}\nInvertida: ${inverso}`